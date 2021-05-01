import {TextField, Button, Snackbar} from '@material-ui/core'
import {Alert} from '@material-ui/lab'
import { auth, db } from '../Firebase/firebase';
import { useState } from 'react';
import './index.css'

function Signin() {

    const [email, setEmail] = useState('');
    const [pwd, setPWD] = useState('');
    const [snackbar, setSnackbar] = useState({
        status: false,
        message: '',
    });

    const handlePWD = (event) => {
        setPWD(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const handleSignup = () => {

        auth.createUserWithEmailAndPassword(email, pwd).then(userCred => {
            return db.collection('users').doc(userCred.user.uid).set({
                email: email,
            })
            
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
            setSnackbar({status: true, message: 'Email sent to your email address.'});
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
                            <TextField fullWidth={true} placeholder='password' 
                                required={true} variant='filled' onChange={handlePWD}>
                            </TextField>
                        </div>

                    </div>
                    
                    <br></br>
                    <div className='signin-button'>
                        <Button variant='contained' color='primary' onClick={handleSignup}>Signin</Button>
                    </div>
                    <div className='reset-password'>
                        <Button variant='contained' color='secondary' onClick={handlePWDReset}>Reset Password</Button>
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