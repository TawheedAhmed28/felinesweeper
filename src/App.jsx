import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Easy from './components/Easy'

function App() {
  return <>
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/easy' element={<Easy />} />
        </Routes>
    </Router>
    
  
  </>
}

export default App
