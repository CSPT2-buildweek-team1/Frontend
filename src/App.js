import React, {Component} from 'react';
import './App.css';
import "primereact/resources/themes/nova-dark/theme.css";
import "primereact/resources/primereact.min.css";
import Header from './Components/Header';
import Map from './Components/Map'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'


  export class App extends Component {
    constructor() {
        super();
        this.state = {
      }};

      render(){
        return(
          <div>
            <Header />
            <div className='body'>
              <Map />
              <Sidebar />
            </div>
            <Footer />
          </div>
        )
      }

    }

export default App;

