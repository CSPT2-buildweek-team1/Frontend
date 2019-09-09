import React, {Component} from 'react';


  export class Footer extends Component {
    constructor() {
        super();
        this.state = {
      }};

      render(){
        return(
          <div className='footer'>
              <div className='explore'>
              <h1>Explore</h1>
              </div>
              <div className='message'>
              <h2>Message</h2>
              </div>
              <div className='controls'>
              <h2>Controls</h2>
              </div>
          </div>
          
        )
      }

    }

export default Footer;