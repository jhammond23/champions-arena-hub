import './mirandushub/mirandushub.css';
import TopNavBar from './components/TopNavBar';
import { BubblesIn, BubblesOut, Humans, humans } from './components/Humans';
import { Dwarves, dwarves } from './components/Dwarves';
import DisplayBubbles from './components/DisplayBubbles';
import DisplayRace from './components/DisplayRace';
import Navbar from './components/ReactNavBar';
import DisplayBuildings from './components/pages/DisplayBuildings';
import DisplayDeeds from './components/pages/DisplayDeeds';
import { Route, Routes, useLocation, useNavigate  } from 'react-router-dom'
import Home from './components/pages/Home';
import DropdownNavbar from './components/DropdownNavbar';
import Dropdown from './components/Dropdown';
import { useEffect, useState } from 'react';
import About from './components/pages/About';
import Others from './components/pages/Others';
import Guilds from './components/pages/Guilds';
import Community from './components/pages/Community';
import Creators from './components/pages/Creators';
import Displaymonsters from './components/DisplayMonsters';
import Footer from './components/Footer';
import TestFooter from './components/TestFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GuildApp from './components/pages/GuildApp';
import Assets from './components/pages/Assets';
import ActionSequence from './components/ActionSequence';
import NewHome from './components/pages/NewHome';
import Scene from './components/pages/NewHome';
import InteractiveDeedPage from './components/InteractiveDeedPage';
import { heroes } from './components/Heroes';
import HeroPage from './components/pages/Champions';
import Estates from './components/pages/DisplayDeeds';
import Arena from './components/pages/Arena';
import CashShop from './components/pages/CashShop';
import Campaign from './components/pages/Campaign';
import Mayhem from './components/pages/Mayhem';
import TowerOfTrials from './components/pages/TowerofTrials';
import ThankYouPage from './components/pages/ThankYou';




function App() {

  const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      if (location.pathname === '/') {
        toast.info((
          <div>
            Support our efforts by using{' '}
            <a href="http://classycrypto.com/galagames" style={{ color: '#4e9af1' }}>
              Classy's link
            </a>
            {' '}when buying from Gala store {'<3'}
          </div>
        ), {
          position: toast.POSITION.BOTTOM_RIGHT,
          style : {
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '4px',
          },
          onClick: () => {
            navigate('/thank-you');
          }
        });
      } else if (location.pathname === '/exemplars') {
        toast.info('Choose a race, scroll to an exemplar, unmute, then play the tavern tales!', {
          position: toast.POSITION.BOTTOM_CENTER,
          style : {
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '4px',
            marginBottom: '10vh',
          },
        });
      }
    }
  }, [location.pathname, navigate, hasMounted]);
  
  
  

  return (
    <>
      <div id='parent'>
      <ToastContainer />
      <DropdownNavbar />
      <div className='down80'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route className='r-background' path='/exemplars' element={<DisplayRace />} />
          <Route path='/about' element={<About />} />
          <Route path='/assets' element={<Assets /> } />
          <Route path='/community' element={<Guilds /> } />
          <Route path='/estates' element={<Estates />} />
          <Route path="/champions" element={<HeroPage heroes={heroes} />} />
          <Route path='/arena' element={<Arena />} />
          <Route path='/cash-shop' element={<CashShop />} />
          <Route path='/campaign' element={<Campaign />} />
          <Route path='/mayhem' element={<Mayhem />} />
          <Route path='/tower-of-trials' element={<TowerOfTrials />} />
          <Route path='/thank-you' element={<ThankYouPage />} />


        </Routes>
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
    </>

  );
}

export default App;
