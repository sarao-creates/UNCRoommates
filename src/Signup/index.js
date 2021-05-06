import {TextField, Button, Snackbar} from '@material-ui/core'
import {Alert} from '@material-ui/lab'
import { auth, db } from '../Firebase/firebase';
import { useState } from 'react';
import './index.css';
import {useHistory, Link} from 'react-router-dom';

function Signup() {
    const history = useHistory();
    const [userInfo, setUserInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
        instagram: '',
        twitter: '',
        tiktok: '',
        group: '',
        requests: [],
    })
    const [pwd, setPWD] = useState('');
    const [snackbar, setSnackbar] = useState({
        status: false,
        message: '',
    });

    const handleInfo = (prop) => (event) => {
        setUserInfo({...userInfo, [prop]: event.target.value});
    }

    const handlePWD = (event) => {
        setPWD(event.target.value)
    }
    
    const handleSignup = () => {

        auth.createUserWithEmailAndPassword(userInfo.email, pwd).then(userCred => {
            history.push('/home');
            return db.collection('users').doc(userCred.user.uid).set(userInfo);
            
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            setSnackbar({status: true, message: `${errorCode} - ${errorMessage}`});

            console.log(`${errorCode} - ${errorMessage}`);
            
        });

    }


    return (
        <div className='signup-main'>
            <div className='signup-conainer'>
                <h1 className='title-text'>UNC Roommates</h1>
                <form>
                    <div className='form-size'>
                        <div className='nameInput input'>
                            <div className='firstNameInput inlineInput'>
                                <TextField label='First name' autoFocus={true} fullWidth={true}  
                                    required={true} variant='filled' onChange={handleInfo('firstName')}>
                                </TextField>
                            </div>
                            <div className='lastNameInput inlineInput'>
                                <TextField label='Last name' autoFocus={true} fullWidth={true} placeholder='Last name' 
                                    required={true} variant='filled' onChange={handleInfo('lastName')}>
                                </TextField>
                            </div>
                        </div>
                        <div className='emailInput input'>
                            <TextField label='Email' autoFocus={true} fullWidth={true} placeholder='Email' 
                                required={true} variant='filled' onChange={handleInfo('email')}>
                            </TextField>
                        </div>
            
                        <div className='pwdInput input'>
                            <TextField label='Password' fullWidth={true} placeholder='Password' 
                                required={true} variant='filled' onChange={handlePWD}>
                            </TextField>
                        </div>
                        <div className='socialsInput input'>
                            <div className='instagramInput inlineInput'>
                                <TextField label='Instagram handle' fullWidth={true} placeholder='Instagram handle' 
                                    required={false} variant='filled' onChange={handleInfo('instagram')}>
                                </TextField>
                            </div>
                            <div className='twitterInput inlineInput'>
                                <TextField label='Twitter handle' fullWidth={true} placeholder='Twitter handle' 
                                    required={false} variant='filled' onChange={handleInfo('twitter')}>
                                </TextField>
                            </div>
                            <div className='tiktokInput inlineInput'>
                                <TextField label='TikTok handle' fullWidth={true} placeholder='TikTok handle' 
                                    required={false} variant='filled' onChange={handleInfo('tiktok')}>
                                </TextField>
                            </div>
                        </div>
                    </div>
                    
                    <br></br>
                    <div>
                        <Button variant='contained' color='primary' onClick={handleSignup}>Signup</Button>
                    </div>
                    <Link to='/signin'><Button>Already have an account? Sign in here.</Button></Link>
                
                </form>
                <Snackbar open={snackbar.status} autoHideDuration={7500} onClose={() => setSnackbar({status: false})}> 
                    <Alert severity='info'>{snackbar.message}</Alert>
                </Snackbar>
            </div>
        </div>
    );
}

export default Signup;