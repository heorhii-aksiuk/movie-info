import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import AppBar from './AppBar'

export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<p>loading...</p>}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  )
}

const Container = styled.div`
  width: 320px;
  margin: 0 auto;
`
