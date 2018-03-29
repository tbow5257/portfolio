import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Gradient from '../components/Gradient'

import Icon from '../assets/noun.png'
import Email from '../assets/social/email.png'
import Github from '../assets/social/github.png'
import Twitter from '../assets/social/twitter.png'
import Placeholder from '../assets/placeholder.jpg'



const Container = styled.div`
display: flex;
flex-flow: column;
text-align: center;
justify-content: space-between;
align-content: space-between;
min-width: 100%;
min-height: 100%;
height: 100vh;

`;

const Header = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: column;
padding-top: 1em;
    
    img {
      max-width: 35px;
      margin-bottom: .45em;
    }
    
    p {
    color: white;
    mix-blend-mode: difference;
    text-align: center;
    }
`;

const ProjectsContainer = styled.div`

h1 {
font-size: 3.5em
}

img {
height: 50vh;
}
`;

const Footer = styled.div`
    img {
    height: 35px;
    }
`;

const IndexPage = () => (
    <div>
        <Gradient/>
        <Container>
            <Header>
                <div>
                    <img src={Icon}/>
                </div>
                <div>
                    <p>Thomas Bowen Dev</p>
                </div>
            </Header>
            <ProjectsContainer>
                <h1>jQuery, PHP</h1>
                <img src={Placeholder} />
            </ProjectsContainer>
            <Footer>
                <img src={Email}/>
                <img src={Github}/>
                <img src={Twitter}/>

            </Footer>
        </Container>
    </div>
)

export default IndexPage
