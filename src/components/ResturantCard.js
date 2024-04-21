const RestrauntCard = ({
    name,
    cuisine,
    image,
    address,
    rating
}) => {
    return (
        <div className='card'>
            <img src={image} />
            <h2>{name}</h2>
            <h3>{cuisine.join(', ')}</h3>
            <h4>{rating} stars</h4>
            <h4>{address}</h4>

        </div>
    );
};

export default RestrauntCard
