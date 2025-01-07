import { SocialIcon } from 'react-social-icons'
import myData from '../../Data/myData';
import './footer.css';
export default function Footer() {
    return (
        <section id='footer'>

            <div className="px-5">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-top pb-3 mb-3">
                        <li className="nav-item"><a href="#home" className="nav-link px-2 textColor">Home</a></li>
                        <li className="nav-item"><a href="#skills" className="nav-link px-2 textColor">Skills</a></li>
                        <li className="nav-item"><a href="#background" className="nav-link px-2 textColor">Education</a></li>
                        <li className="nav-item"><a href="#background" className="nav-link px-2 textColor">Work Experience</a></li>
                        <li className="nav-item"><a href="#projects" className="nav-link px-2 textColor">Projects</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link px-2 textColor">Contact</a></li>
                        <li className="nav-item"><a href="#link" className="nav-link px-2 textColor">View Resume</a></li>
                    </ul>
                    <div className='media flexBox '>
                        {
                            myData.media.map((item, index) => {
                                return (
                                    <SocialIcon url={item.link} className={item.name} />

                                )
                            })
                        }

                    </div>

                    <p className="text-center mt-5 textColor">© 2024 All write reserved by Lucky Goyal</p>
                </footer>
            </div>

        </section>
    )
}