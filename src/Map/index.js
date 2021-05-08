import { useEffect } from 'react';
import {useGoogleMaps} from 'react-hook-google-maps';
import './index.css';
import apartment from './MapIcons/flat.svg';

function Map(props) {
    const defaultLoc = {lat: 35.9132, lng: -79.0558 }
    // const lark = {lat: 35.9187282664347, lng: -79.05353261319675} 
    const housingCoords = [
        {lat: 35.9187282664347, lng: -79.05353261319675},
        {lat: 35.91030141879442, lng: -79.05729551122378},
        {lat: 35.94718524329469, lng: -79.06117744008112},
        {lat: 35.92010498435601, lng: -79.0539347070598},
        {lat: 35.911840512603995, lng: -79.06111620605373},
        {lat: 35.91864466139889, lng: -79.05528848272199},
        {lat: 35.91299970506669, lng: -79.05971757602687},
        {lat: 35.92198215488461, lng: -79.05425064988167},
        {lat: 35.91222581276119, lng: -79.05737823600079},


    ]
    // const coordinates = props.coordinates;
    // const pan = props.pan;
    const {ref, map, google} = useGoogleMaps(
        process.env.REACT_APP_GOOGLE_API_KEY,
        {
            zoom: 15,
            center: defaultLoc,
        }
    )


    useEffect(() => {
        if (!map || !google) return;
        
        for (let i = 0; i < housingCoords.length; i++) {
            new google.maps.Marker({
                map: map,
                position: housingCoords[i],
                icon: apartment,
            })
            
        }
        
        
    })

    // useEffect(() => {
    //     map.panTo(pan.getPosition().toJSON());
    // }, [pan])

    return (
        <div className='map-size' ref={ref}  />
    )
}

export default Map;