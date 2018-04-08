import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Gradient from '../components/Gradient'
import Carousel from '../components/Carousel'
import Modal from '../components/Modal'
import Social from '../components/Social'

import Icon from '../assets/noun.png'



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

div {
padding: 15px;
transition: all 0.2s ease-in-out;

    :hover {
          filter: drop-shadow(0 0 20px #fff);
          cursor: pointer;
          transform: scale(1.15);
          transition: all 0.2s ease-in-out;
          }
}



    img {
      max-width: 35px;
      margin-bottom: .45em;
      
    }
    
    p {
    color: white;
    text-align: center;
    }
`;

const ProjectsContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;


h1 {
font-size: 3.5em;
margin: 5px;
}

img {
height: 50vh;
}
`;

const Footer = styled.div`
    
    
    img {
    height: 35px;
    margin: 15px 35px;
    transition: all 0.2s ease-in-out;
    
    :hover {
      filter: drop-shadow(0 0 20px #fff);
      transition: all 0.2s ease-in-out;
      }
    }
`;

class IndexPage extends React.Component {
    constructor () {
        super()
        this.state = {
            isHidden: true,
            showModal: false
        }
        this.toggleShowModal = this.toggleShowModal.bind(this)
    }

    toggleShowModal () {
        this.setState( prevState => ({
            showModal: !prevState.showModal
        }))
    }


    render () {
        return (
            <div>
                <Gradient/>
                {this.state.showModal && <Modal action={this.toggleShowModal} />}
                <Container>
                    <Header>
                        <div onClick={() => this.toggleShowModal()}>
                            <img src={Icon}/>
                            <p>Thomas Bowen Dev</p>
                        </div>
                    </Header>
                    <ProjectsContainer>
                        <Carousel/>
                    </ProjectsContainer>
                    <Social/>
                </Container>
            </div>

        )
    }
}


export default IndexPage
