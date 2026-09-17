const SuggestionCard = ({image,title, location, price }) =>{
    return (
        <div className="card">
            <img src= {image} alt= {title} />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{location}</p>
                <h4>{price}</h4>
            </div>
        </div>
    )
}
export default SuggestionCard