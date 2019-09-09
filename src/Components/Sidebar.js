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
                <h1>Top</h1>
            </div>
            <div className='bottom'>
                <h1>Bottom</h1>
            </div>
        </div>
        )
      }

    }

export default Sidebar;