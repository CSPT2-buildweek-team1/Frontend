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
        function sell(item){
          axios.post("http://localhost:5000/sell", {"item": item }).then((res)=>{console.log(res)},(error)=>{console.log(error)})}
    
        function take(item){
          axios.post("http://localhost:5000/take", {"item": item }).then((res)=>{console.log(res)},(error)=>{console.log(error)})}
      
          function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
          }
        
        return(
          <div className='footer'>
              <div className='explore'>
              <h1>EXPLORE</h1>
              </div>
              <div className='message'>
              <h2>Message</h2>
              </div>
              <div className='controls'>

              <div onClick={ ()=> move('n', this.state.north)} className="button" >N</div>
              <div onClick={ ()=> move('s', this.state.south)} className="button" >S</div>
              <div onClick={ ()=> move('e', this.state.east)} className="button" >E</div>
              <div onClick={ ()=> move('w', this.state.west)} className="button" >W</div>
              <i onClick={ ()=> sell('item', this.state.item)} className="button" class="fas fa-store"></i>
              <i onClick={ ()=> take('item', this.state.item)} className="button" class="fas fa-dollar-sign"></i>
            

              
              </div>
          </div>
          
        )
      }

    }

export default Footer;