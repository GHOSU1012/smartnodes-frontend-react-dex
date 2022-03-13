import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Duration, format, fromUnixTime } from 'date-fns'
import { Card, CardBody, Text, Box, Heading, Flex, Skeleton } from 'uikit'

const StyledCard = styled(Card)`
  min-height: 300px;
`
const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const StyledCardBody = styled(CardBody)`
  // height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between
`
const ComingSoon = styled.div`
display: flex;
justify-content: center;
font-size: 28px;
color: #514e4e;
// font-weight: bold;
align-items: center;
height: 100%;
`

const PriceChart = () => {
  const currentDate = format(new Date(), 'MMM d, yyyy')

  return (
    <StyledCard>
      <StyledCardBody>
        <div>
          <Heading scale='lg' mb='4px'>Price Chart</Heading>
          <Label>SMN/USD</Label>
        </div>
      </StyledCardBody>
      <Box px="24px" height='250px'>
        <ComingSoon>
          Coming Soon
        </ComingSoon>
      </Box>
    </StyledCard>
  )
}

export default PriceChart