import React from 'react';
import Navbar from './Navbar';
import FRM from '../assets/frm.png';
import ABS2 from '../assets/abs2.png';
import ORG from '../assets/org.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container' style={{margin:'0px', padding:'0px'}}>
      <Navbar />
      <div className="image-container" style={{ position: 'relative', overflow:'hidden' }}>
        <img src={ABS2} style={{ width: '1100px', height: '856px', marginLeft: '910px', transform: 'scaleX(-1) rotate(159deg)', marginTop:'-80px' }} />
        <img src={FRM} style={{ position:'absolute', width:'800px', left:'0px', top:'280px'}}/>
        <div className="text-container" style={{ position: 'absolute', top: '220px', left: '180px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
          <div>
            <p style={{ marginBottom: '15px', fontFamily: 'Calibri', color: '#FF914D', fontWeight: 'bold', fontSize: '60px' }}>Welcome To NOVEL.</p>
            <p style={{ marginBottom: '5px', marginTop: '0', fontWeight: 'bold', fontFamily: 'Calibri', fontSize: '25px' }}>Tempat membaca novel secara online</p>
            <p style={{ marginTop: '10px', fontFamily: 'Calibri', fontSize: '20px', color: '#737373' }}>
              Temukan berbagai cerita menarik dari berbagai genre yang<br />
              bisa anda baca di sini. Dari petualangan yang mendebarkan<br />
              hingga kisah cinta yang mengharukan, kami hadirkan<br />
              pengalaman membaca yang nyaman dan seru. Bergabunglah<br />
              dengan komunitas pembaca kami dan temukan cerita-cerita<br />
              baru yang akan menginspirasi anda. Mari mulai petualangan <br />
              membaca anda sekarang<br />
            </p>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <Link to="/page">
            <button style={{ backgroundColor: '#FF914D', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', marginTop: '20px', fontWeight: 'bold', fontFamily: 'Calibri' }}>
              Mulai Membaca
            </button>
            </Link>
          </div>
        </div>
        <img src={ORG} style={{ position: 'absolute', top: '150px', left: '857px', width: '700px'}} />
      </div>
    </div>
  );
};

export default Home;



