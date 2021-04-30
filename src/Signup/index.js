import {TextField, Button} from '@material-ui/core'
import './index.css';

function Signup() {
    
    const handleSignup = () => {
        console.log('test');
    }


    return (
        <div className='signup-main'>
            <div className='signup-conainer'>
                <h1 className='title-text'>UNC Roommates</h1>

                <form>
                    <div className='form-size'>
                        <div className='emailInput'>
                            <TextField autoFocus={true} fullWidth={true} placeholder='onyen@live.unc.edu' 
                                required={true} variant='filled'>
                            </TextField>

                        </div>
            
                        <div className='pwdInput'>
                            <TextField fullWidth={true} placeholder='password' 
                                required={true} variant='filled'>
                            </TextField>
                        </div>

                    </div>
                    
                    <br></br>
                    <Button variant='contained' color='primary' onClick={handleSignup}>Signup</Button>
                
                    
                </form>
            </div>
        </div>
    );
}

export default Signup;