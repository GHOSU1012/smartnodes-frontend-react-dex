import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Card, CardBody, Heading } from 'uikit'
import { ethers } from 'ethers';

// import { Web3ReactProvider } from '@web3-react/core';
import tempABI from '../../../contracts/smartnodes.json';

const contractABI = tempABI.abi;
const contractAddress = '0xa5CD786fDA5802BeD0138E3e591eEB52712DD9Ee';

const StyledCard = styled(Card)`
  // min-height: 60px;
`

const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
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
const Label = styled.div<{ size: string }>`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: ${props => props.size};
`
const PlusLabel = styled.div<{ size: string, color: any }>`
  color: ${props => props.color >= 0 ? '#55f6bb' : '#ee4f9f'};
  font-size: ${props => props.size};
`

const StyledCardBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


const TotalClaimedSMN = ({ title, val1, val2, img, account }) => {
  const [claimedSMN, setTokenPrice] = useState('Connect Wallet');

  useEffect(() => {
    const getTotalClaimedSMN = async () => {
      try {
        const { ethereum } = window;

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);

          console.log('TotalClaimedSMN--------------------------------');
          const val = await contract.getAllNodesRewards(account);
          // const val=20;
          console.log('totalClaimedSMN****************', val);
          setTokenPrice(val.toString());
          console.log(`myaccount: ${account}`)
          console.log(`TotalClaimedSMN: ${claimedSMN}`);
        }
        else {
          console.log("Connection Error");
        }
      } catch (err) {
        if(account)
          setTokenPrice('0');
        console.log(err);
      }
    }

    getTotalClaimedSMN();
  });

  return (
    <StyledCard>
      <RowBlockBetween>
        <StyledCardBody>
          <Heading scale="sm" mb="8px">
            {title}
          </Heading>
          <RowBlock>
            <Label size='13px'>{claimedSMN}</Label>
            {val2 != null ?
              <PlusLabel color={val2} size='16px'>{val2 >= 0 ? `+${val2}` : val2}%</PlusLabel> : ''
            }
          </RowBlock>
        </StyledCardBody>
        <StyledImg src={img} alt='status_logo' />
      </RowBlockBetween>
    </StyledCard>
  )
}


export default TotalClaimedSMN