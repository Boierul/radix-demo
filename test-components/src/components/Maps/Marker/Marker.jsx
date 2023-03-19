import React from 'react';
import {MarkerF} from "@react-google-maps/api";
import * as HoverCard from '@radix-ui/react-hover-card';
import './Marker.css';

function Marker({id, position, icon}) {
    return (
        <>
            <MarkerF
                key={id}
                position={position}
                // onClick={handleClickMarker}
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