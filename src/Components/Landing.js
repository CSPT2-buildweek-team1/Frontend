import React, {Component} from 'react';
import '../App.css';
import logo from '../img/skull.svg'


  export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        
      };
    }
      render(){
        return(
    <div className="background">
<div className="hero">
<div className="title">
<span className="caption">Lambda</span>
<span className="caption">Treasure Hunt</span>
<div className="logo">
    <img src={logo} />
</div>
</div>
</div>
</div>
          
        )
      }

    }

export default Header;