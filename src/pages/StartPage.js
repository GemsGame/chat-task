import React from "react";
import CustomButton from "../components/CustomButton";
import { Link} from "react-router-dom";

const StartPage = () => {

    return (
        <div className="registr-window">
        <div className="registr-block">
          <div className="registr-block__column"><h1 className="registr-block__header">Your choice</h1></div>
          <div className="registr-block__column"><Link to="/login"><CustomButton className="main-button">Sign in</CustomButton></Link></div>
          <div className="registr-block__column"><Link to="/registration"><CustomButton className="main-button">registration</CustomButton></Link></div>
        </div>
      </div>
    )
}

export default StartPage;
