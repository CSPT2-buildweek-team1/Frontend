import React, {Component} from 'react';


  export class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
      }};

      render(){
          // var room = this.props.initialRoom.data
        return(
        <div className='sidebar'>
            <div className='top'>
                <div className='top-header'>
                <h2>Room: {this.props.room.room_id} </h2>
                <h2>{this.props.room.coordinates}</h2>
                </div>
                <h2>{this.props.room.title}</h2>
                <p className="roomdesc">{this.props.room.description}</p>
                <h2>Items:</h2>
                {this.props.room.items.forEach(item => <p>{item}</p>)}
                <h2>Players:</h2>
                {this.props.room.players.forEach(player => <p>{player}</p>)}
            </div>
            <div className='bottom'>
                <h2>BOTTOM</h2>
            </div>
        </div>
        )
      }

    }

export default Sidebar;