import { useState } from 'react';

const Card = ({ ratings }) => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingSelect = (value) => {
    setRating(value);
    console.log(value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="card">
      <img src="src/images/icon-star.svg" />
      {submitted ? (
        <div>Your rating is {rating} out of 5</div>
      ) : (
        <>
          <h2 className="card__title">How did we do?</h2>
          <p className="card__description">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          {ratings.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => handleRatingSelect(value)}
            >
              {value}
            </button>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
};

export default Card;
