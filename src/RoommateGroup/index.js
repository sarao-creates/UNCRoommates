import './index.css';
import { useEffect, useState } from 'react';
import Map from '../Map';
import axios from 'axios';

function RooommateGroup(props) {

    const [housing, setHousing] = useState([]);
    // const [panCoords, setPanCoords] = useState({});
    
    const getLongLat = async () => {
        let housingArray = [];

        for (let i = 0; i < props.housing.length; i++) {
            const options = {
                method: 'GET',
                url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
                params: {address: `${props.housing[i].address}`, language: 'en'},
                headers: {
                    'x-rapidapi-key': '7873e050d5msh73bea27da2029f7p1bdff1jsn8408468afdbd',
                    'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com'
                }
            }
    
            await axios.request(options).then(function(response) {
                housingArray.push({lat: response.data.results[0].geometry.location.lat, lng: response.data.results[0].geometry.location.lng})
                
            })

        } //UNCCOMMENT LATER TO SAVE API CALLS
        
        setHousing(housingArray);
    }
    

    useEffect(() => {
        getLongLat(props.housing);    
    }); // removed props.housing

    return (
        <div className='dashboard-main'>
            <div className='map-main'>
                <Map coordinates={housing}></Map>
            </div>
                
            
        </div>

    )

}

export default RooommateGroup;

