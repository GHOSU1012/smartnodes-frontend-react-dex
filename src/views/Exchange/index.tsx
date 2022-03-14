import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CardBody } from 'uikit'
import { AppHeader, AppBody } from '../../components/App'
import Page from '../Page'

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
  padding: 8px;
  flex: 1;
  border-radius: 10px 0 0 10px;
  background: #3a3a3c;
  width: 94%;
  border: 0px;
  :focus{
    border: 0px;
    outline: 0;
  }
`
const StyledInput2 = styled(StyledInput)`
  border-radius: 10px;
`

const SelectStyle = styled.select`
  color: white;
  background: #3a3a3c;
  border-radius: 0 10px 10px 0;
  border: 0;
  outline: 0;
  height: 33px;
  width: 100px;
`

const StyledCardBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid;
  border-color: #7c7c7c;
`

const StyledButton = styled.button`
  align-items: center;
  border: 0;
  border-radius: 12px;
  padding: 12px;
  margin-top: 20px;
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
const StyledButton2 = styled.div`
  align-items: center;
  border: 0;
  border-radius: 15px;
  padding: 12px;
  margin-top: 10px;
  display: inline-flex;
  width: 30px;
  height: 30px;
  background: #2b2b2b;
  font-family: inherit;
  font-size: 16px;
  justify-content: center;
  letter-spacing: 0.03em;
  color: #faa21a;
`;

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 94%;
  border: 1px solid;
  border-radius: 10px;
  border-color: #5c5959;
  padding: 10px;
  margin-top: 10px;
`


const Exchange = () => {
  const [token1, setToekn1] = useState('avax');
  const [token2, setToekn2] = useState('smn');
  const [amount1, setAmount1] = useState('0');
  const [amount2, setAmount2] = useState('0');

  const tokenFunc1 = (e) => {
    setToekn1(e.target.value);
  }

  const amountChange1 = (e) => {
    setAmount1(e.target.value);
  }
  const amountChange2 = (e) => {
    setAmount2(e.target.value);
  }

  return (
    <Page>
      <AppBody>
        <AppHeader title='Exchange' subtitle='Exchange with AVAX and USDC.e' />

        <StyledCardBody>
          {/* -----------------  Input Token Amount & Select Token Type _ Tag1 ---------------------- */}
          <InputStyle>
            <div className='d-flex flex-row justify-content-between align-items-center'>
              {token1 === 'avax' ?
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
            </div>

            <div className='d-flex flex-row align-items-center' style={{ gap: '4px', marginTop: '8px' }}>
              <StyledInput placeholder='amount' id='nameToBuyNode' onChange={amountChange1} />
              <SelectStyle onChange={tokenFunc1} id='select1'>
                <option value="avax">AVAX</option>
                <option value="usdce">USDC.e</option>
              </SelectStyle>
            </div>
          </InputStyle>

          {/* -----------------  Exchange Token1 and Token2 _ Button ---------------------- */}
          <StyledButton2>V</StyledButton2>

          {/* -----------------  Input Token Amount & Select Token Type _ Tag2 ---------------------- */}
          <InputStyle>
            <div className='d-flex flex-row justify-content-between align-items-center'>
              <div className='d-flex flex-row align-items-center' style={{ gap: '4px' }}>
                <img src='images/Logo-02.png' width='28px' alt='avax' />
                <div style={{ color: 'white' }}>SMN</div>
              </div>
              <div style={{ color: 'white' }}>balance: 0</div>
            </div>

            <div className='d-flex flex-row align-items-center' style={{ gap: '4px', marginTop: '8px' }}>
              <StyledInput2 placeholder='amount' id='nameToBuyNode' onChange={amountChange2} />
            </div>
          </InputStyle>

          <StyledButton >SWAP</StyledButton>
        </StyledCardBody>

      </AppBody>
    </Page >
  )
}

export default Exchange