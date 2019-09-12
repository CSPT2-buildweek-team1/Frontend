import React, {Component} from 'react';
import '../App.css';
import {Button} from 'primereact/button';
import axios from "axios";

  export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          room: this.props.room,
          player: this.props.player
        }
    }

    status = () => {
      axios.post(`http://localhost:5000/status`)
      .then(res => {
        let playerName = res.data.data.name
        let speed = res.data.data.speed
        let strength = res.data.data.strength
        let inventory = res.data.data.inventory
        let encumbrance = res.data.data.encumbrance
        let messages = res.data.data.messages
        let gold = res.data.data.gold
        this.setState({
          player: {
            name: playerName,
            speed: speed,
            strength: strength,
            inventory: inventory,
            encumbrance: encumbrance,
            messages: messages,
            gold: gold
          }
        })
      })
      .catch(err => console.log(err))
    }

    move = (direction, prediction) => {
      axios
        .post("http://localhost:5000/move", 
          {"dir": direction, "predict": prediction})
        .then((res)=>{
          let room_id = res.data.data.room_id
          let exits = res.data.exits
          let description = res.data.data.description
          let items = res.data.data.items
          let messages = res.data.data.messages
          let terrain = res.data.data.terrain
          let title = res.data.data.title
          let elevation = res.data.data.elevation
          let coordinates = res.data.data.coordinates

          this.setState({
            room:{
              room_id: room_id,
              exits: exits,
              description: description,
              items: items,
              messages: messages,
              terrain: terrain,
              title: title,
              elevation: elevation,
              coordinates: coordinates
              }
            })
          })
        .catch(err => {
          console.log(err)
        })

        this.status()
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