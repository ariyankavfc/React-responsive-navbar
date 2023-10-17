import React from "react";
import '../Styles/Login.css'
export const Login = () => {
  return (
  <div className="divide">
    <div className="dd">
        <h4>facebook</h4>
        <h6>Facebook helps you connect and share</h6>
        <h6>with the people in your life.</h6>
    </div>
    <div>
      <form className="dive">
      <label className="user">
        <input className="ip" type="text" placeholder="Email address or phone number" />
      </label><br></br>
      <label className="user">
        <input className="ip" type="text" placeholder="Password" />
      </label><br></br>
      <button class="butt" type="button"><a href="#" className="pas">Log in</a></button>
      <p className="para"><a href="#" className="passw">Forgotten Password?</a></p>
      <hr className="hori"></hr>
      <button class="newacc" type="button"><a href="#" className="cna">Create new account</a></button>
      </form>
      <p className="cpc"><a href="#" className="anc">Create a Page</a> for a celebrity, brand or business.</p>
    </div>
    
    </div>
  );
};
