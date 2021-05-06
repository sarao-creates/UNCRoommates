import Feed from '../Feed';
import {useState, useEffect} from 'react';
import {IconButton, Modal, TextField, Button} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import './index.css';
import {auth, db} from '../Firebase/firebase';
import firebase from 'firebase/app';
import {Link} from 'react-router-dom'
import NavBar from '../NavBar';


function Home() {

    const [open, setOpen] = useState(false);
    const [postDetails, setPostDetails] = useState({});
    const [requestCount, setRequestCount] = useState(0);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handlePostDetails = (prop) => (event) => {
        setPostDetails({...postDetails, [prop]: event.target.value});
    }

    const handleSubmission = async () => {
        let user = auth.currentUser;
        let docRef = db.collection('users').doc(user.uid);
        let timeStamp = firebase.firestore.Timestamp.fromDate(new Date());
        // setPostDetails({...postDetails, numberOfLikes: 0});
        let postDets = postDetails;
        postDets.numberOfLikes = 0;
        postDets.numberOfComments = 0;
        postDets.datePosted = timeStamp;
        postDets.uid = user.uid;

        
        await docRef.get().then((doc) => {
            if (doc.exists) {
                postDets.author = `${doc.data().firstName} ${doc.data().lastName}`;
            }
        })

        docRef = db.collection('count').doc('posts');
        await docRef.get().then((doc) => {
            if (doc.exists) {
                postDets.id = doc.data().postCount;
            }
        })
        setPostDetails(Object.assign({}, postDets))
        db.collection('posts').doc(`${user.uid}-${postDets.id}`).set(postDetails);
        docRef.update({postCount: postDets.id + 1});

        handleClose();
    }

    const handleSignOut = () => {
        auth.signOut().then(function() {
            console.log('Signout successful!');
        }).catch(function(error) {
            console.log(`${error.code} - ${error.message}`);
        })
    }

    const getRequests = async () => {
        auth.onAuthStateChanged(user => {
            if (user) {
                let docRef = db.collection('users').doc(user.uid);
                docRef.get().then((doc) => {
                    if (doc.exists) {
                        setRequestCount(doc.data().requests.length);
                    }
                })
                

            }
        })

    }

    useEffect(() => {
        getRequests()
    }, []);


    return(
        <div className='main'>
            <div>
                <NavBar count={requestCount}></NavBar>
            </div>
            <div className='feed'>
                <IconButton>
                    <CreateIcon onClick={handleOpen} size='medium' color='primary'></CreateIcon>
                </IconButton>
                <Link to='/signup'><Button onClick={handleSignOut} >Sign Out</Button></Link>
                <Feed></Feed>
            </div>
            <div className="profile-data">
                {/* <Profile></Profile> */}
                
            </div>
            <form>
            <Modal open={open} onClose={handleClose}>
                <div className='modal-style'>
                    <h1 className='modal-label'>Create a post!</h1>
                    <div className='modal-title'>
                        <TextField label='Post title' fullWidth={true} placeholder='Post title' 
                            required={true} variant='filled' onChange={handlePostDetails('title')}> 
                        </TextField>
                    </div>

                    <div className='modal-body'>
                        <TextField label='Post body'  placeholder='Post body' 
                            required={true} variant='filled' fullWidth={true} rows={7} multiline={true} onChange={handlePostDetails('body')}> 
                        </TextField>
                    </div>

                    <div className='modal-footer'>
                        <div className='cancel-button'>
                            <Button variant='contained'  onClick={handleClose}>Cancel</Button>
                        </div>
                        <div className='submit-button'>
                            <Button variant='contained' color='primary' onClick={handleSubmission}>Post</Button>
                        </div>
                       
                    </div>
                </div>
            </Modal>
            </form>
            
        </div>
    )
}

export default Home;