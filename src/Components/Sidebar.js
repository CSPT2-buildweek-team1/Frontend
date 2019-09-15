import React, {Component} from 'react';
import axios from "axios";


  export class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
      }
    
    };

    
      drop = (item) => {
        axios.post("http://localhost:5000/drop", {"item": item }).then((res)=>{console.log(res)},(error)=>{console.log(error)})}
  
     
      render(){
        let tem = this.props.room.items;

      let sampleData = ["stuff"]
        console.log('ROOM', this.props.room.room_id, 'EXITS',this.props.room.exits, 'PLAYER',this.props.player)

        return(
        <div className='sidebar'>
            <div className='top'>
          
                <h2 ><h2 className="room" className= "header-text">Room {this.props.room.room_id}:</h2> <h4 className="roominfo" >{this.props.room.title} </h4></h2>
              
                <h2  >Exits: </h2>
                <p className='exits'><span className='exit' >{this.props.room.exits.n ? <p>N: {this.props.room.exits.n}</p> : null}</span>
                <span className='exit'>{this.props.room.exits.s ? <p>S: {this.props.room.exits.s}</p> : null}</span>
                <span className='exit'>{this.props.room.exits.e ? <p>E: {this.props.room.exits.e}</p> : null}</span>
                <span className='exit'>{this.props.room.exits.w ? <p>W: {this.props.room.exits.w}</p> : null}</span></p>
                <h2 >Items:</h2>
                {this.props.room.items.length < 1 ? (
              <div className="item">There are no items here.</div>
            ) : (
              <div className="item">{this.props.room.items.forEach(item => <li className="items">{item}</li>)}</div>
            )}
                
                <h2 >Players:</h2>
                <div className="player">
                {this.props.room.players.length < 1 ? (
              <div className="players">There are no players here.</div>
            ) : (
              <div className="players">{this.props.room.players.map(player=> <li className="players" >{player} </li>)}</div>
            )}
                </div>
            </div>
            <div className='bottom'>
            <div className='bottom-header'>
                <p><h2 className='name'>{this.props.player.name}</h2> <h2 className='gold'>${this.props.player.gold}</h2></p></div>
                <div className="stat"><p><p className='stats'><h2> Encumbrance:</h2> {this.props.player.encumbrance}</p>
                <p className='stats'><h2> Strength:</h2> {this.props.player.strength} </p>
                <p className='stats'><h2> Speed:</h2> {this.props.player.speed} </p></p></div>
                <div className="inventory-section">
                <div>INVENTORY:</div>
                <div>  {this.props.player.inventory.length < 1 ? (
              <div className="inventory">You have nothing in your inventory.</div>
            ) : (
              <div className="inventory">{this.props.room.inventory.map(player=> <li className="players" >{player} </li>)}</div>
            )}
            </div>

      
            </div>  </div> 
        </div>
        )
      }

    }

export default Sidebar;