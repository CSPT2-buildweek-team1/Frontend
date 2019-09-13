import React, {Component} from 'react';
import '../App.css';
import {Button} from 'primereact/button';
import axios from "axios";

  export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    sell = (item) => {
      axios.post("http://localhost:5000/sell", {"item": item }).then((res)=>{console.log(res)},(error)=>{console.log(error)})}

    take = (item) => {
      axios.post("http://localhost:5000/take", {"item": item }).then((res)=>{console.log(res)},(error)=>{console.log(error)})}
  
    handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
      }


      render(){
        return(
          <div className='footer'>
              <div className='explore'>
              <h1>EXPLORE</h1>
              </div>
              <div className='message'>
              <h2>Message</h2>
              </div>
              <div className='controls'>

              <div onClick={ ()=> this.props.move('n', this.props.room.exits.n)} className={this.props.buttonClass} >N</div>
              <div onClick={ ()=> this.props.move('s', this.props.room.exits.s)} className={this.props.buttonClass}  >S</div>
              <div onClick={ ()=> this.props.move('e', this.props.room.exits.e)} className={this.props.buttonClass}  >E</div>
              <div onClick={ ()=> this.props.move('w', this.props.room.exits.w)} className={this.props.buttonClass}  >W</div>
              <i onClick={ ()=> this.sell('item', this.state.item)} className="button" class="fas fa-store"></i>
              <i onClick={ ()=> this.take('item', this.state.item)} className="button" class="fas fa-dollar-sign"></i>
            

              
              </div>
          </div>
          
        )
      }

    }

export default Footer;