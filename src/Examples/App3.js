import styled from "styled-components"
import { useState } from "react"
const Con1 = styled.div`
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 50px;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.09);
    display: ${(props)=>props.value};
    position: fixed;
`

const Con2 = styled.div`
    background-color: lightblue;
    height: 100px;
    padding: 10px;
`

const App3 = () => 
{
    var model = document.getElementById('id01')
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
            <Con1 value={value} id="id01">
                <Con2>
                <input type="text" placeholder="enter text" /><br/>
                <input type="submit" />
                </Con2>
            </Con1>
        </div>
    )
}

export default App3
