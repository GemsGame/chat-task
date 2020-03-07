import React from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { connect } from "react-redux";
import {registr} from "../actions/athentication";

class Registr extends React.Component {
    state = {
        name:'',
        email:'',
        password:''
    }
    
    handleSubmit  = (event) => {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
      }
       
    render() {
    return (
        <div className="registr-window">
            <div className="registr-block">
                <div className="registr-block__column"><h1 className="registr-block__header">registration</h1></div>
                <div className="registr-block__column"><CustomInput className="main-input" name="name" placeholder="Your name" action={this.handleSubmit} /></div>
                <div className="registr-block__column"><CustomInput className="main-input" name="email" placeholder="E-mail address" action={this.handleSubmit}/></div>
                <div className="registr-block__column"><CustomInput className="main-input" name="password" placeholder="Password" action={this.handleSubmit}/></div>
                <div className="registr-block__column"><CustomButton className="main-button" action={() => this.props.registr(this.state)}>Register</CustomButton></div>
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
      registr: state => dispatch(registr(state))
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Registr);
  