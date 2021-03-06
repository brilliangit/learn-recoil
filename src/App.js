import React from 'react'
import Router from './Router'
import Navbars from './Components/Navbars'
import Container from 'react-bootstrap/Container'
import { useRecoilValue } from 'recoil'
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import { theme } from './Store'
function App() {
  const currenTheme = useRecoilValue(theme)
  const themes = currenTheme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Container fluid className={`pd-0 ${themes}`}>
        <BrowserRouter>
          <Navbars />
          <Router />
        </BrowserRouter>
      </Container>
    </React.Suspense>
  );
}

export default App;
