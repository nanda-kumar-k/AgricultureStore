import styled from "styled-components"
import { useState } from "react"
import Loginpic from '../Images/Login.png'
const SignUpContainer1 = styled.div`
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 100px 27%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.09);
    display: ${(props)=>props.value2};
    position: fixed;

`

const SignUpContainer2 = styled.div`
    background-color: lightblue;
    height: 68%;
    width: 45%;
    display: flex;
`

const SignUpInfo1 = styled.div`
    flex: 1.7;
    //background: linear-gradient(rgb(168, 247, 247),white);
    //background-color: rgb(168, 247, 247);
    background: linear-gradient(rgb(6, 241, 210),white);
    height: 90%;
    width: 100%;
    padding: 50px 20px 0px 50px; 
  
`


const SignUpImage = styled.img`
    height: 140px;
    width: 250px;
    margin-top: 140px;
`

const SignUpInfo2 = styled.div`
    flex: 2;
    background-color: white;
    height: 80%;
    width: 50%;
    padding: 50px 40px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    position: relative;
`

const SignUpCrossdisplay = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:hover{
        color: red;
    }
`

const SignUpInput = styled.input`
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 20px;
    width: 100%;
    font-size: 18px; 
`

const SignUpText = styled.p`
    font-size: 12px;
    margin-top: 30px;
`

const SignUpInputSubmit = styled.input`
    background-color: lightcoral;
    width: 100%;
    height: 40px;
    font-size: large;
    outline: none;
    border: none;
    margin-top: 10px;
`

const SignUpOr = styled.div`
    display: flex;
    align-items: center;
`

const SignUpButton = styled.button`
    height: 40px;
    margin-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    border: none;
    font-size: medium;
    width: 100%;
`
const DisplayRow = styled.div`
    display: flex;
`
const Singnupexam = () => 
{
    var model2 = document.getElementById('id02')
    var model1 = document.getElementById('id02')
    window.onclick=(event)=>{
        if(event.target == model1 || event.target == model2)
        {
            setvalue1('none')
            setvalue2('none')
        }
    }

    const [value2, setvalue2] = useState('none');

    const SignUpVisable = (val) =>{
        if(val == 'open'){
            setvalue2('block')
        }
        else{
            setvalue2('none')
            
        }
    }


  

    return (
        <div>
            <button onClick={() => SignUpVisable("open")}>Login</button>
            <SignUpContainer1 value2={value2} id="id02">
                <SignUpContainer2>
                    <SignUpInfo1>
                        <h2>Looks Like you're new to Agri Store </h2>
                        <p style={{fontSize:"20px" , marginTop:"10px"}}>Sign up with your mobile number to get started</p>
                        <SignUpImage src={Loginpic}/>
                    </SignUpInfo1>

                    <SignUpInfo2>
                    <Crossdisplay>
                    <Close style={{height:"40px",width:"40px"}} onClick={() => SignUpVisable("close")}/>
                    </Crossdisplay>
                        <form>
                        <SignUpInput type="text" placeholder="+91 Enter Moblie Number" name="Moblie"/>
                        <p style={{fontSize:"12px", color:"red"}}>Please enter a valid Mobile number </p>
                        <SignUpText>By continuing, you agree to AgriStore Terms of Use and Privacy Policy.</SignUpText>
                        <SignUpInputSubmit type="submit" name="sub" value="CONTINUE" sname="submit"/>
                        </form>
                        <br/>
                        <SignUpOr>
                            <hr style={{width:"150px", height:"1px"}}/>
                            <p>OR</p>
                            <hr style={{width:"150px", height:"1px"}}/>
                        </SignUpOr>
                        <SignUpButton>Existing User? Log In </SignUpButton>
                    </SignUpInfo2>
                </SignUpContainer2>
            </SignUpContainer1>
        </div>
    )
}

export default Singnupexam

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