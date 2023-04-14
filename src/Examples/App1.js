/*import React from 'react'
import styled from 'styled-components'


const Ul = styled.ul`
    float: left;
`

const Ulinear = styled.ul`
    display: none;
	background-color: #fff;
	padding: 10px;
	border-radius: 4px;

`

const Li = styled.li`
    float: left;
	list-style: none;

    &:hover ${Ulinear}{
        display: block;
    }

`


const Liinear = styled.li`
    width: 180px;
	border-radius: 0px 0px 4px 4px;
    list-style: none;
`


function App1() {
    return (
        <div>
            <Ul>
                <Li>Home</Li>
                <Li><p>About</p>
                    <Ulinear>
                        <Liinear>cse</Liinear>
                        <Liinear>ece</Liinear>
                        <Liinear>eee</Liinear>
                    </Ulinear>
                
                </Li>
            </Ul>
        </div>
    )
}

export default App1




import React from 'react'
import styled from 'styled-components'

export const Block = styled.div`
    display: none;
    color: green;

`
export const Text = styled.p`
    &:hover + ${Block}{
        height:50px;
        color: red;
        display: block;
    }
`


const App1 = () => {
    return (
        <div>
            <Text>Nandu</Text>
            <Block>
            <p>nnnn</p>
            <p>nnnn</p>
            <p>nnnn</p>
            <p>nnnn</p>
            </Block>
            
        </div>
    )
}

export default App1

*/

import styled from "styled-components"

const Ulouter = styled.ul`
    cursor: pointer;
    margin-left: -20px;
`

const Ulinner = styled.ul`
    display: none;
    position: absolute;
    z-index: 1;
`
const Liouter = styled.li`
    float: left;
    list-style: none;
    position: relative;
    padding: 5px 15px;
    &:hover ${Ulinner}{
        display: block;
    }
`
const Liinner = styled.li`
    list-style: none;
    padding: 4px 5px ;
    font-size: 15px;
    
`

const Menucontainer1 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;
`

const Menucontainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-width: 700px;
    height: auto;
    background:linear-gradient(rgb(155, 245, 210),white);
    border-radius: 10px;
`

const Title = styled.h3`
    margin-top: 15px;
    margin-bottom: 10px;
`

const App1 = () => {
    return (
        <div>
        <Ulouter>
        <Liouter><p>Seeds</p>
        <Ulinner>
        <Menucontainer>
            <Menucontainer1>
                    <Title><b>HORTICULTURE</b></Title>
                    <Liinner>FLOWER SEEDS</Liinner>
                    <Liinner> VEGETABLES SEEDS</Liinner>
                    <Liinner>FRUITS</Liinner>
            </Menucontainer1> 
        </Menucontainer>
        </Ulinner>
        </Liouter>
        </Ulouter>
        </div>
    )
}

export default App1
