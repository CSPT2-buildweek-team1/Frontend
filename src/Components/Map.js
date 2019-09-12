import React, {Component} from 'react';
import {HorizontalGridLines, VerticalGridLines,
    XYPlot, MarkSeries, LineSeries,
    LineSeriesCanvas} from 'react-vis';
import Lines from './Lines'

    function allEdges (rooms) {
        var allEdges = []
        var newEdges = []
        for (var i=0; i < rooms.length; i++) {
            allEdges.push([rooms[i].coordinates, rooms[i].exits])
        }
        for (var i=0; i < allEdges.length; i++) {
            for (var item in allEdges[i][1]) {
                if (item === 'n') {
                    let coords = makeCoords(allEdges[i][0])
                    let destCoords = coords
                    destCoords.y += 1
                    newEdges.push([coords, destCoords])
                }
                 else if (item === 's') {
                  let coords = makeCoords(allEdges[i][0])
                  let destCoords = coords
                  destCoords.y -= 1
                  newEdges.push([coords, destCoords])
              }
              else if (item === 'e') {
                  let coords = makeCoords(allEdges[i][0])
                  let destCoords = coords
                  destCoords.x += 1
                  newEdges.push([coords, destCoords])
              }
              else if (item === 'w') {
                  let coords = makeCoords(allEdges[i][0])
                  let destCoords = coords
                  destCoords.x -= 1
                  newEdges.push([coords, destCoords])
              }
            }
        }
        return newEdges
    }

    function makeCoords (coords) {
        let cords = coords.split('')
        let a = cords[1] + cords[2]
        let b = cords[4] + cords[5]
        return {x: parseInt(a), y: parseInt(b)}
    }

    function getAllRooms (rooms) {
        let coords = []
        let roomsArr = rooms.rooms
          for (let i=0; i < roomsArr.length; i++) {
              coords.push(makeCoords(roomsArr[i].coordinates))
          }
        return coords
    }

    function Chart (rooms) {
        var edges = allEdges(rooms.rooms)
        var edge = [{x: 60, y: 61}, {x: 60, y: 61}]
        return(
        <div className='map'>
        <XYPlot width={900} height={550}>
         <HorizontalGridLines />
         <VerticalGridLines />
         <MarkSeries data={getAllRooms(rooms)} color="black" />
         </XYPlot>
         {/* <h1>Hi</h1> */}
      </div>)
    }

  export class Map extends Component {
    constructor() {
        super();
        this.state = {
            
      }};

      

      render(){
      var edges = allEdges(this.props.rooms)
      console.log(JSON.stringify(edges))
        return(
            <div>
            <Chart rooms={this.props.rooms} />
            <Lines />
            </div>

        )
      }

    }

export default Map;




// 