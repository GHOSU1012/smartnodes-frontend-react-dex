import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'toolkit/uikit'
import Page from 'components/Layout/Page'
import { useWeb3React } from '@web3-react/core'

import TotalClaimedSMN from './components/TotalClaimedSMN'
import TotalNodes from './components/TotalNodes'
import SMNprice from './components/SMNprice'
import AutoCompound from './components/AutoCompound'
import IncomeCard from './components/IncomeCard'
import PriceChart from './components/PriceChart'
import NodesListCard from './components/NodesListCard'
import AvailReward from './components/AvailReward'
import CreateNewNode from './components/CreateNewNode'

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;
  width: 100%;

  & > div {
    grid-column: span 12;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    & > div {
      grid-column: span 6;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 3;
    }
  }
`
const CustomCards = styled(Cards)`
  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    & > div {
      grid-column: span 6;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const BigCards = styled(Cards)`
  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const Home: React.FC = () => {
  const { account } = useWeb3React();
  console.warn = () => { };

  return (
    <>
      <Page>
        <Cards>
          <SMNprice title="$SMN" val1="$0" val2={0} img='images/status1.jpg' />
          <TotalNodes title="Total Smart Nodes" val1="6500" val2={-5} img='images/status2.jpg' />
          <TotalClaimedSMN title="Your Total Claimed $SMN" val1="3587" val2={null} img='images/status3.jpg' account={account} />
          <AutoCompound title="Auto Compound" status={false} img1='images/status4.jpg' img2='images/status42.jpg' />
        </Cards>
        <BigCards>
          <IncomeCard img='images/income.jpg' />
          <CustomCards>
            <AvailReward account={account} />
            <CreateNewNode myAccount={account} />
          </CustomCards>
        </BigCards>
        <BigCards>
          <NodesListCard account={account} />
          <PriceChart />
        </BigCards>
      </Page>
    </>
  )
}

export default Home
