import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'                                 
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchFeed from './pages/SearchFeed'
import SignIn from './pages/SignIn'
import Video from './pages/Video'
import { darkTheme, lightTheme } from './utils/Theme'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
          <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='signin' element={<SignIn />} />
            <Route path='video'>
              <Route path=':id' element={<Video />} />
            </Route>
            <Route path='search'>
              <Route path=':searchTerm' element={<SearchFeed />} />
            </Route>
          </Route>
        </Routes>
          </Wrapper>
        </Main>
    </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.soft};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

export default App