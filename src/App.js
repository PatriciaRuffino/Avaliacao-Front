import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import  Header from './components/Header';
import Particles from 'react-tsparticles';
import Resume from './components/Resume';
import Cards from './components/Cards';
import Footer from './components/Footer'




function App() {
	

  return (
    <>
	
   <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 90,
	            "density": {
	                "enable": true,
	                "value_area": 900
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.02
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.05
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />
	    <Navbar />
    <Header />
	<Resume />
	<Cards />
	<Footer />

    </>
  
  );
}

export default App;
