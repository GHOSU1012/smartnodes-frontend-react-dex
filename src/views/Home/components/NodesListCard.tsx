import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import styled from 'styled-components'
// import { ethers } from 'ethers';
import { Card, CardBody, Heading } from 'uikit'
// import CardValue from 'components/CardValue'
// import useActiveWeb3React from 'hooks/useActiveWeb3React'
// import { BSCProvider, simpleRpcProvider } from 'utils/provider'
// import { State } from '../../../state/types';
import NodesList from './NodesList';

const StyledCard = styled(Card)`
  min-height: 376px;
`


const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const StyledCardBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const NodesListCard = (account) => {
  const [nodeNum, setNodeNum] = useState(0);

  return (
    <StyledCard>
      <StyledCardBody>
        <div>
          <Heading scale="lg" mb="4px">
            Nodes
          </Heading>
          <Label>Currently {nodeNum}/100</Label>
        </div>
        <div>
          <NodesList account={account} />
        </div>
      </StyledCardBody>
    </StyledCard>
  )
}

export default NodesListCard
