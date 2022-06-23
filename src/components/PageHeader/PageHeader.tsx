import React from 'react'
import styled from 'styled-components'
import { Box } from 'toolkit/uikit'
import Container from '../Layout/Container'

const Outer = styled(Box)<{ background?: string }>`
  background: ${({ theme, background }) => background || theme.colors.gradients.bubblegum};
  border-bottom: 1px solid #000000;
  background-image: url('/images/farm/header-bg.png');
  background-position: right ;
  background-repeat: no-repeat;
  height: 250px;
`

const Inner = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
`

const PageHeader: React.FC<{ background?: string }> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader
