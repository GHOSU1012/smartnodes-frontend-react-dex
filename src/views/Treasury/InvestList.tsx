import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { Card, CardBody, Text, Heading } from 'uikit'
import TxList from './TxList'

const StyledCard = styled(Card)`
  min-height: 300px;
`
const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const StyledCardBody = styled(CardBody)`
  // height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between
`

const InvestList = () => {
  const currentDate = format(new Date(), 'MMM d, yyyy')

  return (
    <StyledCard>
      <StyledCardBody>
        <div>
          <Heading scale='lg' mb='4px'>Investment</Heading>
        </div>
        <TxList />
      </StyledCardBody>
    </StyledCard>
  )
}

export default InvestList