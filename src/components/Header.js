// Import Assets
import profile from '../assets/profile.png';
import video from '../assets/presentation.webm';

const Header = () => {
    
    return (
        <section className='header'>
        <video autoPlay loop muted className='video-background'>
                <source src={video} type='video/webm' />
            </video> 
            
            <img src={profile} alt="Renzoaqc" />
            
            <div className='header__content'>
                <h1>Hi, I'm Renzo Quispe</h1>
                <p>Industrial Automation Engineer</p>
                <a href="https://www.linkedin.com/in/renzoquispecastillo/?locale=en_US" className="button">Get in touch</a>
            </div>
        </section>
    );
}

export default Header;