import React, {Component} from 'react';
import {HorizontalGridLines, VerticalGridLines,
    XYPlot, MarkSeries, LineSeries,
    LineSeriesCanvas} from 'react-vis'

  export class Map extends Component {
    constructor() {
        super();
        this.state = {
            
      }};

  
      makeCoords = (coords) => {
          let cords = coords.split('')
          let a = cords[1] + cords[2]
          let b = cords[4] + cords[5]
          return {x: a, y: b}
      }
  
    //   getRoomEdges = (rooms) => {
    //       var edges = []
    //       Object.keys(rooms.exits).forEach(function(key) {
    //           if (rooms.exits[key] !== "?"){
    //           edges.push([this.makeCoords(rooms.coordinates), this.makeCoords(this.state.rooms[rooms.exits[key]].coordinates)])
    //           }
    //         });
    //         return edges
    //   }
  
    //    getAllEdges = (data) => {
    //       var allEdges = []
    //       // merge all of the edges for each room into the resulting array 
    //       for (var room in data) {
    //           var roomEdges = this.getRoomEdges(this.state.rooms[room])
    //           allEdges = allEdges.concat(roomEdges)
    //       }
    //       return allEdges
    //   }

      getAllRooms = (rooms) => {
          let coords = []
            for (let i=0; i < rooms.length; i++) {
                coords.push(this.makeCoords(rooms[i].coordinates))
            }
          return coords
      }

      render(){
        return(
        <div className='map'>
          <XYPlot width={900} height={550}>
           <HorizontalGridLines />
           <VerticalGridLines />
           {/* {this.state.rooms.map(edge => (
                  <LineSeries 
                  data={this.getAllEdges(this.state.rooms)}
                  stroke="black"
                  />
              ))} */}
           <MarkSeries data={this.getAllRooms(this.props.rooms)} color="black" />
           </XYPlot>
           {/* <h1>Hi</h1> */}
        </div>
        )
      }

    }

export default Map;


