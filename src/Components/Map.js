import React, {Component} from 'react';
import {HorizontalGridLines, VerticalGridLines,
    XYPlot, MarkSeries, LineSeries,
    LineSeriesCanvas} from 'react-vis';
import Lines from './Lines'

 


  export class Map extends Component {
    constructor() {
        super();
        this.state = {
            value: 'Coordinates'
      }};


     makeCoords (coords) {
        let cords = coords.split('')
        let a = cords[1] + cords[2]
        let b = cords[4] + cords[5]
        return {x: parseInt(a), y: parseInt(b)}
    }

    getAllRooms (rooms) {
        let coords = []
        let roomsArr = rooms
          for (let i=0; i < roomsArr.length; i++) {
              coords.push(this.makeCoords(roomsArr[i].coordinates))
          }
        return coords
    }


      render(){
          console.log("Room", this.props.currentRoom)
        return(
            <div>
            <h3 className='coords'>Coordinates: {this.props.currentRoom.coordinates} </h3>
            <div className='map'>
            <XYPlot width={900} height={550}>
             <HorizontalGridLines />
            <VerticalGridLines />
            <MarkSeries data={this.getAllRooms(this.props.rooms)} color="black" 
            onValueMouseOver={(datapoint)=>{this.setState({ value: 'x: ' + datapoint.x + ', y: ' + datapoint.y })}}/>
            <MarkSeries data={[{x: 59, y:60}]} color="limegreen" 
            onValueMouseOver={(datapoint)=>{this.setState({ value: 'x: ' + datapoint.x + ', y: ' + datapoint.y })}}/>
            <MarkSeries data={[this.makeCoords(this.props.currentRoom.coordinates)]} color="red" 
            onValueMouseOver={(datapoint)=>{this.setState({ value: 'x: ' + datapoint.x + ', y: ' + datapoint.y })}}/>
            <Lines />
            </XYPlot>
            </div>
            </div>

        )
      }

    }

export default Map;




// 