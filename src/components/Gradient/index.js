import React from 'react'
import styled from 'styled-components'

const Colors = styled.div`
min-width: 100%;
min-height: 100%;
height: 100vh;
z-index: -999;
position: absolute;
  
background: linear-gradient(48deg, #2ba84a, #040f0f, #248232, #2d3a3a);
background-size: 800% 800%;

-webkit-animation: movingthing 30s ease infinite;
-moz-animation: movingthing 30s ease infinite;
animation: movingthing 30s ease infinite;

@-webkit-keyframes movingthing {
    0%{background-position:4% 0%}
    50%{background-position:97% 100%}
    100%{background-position:4% 0%}
}
@-moz-keyframes movingthing {
    0%{background-position:4% 0%}
    50%{background-position:97% 100%}
    100%{background-position:4% 0%}
}
@keyframes movingthing { 
    0%{background-position:4% 0%}
    50%{background-position:97% 100%}
    100%{background-position:4% 0%}
}`

const Gradient = () => (
    <Colors/>
);

export default Gradient

