import React from 'react';
import {MarkerF} from "@react-google-maps/api";
import './Marker.css';

function Marker({id, position, icon}) {
    const handleClickMarker = (marker) => {
        console.log(marker);
    }

    return (
        <>
            <MarkerF
                key={id}
                position={position}
                // onClick={handleClickMarker(position)}
                // onMouseOver={handleClickMarker}
                icon={{
                    url: icon,
                    scaledSize: new window.google.maps.Size(50, 50),
                }}
            />
        </>
    );
}

export default Marker;