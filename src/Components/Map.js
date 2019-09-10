import React, {Component} from 'react';
import {HorizontalGridLines, VerticalGridLines,
    XYPlot, MarkSeries, LineSeries,
    LineSeriesCanvas} from 'react-vis'

import data from './dummydata'

    

    let data1 = data
    let coords = []
    for (let i = 0; i < data1.length; i++) {
        let cords = data[i].coordinates.split('')
        let a = cords[1] + cords[2]
        let b = cords[4] + cords[5]
        coords.push({x: a, y: b})
    }

    function makeCoords(coords) {
        let cords = coords.split('')
        let a = cords[1] + cords[2]
        let b = cords[4] + cords[5]
        return {x: a, y: b}
    }

    function getRoomEdges(rooms) {
        var edges = []
        Object.keys(rooms.exits).forEach(function(key) {
            if (rooms.exits[key] !== "?"){
            edges.push([makeCoords(rooms.coordinates), makeCoords(data[rooms.exits[key]].coordinates)])
            }
          });
          return edges
    }

     function getAllEdges(data) {
        var allEdges = []
        // merge all of the edges for each room into the resulting array 
        for (var room in data) {
            var roomEdges = getRoomEdges(data[room])
            allEdges = allEdges.concat(roomEdges)
        }
        return allEdges
    }

    var edges = getAllEdges(data)

    function Chart({data, edges}) {
       return (<XYPlot width={900} height={550}>
         <HorizontalGridLines />
         <VerticalGridLines />
         {edges.map(edge => (
                <LineSeries 
                data={edge}
                stroke="black"
                />
            ))}
         <MarkSeries data={data} />
         </XYPlot>)
    }




  export class Map extends Component {
    constructor() {
        super();
        this.state = {
        
      }};

      render(){
        return(
        <div className='map'>
          <Chart data={coords} edges={edges} />
        </div>
        )
      }

    }

export default Map;


