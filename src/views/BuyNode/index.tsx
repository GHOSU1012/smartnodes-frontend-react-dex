import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Card, CardBody, Heading } from 'uikit'
import { ethers } from 'ethers';
import { AppHeader, AppBody } from '../../components/App'
import Page from '../Page'
import CountDown from './CountDown'

// import Web3 from 'web3';s


import tempABI from '../../contracts/smartnodes.json';

const contractABI = tempABI.abi;
const contractAddress = '0xa5CD786fDA5802BeD0138E3e591eEB52712DD9Ee';

const StyledCard = styled(Card)`
  min-height: 400px;
  min-width: 450px;
  margin-top: 50px;
`

const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
`

const RowBlockBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
  margin-bottom: 22px;
  margin-top: 24px;
  padding: 8px;
  border-radius: 12px;
  background: #3a3a3c;
  text-align: center;
  width: 94%;
  border: 0px;
  :focus{
    border: 0px;
    outline: 0;
  }
`
const StyledInput2 = styled.input`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
  padding: 8px;
  width:100%;
  flex: 1;
  border-radius: 10px 0px 0px 10px;
  background: #3a3a3c;
  border: 0px;
  outline: 0;
`

const SelectStyle = styled.select`
  color: white;
  background: #3a3a3c;
  border-radius: 10px;
  border: 0;
  outline: 0;
  height: 33px;
  width: 100%;
  margin-top: 10px;
  // with: 50px;
  // width: 80px;
`


const Actions = styled.div`
  margin-top: 24px;
`
const StyledCardBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledButton = styled.button`
  align-items: center;
  border: 0;
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  display: inline-flex;
  width: 94%;
  font-family: inherit;
  font-size: 16px;
  // font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  background-color: #3a3a3c;
  color: #faa21a;
  // line-height: 1;
  // outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.65;
  }

  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  border: 1px solid;
  border-radius: 10px;
  border-color: #5c5959;
  padding: 10px;
`

const StyledButton2 = styled.button`
  align-items: center;
  border: 0;
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  display: inline-flex;
  width: 50px;
  height: 28px;
  font-family: inherit;
  font-size: 14px;
  justify-content: center;
  letter-spacing: 0.03em;
  background-color: #3a3a3c;
  color: white;
  // outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.65;
  }

  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;


const BuyNode = () => {
  const [nodeName, setNodeName] = useState('');
  const [amount, setAmount] = useState('');
  const [token, setToken] = useState('avax');

  const buyNode = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        // console.log(myAccount.myAccount, nodeName);
        // const newNode = await contract.createNode(myAccount.myAccount, nodeName, 1, true);

        // await contract.on("NodeCreated", (amount, account, blockTime) => {
        //   console.log("Node Successfully created", amount, account, blockTime);
        // });

        // const web3 = new Web3(window.ethereum);
        // // await window.ethereum.enable();
        // const NameContract = new web3.eth.Contract(contractABI, contractAddress);
        // NameContract.createNode(account, '123', 10, true).send();
      }
      else {
        console.log("Connection Error");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const inputHandleChange = (e) => {
    setNodeName(e.target.value);
  }
  const inputHandleChange2 = (e) => {
    setAmount(e.target.value);
  }
  const tokenChange = (e) => {
    console.log(e.target.value);
    setToken(e.target.value);
  }

  return (
    <Page>
      <AppBody>
        <AppHeader title='Presale' subtitle='Presale ends in' noConfig />
        <CountDown />

        <StyledCardBody>
          <InputStyle>
            <div className='d-flex flex-row justify-content-between align-items-center'>
              {token === 'avax' ?
                <div className='d-flex flex-row align-items-center' style={{ gap: '4px' }}>
                  <img src='images/home/avax.png' width='25px' alt='avax' />
                  <div style={{ color: 'white' }}>AVAX</div>
                </div> :
                <div className='d-flex flex-row align-items-center' style={{ gap: '4px' }}>
                  <img src='images/home/usdce.png' alt='avax' width='25px' />
                  <div style={{ color: 'white' }}>USDC.e</div>
                </div>
              }
              <div style={{ color: 'white' }}>balance: 0</div>
              {/* <StyledButton2 onClick={buyNode}>max</StyledButton2> */}
            </div>

            {/* <div className='d-flex flex-row justify-content-between align-items-center mt-2' style={{ gap: '4px' }}> */}
            {/* <StyledInput2 placeholder='amount' id='amountToBuyNode' onChange={inputHandleChange2} /> */}
            <SelectStyle onChange={tokenChange}>
              <option value="avax">AVAX
              </option>
              <option value="usdce">USDC.e</option>
            </SelectStyle>
            {/* </div> */}
          </InputStyle>

          <StyledInput placeholder='node name' id='nameToBuyNode' onChange={inputHandleChange} />
          <StyledButton onClick={buyNode}>Create Smart Node</StyledButton>
        </StyledCardBody>

      </AppBody>
    </Page >
  )
}

export default BuyNode
