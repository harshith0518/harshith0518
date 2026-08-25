import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Work from './components/Work'
import About from './components/About'
import Connect from './components/Connect'
import MotionField from './components/Elements/MotionField'

function App() {
  return (
    <>
      <MotionField />
      <div className="site-shell">
        <Navbar />
        <main>
          <Home />
          <Work />
          <About />
        </main>
        <Connect />
      </div>
    </>
  )
}

export default App
