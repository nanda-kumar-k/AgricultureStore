import React, { Component } from 'react'
import firebaseConfig from './firebaseConfig'
export class Example extends Component {
  handleClick=()=>{
    var recaptcha = new firebaseConfig.auth.RecaptchaVerifier('recaptcha');
    var number = '+916302551161';
    firebaseConfig.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
      var code = prompt('Enter the otp', '');

        
        if(code === null) return;

        
        e.confirm(code).then(function (result) {
            console.log(result.user);

            document.querySelector('label').textContent +=   result.user.phoneNumber + "Number verified";
            
        }).catch(function (error) {
            console.error( error);
            
        });

    })
    .catch(function (error) {
        console.error( error);

    });
  }
  render() {
    return (
      <div>
           <label></label>
        
        <div id="recaptcha"></div>

        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default Example