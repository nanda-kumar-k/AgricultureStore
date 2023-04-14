import styled from "styled-components"
import { useState } from "react"
import Loginpic from '../Images/Login.png'
const OtpContainer1 = styled.div`
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 100px 27%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.09);
    display: ${(props)=>props.value3};
    position: fixed;

`

const OtpContainer2 = styled.div`
    height: 68%;
    width: 45%;
    display: flex;
`

const OtpInfo1 = styled.div`
    flex: 1.7;
    //background: linear-gradient(rgb(168, 247, 247),white);
    //background-color: rgb(168, 247, 247);
    background: linear-gradient(rgb(6, 241, 210),white);
    height: 90%;
    width: 100%;
    padding: 50px 20px 0px 50px; 
  
`


const OtpImage = styled.img`
    height: 140px;
    width: 250px;
    margin-top: 140px;
`

const OtpInfo2 = styled.div`
    flex: 2;
    background-color: white;
    height: 80%;
    width: 50%;
    padding: 50px 40px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
`

const OtpInput = styled.input`
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: oldlace;
    height: 20px;
    width: 100%;
    font-size: 18px; 

    &:hover{
        border-color: green;
    }
`
const OtpInputSubmit = styled.input`
    background-color: lightcoral;
    width: 320px;
    height: 40px;
    font-size: large;
    outline: none;
    border: none;
    margin-top: 10px;
`

const OtpOr = styled.div`
    display: flex;
    align-items: center;
`

const OtpButton = styled.button`
    height: 40px;
    margin-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    border: none;
    font-size: medium;
    width: 100%;
`
const Otp = () => 
{
    var model3 = document.getElementById('id03')
    window.onclick=(event)=>{
        if(event.target == model3)
        {
            setvalue3('none')
        }
    }

    const [value3, setvalue3] = useState('none');

    const OtpVisable = (val) =>{
        if(val == 'open'){
            setvalue1('none')
            setvalue2('none')
            setvalue3('block')
        }
        else{
            setvalue1('none')
            setvalue2('none')
            setvalue3('none')
            
        }
    }


  

    return (
        <div>
            <button onClick={() => OtpVisable("open")}>Login</button>
            <OtpContainer1 value3={value3} id="id03">
                <OtpContainer2>
                    <OtpInfo1>
                        <h2>Looks Like you're new to Agri Store </h2>
                        <p style={{fontSize:"20px" , marginTop:"10px"}}>Sign up with your mobile number to get started</p>
                        <Image src={Loginpic}/>
                    </OtpInfo1>

                    <OtpInfo2>
                    <Crossdisplay>
                    <Close style={{height:"40px",width:"40px"}} onClick={() => OtpVisable("close")}/>
                    </Crossdisplay>
                        <form>
                        <OtpInput type="text" value="6302551161" name="Moblie" disabled="true"/><br/><br/>
                        <OtpInput type="text"  name="Moblie" placeholder="Enter OTP  (OTP send to moblie )"/>
                        <p style={{fontSize:"12px", color:"red"}}>Please enter valid OTP</p><br/>
                        <OtpInput type="text"  name="Moblie" placeholder ="Enter Full Name"/><br/><br/>
                        <OtpInput type="password"  name="Moblie" placeholder="Set Password"/>
                        <p style={{fontSize:"12px"}}>* Password must be more than 8 charcters </p>
                        <OtpInputSubmit type="submit" name="sub" value="Sign Up" sname="submit"/>
                        </form>
                        <br/>
                        <OtpOr>
                            <hr style={{width:"150px", height:"1px"}}/>
                            <p>OR</p>
                            <hr style={{width:"150px", height:"1px"}}/>
                        </OtpOr>
                        <OtpButton>Existing User? Log In </OtpButton>
                    </OtpInfo2>
                </OtpContainer2>
            </OtpContainer1>
        </div>
    )
}

export default Otp

/*

const Use = makeStyles(
    {
        TextField:{
            backgroundColor:'yellow'
        }
    }
)

  const classes = Use();

*/