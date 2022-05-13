import './App.scss'
import Contacts from './components/contacts/Contacts';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar'
import Work from './components/works/Work';
import { useState } from 'react';
import Menu from './components/menu/Menu';


function App () {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='app'>
      <div className='blur'>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <div className="sections" onClick={() => setMenuOpen(false)}>
        <Intro/>
        <Portfolio/>
        <Work/>
        <Contacts/>
       </div>
      </div>
    </div>
  )
}

export default App;
