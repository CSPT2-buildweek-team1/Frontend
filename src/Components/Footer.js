import React, {Component} from 'react';
import '../App.css';
import {Button} from 'primereact/button';
import axios from "axios";

  export class Footer extends Component {
    constructor() {
        super();
        this.state = {
      }
    
    };

      render(){
  
        function move(direction, prediction){
axios.post("http://localhost:5000/move", {"dir": direction, "predict": prediction}).then((res)=>{console.log(res)},(error)=>{console.log(error)})
        }
    
          function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
          }
        
        return(
          <div className='footer'>
              <div className='explore'>
              <h1>Explore</h1>
              </div>
              <div className='message'>
              <h2>Message</h2>
              </div>
              <div className='controls'>
              <div onClick={ ()=> move('n', this.state.north)} className="buttom" >N</div>
              <div onClick={handleClick} className="buttom" >S</div>
              <div onClick={handleClick} className="buttom" >E</div>
              <div onClick={handleClick} className="buttom" >W</div>
              <i onClick={handleClick} className="buttom" class="fas fa-store"></i>
              <i onClick={handleClick} className="buttom" class="fas fa-dollar-sign"></i>
            
              
              </div>
          </div>
          
        )
      }

    }

export default Footer;