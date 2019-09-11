import React, {Component} from 'react';
import {HorizontalGridLines, VerticalGridLines,
    XYPlot, MarkSeries, LineSeries,
    LineSeriesCanvas} from 'react-vis'


  export class Map extends Component {
    constructor() {
        super();
        this.state = {
            
      }};

      allEdges = (rooms) => {
          var allEdges = []
          var newEdges = []
          for (var i=0; i < rooms.length; i++) {
              allEdges.push([rooms[i].coordinates, rooms[i].exits])
          }
          for (var i=0; i < allEdges.length; i++) {
              for (var item in allEdges[i][1]) {
                  if (item === 'n') {
                      let coords = this.makeCoords(allEdges[i][0])
                      let destCoords = coords
                      destCoords.y += 1
                      newEdges.push([coords, destCoords])
                  }
                   else if (item === 's') {
                    let coords = this.makeCoords(allEdges[i][0])
                    let destCoords = coords
                    destCoords.y -= 1
                    newEdges.push([coords, destCoords])
                }
                else if (item === 'e') {
                    let coords = this.makeCoords(allEdges[i][0])
                    let destCoords = coords
                    destCoords.x += 1
                    newEdges.push([coords, destCoords])
                }
                else if (item === 'w') {
                    let coords = this.makeCoords(allEdges[i][0])
                    let destCoords = coords
                    destCoords.x -= 1
                    newEdges.push([coords, destCoords])
                }
              }
          }
          return newEdges
      }
  
      makeCoords = (coords) => {
          let cords = coords.split('')
          let a = cords[1] + cords[2]
          let b = cords[4] + cords[5]
          return {x: parseInt(a), y: parseInt(b)}
      }

      getAllRooms = (rooms) => {
          let coords = []
            for (let i=0; i < rooms.length; i++) {
                coords.push(this.makeCoords(rooms[i].coordinates))
            }
          return coords
      }

      roomLines = (edges) => {
          for (var i=0; i < edges.length; i++){
              return (
                <LineSeries
                data={edges[i]}
                color='#96B146'
                key={Math.random()}
            />
              )
          }
      }

      render(){
          var edges = this.allEdges(this.props.rooms)
        return(
        <div className='map'>
          <XYPlot width={900} height={550}>
           <HorizontalGridLines />
           <VerticalGridLines />
           {this.roomLines(edges)}
           <MarkSeries data={this.getAllRooms(this.props.rooms)} color="black" />
           </XYPlot>
           {/* <h1>Hi</h1> */}
        </div>
        )
      }

    }

export default Map;




// 