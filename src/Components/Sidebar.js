import React, {Component} from 'react';


  export class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
      }};
      

      render(){
        let tem = this.props.room.items;
        console.log('ROOM', this.props.room.room_id, 'EXITS',this.props.room.exits, 'PLAYER',this.props.player)

        return(
        <div className='sidebar'>
            <div className='top'>
          
                <h2 className="room" >Room {this.props.room.room_id}: {this.props.room.title} </h2>
              
                <h2>Exits: </h2>
                <p className='exits'><span className='exit' >{this.props.room.exits.n ? <p>N: {this.props.room.exits.n}</p> : null}</span>
                <span className='exit'>{this.props.room.exits.s ? <p>S: {this.props.room.exits.s}</p> : null}</span>
                <span className='exit'>{this.props.room.exits.e ? <p>E: {this.props.room.exits.e}</p> : null}</span>
                <span className='exit'>{this.props.room.exits.w ? <p>W: {this.props.room.exits.w}</p> : null}</span></p>
                <h2>Items:</h2>
                {this.props.room.items.length < 1 ? (
              <div className="item">There are no items. here</div>
            ) : (
              <div className="item">{this.props.room.items.forEach(item => <li className="items">{item}</li>)}</div>
            )}
                
                <h2>Players:</h2>
                <div className="player">
                {this.props.room.players.map(player => <li className="players" >{player} </li>)}
                </div>
            </div>
            <div className='bottom'>
            <div className='bottom-header'>
                <h2 className='name'>{this.props.player.name}</h2> <h2 className='gold'>${this.props.player.gold}</h2>
                </div>
            </div>
        </div>
        )
      }

    }

export default Sidebar;