import {TextField, Button, Snackbar} from '@material-ui/core'
import {Alert} from '@material-ui/lab'
import { auth } from '../Firebase/firebase';
import { useState } from 'react';
import './index.css'
import {useHistory, Link} from 'react-router-dom'

function Signin() {

    const [email, setEmail] = useState('');
    const [pwd, setPWD] = useState('');
    const [snackbar, setSnackbar] = useState({
        status: false,
        message: '',
    });
    const history = useHistory();

    const handlePWD = (event) => {
        setPWD(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const handleSignIn = () => {
        
        auth.signInWithEmailAndPassword(email, pwd).then(userCred => {
            console.log('Sign in successful');
            history.push('/home');
                      
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            setSnackbar({status: true, message: `${errorCode} - ${errorMessage}`});

            console.log(`${errorCode} - ${errorMessage}`);
            
        });

    }

    const handlePWDReset = () => {
        if (email === '') {
            setSnackbar({status: true, message: 'Please enter your email in the field and retry.'})
            return;
        }

        let emailAddress = email;
        auth.sendPasswordResetEmail(emailAddress).then(function() {
            setSnackbar({status: true, message: 'Check your email to change your password.'});
        }).catch(function(error) {
            setSnackbar({status: true, message: `${error.code} - ${error.message}`});
        });
    }

    return (
        <div className='signup-main'>
            <div className='signin-conainer'>
                <h1 className='title-text'>UNC Roommates</h1>

                <form>
                    <div className='form-size'>
                        <div className='emailInput'>
                            <TextField id='email' autoFocus={true} fullWidth={true} placeholder='onyen@live.unc.edu' 
                                required={true} variant='filled' onChange={handleEmail}>
                            </TextField>

                        </div>
            
                        <div className='pwdInput'>
                            <TextField type='password' fullWidth={true} placeholder='password' 
                                required={true} variant='filled' onChange={handlePWD}>
                            </TextField>
                        </div>

                    </div>
                    
                    <br></br>
                    <div className='signin-button'>
                        <Button variant='contained' color='primary' onClick={handleSignIn}>Sign in</Button>
                    </div>
                    <div className='reset-password'>
                        <Button variant='contained' color='secondary' onClick={handlePWDReset}>Reset Password</Button>
                    </div>

                    <div>
                        <Link to='/signup'><Button>Need an account? Signup here.</Button></Link>
                    </div>
                </form>
                <Snackbar open={snackbar.status} autoHideDuration={7500} onClose={() => setSnackbar({status: false})}> 
                    <Alert severity='info'>{snackbar.message}</Alert>
                </Snackbar>
            </div>
        </div>
    );
}

export default Signin;