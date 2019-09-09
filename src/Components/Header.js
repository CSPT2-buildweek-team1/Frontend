import React, {Component} from 'react';


  export class Header extends Component {
    constructor() {
        super();
        this.state = {
      }};

      render(){
        return(
          <div className='header'>
              <h1>Lambda Treasure Hunt</h1>
              <h2>Map</h2>
              <h2>About</h2>
          </div>
          
        )
      }

    }

export default Header;