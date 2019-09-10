import React, {Component} from 'react';
import '../App.css';
import logo from '../img/skull.svg'


  export class Header extends Component {
    constructor() {
        super();
        this.state = {
      }};

      render(){
        return(
          <div className="background">
<div className="hero">
<div class="logo">
    <img src={logo} width="600px"/>
</div>
<span class="caption">Lambda Treasure Hunt</span>
</div>
</div>
          
        )
      }

    }

export default Header;