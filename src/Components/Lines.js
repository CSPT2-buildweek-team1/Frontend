import {LineSeries, XYPlot} from 'react-vis'
import React, {Component} from 'react';
import lineSeries from '../../node_modules/react-vis/dist/plot/series/line-series';



export class Lines extends Component {
    makeCoords (coords) {
        let cords = coords.split('')
        let a = cords[1] + cords[2]
        let b = cords[4] + cords[5]
        return {x: parseInt(a), y: parseInt(b)}
    }

    Connections (rooms) {
        let lines = []
        
        for (let i=0; i<rooms.length; i++) {
            const values = Object.values(rooms[i].exits)
            for(var exit of values){
                if (isNaN(exit) == false) {
                    if (exit != rooms[i].room_id){
                        lines.push([this.makeCoords(rooms[i].coordinates), this.makeCoords(rooms[parseInt(exit)].coordinates)])
                    }
                }
            }
        }
        console.log(lines)
        return lines
    }

    render() {
        return(

                hi

        )
    }
}

export default Lines


