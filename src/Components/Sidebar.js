import React, {Component} from 'react';


  export class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
      }};

      render(){
        console.log('ROOM', this.props.room.room_id, 'EXITS',this.props.room.exits)
        return(
        <div className='sidebar'>
            <div className='top'>
                <div className='top-header'>
                <h2>Room: {this.props.room.room_id} </h2>
                <h2>{this.props.room.coordinates}</h2>
                </div>
                <h2>{this.props.room.title}</h2>
                <h2>Exits: </h2>
                <p><span>{this.props.room.exits.n ? <p>N: {this.props.room.exits.n}</p> : null}</span>
                <span>{this.props.room.exits.s ? <p>S: {this.props.room.exits.s}</p> : null}</span>
                <span>{this.props.room.exits.e ? <p>E: {this.props.room.exits.e}</p> : null}</span>
                <span>{this.props.room.exits.w ? <p>W: {this.props.room.exits.w}</p> : null}</span></p>
                <h2>Items:</h2>
                {this.props.room.items.forEach(item => <p>{item}</p>)}
            </div>
            <div className='bottom'>
                <h2>BOTTOM</h2>
            </div>
        </div>
        )
      }

    }

export default Sidebar;