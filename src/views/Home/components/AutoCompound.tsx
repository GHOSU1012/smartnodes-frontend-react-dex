import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Text, Heading } from 'uikit'
import ToggleButtonAC from './ToggleButtonAC'

const StyledCard = styled(Card)`
  // min-height: 60px;
`

const RowBlockBetween = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const StyledImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-top: 20px;
  margin-right: 20px;
`
const StyledCardBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ComingSoon = styled.div`
display: flex;
justify-content: center;
font-size: 14px;
color: #fff;
// font-weight: bold;
align-items: center;
height: 100%;
`

const ToogleCard = ({ title, status, img1, img2 }) => {
  const [isOn, setIsOn] = useState(status)

  return (
    <StyledCard>
      <RowBlockBetween>
        <StyledCardBody>
          <Heading scale="sm" mb="8px">
            {title}
          </Heading>
          <ToggleButtonAC onClick={() => setIsOn(!isOn)} />
          <ComingSoon>
          Coming Soon
        </ComingSoon>
        </StyledCardBody>
        <StyledImg src={isOn ? img2 : img1} alt='status_logo' />
      </RowBlockBetween>
    </StyledCard>
  )
}

export default ToogleCard
