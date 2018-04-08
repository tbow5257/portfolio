import React from 'react'
import styled from 'styled-components'

import Email from '../../assets/social/email.png'
import Github from '../../assets/social/github.png'
import Twitter from '../../assets/social/twitter.png'

const Container = styled.div`
    img {
    height: 35px;
    margin: 15px 35px;
    transition: all 0.2s ease-in-out;
    
    :hover {
      filter: drop-shadow(0 0 20px #fff);
      transition: all 0.2s ease-in-out;
      transform: scale(1.1);
      }
    }
`;



const Social = () => (
    <Container>
        <a href="mailto:hello@tjbowen.me" rel="noopener noreferrer">
            <img src={Email}/>
        </a>
        <a href="https://www.github.com/tbow5257" target="_blank" rel="noopener noreferrer">
            <img src={Github}/>
        </a>
        <a href="https://twitter.com/tbow5257" target="_blank" rel="noopener noreferrer">
            <img src={Twitter}/>
        </a>
    </Container>

)

export default Social