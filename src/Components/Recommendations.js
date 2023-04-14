import styled from "styled-components";
import { categorieslist } from "../information/Data";
import { useState } from "react";
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'

const Containerouter = styled.div`
    text-align: center;
`

const Container = styled.div`
margin-top: 20px;
width: 100%;
height: 35vh;
display: flex;
overflow: hidden;
border-radius: 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: green;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Image = styled.img`
    width: 20%;
    height: 90%;
    z-index: 1;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 1s ease-out;
    margin:20px;
`

const Recommendations = () =>
{
    const [slideIndex, setSlideIndex] = useState(0);
     const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };
  


  return (
      <Containerouter>
      <h1>RECOMMENDATIONS FOR YOU</h1>
      
    <Container>
    
       <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {categorieslist.map((item) => (
              <Image src={item.imge} />
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
       </Container>
       </Containerouter>
  );
};

export default Recommendations;
