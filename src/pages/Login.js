import React from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { connect } from "react-redux";
import {login} from "../actions/athentication";
import Pusher from "pusher-js";

class Login extends React.Component {
    state = {
        email:'',
        password:''
    }
     
    
  handleSubmit  = (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state);
  }
   
  login = () => {
  }
    render () {
      return (
        <div className="registr-window">
            <div className="registr-block">
                <div className="registr-block__column"><h1 className="registr-block__header">sign in</h1></div>
                <div className="registr-block__column"><CustomInput className="main-input" name="email" placeholder="E-mail address" action={this.handleSubmit} /></div>
                <div className="registr-block__column"><CustomInput className="main-input" name="password" placeholder="Password" action={this.handleSubmit}/></div>
                <div className="registr-block__column"><CustomButton className="main-button" action={() => this.props.login(this.state)}>Login</CustomButton></div>
            </div>
        </div>

    )

    }
}

const mapStateToProps = state => {
    return {
      authentication: state.authentication
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      login: (state) => dispatch(login(state))
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);
  