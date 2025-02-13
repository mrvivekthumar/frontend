import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import ArtImage_Card from './ArtImageCard';

const ArtImageSlider = ({ ArtImages, Reviews }) => {
    const renderArtImages = () => {
        if (ArtImages.length) {
            return (
                <Swiper
                    navigation={true}
                    slidesPerView={1}
                    spaceBetween={25}
                    pagination={true}
                    loop={ArtImages.length > 1}
                    modules={[FreeMode, Pagination, Autoplay]}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="max-h-[30rem] mx-auto"
                >
                    {ArtImages.map((image, i) => (
                        <SwiperSlide key={i}>
                            <ArtImage_Card artImage={image} Height={"h-[230px]  md:h-[250px]"} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            );
        } else {
            return <p className="text-xl text-richblack-5">No ArtImage Found</p>;
        }
    };

    const renderReviews = () => {
        if (Reviews && Reviews.length) {
            return (
                <Swiper
                    navigation={true}
                    slidesPerView={1}
                    spaceBetween={25}
                    pagination={true}
                    loop={Reviews.length > 1}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="max-h-[30rem] mx-auto"
                >
                    {Reviews.map((review, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white p-4 rounded-md shadow-md">
                                <p className="text-lg font-semibold">{review.title}</p>
                                <p className="text-gray-600">{review.body}</p>
                                <p className="text-sm text-gray-500">{review.author}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            );
        } else {
            return <p className="text-xl text-richblack-5">No Reviews Yet</p>;
        }
    };

    return (
        <>
            {renderArtImages()}
            {renderReviews()}
        </>
    );
};

export default ArtImageSlider;
