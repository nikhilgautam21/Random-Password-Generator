import React,{Component} from 'react';
import * as PASSCONSTANTS from '../constants/password.constants';
import '../styles/password-generator.css';
import copy from '../assets/icons/paper.svg';

class PasswordGenerator extends Component {
    constructor(props){
        super(props);
        this.state = {
            minLength:8,
            passLength: [8,10,12,16,18,20,32],
            selectedLength: 8,
            password: "",
            isSymbolChecked: false,
            isNumberChecked: false,
            islowercaseChecked: false,
            isUppercaseChecke: false
        }
    }

    handleLengthChange(e){
        this.setState({selectedLength:e.target.value})
    }

    handleOptionChange(e){
        switch(e.target.name){
            case "symbols":
                this.setState({isSymbolChecked: e.target.checked})
            break;
            case "numbers":
                this.setState({isNumberChecked: e.target.checked})
            break;
            case "uppercase":
                this.setState({isUppercaseChecke: e.target.checked})
            break;
            case "lowercase":
                this.setState({islowercaseChecked: e.target.checked})
            break;
            default:
        }
    }

    handleGeneratePass(){
        let passArr = []
        passArr =  PASSCONSTANTS.OPTIONS.LOWERCASE.split("")
        let password =""
        if(this.state.isSymbolChecked){
            passArr = passArr.concat( PASSCONSTANTS.OPTIONS.SYMBOLS.split(""))
        }
        if(this.state.isUppercaseChecke){
            passArr = passArr.concat(PASSCONSTANTS.OPTIONS.UPPERCASE.split(""))
        }
        if(this.state.islowercaseChecked){
          //  passArr =passArr.join().toLowerCase().split("");
        }
        if(this.state.isNumberChecked){
            passArr = passArr.concat( PASSCONSTANTS.OPTIONS.NUMBERS.split(""))
        }
        for(let i=this.state.selectedLength;i>0;i--){
            password+= passArr[Math.floor(Math.random()*passArr.length)]
        }
        this.setState({password: password})
    }

    render(){
        return(
            <div className="wrapper">
                <div className="wrapbox">
                    <div className="pass-out-wrapper">
                    <span  className="password-output" name="output">{this.state.password}
                    </span>
                    <img className="img-copy" src={copy}  alt="copy"/>
                    </div>
                    <br/>
                    <div className="options">
                        <div className="row">
                            <label>Password length</label>
                            <select className="select-length" onChange={(e)=>{this.handleLengthChange(e)}} selected={this.state.selectedLength}>
                                    {this.state.passLength.map((e, key) => {
                                        return <option key={key} value={e}>{e}</option>;
                                    })}
                            </select>
                        </div>
                    </div>
                    <div className="options">
                        <div className="row">
                            <label>Include Symbols ( e.g. @#$% )</label>
                            <input onChange={(e)=>this.handleOptionChange(e)} type="checkbox" name="symbols"/>
                        </div>     
                    </div>
                    <div className="options">
                        <div className="row">
                            <label>Include Lowercase Letters ( e.g. abcdefgh )</label>
                            <input onChange={(e)=>this.handleOptionChange(e)} type="checkbox" name="lowercase"/>
                        </div>
                    </div>
                    <div className="options">
                        <div className="row">
                            <label>Include Uppercase Letters ( e.g. ABCDEFGH )</label>
                            <input onChange={(e)=>this.handleOptionChange(e)} type="checkbox" name="uppercase"/>
                        </div> 
                    </div>
                    <div className="options">
                    <div className="row">
                        <label>Include Number ( e.g. 123456 )</label>
                        <input onChange={(e)=>this.handleOptionChange(e)} type="checkbox" name="numbers"/>
                    </div>               
                </div>
                </div>
                <div className="wrap-submit">
                    <button className="btn-submit" onClick={()=>this.handleGeneratePass()}>Generate Password</button>
                </div>
                {/* <div className="copied">
                    <span> Copied to clipboard    
                </div> */}
            </div>
        )
    }
}

export default PasswordGenerator;