import React from 'react'
import styled from 'styled-components'

const TransparentBackdrop = styled.div`
position: fixed;
display: flex;
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0.79);
z-index: 666;
`

const Container = styled.div`
max-width: 600px;
max-height: 600px;
background-color: white;
color: black;
position: relative;
margin: auto;

h1 {
margin: 15px auto;
}

display: flex;
flex-flow: column;
`

const Body = styled.div`
display: flex;

`

class Modal extends React.Component {
    render () {
        return (
            <TransparentBackdrop onClick={this.props.action}>
                <Container>
                        <h1>I'm a title</h1>
                    <Body>
                        <div>Image</div>
                        <div>Some stuff about meSome stuff about meSome stuff about meSome stuff about me
                            Some stuff about meSome stuff about meSome stuff about meSome stuff about me
                        </div>
                    </Body>
                </Container>
            </TransparentBackdrop>
        )
    }
}

export default Modal