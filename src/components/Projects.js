// Import Assets
import PL2303 from '../assets/PL2303.jpeg';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3> PL2303raspberrypiIR</h3>
                    <img src={PL2303} alt="PL2303" />
                    <p>This script communicates a pl2303 driver from USB to serial, with a raspberrypi 3. 
                        It also uses some Rasp control ports. Communicate a Rasp with IR HISENSE drivers
                    </p>

                    <a href="https://www.prolific.com.tw/US/index.aspx" target="_blank" className="button">Site</a>
                    <a href="https://github.com/locoxelmillo/PL2303raspberrypiIR" target="_blank" className="button">Code</a>
                </div>


            </div>
        </section>
    );
}

export default Projects;