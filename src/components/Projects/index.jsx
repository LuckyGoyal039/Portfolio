import './projects.css';
import myData from '../../Data/myData';
import ProjectCard from '../ProjectCard';

export default function Projects() {
    return (
        <section id='projects'>
            <div className='flexBox heading'>
                <h1>Projects</h1>
            </div>
            <div className='px-5 flexBox gap-4'>
                {
                    myData.projects.map((item, index) => {
                        return (
                            <ProjectCard data={item} />
                        )
                    })
                }
            </div>
        </section>
    )
}