import React from 'react'
import styled from 'styled-components'
import { media } from '../../layouts'

const TypingBox = styled.div`



h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  
  ${media.tablet`font-size: 2.5em !important`}
  
  
  ${props => props.isAnimate ? 
    'animation: typing .7s steps(30, end), blink-caret .8s step-end infinite;'
    : 'animation: blink-caret .8s step-end infinite'}
}



/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}

`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;



const Typewriter = ({typeAnimation, children}) => (
    <Container>
        {console.log(typeAnimation + ' typ')}

        <TypingBox isAnimate={(typeAnimation === undefined) ? true :
            typeAnimation}>
            <h1>{children}</h1>
        </TypingBox>
    </Container>
);

export default  Typewriter