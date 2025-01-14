import React, {useEffect} from "react";
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
import Marker from "./Marker/Marker.jsx";
import markers from "../../utils/demo-data/turbines.json";
import {useDispatch} from "react-redux";
import {setProjectName, setTurbineName} from "../../store/slices/demoSlice.js";

const containerStyle = {
    width: "100%",
    height: "100%",
};

let center = {
    lat: 55.016667,
    lng: 12.933333
};

//
// const mapOptions = {
//     styles: [
//         {
//             featureType: "all",
//             elementType: "geometry.fill",
//             stylers: [
//                 {
//                     color: "#000000",
//                 },
//             ],
//         },
//         {
//             featureType: "all",
//             elementType: "labels.text.fill",
//             stylers: [
//                 {
//                     color: "#ffffff",
//                 },
//             ],
//         },
//         {
//             featureType: "all",
//             elementType: "labels.text.stroke",
//             stylers: [
//                 {
//                     color: "#000000",
//                 },
//                 {
//                     lightness: 13,
//                 },
//             ],
//         },
//         {
//             featureType: "administrative",
//             elementType: "geometry.fill",
//             stylers: [
//                 {
//                     color: "#000000",
//                 },
//             ],
//         },
//         {
//             featureType: "administrative",
//             elementType: "geometry.stroke",
//             stylers: [
//                 {
//                     color: "#144b53",
//                 },
//                 {
//                     lightness: 14,
//                 },
//                 {
//                     weight: 1.4,
//                 },
//             ],
//         },
//         {
//             featureType: "landscape",
//             elementType: "all",
//             stylers: [
//                 {
//                     color: "#08304b",
//                 },
//             ],
//         },
//         {
//             featureType: "poi",
//             elementType: "geometry",
//             stylers: [
//                 {
//                     color: "#0c4152",
//                 },
//                 {
//                     lightness: 5,
//                 },
//             ],
//         },
//         {
//             featureType: "road.highway",
//             elementType: "geometry.fill",
//             stylers: [
//                 {
//                     color: "#000000",
//                 },
//             ],
//         },
//         {
//             featureType: "road.highway",
//             elementType: "geometry.stroke",
//             stylers: [
//                 {
//                     color: "#0b434f",
//                 },
//                 {
//                     lightness: 25,
//                 },
//             ],
//         },
//         {
//             featureType: "road.arterial",
//             elementType: "geometry.fill",
//             stylers: [
//                 {
//                     color: "#000000",
//                 },
//             ],
//         },
//         {
//             featureType: "road.arterial",
//             elementType: "geometry.stroke",
//             stylers: [
//                 {
//                     color: "#0b3d51",
//                 },
//                 {
//                     lightness: 16,
//                 },
//             ],
//         },
//         {
//             featureType: "road.local",
//             elementType: "geometry",
//             stylers: [
//                 {
//                     color: "#000000",
//                 },
//             ],
//         },
//         {
//             featureType: "transit",
//             elementType: "all",
//             stylers: [
//                 {
//                     color: "#146474",
//                 },
//             ],
//         },
//         {
//             featureType: "water",
//             elementType: "all",
//             stylers: [
//                 {
//                     color: "#021019",
//                 },
//             ],
//         },
//     ],
// };

const mapOptions = {
    disableDefaultUI: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    styles: [
        {
            elementType: "geometry",
            stylers: [
                {
                    color: "#f5f5f5",
                },
            ],
        },
        {
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#616161",
                },
            ],
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#f5f5f5",
                },
            ],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#bdbdbd",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#eeeeee",
                },
            ],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
                {
                    color: "#e5e5e5",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#9e9e9e",
                },
            ],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {
                    color: "#ffffff",
                },
            ],
        },
        {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#757575",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
                {
                    color: "#dadada",
                },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#616161",
                },
            ],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#9e9e9e",
                },
            ],
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
                {
                    color: "#e5e5e5",
                },
            ],
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
                {
                    color: "#eeeeee",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#c9c9c9",
                },
            ],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#9e9e9e",
                },
            ],
        },
    ],
};


const Map = () => {
    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAvJjmXsWJKp-MbJaj6TwjN4NLsPaMV714",
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds();
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    // const storedProjectId = localStorage.getItem('projectID')
    const storedTurbineId = localStorage.getItem('turbineName')

    return isLoaded ? (
        <div style={{
            width: "100vw",
            height: "100vh"
        }}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={mapOptions}
            >
                {markers.map((marker) => {
                    if (marker.Turbine_ID === storedTurbineId) {
                        center = marker.Position
                        return (
                            <Marker
                                id={marker.Turbine_ID}
                                position={marker.Position}
                                icon={marker.Turbine_Icon}/>
                        )
                    } else {
                        // TODO create a no such marker page
                        return null;
                    }
                })}
            </GoogleMap>
        </div>
    ) : (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw"
        }}>
            No data available
        </div>
    );
};

// TODO Generate No data available component

export default Map;
