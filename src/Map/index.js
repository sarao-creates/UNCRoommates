import {useGoogleMaps} from 'react-hook-google-maps';
import './index.css';

function Map() {
    const defaultLoc = {lat: 35.9132, lng: -79.0558 }
    const {ref, map, google} = useGoogleMaps(
        process.env.REACT_APP_GOOGLE_API_KEY,
        {
            zoom: 15,
            center: defaultLoc,
        }
    )

    return (
        <div className='map-size' ref={ref}  />
    )
}

export default Map;