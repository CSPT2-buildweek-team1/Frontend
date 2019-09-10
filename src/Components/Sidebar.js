import React, {Component} from 'react';


  export class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
      }};

      render(){
        return(
        <div className='sidebar'>
            <div className='top'>
                <h2>TOP</h2>
            </div>
            <div className='bottom'>
                <h2>BOTTOM</h2>
            </div>
        </div>
        )
      }

    }

export default Sidebar;