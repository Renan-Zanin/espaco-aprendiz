import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router';

import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="">
    <BrowserRouter>
      <Header />
        <Router />
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
