import React from 'react'
import styled from 'styled-components'

const Colors = styled.div`
min-width: 100%;
min-height: 100%;
height: 100vh;
z-index: -999;
position: absolute;
  
  
  
background: linear-gradient(33deg, #45ffd0, #227a63);
background-size: 400% 400%;

-webkit-animation: AnimationName 23s ease infinite;
-moz-animation: AnimationName 23s ease infinite;
animation: AnimationName 23s ease infinite;

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

