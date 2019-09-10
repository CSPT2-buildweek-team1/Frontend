import React, {Component} from 'react';
import {HorizontalGridLines, VerticalGridLines, XAxis,
    XYPlot, YAxis, MarkSeries} from 'react-vis'

import data from './dummydata'
    

let data1 = data
let coords = []
for (let i = 0; i < data1.length; i++) {
    let cords = data[i].coordinates.split('')
    let a = cords[1] + cords[2]
    let b = cords[4] + cords[5]
    coords.push({x: a, y: b})
}

console.log(coords)

    function Chart({data}) {
       return <XYPlot width={1100} height={750}>
         <HorizontalGridLines />
         <VerticalGridLines />
         <MarkSeries data={data} />
         </XYPlot>;
     }

  export class Map extends Component {
    constructor() {
        super();
        this.state = {
      }};

      render(){
        return(
        <div className='map'>
          <Chart data={coords} />
        </div>
        )
      }

    }

export default Map;