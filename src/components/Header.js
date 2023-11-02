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
                <p>I am an electronic engineer passionate about industrial automation. My experience encompasses management, maintenance, and programming of key systems such as robots, PLCs, and HMIs. My focus is on finding innovative solutions to maximize efficiency. Recently arrived in New Zealand with a Working Holiday visa, I am excited to explore new opportunities and learn about the industry in this country</p>
                <a href="https://www.linkedin.com/in/renzoquispecastillo/?locale=en_US" className="button">Get in touch</a>
            </div>
        </section>
    );
}

export default Header;