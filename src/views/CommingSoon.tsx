import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from 'toolkit/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const CommingSoon = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <StyledNotFound>
        {/* <LogoIcon width="64px" mb="8px" /> */}
        <img src='images/Logo-02.png' style={{ width: '80px' }} alt='commingson'/>
        {/* <Heading scale="xxl">404</Heading> */}
        <Text mb="22px" style={{ color: 'white', fontSize:'22px' }}>Comming Soon</Text>
        {/* <Button as="a" href="/" scale="sm">
          {t('Back Home')}
        </Button> */}
      </StyledNotFound>
    </Page>
  )
}

export default CommingSoon
