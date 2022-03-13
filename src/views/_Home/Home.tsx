import React from 'react'
// import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import TopLayer from './components/TopLayer' 
import BottomLayer from './components/BottomLayer' 

const PageHearder = styled.div`
  width: 100%;
  height: 300px;
  border-bottom: 1px solid #243d5c;

`

export default function Home() {
  return (
    <>
      <TopLayer />
      <BottomLayer /> 
      {/* <PageHearder /> */}
    </>
  )
}