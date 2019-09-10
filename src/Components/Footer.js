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
      
              <div className="buttom" >N</div>
              <div className="buttom" >S</div>
              <div className="buttom" >E</div>
              <div className="buttom" >W</div>
              <i className="buttom" class="fas fa-store"></i>
              <i className="buttom" class="fas fa-dollar-sign"></i>
              <i className="buttom" class="fas fa-hand-holding"></i>
              
              </div>
          </div>
          
        )
      }

    }

export default Footer;