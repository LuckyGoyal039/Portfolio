import './contact.css';
import { SocialIcon } from 'react-social-icons'
import myData from '../../Data/myData';
const emailAddress='goyallucky2020@gmail.com'

export default function Contact() {
    return (

        <section id='contact'>
            <div>
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <h5>
                        Get in Touch
                    </h5>
                    <h1>
                        Contact me
                    </h1>
                </div>
                <div>
                    <h1>Email</h1>
                    <SocialIcon  url={`mailto:${emailAddress}`}/>
                </div>
                <div className='media'>
                    {
                        myData.media.map((item, index) => {
                            return (
                                <SocialIcon url={item.link} className={item.name} />

                            )
                        })
                    }

                </div>
            </div>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Subject</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>

        </section>

    )
}