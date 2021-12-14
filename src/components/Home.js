//begining of Home component.
import React from 'react'
import styled from 'styled-components'

import Section from './Section'

function Home() {
    return (
      <Container >
        <Section
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImage="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImage="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model 3"
          description="Order Online for Tochless Delivery"
          backgroundImage="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Model X"
          description="Order Online for Tochless Delivery"
          backgroundImage="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing inventory"
        />
        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back Guarantee"
          backgroundImage="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Accessories"
          description=""
          backgroundImage="accessories.jpg"
          leftBtnText="Shop Now"
        />
        
      </Container>
    );
}

export default Home

const Container = styled.div`
     height: 100vh;
`
   