import Feed from '../Feed';
import {useState, useEffect} from 'react';
import {IconButton, Modal, TextField, Button} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CreateIcon from '@material-ui/icons/Create';
import './index.css';
import {auth, db} from '../Firebase/firebase';
import firebase from 'firebase/app';
import NavBar from '../NavBar';
import Roommate from '../RoommateGroup';
import granville from './Apartments/granville.jpeg';
import cridge from './Apartments/cridge.jpeg';
import mcreek from './Apartments/millcreek.jpeg';
import wh from './Apartments/warehouse.jpeg';
import csquare from './Apartments/csquare.jpeg';
import univ from './Apartments/univ.jpeg';
import shortbread from './Apartments/shortbread.jpeg';
import union from './Apartments/union.jpeg';
import lark from './Apartments/lark.jpeg';
import axios from 'axios';
import unc from './Apartments/unc.jpeg';


function Home() {

    const [quote, setQuote] = useState('')
    const [open, setOpen] = useState(false);
    const [welcomeOpen, setWelcomeOpen] = useState(true)
    const [postDetails, setPostDetails] = useState({});
    const [requestCount, setRequestCount] = useState(0);
    const [autoValue, setAutoValue] = useState(null);
    const [housingOptions, setHousingOptions] = useState([
        {name: 'Lark Chapel Hill', address: '602 M.L.K. Jr Blvd, Chapel Hill, NC 27514', price: ''},
        {name: 'Union Chapel Hill', address: '425 Hillsborough St, Chapel Hill, NC 27514', price: ''},
        {name: 'Shortbread Lofts', address: '333 W Rosemary St, Chapel Hill, NC 27516', price: ''},
        {name: 'University Apartments', address: '600 M.L.K. Jr Blvd, Chapel Hill, NC 27514', price: ''},
        {name: 'Carolina Square', address: '133 W Franklin St #100, Chapel Hill, NC 27516', price: ''},
        {name: 'The Warehouse Apartments', address: '316 W Rosemary St, Chapel Hill, NC 27516', price: ''},
        {name: 'Mill Creek Condominiums', address: '710 M.L.K. Jr Blvd, Chapel Hill, NC 27514', price: ''},
        {name: 'Chapel Ridge Apartments', address: '101 Legacy Terrace, Chapel Hill, NC 27516', price: ''},
        {name: 'Granville Towers', address: 'Granville Towers South Building, 2100, Chapel Hill, NC 27514', price: ''}
    ]);

    const [infoCard, setInfoCard] = useState({
        name: 'Select a housing option for more details',
        walk: '',
        avgPrice: '',
        photo: unc,
    });

    const handleClose = () => {
        setOpen(false);
    }

    const handleWelcomeClose = () => {
        setWelcomeOpen(false);
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

    useEffect(() => {
        
        const options = {
            method: 'GET',
            url: 'https://quotes15.p.rapidapi.com/quotes/random/',
            headers: {
                'x-rapidapi-key': '7873e050d5msh73bea27da2029f7p1bdff1jsn8408468afdbd',
                'x-rapidapi-host': 'quotes15.p.rapidapi.com'
            }
        }
        axios.request(options).then(function(response){
            setQuote(response.data.content);
        }).catch(function(error) {
            console.log(error);
        })
        

    }, [])
    

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

    const handleInfoCard = (name) => {
        if (name === "Lark Chapel Hill") {
            setInfoCard({
                name: 'Lark Chapel Hill',
                walk: '20 minute walk to campus',
                avgPrice: '$900',
                photo: lark,
            })
        }
        else if (name=== 'Union Chapel Hill') {
            setInfoCard({
                name: 'Union Chapel Hill',
                walk: '23 minute walk to campus',
                avgPrice: '$1000',
                photo: union,
            })
        }
        else if (name === 'Shortbread Lofts') {
            setInfoCard({
                name: 'Shortbread Lofts',
                walk: '18 minute walk to campus',
                avgPrice: '$1000',
                photo: shortbread,
            })
        }
        else if (name === 'University Apartments') {
            setInfoCard({
                name: 'University Apartments',
                walk: '14 minute walk to campus',
                avgPrice: '$850',
                photo: univ,
            })
        }
        else if (name === 'Carolina Square') {
            setInfoCard({
                name: 'Carolina Square',
                walk: '13 minute walk to campus',
                avgPrice: '$1500',
                photo: csquare,
            })
        }
        else if (name === 'The Warehouse Apartments') {
            setInfoCard({
                name: 'The Warehouse Apartments',
                walk: '17 minute walk to campus',
                avgPrice: '$1100',
                photo: wh,
            })
        }
        else if (name === 'Mill Creek Condominiums') {
            setInfoCard({
                name: 'Mill Creek Condominiums',
                walk: '27 minute walk to campus',
                avgPrice: '$700',
                photo: mcreek,
            })
        }
        else if (name === 'Chapel Ridge Apartments') {
            setInfoCard({
                name: 'Chapel Ridge Apartments',
                walk: '63 minute walk to campus',
                avgPrice: '$600',
                photo: cridge,
            })
        }
        else if (name === 'Granville Towers') {
            setInfoCard({
                name: 'Granville Towers',
                walk: '12 minute walk to campus',
                avgPrice: '$1200',
                photo: granville,
            })
        }
        
    }



    useEffect(() => {
        getRequests()
    }, []);


    return(
        <div className='main'>
            <div>
                <NavBar count={requestCount}></NavBar>
            </div>
            <div className='content'>
                <div className='feed'>
                    <IconButton>
                        <CreateIcon onClick={handleOpen} size='large' color='primary'></CreateIcon>
                    </IconButton>
                    
                    <Feed></Feed>
                </div>
                <div className='roommate'>
                    <h1>Housing Dashboard</h1>
                    {/* <div className='roommate-grouping'>
                        {handleGroup()}
                    </div> */}

                    <div>
                        <Roommate housing={housingOptions}></Roommate>
                    </div>
                    <div className='autocomplete'>
                        <Autocomplete
                            value={autoValue}
                            onChange={(event, newValue) => {
                            if (typeof newValue === 'string') {
                                setAutoValue({
                                    name: newValue,
                                });
                            } else {
                                setAutoValue(newValue);
                            }
                            }}
                            onInputChange={(event, newValue) => {
                                handleInfoCard(newValue);
                            }}
                            
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            options={housingOptions}
                            getOptionLabel={(option) => {
                            // Value selected with enter, right from the input
                                if (typeof option === 'string') {
                                    return option;
                                } else {
                                    return option.name;
                                }
                
                            }}
                            renderOption={(option) => option.name}
                            style={{ width: 750 }}
                            freeSolo
                            renderInput={(params) => (
                            <TextField {...params} label="Search housing options" variant="outlined" />
                            )
                        
                        }
                        />
                    </div>
                    <div className='info-card'>
                        <h1>{infoCard.name}</h1>
                        <h3>{infoCard.walk}</h3>
                        <h3>Average Price {infoCard.avgPrice}</h3>
                        <img alt='apartment' src={infoCard.photo} width='700px' height='500px' />
                    </div>
                </div>
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
            <Modal open={welcomeOpen} onClose={handleWelcomeClose}>
                <div className='modal-style'>
                    <h1 className='modal-label'>Welcome to UNC Roommates!</h1>
                    <div className='modal-title'>
                        <p>UNC Roommates is a community that will help you find your next roommates! I made this website since some friends and I had a tough time finding a fourth roommate this past year. I realized that there's really no obvious place to look for roommates...what are transfer students, freshman, and those looking for a change to do?</p>
                        
                        <p>This website is designed with a feed to your left and a housing dashboard to your right, to look for housing within your budget. We currently support 9 apartments but will be expanding soon!</p>
                        
                        <p>Hope this quote makes your day: {quote}</p>

                    </div>

                    <div className='modal-footer'>
                        <div className='cancel-button'>
                            <Button color='primary' variant='contained' onClick={handleWelcomeClose}>Awesome</Button>
                        </div>       
                    </div>
                </div>
            </Modal>
            </form>
            
        </div>
    )
}

export default Home;