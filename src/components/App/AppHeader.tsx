import React from 'react'
import styled from 'styled-components'
import { Text, Flex, IconButton, ArrowBackIcon } from 'toolkit/uikit'
import { Link } from 'react-router-dom'
import Settings from './Settings'
import QuestionHelper from '../QuestionHelper'

interface Props {
  title: string
  subtitle: string
  helper?: string
  backTo?: string
  noConfig?: boolean
}

const AppHeaderContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding: 24px;
  padding-bottom: 6px;
  width: 100%;
  // border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const AppHeader: React.FC<Props> = ({ title, subtitle, helper, backTo, noConfig = false }) => {
  return (
    <AppHeaderContainer>
      <Flex alignItems="center" mr={noConfig ? 0 : '16px'}>
        {backTo && (
          <IconButton as={Link} to={backTo}>
            <ArrowBackIcon width="32px" />
          </IconButton>
        )}
        <Flex flexDirection="column" alignItems="center">
          <Text mb="2px" fontFamily="Osiris" fontSize="24px">{title}</Text>
          <Flex alignItems="center">
            {helper && <QuestionHelper text={helper} mr="4px" />}
            <Text color="textSubtle" fontSize="14px">
              {subtitle}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {!noConfig && (
        <Flex style={{position:'absolute', right:'32px', top:'32px'}}>
          <Settings />
        </Flex>
      )}
    </AppHeaderContainer>
  )
}

export default AppHeader
