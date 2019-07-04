import React, { Component } from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => {
    return (
       <MapViewDirections
            destination={ destination }
            origin={ origin }
            onReady={ onReady }
            apikey= 'AIzaSyBhAwIwcJLk10RVN1eQIWGiESlcZZnFjcE'
            strokeWidth={2}
            strokeColor='green'
       />
    );
};

export default Directions;
