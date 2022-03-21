import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Text, Heading } from 'uikit'

const StyledCard = styled(Card)`
  // height: 200px;
  // max-height: 182px;
`

const Label = styled.div<{ labelSize: string }>`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: ${(p) => p.labelSize};
  // margin-bottom: 24px;
  // margin-top: 10px;
`
const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  // justify-content: space-between !important;
  // height: 100%;
  padding-bottom:34px;
`

const SinglePrice = () => {
  const Token = (name:string, img:string, balance:number) => {
    return (
      <div className='d-flex align-items-center' style={{ gap: '8px', marginBottom:'4px' }}>
        <img src={img} width='18px' height='18px' alt={name} />
        <Label labelSize='14px'> {name} </Label>
        <Label labelSize='14px' style={{ position:'absolute', left:'128px' }}> Balance: ${balance} </Label>
      </div>
    )
  }
  return (
    <StyledCard>
      <StyledCardBody>
        <Heading scale="sm" style={{marginBottom:'10px'}}>
          Treasury Balance
        </Heading>
        {Token('Avax', 'images/home/avax.png', 70.2)}
        {Token('USDC.e', 'images/home/usdce.png', 1)}
        {Token('SMN', 'images/Logo-02.png', 200)}
      </StyledCardBody>
    </StyledCard>
  )
}

export default SinglePrice