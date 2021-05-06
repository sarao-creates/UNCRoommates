import {Paper} from '@material-ui/core'
import './index.css';
import { useEffect } from 'react';
import Map from '../Map';

function RooommateGroup() {


    return (
        <div className='dashboard-main'>
            <div className='dashboard-div'>
                <h1 className='dashboard-title'>Roommate Dashboard</h1>
                <div className='map-main'>
                    <Map></Map>
                </div>
                
            </div>
            
        </div>

    )

}

export default RooommateGroup;

