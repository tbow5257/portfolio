import React from 'react'
import styled from 'styled-components'

import Social from '../Social'

import profile from '../../assets/profile.jpg'

const TransparentBackdrop = styled.div`
position: fixed;
display: flex;
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0.79);
z-index: 666;
`

const Container = styled.div`
display: flex;
flex-flow: column;
align-items: center;
margin: auto;
max-width: 600px;
max-height: 600px;
background-color: white;
color: black;
position: relative;


h1 {
margin: 15px auto;
}


`

const Body = styled.div`
display: flex;

div {
margin: 15px;
  
  :first-of-type {
    flex: 1;
  }
  
  :last-of-type {
    flex: 3;
  }
  
  img {
  width: 100px;
  }
  
  p {
  text-align: justify;
  }

}
`

class Modal extends React.Component {
    render() {
        return (
            <TransparentBackdrop onClick={this.props.action}>
                <Container onClick={e => e.stopPropagation()}>
                    <h1>About me</h1>
                    <Body>
                        <div><img src={profile}/></div>
                        <div>
                            <p>Thomas Bowen is an avid practitioner of web technologies with a passion for well written code
                            and elegant user experiences. After harnessing his skills in eCommerce solutions, he
                            complemented his design skills with technical prowess to build innovative full stack web
                                applications.</p>
                        </div>
                    </Body>
                    <Social />
                </Container>
            </TransparentBackdrop>
        )
    }
}

export default Modal