import GlobalStyles from './components/GlobalStyles'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Section from './components/Section'


function App() {

  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Header/>
      <Section/>
    </BrowserRouter>
  )
}

export default App
