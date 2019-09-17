import React, {Component} from 'react';
import {HorizontalGridLines, VerticalGridLines,
    XYPlot, MarkSeries, LineSeries,
    LineSeriesCanvas} from 'react-vis';


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

    Lineas() {
        return(
            <XYPlot width={900} height={550} className='lines'>
        <LineSeries data={[{x: 60, y: 60}, {x: 60, y: 61}]} color="black" />
        <LineSeries data={[{x: 60, y: 60}, {x: 60, y: 59}]} color="black" />
        <LineSeries data={[{x: 60, y: 60}, {x: 59, y: 60}]} color="black" />
        <LineSeries data={[{x: 60, y: 60}, {x: 61, y: 60}]} color="black" />
        <LineSeries data={[{x: 60, y: 59}, {x: 60, y: 58}]} color="black" />
        <LineSeries data={[{x: 60, y: 59}, {x: 61, y: 59}]} color="black" />
        <LineSeries data={[{x: 61, y: 59}, {x: 61, y: 58}]} color="black" />
        <LineSeries data={[{x: 61, y: 59}, {x: 62, y: 59}]} color="black" />
        <LineSeries data={[{x: 61, y: 60}, {x: 61, y: 61}]} color="black" /> 
        <LineSeries data={[{x: 61, y: 60}, {x: 62, y: 60}]} color="black" />
        <LineSeries data={[{x: 60, y: 58}, {x: 59, y: 58}]} color="black" />
        <LineSeries data={[{x: 59, y: 58}, {x: 59, y: 59}]} color="black" /> 
        <LineSeries data={[{x: 59, y: 58}, {x: 58, y: 58}]} color="black" /> 
        <LineSeries data={[{x: 59, y: 59}, {x: 58, y: 59}]} color="black" /> 
        <LineSeries data={[{x: 61, y: 58}, {x: 61, y: 57}]} color="black" />
        <LineSeries data={[{x: 61, y: 58}, {x: 62, y: 58}]} color="black" />
        <LineSeries data={[{x: 60, y: 61}, {x: 60, y: 62}]} color="black" />
        <LineSeries data={[{x: 60, y: 61}, {x: 59, y: 61}]} color="black" />
        <LineSeries data={[{x: 62, y: 58}, {x: 63, y: 58}]} color="black" />
        <LineSeries data={[{x: 61, y: 57}, {x: 61, y: 56}]} color="black" />
        <LineSeries data={[{x: 61, y: 57}, {x: 62, y: 57}]} color="black" />
        <LineSeries data={[{x: 61, y: 57}, {x: 60, y: 57}]} color="black" />
        <LineSeries data={[{x: 62, y: 60}, {x: 63, y: 60}]} color="black" />
        <LineSeries data={[{x: 62, y: 57}, {x: 62, y: 56}]} color="black" />
        <LineSeries data={[{x: 62, y: 57}, {x: 63, y: 57}]} color="black" />
        <LineSeries data={[{x: 58, y: 59}, {x: 58, y: 60}]} color="black" />
        <LineSeries data={[{x: 58, y: 59}, {x: 57, y: 59}]} color="black" />
        <LineSeries data={[{x: 63, y: 58}, {x: 63, y: 59}]} color="black" />
        <LineSeries data={[{x: 63, y: 58}, {x: 64, y: 58}]} color="black" />
        <LineSeries data={[{x: 61, y: 56}, {x: 61, y: 55}]} color="black" />
        <LineSeries data={[{x: 61, y: 56}, {x: 60, y: 56}]} color="black" />
        <LineSeries data={[{x: 60, y: 62}, {x: 60, y: 63}]} color="black" />
        <LineSeries data={[{x: 60, y: 62}, {x: 59, y: 62}]} color="black" />
        <LineSeries data={[{x: 60, y: 63}, {x: 60, y: 64}]} color="black" />
        <LineSeries data={[{x: 60, y: 63}, {x: 61, y: 63}]} color="black" />
        <LineSeries data={[{x: 60, y: 63}, {x: 59, y: 63}]} color="black" />
        <LineSeries data={[{x: 60, y: 57}, {x: 59, y: 57}]} color="black" />
        <LineSeries data={[{x: 61, y: 55}, {x: 61, y: 54}]} color="black" />
        <LineSeries data={[{x: 61, y: 55}, {x: 60, y: 55}]} color="black" />
        <LineSeries data={[{x: 61, y: 61}, {x: 62, y: 61}]} color="black" />
        <LineSeries data={[{x: 62, y: 61}, {x: 63, y: 61}]} color="black" />
        <LineSeries data={[{x: 61, y: 63}, {x: 61, y: 64}]} color="black" />
        <LineSeries data={[{x: 61, y: 63}, {x: 61, y: 62}]} color="black" />
        <LineSeries data={[{x: 61, y: 63}, {x: 62, y: 63}]} color="black" />
        <LineSeries data={[{x: 59, y: 57}, {x: 59, y: 56}]} color="black" />
        <LineSeries data={[{x: 59, y: 57}, {x: 58, y: 57}]} color="black" />
        <LineSeries data={[{x: 62, y: 63}, {x: 62, y: 61}]} color="black" />
        <LineSeries data={[{x: 62, y: 63}, {x: 63, y: 63}]} color="black" />
        <LineSeries data={[{x: 62, y: 63}, {x: 62, y: 62}]} color="black" />
        <LineSeries data={[{x: 62, y: 62}, {x: 63, y: 62}]} color="black" />
        <LineSeries data={[{x: 63, y: 63}, {x: 63, y: 64}]} color="black" />
        <LineSeries data={[{x: 63, y: 63}, {x: 64, y: 63}]} color="black" />
        <LineSeries data={[{x: 63, y: 62}, {x: 64, y: 62}]} color="black" />
        <LineSeries data={[{x: 62, y: 56}, {x: 62, y: 55}]} color="black" />
        <LineSeries data={[{x: 62, y: 56}, {x: 63, y: 56}]} color="black" />
        <LineSeries data={[{x: 63, y: 56}, {x: 63, y: 55}]} color="black" />
        <LineSeries data={[{x: 60, y: 55}, {x: 60, y: 54}]} color="black" />
        <LineSeries data={[{x: 60, y: 55}, {x: 59, y: 55}]} color="black" />
        <LineSeries data={[{x: 64, y: 62}, {x: 64, y: 61}]} color="black" />
        <LineSeries data={[{x: 64, y: 62}, {x: 65, y: 62}]} color="black" />
        <LineSeries data={[{x: 63, y: 64}, {x: 63, y: 65}]} color="black" />
        <LineSeries data={[{x: 63, y: 64}, {x: 64, y: 64}]} color="black" />
        <LineSeries data={[{x: 63, y: 64}, {x: 62, y: 64}]} color="black" />
        <LineSeries data={[{x: 64, y: 58}, {x: 64, y: 59}]} color="black" />
        <LineSeries data={[{x: 64, y: 58}, {x: 64, y: 57}]} color="black" />
        <LineSeries data={[{x: 64, y: 58}, {x: 65, y: 58}]} color="black" />
        <LineSeries data={[{x: 59, y: 61}, {x: 58, y: 61}]} color="black" />
        <LineSeries data={[{x: 59, y: 56}, {x: 59, y: 55}]} color="black" />
        <LineSeries data={[{x: 59, y: 63}, {x: 58, y: 63}]} color="black" />
        <LineSeries data={[{x: 58, y: 61}, {x: 58, y: 62}]} color="black" />
        <LineSeries data={[{x: 60, y: 54}, {x: 60, y: 53}]} color="black" />
        <LineSeries data={[{x: 60, y: 54}, {x: 59, y: 54}]} color="black" />
        <LineSeries data={[{x: 58, y: 57}, {x: 58, y: 56}]} color="black" />
        <LineSeries data={[{x: 58, y: 57}, {x: 57, y: 57}]} color="black" />
        <LineSeries data={[{x: 62, y: 55}, {x: 62, y: 54}]} color="black" />
        <LineSeries data={[{x: 64, y: 64}, {x: 65, y: 64}]} color="black" />
        <LineSeries data={[{x: 64, y: 64}, {x: 64, y: 65}]} color="black" />
        <LineSeries data={[{x: 63, y: 55}, {x: 63, y: 54}]} color="black" />
        <LineSeries data={[{x: 63, y: 55}, {x: 64, y: 55}]} color="black" />
        <LineSeries data={[{x: 63, y: 65}, {x: 63, y: 66}]} color="black" />
        <LineSeries data={[{x: 63, y: 65}, {x: 62, y: 65}]} color="black" />
        <LineSeries data={[{x: 58, y: 58}, {x: 57, y: 58}]} color="black" />
        <LineSeries data={[{x: 65, y: 64}, {x: 66, y: 64}]} color="black" />
        <LineSeries data={[{x: 58, y: 60}, {x: 57, y: 60}]} color="black" />
        <LineSeries data={[{x: 64, y: 61}, {x: 64, y: 60}]} color="black" />
        <LineSeries data={[{x: 64, y: 61}, {x: 65, y: 61}]} color="black" />
        <LineSeries data={[{x: 59, y: 55}, {x: 58, y: 55}]} color="black" />
        <LineSeries data={[{x: 57, y: 58}, {x: 56, y: 58}]} color="black" />
        <LineSeries data={[{x: 58, y: 63}, {x: 58, y: 64}]} color="black" />
        <LineSeries data={[{x: 58, y: 63}, {x: 57, y: 63}]} color="black" />
        <LineSeries data={[{x: 60, y: 64}, {x: 60, y: 65}]} color="black" />
        <LineSeries data={[{x: 60, y: 64}, {x: 59, y: 64}]} color="black" />
        <LineSeries data={[{x: 58, y: 64}, {x: 57, y: 64}]} color="black" />
        <LineSeries data={[{x: 67, y: 60}, {x: 67, y: 61}]} color="black" />
        <LineSeries data={[{x: 67, y: 60}, {x: 66, y: 60}]} color="black" />
        <LineSeries data={[{x: 65, y: 62}, {x: 65, y: 63}]} color="black" />
        <LineSeries data={[{x: 65, y: 62}, {x: 66, y: 62}]} color="black" />
        <LineSeries data={[{x: 57, y: 59}, {x: 56, y: 59}]} color="black" />
        <LineSeries data={[{x: 63, y: 54}, {x: 64, y: 54}]} color="black" />
        <LineSeries data={[{x: 64, y: 65}, {x: 64, y: 66}]} color="black" />
        <LineSeries data={[{x: 64, y: 65}, {x: 65, y: 65}]} color="black" />
        <LineSeries data={[{x: 58, y: 55}, {x: 58, y: 54}]} color="black" />
        <LineSeries data={[{x: 58, y: 55}, {x: 57, y: 55}]} color="black" />
        <LineSeries data={[{x: 60, y: 65}, {x: 59, y: 65}]} color="black" />
        <LineSeries data={[{x: 57, y: 61}, {x: 57, y: 62}]} color="black" />
        <LineSeries data={[{x: 57, y: 61}, {x: 56, y: 61}]} color="black" />
        <LineSeries data={[{x: 64, y: 55}, {x: 65, y: 55}]} color="black" />
        <LineSeries data={[{x: 59, y: 65}, {x: 59, y: 66}]} color="black" />
        <LineSeries data={[{x: 59, y: 65}, {x: 58, y: 65}]} color="black" />
        <LineSeries data={[{x: 61, y: 54}, {x: 61, y: 53}]} color="black" />
        <LineSeries data={[{x: 64, y: 57}, {x: 64, y: 56}]} color="black" />
        <LineSeries data={[{x: 64, y: 57}, {x: 65, y: 57}]} color="black" />
        <LineSeries data={[{x: 57, y: 64}, {x: 57, y: 65}]} color="black" />
        <LineSeries data={[{x: 59, y: 66}, {x: 60, y: 66}]} color="black" />
        <LineSeries data={[{x: 59, y: 66}, {x: 58, y: 66}]} color="black" />
        <LineSeries data={[{x: 57, y: 63}, {x: 56, y: 63}]} color="black" />
        <LineSeries data={[{x: 65, y: 55}, {x: 66, y: 55}]} color="black" />
        <LineSeries data={[{x: 65, y: 57}, {x: 65, y: 56}]} color="black" />
        <LineSeries data={[{x: 65, y: 57}, {x: 66, y: 57}]} color="black" />
        <LineSeries data={[{x: 62, y: 65}, {x: 61, y: 65}]} color="black" />
        <LineSeries data={[{x: 62, y: 54}, {x: 62, y: 53}]} color="black" />
        <LineSeries data={[{x: 66, y: 57}, {x: 67, y: 57}]} color="black" />
        <LineSeries data={[{x: 56, y: 63}, {x: 56, y: 64}]} color="black" />
        <LineSeries data={[{x: 56, y: 63}, {x: 56, y: 62}]} color="black" />
        <LineSeries data={[{x: 56, y: 63}, {x: 55, y: 63}]} color="black" />
        <LineSeries data={[{x: 62, y: 53}, {x: 61, y: 53}]} color="black" />
        <LineSeries data={[{x: 64, y: 66}, {x: 64, y: 67}]} color="black" />
        <LineSeries data={[{x: 63, y: 66}, {x: 63, y: 67}]} color="black" />
        <LineSeries data={[{x: 63, y: 66}, {x: 62, y: 66}]} color="black" />
        <LineSeries data={[{x: 65, y: 56}, {x: 66, y: 56}]} color="black" />
        <LineSeries data={[{x: 66, y: 56}, {x: 67, y: 56}]} color="black" />
        <LineSeries data={[{x: 57, y: 55}, {x: 57, y: 56}]} color="black" />
        <LineSeries data={[{x: 57, y: 55}, {x: 57, y: 54}]} color="black" />
        <LineSeries data={[{x: 57, y: 55}, {x: 56, y: 55}]} color="black" />
        <LineSeries data={[{x: 55, y: 63}, {x: 55, y: 64}]} color="black" />
        <LineSeries data={[{x: 55, y: 63}, {x: 54, y: 63}]} color="black" />
        <LineSeries data={[{x: 55, y: 63}, {x: 55, y: 63}]} color="black" />
        <LineSeries data={[{x: 64, y: 54}, {x: 64, y: 53}]} color="black" />
        <LineSeries data={[{x: 64, y: 54}, {x: 65, y: 54}]} color="black" />
        <LineSeries data={[{x: 56, y: 62}, {x: 55, y: 62}]} color="black" />
        <LineSeries data={[{x: 57, y: 56}, {x: 56, y: 56}]} color="black" />
        <LineSeries data={[{x: 65, y: 65}, {x: 65, y: 66}]} color="black" />
        <LineSeries data={[{x: 64, y: 60}, {x: 65, y: 60}]} color="black" />
        <LineSeries data={[{x: 60, y: 53}, {x: 59, y: 53}]} color="black" />
        <LineSeries data={[{x: 64, y: 53}, {x: 64, y: 52}]} color="black" />
        <LineSeries data={[{x: 64, y: 53}, {x: 63, y: 53}]} color="black" />
        <LineSeries data={[{x: 65, y: 60}, {x: 65, y: 59}]} color="black" />
        <LineSeries data={[{x: 65, y: 60}, {x: 66, y: 60}]} color="black" />
        <LineSeries data={[{x: 61, y: 53}, {x: 61, y: 52}]} color="black" />
        <LineSeries data={[{x: 56, y: 55}, {x: 56, y: 54}]} color="black" />
        <LineSeries data={[{x: 56, y: 55}, {x: 55, y: 55}]} color="black" />
        <LineSeries data={[{x: 64, y: 52}, {x: 64, y: 51}]} color="black" />
        <LineSeries data={[{x: 64, y: 52}, {x: 63, y: 52}]} color="black" />
        <LineSeries data={[{x: 65, y: 54}, {x: 65, y: 53}]} color="black" />
        <LineSeries data={[{x: 65, y: 54}, {x: 66, y: 54}]} color="black" />
        <LineSeries data={[{x: 55, y: 62}, {x: 55, y: 61}]} color="black" />
        <LineSeries data={[{x: 55, y: 61}, {x: 54, y: 61}]} color="black" />
        <LineSeries data={[{x: 62, y: 66}, {x: 62, y: 67}]} color="black" />
        <LineSeries data={[{x: 62, y: 67}, {x: 62, y: 68}]} color="black" />
        <LineSeries data={[{x: 61, y: 52}, {x: 61, y: 51}]} color="black" />
        <LineSeries data={[{x: 61, y: 52}, {x: 62, y: 52}]} color="black" />
        <LineSeries data={[{x: 61, y: 52}, {x: 60, y: 52}]} color="black" />
        <LineSeries data={[{x: 65, y: 58}, {x: 66, y: 58}]} color="black" />
        <LineSeries data={[{x: 63, y: 67}, {x: 63, y: 68}]} color="black" />
        <LineSeries data={[{x: 65, y: 59}, {x: 66, y: 59}]} color="black" />
        <LineSeries data={[{x: 66, y: 60}, {x: 66, y: 61}]} color="black" />
        <LineSeries data={[{x: 66, y: 60}, {x: 67, y: 60}]} color="black" />
        <LineSeries data={[{x: 61, y: 65}, {x: 61, y: 66}]} color="black" />
        <LineSeries data={[{x: 61, y: 66}, {x: 61, y: 67}]} color="black" />
        <LineSeries data={[{x: 58, y: 66}, {x: 58, y: 67}]} color="black" />
        <LineSeries data={[{x: 58, y: 66}, {x: 57, y: 66}]} color="black" />
        <LineSeries data={[{x: 57, y: 54}, {x: 57, y: 53}]} color="black" />
        <LineSeries data={[{x: 66, y: 59}, {x: 67, y: 59}]} color="black" />
        <LineSeries data={[{x: 66, y: 61}, {x: 67, y: 61}]} color="black" />
        <LineSeries data={[{x: 57, y: 53}, {x: 58, y: 53}]} color="black" />
        <LineSeries data={[{x: 57, y: 53}, {x: 56, y: 53}]} color="black" />
        <LineSeries data={[{x: 61, y: 51}, {x: 61, y: 50}]} color="black" />
        <LineSeries data={[{x: 61, y: 51}, {x: 60, y: 51}]} color="black" />
        <LineSeries data={[{x: 60, y: 52}, {x: 59, y: 52}]} color="black" />
        <LineSeries data={[{x: 63, y: 68}, {x: 63, y: 69}]} color="black" />
        <LineSeries data={[{x: 63, y: 68}, {x: 64, y: 68}]} color="black" />
        <LineSeries data={[{x: 63, y: 53}, {x: 63, y: 52}]} color="black" />
        <LineSeries data={[{x: 57, y: 57}, {x: 56, y: 57}]} color="black" />
        <LineSeries data={[{x: 60, y: 51}, {x: 60, y: 50}]} color="black" />
        <LineSeries data={[{x: 60, y: 51}, {x: 59, y: 51}]} color="black" />
        <LineSeries data={[{x: 56, y: 60}, {x: 55, y: 60}]} color="black" />
        <LineSeries data={[{x: 65, y: 53}, {x: 66, y: 53}]} color="black" />
        <LineSeries data={[{x: 56, y: 56}, {x: 55, y: 56}]} color="black" />
        <LineSeries data={[{x: 67, y: 60}, {x: 68, y: 60}]} color="black" />
        <LineSeries data={[{x: 64, y: 68}, {x: 65, y: 68}]} color="black" />
        <LineSeries data={[{x: 66, y: 64}, {x: 66, y: 65}]} color="black" />
        <LineSeries data={[{x: 66, y: 64}, {x: 67, y: 64}]} color="black" />
        <LineSeries data={[{x: 54, y: 63}, {x: 54, y: 64}]} color="black" />
        <LineSeries data={[{x: 54, y: 63}, {x: 54, y: 62}]} color="black" />
        <LineSeries data={[{x: 54, y: 63}, {x: 53, y: 63}]} color="black" />
        <LineSeries data={[{x: 63, y: 69}, {x: 63, y: 70}]} color="black" />
        <LineSeries data={[{x: 63, y: 69}, {x: 64, y: 69}]} color="black" />
        <LineSeries data={[{x: 63, y: 69}, {x: 62, y: 69}]} color="black" />
        <LineSeries data={[{x: 56, y: 57}, {x: 55, y: 57}]} color="black" />
        <LineSeries data={[{x: 63, y: 52}, {x: 62, y: 52}]} color="black" />
        <LineSeries data={[{x: 62, y: 69}, {x: 62, y: 70}]} color="black" />
        <LineSeries data={[{x: 62, y: 69}, {x: 61, y: 69}]} color="black" />
        <LineSeries data={[{x: 64, y: 69}, {x: 65, y: 69}]} color="black" />
        <LineSeries data={[{x: 66, y: 55}, {x: 67, y: 55}]} color="black" />
        <LineSeries data={[{x: 65, y: 68}, {x: 65, y: 67}]} color="black" />
        <LineSeries data={[{x: 65, y: 68}, {x: 66, y: 68}]} color="black" />
        <LineSeries data={[{x: 66, y: 53}, {x: 66, y: 52}]} color="black" />
        <LineSeries data={[{x: 66, y: 53}, {x: 67, y: 53}]} color="black" />
        <LineSeries data={[{x: 61, y: 67}, {x: 61, y: 68}]} color="black" />
        <LineSeries data={[{x: 61, y: 67}, {x: 60, y: 67}]} color="black" />
        <LineSeries data={[{x: 65, y: 52}, {x: 65, y: 51}]} color="black" />
        <LineSeries data={[{x: 55, y: 56}, {x: 54, y: 56}]} color="black" />
        <LineSeries data={[{x: 67, y: 53}, {x: 67, y: 54}]} color="black" />
        <LineSeries data={[{x: 67, y: 53}, {x: 68, y: 53}]} color="black" />
        <LineSeries data={[{x: 58, y: 67}, {x: 58, y: 68}]} color="black" />
        <LineSeries data={[{x: 58, y: 67}, {x: 57, y: 67}]} color="black" />
        <LineSeries data={[{x: 62, y: 52}, {x: 62, y: 51}]} color="black" />
        <LineSeries data={[{x: 65, y: 51}, {x: 65, y: 50}]} color="black" />
        <LineSeries data={[{x: 65, y: 51}, {x: 66, y: 51}]} color="black" />
        <LineSeries data={[{x: 66, y: 52}, {x: 67, y: 52}]} color="black" />
        <LineSeries data={[{x: 65, y: 63}, {x: 66, y: 63}]} color="black" />
        <LineSeries data={[{x: 62, y: 70}, {x: 62, y: 69}]} color="black" />
        <LineSeries data={[{x: 59, y: 52}, {x: 58, y: 52}]} color="black" />
        <LineSeries data={[{x: 66, y: 65}, {x: 66, y: 66}]} color="black" />
        <LineSeries data={[{x: 66, y: 65}, {x: 67, y: 65}]} color="black" />
        <LineSeries data={[{x: 55, y: 55}, {x: 55, y: 54}]} color="black" />
        <LineSeries data={[{x: 55, y: 55}, {x: 54, y: 55}]} color="black" />
        <LineSeries data={[{x: 54, y: 61}, {x: 53, y: 61}]} color="black" />
        <LineSeries data={[{x: 54, y: 62}, {x: 53, y: 62}]} color="black" />
        <LineSeries data={[{x: 67, y: 57}, {x: 67, y: 58}]} color="black" />
        <LineSeries data={[{x: 67, y: 57}, {x: 68, y: 57}]} color="black" />
        <LineSeries data={[{x: 54, y: 55}, {x: 54, y: 54}]} color="black" />
        <LineSeries data={[{x: 54, y: 55}, {x: 53, y: 55}]} color="black" />
        <LineSeries data={[{x: 60, y: 67}, {x: 59, y: 67}]} color="black" />
        <LineSeries data={[{x: 55, y: 54}, {x: 55, y: 53}]} color="black" />
        <LineSeries data={[{x: 67, y: 59}, {x: 68, y: 59}]} color="black" />
        <LineSeries data={[{x: 66, y: 63}, {x: 66, y: 62}]} color="black" />
        <LineSeries data={[{x: 55, y: 60}, {x: 54, y: 60}]} color="black" />
        <LineSeries data={[{x: 67, y: 61}, {x: 68, y: 61}]} color="black" />
        <LineSeries data={[{x: 66, y: 66}, {x: 66, y: 67}]} color="black" />
        <LineSeries data={[{x: 66, y: 66}, {x: 67, y: 66}]} color="black" />
        <LineSeries data={[{x: 67, y: 55}, {x: 68, y: 55}]} color="black" />
        <LineSeries data={[{x: 58, y: 53}, {x: 58, y: 52}]} color="black" />
        <LineSeries data={[{x: 59, y: 51}, {x: 59, y: 50}]} color="black" />
        <LineSeries data={[{x: 59, y: 51}, {x: 58, y: 51}]} color="black" />
        <LineSeries data={[{x: 54, y: 56}, {x: 54, y: 57}]} color="black" />
        <LineSeries data={[{x: 54, y: 56}, {x: 53, y: 56}]} color="black" />
        <LineSeries data={[{x: 53, y: 56}, {x: 53, y: 57}]} color="black" />
        <LineSeries data={[{x: 53, y: 56}, {x: 52, y: 56}]} color="black" />
        <LineSeries data={[{x: 62, y: 51}, {x: 62, y: 50}]} color="black" />
        <LineSeries data={[{x: 62, y: 51}, {x: 63, y: 51}]} color="black" />
        <LineSeries data={[{x: 63, y: 51}, {x: 63, y: 50}]} color="black" />
        <LineSeries data={[{x: 63, y: 70}, {x: 63, y: 71}]} color="black" />
        <LineSeries data={[{x: 63, y: 70}, {x: 64, y: 70}]} color="black" />
        <LineSeries data={[{x: 58, y: 68}, {x: 58, y: 69}]} color="black" />
        <LineSeries data={[{x: 58, y: 68}, {x: 59, y: 68}]} color="black" />
        <LineSeries data={[{x: 57, y: 67}, {x: 57, y: 68}]} color="black" />
        <LineSeries data={[{x: 57, y: 67}, {x: 56, y: 67}]} color="black" />
        <LineSeries data={[{x: 67, y: 63}, {x: 67, y: 62}]} color="black" />
        <LineSeries data={[{x: 67, y: 63}, {x: 68, y: 63}]} color="black" />
        <LineSeries data={[{x: 64, y: 70}, {x: 64, y: 71}]} color="black" />
        <LineSeries data={[{x: 64, y: 70}, {x: 65, y: 70}]} color="black" />
        <LineSeries data={[{x: 61, y: 69}, {x: 61, y: 70}]} color="black" />
        <LineSeries data={[{x: 61, y: 69}, {x: 60, y: 69}]} color="black" />
        <LineSeries data={[{x: 53, y: 55}, {x: 52, y: 55}]} color="black" />
        <LineSeries data={[{x: 58, y: 52}, {x: 57, y: 52}]} color="black" />
        <LineSeries data={[{x: 54, y: 64}, {x: 54, y: 65}]} color="black" />
        <LineSeries data={[{x: 56, y: 67}, {x: 56, y: 68}]} color="black" />
        <LineSeries data={[{x: 56, y: 67}, {x: 55, y: 67}]} color="black" />
        <LineSeries data={[{x: 67, y: 54}, {x: 68, y: 54}]} color="black" />
        <LineSeries data={[{x: 55, y: 67}, {x: 55, y: 66}]} color="black" />
        <LineSeries data={[{x: 55, y: 67}, {x: 54, y: 67}]} color="black" />
        <LineSeries data={[{x: 68, y: 59}, {x: 68, y: 58}]} color="black" />
        <LineSeries data={[{x: 68, y: 59}, {x: 69, y: 59}]} color="black" />
        <LineSeries data={[{x: 54, y: 57}, {x: 54, y: 58}]} color="black" />
        <LineSeries data={[{x: 67, y: 66}, {x: 67, y: 67}]} color="black" />
        <LineSeries data={[{x: 58, y: 51}, {x: 58, y: 50}]} color="black" />
        <LineSeries data={[{x: 57, y: 52}, {x: 57, y: 51}]} color="black" />
        <LineSeries data={[{x: 63, y: 71}, {x: 63, y: 72}]} color="black" />
        <LineSeries data={[{x: 59, y: 50}, {x: 59, y: 49}]} color="black" />
        <LineSeries data={[{x: 55, y: 53}, {x: 55, y: 52}]} color="black" />
        <LineSeries data={[{x: 55, y: 53}, {x: 54, y: 53}]} color="black" />
        <LineSeries data={[{x: 63, y: 50}, {x: 63, y: 49}]} color="black" />
        <LineSeries data={[{x: 63, y: 50}, {x: 62, y: 50}]} color="black" />
        <LineSeries data={[{x: 61, y: 70}, {x: 60, y: 70}]} color="black" />
        <LineSeries data={[{x: 53, y: 57}, {x: 53, y: 58}]} color="black" />
        <LineSeries data={[{x: 53, y: 57}, {x: 52, y: 57}]} color="black" />
        <LineSeries data={[{x: 54, y: 54}, {x: 53, y: 54}]} color="black" />
        <LineSeries data={[{x: 56, y: 68}, {x: 56, y: 59}]} color="black" />
        <LineSeries data={[{x: 56, y: 68}, {x: 55, y: 68}]} color="black" />
        <LineSeries data={[{x: 52, y: 57}, {x: 52, y: 58}]} color="black" />
        <LineSeries data={[{x: 52, y: 57}, {x: 51, y: 57}]} color="black" />
        <LineSeries data={[{x: 54, y: 53}, {x: 54, y: 52}]} color="black" />
        <LineSeries data={[{x: 57, y: 66}, {x: 56, y: 66}]} color="black" />
        <LineSeries data={[{x: 62, y: 50}, {x: 61, y: 50}]} color="black" />
        <LineSeries data={[{x: 69, y: 59}, {x: 69, y: 60}]} color="black" />
        <LineSeries data={[{x: 69, y: 59}, {x: 70, y: 59}]} color="black" />
        <LineSeries data={[{x: 67, y: 62}, {x: 68, y: 62}]} color="black" />
        <LineSeries data={[{x: 54, y: 67}, {x: 54, y: 68}]} color="black" />
        <LineSeries data={[{x: 54, y: 67}, {x: 54, y: 66}]} color="black" />
        <LineSeries data={[{x: 54, y: 67}, {x: 53, y: 67}]} color="black" />
        <LineSeries data={[{x: 68, y: 57}, {x: 68, y: 56}]} color="black" />
        <LineSeries data={[{x: 68, y: 57}, {x: 69, y: 57}]} color="black" />
        <LineSeries data={[{x: 61, y: 50}, {x: 62, y: 50}]} color="black" />
        <LineSeries data={[{x: 56, y: 66}, {x: 56, y: 65}]} color="black" />
        <LineSeries data={[{x: 68, y: 54}, {x: 69, y: 54}]} color="black" />
        <LineSeries data={[{x: 60, y: 70}, {x: 60, y: 71}]} color="black" />
        <LineSeries data={[{x: 60, y: 70}, {x: 59, y: 70}]} color="black" />
        <LineSeries data={[{x: 69, y: 60}, {x: 69, y: 61}]} color="black" />
        <LineSeries data={[{x: 69, y: 60}, {x: 70, y: 60}]} color="black" />
        </XYPlot>
        )
    }

      render(){
          for (let i=240; i < 250; i++) {
          console.log("Room", this.props.rooms[i].room_id, this.props.rooms[i].exits, this.props.rooms[i].coordinates)}
        return(
            <div>
            <h3 className='coords'>Coordinates: {this.props.currentRoom.coordinates} </h3>
            <div className='map'>
            <XYPlot width={900} height={550}>
             <HorizontalGridLines />
            <VerticalGridLines />
            {this.Lineas()}
            <MarkSeries data={this.getAllRooms(this.props.rooms)} color="black" 
            onValueMouseOver={(datapoint)=>{this.setState({ value: 'x: ' + datapoint.x + ', y: ' + datapoint.y })}}/>
            <MarkSeries data={[{x: 59, y:60}]} color="limegreen" 
            onValueMouseOver={(datapoint)=>{this.setState({ value: 'x: ' + datapoint.x + ', y: ' + datapoint.y })}}/>
            <MarkSeries data={[this.makeCoords(this.props.currentRoom.coordinates)]} color="red" 
            onValueMouseOver={(datapoint)=>{this.setState({ value: 'x: ' + datapoint.x + ', y: ' + datapoint.y })}}/>
            </XYPlot>
            </div>
            </div>

        )
      }

    }

export default Map;




// 