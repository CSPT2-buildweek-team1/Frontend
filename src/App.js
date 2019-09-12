import React, {Component} from 'react';
import './App.css';
import "primereact/resources/themes/nova-dark/theme.css";
import "primereact/resources/primereact.min.css";
import Header from './Components/Header';
import Map from './Components/Map'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import Landing from './Components/Landing'
import axios from 'axios';


  export class App extends Component {
    constructor() {
        super();
        this.state = {
          showing: true,
          currentRoom: '',
          room: {
            room_id: 0,
            description: '',
            messages: [],
            terrain: '',
            title: '',
            elevation: 0,
            coordinates: '',
            items: [],
            cooldown: 0,
            exits: {
            },
          },
          player: {
            name: '',
            speed: 0,
            strength: 0,
            inventory: [],
            encumbrance: 0,
            messages: [],
            gold: 0
          }
      };
    }

    componentDidMount() {
      axios.get(`http://localhost:5000/`)
        .then(res => {
          this.setState({ rooms: res.data });
          setTimeout(100)
          this.setState({ showing: false });
        })

      axios.get('http://localhost:5000/init')
      .then(res => {
        this.setState({ currentRoom: res.data })
        console.log(res)
      })


        axios.get(`http://localhost:5000/init`)
        .then(res => {
          console.log('INIT', res)
          let room_id = res.data.data.room_id
          let exits = res.data.exits
          let description = res.data.data.description
          let items = res.data.data.items
          let messages = res.data.data.messages
          let terrain = res.data.data.terrain
          let title = res.data.data.title
          let elevation = res.data.data.elevation
          let coordinates = res.data.data.coordinates
          let cooldown = res.data.data.cooldown

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
              coordinates: coordinates,
              cooldown: cooldown
            }
          })
        }) 
        .catch(err => console.log(err)) 

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

    

      render(){
        console.log('APP', this.state)
        return(
    
       this.state.showing ? <Landing /> :
          <div>
          <Header />
            <div className='body'>
              <Map rooms={this.state.rooms.data}/>
              <Sidebar initialRoom = {this.state.currentRoom} />
            </div>
            <Footer player={this.state.player} room={this.state.room}/>
          </div>
        )
      }

    }

export default App;

