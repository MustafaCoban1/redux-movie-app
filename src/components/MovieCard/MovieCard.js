import React from 'react';

const MovieCard = (props) => {
    const {data} = props;
    return (
        <div className='card-item'>
            <div className='card-inner'>
                <div className='card-top'>
                     <img alt={data.poster}></img>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;