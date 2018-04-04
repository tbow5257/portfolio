import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { media } from '../../layouts'


import Typewriter from '../Typewriter'

import PTA from '../../assets/placeholder.jpg'

const Container = styled.div`
  ${media.tablet`
  .slick-track { height: 260px !important }
  img { height: 260px !important }
  `}

  ${media.desktop`

  .slick-next { right: -39px }
  .slick-prev { left: -61px}
  `}

opacity: ${ (props) => props.mounted ? `1 !important;` : `0 !important;`  }
padding: 0 40px;
width: 80%;
position: relative;
z-index: 999;
justify-items: center;
align-items: center;

  transition: opacity 1s;


img {
object-fit: cover;
}

h1 {
margin: 0;
padding: 5px;

}

h3 {
  background: blue;
  color: #fff;
  font-size: 36px;
  line-height: 100px;
  margin: 10px;
  padding: 2%;
  position: relative;
  text-align: center;
}
.variable-width .slick-slide p {
  background: blue;
  height: 100px;
  color: #fff;
  margin: 5px;
  line-height: 100px;
  text-align: center;
}
.center .slick-center h3 {
  color: #e67e22;
  opacity: 1;
  transform: scale(1.08);
}
.center h3 {
  opacity: 0.8;
  transition: all 300ms ease;
}
.content {
  padding: 20px;
  margin: auto;
  width: 90%;
}
.slick-slide .image {
  padding: 10px;
}
.slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
}
.slick-slide img.slick-loading {
  border: 0;
}
.slick-slider {
  margin: 30px auto 50px;
  box-sizing: border-box;
      position: relative;
    display: block;
}
.slick-dots {
  margin-left: 0;
}
.slick-thumb {
  bottom: -45px;
}
.slick-thumb li {
  width: 60px;
  height: 45px;
}
.slick-thumb li img {
  filter: grayscale(100%);
}
.slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
@media (max-width: 768px) {
  h3 {
    font-size: 24px;
  }
  .center {
    margin-left: -40px;
    margin-right: -40px;
  }
  .center .slick-center h3 {
    color: #e67e22;
    opacity: 1;
    transform: scale(1);
  }
  .center h3 {
    opacity: 0.8;
    transform: scale(0.95);
    transition: all 300ms ease;
  }
}
.slick-vertical .slick-slide {
  height: 180px;
}
.slick-arrow {
  /* color: black; */
}

/* Slider */
.slick-slider
{
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-list
{
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
}
.slick-list:focus
{
    outline: none;
}
.slick-list.dragging
{
    cursor: pointer;
    cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list
{
    -webkit-transform: translate3d(0, 0, 0);
       -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
         -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}

.slick-track
{
    position: relative;
    top: 0;
    left: 0;

    display: block;
}
.slick-track:before,
.slick-track:after
{
    display: table;

    content: '';
}
.slick-track:after
{
    clear: both;
}
.slick-loading .slick-track
{
    visibility: hidden;
}

.slick-slide
{
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
}
[dir='rtl'] .slick-slide
{
    float: right;
}
.slick-slide img
{
    display: block;
}
.slick-slide.slick-loading img
{
    display: none;
}
.slick-slide.dragging img
{
    pointer-events: none;
}
.slick-initialized .slick-slide
{
    display: block;
}
.slick-loading .slick-slide
{
    visibility: hidden;
}
.slick-vertical .slick-slide
{
    display: block;

    height: auto;

    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}

.slick-prev:before, .slick-next:before {
  font-size: 34px;
}

`;

function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className='slick-arrow slick-next'
            onClick={onClick}
        />
    );
}


let handleNavClick = (event) => {
    console.log('click')
};


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: 0,
            typeAnimation: false,
            mounted: false
        };
        this.toggleAnimation = this.toggleAnimation.bind(this);
    };

    toggleAnimation() {
        console.log('anim toggle');
        this.setState((prevState, props) => {
            const typeAnimation = !prevState.typeAnimation;
            return { typeAnimation }
        })
    }

    // telling Typewriter to restart when new Carousel nav clicked
    // componentDidMount() {
    //     this.nav.addEventListener("slick-arrow", this.handleNavClick)
    // }
    //
    // componentWillUnmount() {
    //     this.nav.removeEventListener("slick-arrow", this.handleNavClick)
    // }

    handleNavClick = (event) => {
        slickNext();
    };

    componentDidMount() {
        this.setState({ mounted: true })
    }

    render(props, state) {
        var settings = {
            dots: false,
            beforeChange: (oldIndex, newIndex) => {
                this.setState({Caption: newIndex});
                    this.toggleAnimation();
            },
            afterChange: (index) => {this.setState({typeAnimation: true});
                this.toggleAnimation();},
            nextArrow: <SampleNextArrow/>,
        };


        const captions = {
            undefined: 'jQuery, PHP',
            0: 'jQuery, PHP',
            1: 'hi i am 1',
            2: 'hi i am 2',
            3: 'hi i am 3',
        }

        return (
            <Container mounted={this.state.mounted}>
                <Typewriter typeAnimation={this.state.typeAnimation} ref={instance => { this.child = instance;}}>
                    {captions[this.state.Caption]}
                </Typewriter>
                <Slider {...settings}>
                    <div>
                        <img  src={PTA} />
                    </div>
                    <div>
                        <img src={PTA} />
                    </div>
                    <div>
                        <img src={PTA} />
                    </div>
                    <div>
                        <img src={PTA} />
                    </div>
                </Slider>
            </Container>
        );
    }
}

export default Carousel