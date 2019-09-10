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
              <h2>MAP</h2>
              <h2>ABOUT</h2>
          </div>
          
        )
      }

    }

export default Header;