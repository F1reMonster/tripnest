import React from "react";
import CardMainPopular from "../components/Card_Polular/CardMainPopular";
import Search from "../components/Search/Search";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const Main = () => {
	return (
		<>
			<div className='container'>
				<div className='main'>
					<div className='main__search'>
						<Search />

						<div className='main__img'>
							<img src='/img/town-view.jpg' alt='' />
						</div>
					</div>
				</div>
			</div>

			<div className='container__full'>
				<div className='container'>
					<div className='main__wrapper'>
						<div className='main__wrapper-item'>
							<div className='main__wrapper-img'>
								<img src='/img/great-selection.png' alt='' />
							</div>
							<div className='main__wrapper-text'>
								<h3 className='title'>Great selection</h3>
								<p className='text'>
									Over&nbsp;1,4 million accomdations, hotels, villas and
									apartments.
								</p>
							</div>
						</div>
						<div className='main__wrapper-item'>
							<div className='main__wrapper-img'>
								<img src='/img/best-prices.png' alt='' />
							</div>
							<div className='main__wrapper-text'>
								<h3 className='title'>Best prices</h3>
								<p className='text'>
									We&nbsp;allwash push over prices to&nbsp;be&nbsp;the lowest
									in&nbsp;the market.
								</p>
							</div>
						</div>
						<div className='main__wrapper-item'>
							<div className='main__wrapper-img'>
								<img src='/img/fast-cancelation.png' alt='' />
							</div>
							<div className='main__wrapper-text'>
								<h3 className='title'>Fast cancelation</h3>
								<p className='text'>
									Cancel your booking with one click and money
									is&nbsp;on&nbsp;the way.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='container'>
				<div className='main__popular'>
					<div className='main__popular-title'>
						<span>Popular</span> accomdations today
					</div>

					<div className='main__popular-list'>
						<Swiper
							breakpoints={{
								1360: {
									slidesPerView: 4,
								},
								1024: {
									slidesPerView: 3,
								},
								650: {
									slidesPerView: 2,
								},
								649: {
									slidesPerView: 1.5,
								}
							}}
						>
							<SwiperSlide>
								<CardMainPopular rating='3.59' views='523' title="Mace Resort and Spa" />
							</SwiperSlide>
							<SwiperSlide>
								<CardMainPopular rating='1.11' views='235' title="Marbella Mace Spa and Resort" />
							</SwiperSlide>
							<SwiperSlide>
								<CardMainPopular rating='4' views='664' title="Amace Spa and Resort" />
							</SwiperSlide>
							<SwiperSlide>
								<CardMainPopular rating='3' views='123' title="Marbella Mace Spa and Resort" />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
