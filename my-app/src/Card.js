import React from "react";

//Using deststructuring on object, instead of props
const Card = ({name, email, id}) => {
    console.log('whats going on here...', name, email, id)
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;