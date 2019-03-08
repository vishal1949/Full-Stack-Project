import React from 'react';
import MarkerManager from '../util/marker_manager'

class ListingMap extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        
            
    }
    

    createMarkerFromBench(bench) {
        // const position = new google.maps.LatLng(bench.lat, bench.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            benchId: bench.id
        });
        marker.addListener('click', () => this.handleClick(bench));
        this.markers[marker.benchId] = marker;
    }

    render(){
        return(
            <div id='map-container' ref='map'>
            </div>
        )
    }
}

export default ListingMap;