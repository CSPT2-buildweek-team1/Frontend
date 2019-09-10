import React, {Component} from 'react';
import '../App.css';
import {Button} from 'primereact/button';

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
      
              <Button label="Secondary" className="p-button-secondary" >N</Button>
              <Button label="Secondary" className="p-button-secondary">S</Button>
              <Button label="Secondary" className="p-button-secondary">E</Button>
              <Button label="Secondary" className="p-button-secondary">W</Button>
              <Button label="Secondary" className="p-button-secondary">icon</Button>
              <Button label="Secondary" className="p-button-secondary">icon</Button>
              <Button label="Secondary" className="p-button-secondary">icon</Button>
              
              </div>
          </div>
          
        )
      }

    }

export default Footer;