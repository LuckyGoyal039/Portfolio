import './projectCard.css'
import projectImage from '../../assets/projectImage.webp'

export default function ProjectCard({ data }) {
    return (
        <div class="card" style={{ width: "400px", }}>
            <img class="card-img-top border w-100" src={projectImage} alt="Card image cap" height={250} />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}