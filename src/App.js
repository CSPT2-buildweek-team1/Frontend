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

          rooms: {},
          room: {
            room_id: 0,
            description: '',
            messages: [],
            terrain: '',
            title: '',
            elevation: 0,
            coordinates: '',
            items: [],
            cooldown: 5,
            players: [],
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
          },
          buttonClass: "button"
      }
      
    }

    componentDidMount() {
      axios.get(`http://localhost:5000/`)
        .then(res => {
          this.setState({ rooms: res.data, buttonClass: 'buttonDisabled' });
          setTimeout(() => {
                       this.setState({showing: false});
                      }, 2000)
          this.disableButton(this.state.room.cooldown)
        })

        axios.get(`http://localhost:5000/init`)
        .then(res => {
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
          let players = res.data.data.players

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
              cooldown: cooldown,
              players: players
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

    disableButton = (cooldown) => {
      cooldown = cooldown * 1000 + 3000
      setTimeout(()=> {
        this.setState({buttonClass: "button"})
      }, cooldown)
    }

    move = (direction, prediction) => {
      axios
        .post("http://localhost:5000/move", 
          {"dir": direction, "predict": prediction})
        .then((res)=>{
          console.log('RES', res)
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
            buttonClass: "buttonDisabled",
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
        .catch(err => {
          console.log(err)
        })

        this.status()
        this.disableButton(this.state.room.cooldown)
    }

    

      render(){
        return(
    
       this.state.showing ? <Landing /> :
          <div>
          <Header />
            <div className='body'>
              <Map rooms={this.state.rooms.data} currentRoom={this.state.room}/>
              <Sidebar  player={this.state.player} room = {this.state.room} />
            </div>
            <Footer player={this.state.player} room={this.state.room} move={this.move} buttonClass={this.state.buttonClass}/>
          </div>
        )
      }

    }

export default App;

