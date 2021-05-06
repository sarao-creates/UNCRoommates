import {Toolbar, Button, AppBar, IconButton, Badge, Menu, MenuItem} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useState, useEffect} from 'react';
import Request from '../Request';
import './index.css';
import {auth, db} from '../Firebase/firebase';

function NavBar(props) {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuItem, setMenuItem] = useState([]);

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const handleNotifs = (event) => {
        setAnchorEl(event.currentTarget);
    }
    
    const getRequests = () => {
        let requestData = [];
        auth.onAuthStateChanged(user => {
            if (user) {
                let docRef = db.collection('users').doc(user.uid);
                docRef.get().then((doc) => {
                    if (doc.exists) {
                        for (let i = 0; i < doc.data().requests.length; i++) {
                            requestData.unshift(<MenuItem><Request rid={doc.data().requests[i]} cid={user.uid}></Request></MenuItem>)
                        }
                        setMenuItem(requestData);
                    }
                })  

            }
        })
    }

    useEffect(() => {
        getRequests();
    }, [])
    
    const renderMenu = (
        <Menu
            anchorEl ={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}>
                {menuItem}
        </Menu>
    );

    return(
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <div className='centering'>
                        <Button color='inherit'>Latest Posts</Button>
                        <Button color='inherit'>Rooommate Group</Button>
                    </div>
                    <IconButton onClick={handleNotifs}>
                        <Badge badgeContent={props.count} color='secondary'>
                            <NotificationsIcon color='action'/>
                        </Badge>
                    </IconButton>
                    {renderMenu}
                </Toolbar>

            </AppBar>
        
        </div>
    )
}

export default NavBar;