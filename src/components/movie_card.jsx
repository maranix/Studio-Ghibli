import '../App.css';

export default function MovieCard({props}) {
    return <div className="movie-card" key={props.id}>
                <img src={props.image} alt={props.title} className="movie-card-image" />
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
}