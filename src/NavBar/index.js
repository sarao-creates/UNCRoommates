import {Toolbar, Button, AppBar, IconButton, Badge, Menu, MenuItem} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useState} from 'react';
import Request from '../Request';
import './index.css';
import {auth, db} from '../Firebase/firebase';
import {Link} from 'react-router-dom';

function NavBar(props) {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuItem, setMenuItem] = useState([]);
    
    const handleSignOut = () => {
        auth.signOut().then(function() {
            console.log('Signout successful!');
        }).catch(function(error) {
            console.log(`${error.code} - ${error.message}`);
        })
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const handleNotifs = (event) => {
        setAnchorEl(event.currentTarget);
    }
    
    const getRequests = () => {
        let requestData = [];
        if (props.count <= 0) {
            return;
        }
    
        
        auth.onAuthStateChanged(async user => {
            if (user) {
                let docRef = db.collection('users').doc(user.uid);
                await docRef.get().then((doc) => {
                    if (doc.exists) {
                        for (let i = 0; i < doc.data().requests.length; i++) {
                            requestData.unshift(<MenuItem key={i}><Request rid={doc.data().requests[i]} cid={user.uid} handleClose={handleMenuClose}></Request></MenuItem>);
                        }
                        setMenuItem(requestData);
                    }
                })  
          
            }
        })

        return(
            <Menu
            anchorEl ={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}>
                {menuItem}
            </Menu>
        )
       
    }

    return(
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <div>
                        <Link to='/home'><Button><span className='nav-button'>Home</span></Button></Link>
                        <Link to='/donate'><Button><span className='nav-button'>Donate</span></Button></Link>
                    </div>
                    <IconButton onClick={handleNotifs}>
                        <Badge badgeContent={props.count} color='secondary'>
                            <span className='nav-button'><NotificationsIcon /> </span>
                        </Badge>
                    </IconButton>
                    {getRequests()}
                    <Link to='/signup'><Button  onClick={handleSignOut}><span className='nav-button'>Sign Out</span></Button></Link>
                </Toolbar>

            </AppBar>
        
        </div>
    )
}

export default NavBar;