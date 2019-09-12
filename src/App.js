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
          currentRoom: ''
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
    }

    

      render(){
        return(
    
       this.state.showing ? <Landing /> :
          <div>
          <Header />
            <div className='body'>
              <Map rooms={this.state.rooms.data}/>
              <Sidebar initialRoom = {this.state.currentRoom} />
            </div>
            <Footer />
          </div>
        )
      }

    }

export default App;

