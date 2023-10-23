// Import Assets
import profile from '../assets/profile.png';
import video from '../assets/Presentacion.mp4';

const Header = () => {
    
    return (
        <section className='header'>
        <video autoPlay loop muted className='video-background'>
                <source src={video} type='video/mp4' />
            </video> 
            
            <img src={profile} alt="Renzoaqc" />
            <div class="overlay"></div>
            <div className='header__content'>
                <h1>Hi, I'm Renzo Quispe</h1>
                <p>Industrial Automation Engineer</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;