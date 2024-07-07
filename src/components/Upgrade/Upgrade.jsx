import React, {useNavigate} from 'react';
import logo from '../../assets/logo.svg';
import headphone from '../../assets/headphone-logo.png';
import play from '../../assets/play-icon.png'; 
import download from '../../assets/download-icon.png'; 
import './Upgrade.css';
// import 
const Upgrade = () => {
 
    return <>
    <div className='Upgrade_container'>
        <div className="yt_premium">
            <img src={logo} alt="yt_logo" className='logo icon'/>
            <h1 className='premium_Text'>Get Music Premium to listen to music <br />ad-free, offline & with your screen off</h1>
            <button className='get_music_premium' >get music Premium</button>
            <h1 className='prices_Text'>Prepaid and subscription plans available. Prices start <br />at ₹99.00/month. Free trials available with subscription plans only.</h1>
            <p className='save_money_Text'>Or save money with an annual, <span className='link-a'>family or student plan <br /> Restrictions apply. Learn more here.</span> </p>
        </div>
        <div className="first_poster">
            <div className=" headfon">
                <img src={headphone} alt="" className='Icon' />
                <h2>Listen in the <br />background</h2>
                <h5>Don’t worry about your music stopping <br /> when you lock your screen .</h5>
            </div>
            <div className=" headfon">
                <img src={play} alt="" className='Icon' />
                <h2>Ad-free music</h2>
                <h5>Listen to the world of music without ads.</h5>
            </div>
            <div className=" headfon">
                <img src={download} alt=""  className='Icon'/>
                <h2>Download and go</h2>
                <h5>Listen to your favorite music on the go.</h5>
            </div>
        </div>
       {/*  <div className="second_poster">
            <div> <h1>Background Play</h1>
                <h4>Turn off the screen, use other apps, all while your music <br /> keeps playing.</h4>
            </div>
        </div>
        <div className="third_poster">
            <div> <h1>No ads or interruptions <br /> on music</h1>
                <h4>Easily explore the world of music without any <br /> interruptions.</h4>
            </div>
        </div>
        <div className="forth_poster">
            <div> <h1> Download your favorite 
                <h1 />
                <h1></h1>tracks</h1>
                <h4>No connection? No problem. Take your songs, albums <br /> and playlists offline..</h4>
            </div>
        </div >
        <div className="final_poster">
            <h4>Have other questions? <span >Visit the YouTube Help Center</span> </h4>
        </div> */}
        </div>
    </>
}

export default Upgrade