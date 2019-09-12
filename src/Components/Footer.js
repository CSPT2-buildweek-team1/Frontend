import React, {Component} from 'react';
import '../App.css';
import {Button} from 'primereact/button';
import axios from "axios";

  export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          room_id: 0,
          dir: {
            n: 0,
            e: 0,
            w: 0,
            s: 0
          }
        }
      }

    move = (direction, prediction) => {
      axios
        .post("http://localhost:5000/move", 
          {"dir": direction, "predict": prediction})
        .then((res)=>{
            console.log(res)
            let room_id = res.data.data.room_id;
            let exits = res.data.exits
            this.setState({...this.state, room_id: room_id, dir: exits});
            })
        .catch(err => {
          console.log(err)
        })
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
        console.log('STATE', this.state)
        
        return(
          <div className='footer'>
              <div className='explore'>
              <h1>EXPLORE</h1>
              </div>
              <div className='message'>
              <h2>Message</h2>
              </div>
              <div className='controls'>

              <div onClick={ ()=> this.move('n', this.state.north)} className="button" >N</div>
              <div onClick={ ()=> this.move('s', this.state.south)} className="button" >S</div>
              <div onClick={ ()=> this.move('e', this.state.east)} className="button" >E</div>
              <div onClick={ ()=> this.move('w', this.state.west)} className="button" >W</div>
              <i onClick={ ()=> this.sell('item', this.state.item)} className="button" class="fas fa-store"></i>
              <i onClick={ ()=> this.take('item', this.state.item)} className="button" class="fas fa-dollar-sign"></i>
            

              
              </div>
          </div>
          
        )
      }

    }

export default Footer;