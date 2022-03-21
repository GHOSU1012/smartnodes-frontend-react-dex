import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { Card, CardBody, Text, Heading } from 'uikit'
import ApexChart from './ApexChart'

const StyledCard = styled(Card)`
  min-height: 300px;
`
const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const StyledCardBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between
  align-items: center;
`
const StyledPie = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`


const SmnPie = () => {
  const currentDate = format(new Date(), 'MMM d, yyyy')

  return (
    <StyledCard>
      <StyledCardBody>
        <Heading scale='lg' mb='4px'>Asset Allocation</Heading>
        <StyledPie>
          <ApexChart />
        </StyledPie>
      </StyledCardBody>
    </StyledCard>
  )
}

export default SmnPie