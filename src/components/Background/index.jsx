
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import myData from '../../Data/myData';
import './background.css'
// import { AiFillAlert } from "react-icons/ai";
import { GrScorecard } from "react-icons/gr"
import { MdWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
export default function Background() {
    return (
        <>
            <section id="background">

                <div className='flexBox justify-content-center'>
                    <h1>Background Details</h1>
                </div>
                <VerticalTimeline>
                    <section id="experience" style={{ marginBottom: '50px' }}>
                        {
                            myData.experience.map((item, index) => {
                                return (
                                    <VerticalTimelineElement key={item.course}
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: '#bb86fc', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid #bb86fc' }}
                                        date={item.endDate}
                                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                        icon={<MdWork />}
                                    >
                                        <h3 className="vertical-timeline-element-title">{item.position}</h3>
                                        <p className="vertical-timeline-element-subtitle mb-2 mt-1">{item.name}</p>

                                        <div className='location'>
                                            <div className='flexBox'>
                                                <span className="material-symbols-outlined icons">
                                                    calendar_month
                                                </span>
                                                <span className='icons mx-1'>{item.startDate}-{item.endDate}</span>
                                            </div>
                                            <div className='flexBox icons'>
                                                <span className="material-symbols-outlined icons" >
                                                    location_on
                                                </span>
                                                <span className='mx-1'>{item.location}</span>
                                            </div>
                                        </div>
                                        <div className='icons'>
                                            <BsStack className='icons' />
                                            <span className='mx-1'>TechStack: </span>
                                            <span >{item.techStack}</span>
                                        </div>
                                    </VerticalTimelineElement>
                                )
                            })
                        }
                    </section>
                    <section id="education" >
                        {
                            myData.education.map((item, index) => {
                                return (
                                    <VerticalTimelineElement key={item.course}
                                        className="vertical-timeline-element--education"

                                        contentStyle={{ background: '#bb86fc', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid #bb86fc' }}
                                        date={item.endDate}
                                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                        icon={<IoSchool />}
                                    >
                                        <h3 className="vertical-timeline-element-title">{item.course}</h3>
                                        <p className="vertical-timeline-element-subtitle mb-2 mt-1">{item.instituteName}</p>

                                        <div className='location'>
                                            <div className='flexBox'>
                                                <span className="material-symbols-outlined icons">
                                                    calendar_month
                                                </span>
                                                <span className='icons mx-1'>{item.startDate}-{item.endDate}</span>
                                            </div>
                                            <div className='flexBox icons'>
                                                <span className="material-symbols-outlined icons" >
                                                    location_on
                                                </span>
                                                <span className='mx-1'>{item.location}</span>
                                            </div>
                                        </div>
                                        <div className='icons'>
                                            <GrScorecard className='icons' />
                                            <span className='mx-1'>CGPA:</span>
                                            <span >{item.CGPA}</span>
                                        </div>

                                    </VerticalTimelineElement>
                                )
                            })
                        }
                    </section>


                </VerticalTimeline>

            </section>
        </>
    )
}