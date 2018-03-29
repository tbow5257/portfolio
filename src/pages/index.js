import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Gradient from '../components/Gradient'

const Section = styled.div`


h1 {
color: white;
mix-blend-mode: difference;
}

p {
color: white;
mix-blend-mode: difference;
}

`;

const IndexPage = () => (
    <div>
        <Gradient />
            <Section>
                <div>
                    <h1>Thomas Bowen Dev</h1>
                    <p>Welcome to your new Gatsby site.</p>
                    <p>Now go build something great.</p>
                    <Link to="/page-2/">Go to page 2</Link>
                </div>
            </Section>
    </div>
)

export default IndexPage
