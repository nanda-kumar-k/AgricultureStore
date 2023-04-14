import styled from "styled-components"
import { useState } from "react"
import Loginpic from '../Images/Login.png'
const LoginContainer1 = styled.div`
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 100px 27%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.09);
    display: ${(props)=>props.value};
    position: fixed;

`

const LoginContainer2 = styled.div`
    background-color: lightblue;
    height: 68%;
    width: 45%;
    display: flex;
`

const LoginInfo1 = styled.div`
    flex: 1.7;
    //background: linear-gradient(rgb(168, 247, 247),white);
    //background-color: rgb(168, 247, 247);
    background: linear-gradient(rgb(6, 241, 210),white);
    height: 90%;
    width: 100%;
    padding: 50px 20px 0px 50px; 
  
`


const LoginImage = styled.img`
    height: 140px;
    width: 250px;
    margin-top: 140px;
`

const LoginInfo2 = styled.div`
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

const LoginInput = styled.input`
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 20px;
    width: 100%;
    font-size: 18px; 
`

const LoginText = styled.p`
    font-size: 12px;
    margin-top: 30px;
`

const LoginInputSubmit = styled.input`
    background-color: lightcoral;
    width: 100%;
    height: 40px;
    font-size: large;
    outline: none;
    border: none;
    margin-top: 10px;
`

const LoginOr = styled.div`
    display: flex;
    align-items: center;
`

const LoginButton = styled.button`
    height: 40px;
    margin-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    border: none;
    font-size: medium;
    width: 100%;
`
const Login = () => 
{
    var model = document.getElementById('id01')
    window.onclick=(event)=>{
        if(event.target == model)
        {
            setvalue('none')
        }
    }

    const [value, setvalue] = useState('none');

    const LoginVisable = () =>{
        setvalue('block')
    }


  

    return (
        <div>
            <button onClick={LoginVisable}>Login</button>
            <LoginContainer1 value={value} id="id01">
                <LoginContainer2>
                    <LoginInfo1>
                        <h1>Login</h1>
                        <p style={{fontSize:"20px" , marginTop:"10px"}}>Get access to your Orders,<br/>Book your agri employee and order products</p>
                        <LoginImage src={Loginpic}/>
                    </LoginInfo1>

                    <LoginInfo2>
                        <form>
                        <LoginInput type="text" placeholder="+91 Enter Moblie Number" name="Moblie"/><br/><br/>
                        <LoginInput type="password" placeholder="Enter Paasword" fontsize="pass" />
                        <p style={{fontSize:"12px", color:"red"}}>Your username or password is incorrect </p>
                        <LoginText>By continuing, you agree to AgriStore Terms of Use and Privacy Policy.</LoginText>
                        <LoginInputSubmit type="submit" name="sub" value="Login" sname="submit"/>
                        </form>
                        <br/>
                        <LoginOr>
                            <hr style={{width:"150px", height:"1px"}}/>
                            <p>OR</p>
                            <hr style={{width:"150px", height:"1px"}}/>
                        </LoginOr>
                        <LoginButton>Request OTP</LoginButton>
                        <p style={{marginTop:"30px"}}>New to AgriStore? Create an account</p>
                    </LoginInfo2>
                </LoginContainer2>
            </LoginContainer1>
        </div>
    )
}

export default Login

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