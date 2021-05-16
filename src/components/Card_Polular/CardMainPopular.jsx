// import Rating from "../Rating/Rating";

import Rating from "react-rating"

const CardMainPopular = (props) => {


	return (
		<>
			<div className='card__popular'>
					<div className='card__popular-img'>
						<img src='img/accomodation.jpg' alt='' />
					</div>
					<h3 className='card__title'>{props.title}</h3>
					<div className='card__rating'>
						<div className='rating'>
							<Rating
								stop={5}
								initialRating={props.rating}
								readonly
								emptySymbol={"rating__item empty"}
								fullSymbol={"rating__item full"}
							/>
						</div>
						<div className='card__total-view'>{props.views} views</div>
					</div>
			</div>
		</>
	);
};

export default CardMainPopular;
