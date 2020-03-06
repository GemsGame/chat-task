import React from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { connect } from "react-redux";
import {registr} from "../actions/athentication";

const Registr = ({registr}) => {

    return (
        <div className="registr-window">
            <div className="registr-block">
                <div className="registr-block__column"><h1 className="registr-block__header">registration</h1></div>
                <div className="registr-block__column"><CustomInput className="main-input" name="name" placeholder="Your name" /></div>
                <div className="registr-block__column"><CustomInput className="main-input" name="email" placeholder="E-mail address" /></div>
                <div className="registr-block__column"><CustomInput className="main-input" name="password" placeholder="Password" /></div>
                <div className="registr-block__column"><CustomButton className="main-button" action={() => registr () }>Register</CustomButton></div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      authentication: state.authentication
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      registr: () => dispatch(registr())
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Registr);
  