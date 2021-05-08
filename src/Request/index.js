import {Button} from '@material-ui/core'
import {useState, useEffect} from 'react';
import {db} from '../Firebase/firebase';

function Request(props) {
    const [user, setUser] = useState()

    useEffect(() => {
        let docRef = db.collection('users').doc(props.rid);
        docRef.get().then((doc) => {
            if (doc.exists) {
                setUser(doc.data().firstName + ' ' + doc.data().lastName);
            }
        })
    }, [props.rid]) 

    const handleAccept = async () => {
        let cgroup = false;
        let rgroup = false;
        let cgid = '';
        let rgid = '';
        
        let docRef = db.collection('users').doc(props.cid);
        await docRef.get().then((doc) => {
            if (doc.exists) {
                cgroup = doc.data().group === '' ? false : true;
                cgid = doc.data().group;
            }
        })

        docRef = db.collection('users').doc(props.rid);
        await docRef.get().then((doc) => {
            if (doc.exists) {
                rgroup = doc.data().group === '' ? false : true;
                rgid = doc.data().group;
            }
        })

        let currentGroup = [];
        let currentRequests = [];

        if (rgid === cgid) {
            console.log('Already roommates with this user!');
        }

        // Case 1: You're already in a roommate group and so are they (merge group?)
        else if (cgroup && rgroup) {
            console.log('Cannot join group, both of you are already in roommate groups.')
        }

        // Case 2: You're in a roommate group already but they're not (they join yours)
        else if (cgroup && !rgroup) {
            db.collection('users').doc(props.rid).update({
                group: cgid,
            });

            docRef = db.collection('groups').doc(cgid);
            await docRef.get().then((doc) => {
                if (doc.exists) {
                    currentGroup = doc.data().users
                }
            })
            currentGroup.push(props.rid)
            db.collection('groups').doc(cgid).update({
                users: currentGroup,
            })

        }

        // Case 3: The person requesting is in a roommate group but you are not (join there's)
        else if (!cgroup && rgroup) {
            db.collection('users').doc(props.cid).update({
                group: rgid,
            });

            docRef = db.collection('groups').doc(rgid);
            await docRef.get().then((doc) => {
                if (doc.exists) {
                    currentGroup = doc.data().users
                }
            })
            currentGroup.push(props.cid)
            db.collection('groups').doc(rgid).update({
                users: currentGroup,
            })
        }
        // Case 4: Neither of you are in a roommate group. Create a new group
        else if (!cgroup && !rgroup) {
            let newGID = '';
            await db.collection('groups').add({
                users: [props.cid, props.rid]
            }).then((docRef) => {
                newGID = docRef.id;
            })

            await db.collection('users').doc(props.cid).update({
                group: newGID,
            });
            
            await db.collection('users').doc(props.rid).update({
                group: newGID,
            });
           
        }

        docRef = db.collection('users').doc(props.cid);
        await docRef.get().then((doc) => {
            if (doc.exists) {
                currentRequests = doc.data().requests;
            }
        })
        
        for (let i = 0; i < currentRequests.length; i++) {
            if (currentRequests[i] === props.rid) {
                currentRequests.splice(i, 1);
            }
        }

        db.collection('users').doc(props.cid).update({
            requests: currentRequests,
        })

        props.handleClose()
    }

    const handleReject = () => {

    }

    return(
        <div className='request-main'>
            <p>{user} wants to be roommates!</p>
            <Button color='primary' onClick={handleAccept}>Accept</Button>
            <Button color='secondary' onClick={handleReject}>Reject</Button>

        </div>
    )
}

export default Request;