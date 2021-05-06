import {Card, CardActionArea, CardActions, CardContent, Button, IconButton} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './index.css';
import {db, auth} from '../Firebase/firebase.js';

function Post(props) {

    const handleRequest = async () => {
        let user = auth.currentUser;
        //Checks someone isn't sending a roommate request to themselves
        if (user.uid === props.postObj.uid) {
            console.log('Cannot send a roommate request to yourself!')
            return;
        }

        //Checks that someone isn't sending a roommate request to someone who is already in their group

        //Check if you've already sent a request 
        
        //Adds roommate request to receiving user.
        let currentRequests = [];
        let docRef = db.collection('users').doc(props.postObj.uid);
        await docRef.get().then((doc) => {
            if (doc.exists) {
                currentRequests = doc.data().requests;
            }
        })

        currentRequests.unshift(user.uid);

        db.collection('users').doc(props.postObj.uid).update({
            requests: currentRequests,
        })
    }


    return (
        <div className='post-main'>
        <Card>
            <CardActionArea>
                <CardContent>
                    <div>
                        <div className='top-level'>
                            <h1 className='author'>{props.postObj.author}</h1>
                            <div className='roommate-request'>
                                <IconButton>
                                    <AddCircleIcon onClick={handleRequest} color='primary' size='medium' />
                                </IconButton>
                            </div>
                        </div>
                        <h1>{props.postObj.title}</h1>
                        <h3>{props.postObj.budget}</h3>
                    </div>
                    <p className='body'>{props.postObj.body}</p>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary'>Endorse {props.postObj.numberOfLikes}</Button>
                <Button size='small' color='primary'>Comment {props.postObj.numberOfComments}</Button>
            </CardActions>
        </Card>
        </div>
    );
}

export default Post;