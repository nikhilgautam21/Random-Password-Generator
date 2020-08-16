import React,{Component} from 'react';
import '../styles/header.css';

class Header extends Component {

    render(){
        return(
            <div className="title">
                <h1>Random Password Generator</h1>
            </div>
        )
    }
}

export default Header;