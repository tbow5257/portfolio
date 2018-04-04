import React from 'react'
import styled from 'styled-components'

const Colors = styled.div`
min-width: 100%;
min-height: 100%;
height: 100vh;
z-index: -999;
position: absolute;
  
  
  
background: linear-gradient(33deg, #115e54, #8a1024, #4424ff, #621d80, #157de8);
background-size: 1000% 1000%;

-webkit-animation: AnimationName 43s ease infinite;
-moz-animation: AnimationName 43s ease infinite;
animation: AnimationName 43s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:0% 77%}
    50%{background-position:100% 24%}
    100%{background-position:0% 77%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 77%}
    50%{background-position:100% 24%}
    100%{background-position:0% 77%}
}
@keyframes AnimationName { 
    0%{background-position:0% 77%}
    50%{background-position:100% 24%}
    100%{background-position:0% 77%}
}
    
}`

const Gradient = () => (
    <Colors/>
);

export default Gradient

