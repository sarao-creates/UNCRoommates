import {Card, CardActionArea, CardContent, IconButton, Avatar} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './index.css';
import {db, auth} from '../Firebase/firebase.js';
import { makeStyles } from '@material-ui/core/styles';


function Post(props) {

    const useStyles = makeStyles((theme) => ({
        blue: {
            color: theme.palette.getContrastText('#81d4fa'),
            backgroundColor: '#81d4fa',
        }
    }))

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

    const classes = useStyles();

    return (
        <div className='post-main'>
        <Card>
            <CardActionArea>
                <CardContent>
                    <div>
                        <div className='top-level'>
                            <div className='avatar'>
                                <Avatar className={classes.blue}>{props.postObj.author.substring(0,1)}{props.postObj.author.substring(1,2)}</Avatar>
                            </div>
                            
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
            {/* <CardActions>
                <Button size='small' color='primary'>Endorse {props.postObj.numberOfLikes}</Button>
                <Button size='small' color='primary'>Comment {props.postObj.numberOfComments}</Button>
            </CardActions> */}
        </Card>
        </div>
    );
}

export default Post;