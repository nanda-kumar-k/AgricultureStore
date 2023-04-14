import styled from "styled-components"
import { useState } from "react"
import Loginpic from '../Images/Login.png'
const Container1 = styled.div`
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

const Container2 = styled.div`
    background-color: lightblue;
    height: 68%;
    width: 45%;
    display: flex;
`

const Info1 = styled.div`
    flex: 1.7;
    //background: linear-gradient(rgb(168, 247, 247),white);
    //background-color: rgb(168, 247, 247);
    background: linear-gradient(rgb(6, 241, 210),white);
    height: 90%;
    width: 100%;
    padding: 50px 20px 0px 50px; 
  
`


const Image = styled.img`
    height: 140px;
    width: 250px;
    margin-top: 140px;
`

const Info2 = styled.div`
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

const Input = styled.input`
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 20px;
    width: 100%;
    font-size: 18px; 
`

const Text = styled.p`
    font-size: 12px;
    margin-top: 30px;
`

const InputSubmit = styled.input`
    background-color: lightcoral;
    width: 100%;
    height: 40px;
    font-size: large;
    outline: none;
    border: none;
    margin-top: 10px;
`

const Or = styled.div`
    display: flex;
    align-items: center;
`

const Button = styled.button`
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
const Signup = () => 
{
    var model = document.getElementById('id02')
    window.onclick=(event)=>{
        if(event.target == model)
        {
            setvalue('none')
        }
    }

    const [value, setvalue] = useState('none');

    const fun = () =>{
        setvalue('block')
    }


  

    return (
        <div>
            <button onClick={fun}>Login</button>
            <Container1 value={value} id="id02">
                <Container2>
                    <Info1>
                        <h2>Looks Like you're new to Agri Store </h2>
                        <p style={{fontSize:"20px" , marginTop:"10px"}}>Sign up with your mobile number to get started</p>
                        <Image src={Loginpic}/>
                    </Info1>

                    <Info2>
                        <form>
                        <Input type="text" placeholder="+91 Enter Moblie Number" name="Moblie"/>
                        <p style={{fontSize:"12px", color:"red"}}>Please enter a valid Mobile number </p>
                        <Text>By continuing, you agree to AgriStore Terms of Use and Privacy Policy.</Text>
                        <InputSubmit type="submit" name="sub" value="CONTINUE" sname="submit"/>
                        </form>
                        <br/>
                        <Or>
                            <hr style={{width:"150px", height:"1px"}}/>
                            <p>OR</p>
                            <hr style={{width:"150px", height:"1px"}}/>
                        </Or>
                        <Button>Existing User? Log In </Button>
                    </Info2>
                </Container2>
            </Container1>
        </div>
    )
}

export default Signup

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