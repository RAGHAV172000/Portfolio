// import logo from './logo.svg';
import './App.scss';
import { Routes,Route,useLocation} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Particles  from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { config } from './helper';
import Theme from './components/Theme';
import { Toaster } from 'react-hot-toast';
function App() {
	const particlesInit=async(main)=>{
		await loadFull(main)
	}
	const location =useLocation();
  return (
    <div className="App">
	{location.pathname==='/'&&<Particles id="rahhab" options={config} init={particlesInit}/>}
	<Toaster/>
	<div className='App__navbar-wrapper'>
	<Navbar/>
	</div>
	<div className='App__main-content-wrapper'>
	
     <Routes>
		<Route path='/' index element={<Home/>}/>
		<Route path='/about' element={<About/>}/>
		<Route path='/skills' element={<Skills/>}/>
		<Route path='/portfolio' element={<Portfolio/>}/>
		<Route path='/contact' element={<Contact/>}/>
	 </Routes>
	 </div>
    </div>
  );
}

export default App;
