import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
    {
        order: -1,
        heading: "World-Class Art for ",
        highlightText: "Everyone, Everywhere",
        description:
            "ArtistryHub collaborates with talented artists and renowned galleries to bring accessible, diverse, and high-quality art collections to individuals and organizations across the globe.",
        BtnText: "Explore More",
        BtnLink: "/",
    },
    {
        order: 1,
        heading: "Art Collections Aligned with Trends",
        description:
            "Save time and effort! Our curated art collections are designed to reflect current trends and cater to the tastes of modern art enthusiasts.",
    },
    {
        order: 2,
        heading: "Our Approach to Art",
        description:
            "ArtistryHub collaborates with talented artists and prestigious galleries to bring you a diverse selection of stunning artwork, making art accessible and inspiring for everyone.",
    },
    {
        order: 3,
        heading: "Authenticity Guaranteed",
        description:
            "ArtistryHub collaborates with renowned artists and galleries to ensure every piece of art is authentic, certified, and a true masterpiece for your collection",
    },
    {
        order: 4,
        heading: "Art Ratings",
        description:
            "ArtistryHub collaborates with art critics and enthusiasts to provide ratings and reviews, helping you discover highly acclaimed and exceptional artwork with ease.",
    },
    {
        order: 5,
        heading: "Ready to Collect",
        description:
            "ArtistryHub partners with top artists and galleries to bring you exclusive, ready-to-purchase artworks that are perfect for any collection.",
    },
];

const LearningGrid = () => {
    return (
        <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
            {LearningGridArray.map((card, index) => {
                return (
                    <div
                        key={index}
                        className={`${index === 0 && "xl:col-span-2 xl:h-[294px]"}  ${card.order % 2 === 1
                            ? "bg-richblack-700 h-[294px]"
                            : card.order % 2 === 0
                                ? "bg-richblack-800 h-[294px]"
                                : "bg-transparent"
                            } ${card.order === 3 && "xl:col-start-2"}  `}
                    >
                        {card.order < 0 ? (
                            <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                                <div className="text-4xl font-semibold ">
                                    {card.heading}
                                    <HighlightText text={card.highlightText} />
                                </div>
                                <p className="text-richblack-300 font-medium">
                                    {card.description}
                                </p>

                                <div className="w-fit mt-2">
                                    <CTAButton active={true} linkto={card.BtnLink}>
                                        {card.BtnText}
                                    </CTAButton>
                                </div>
                            </div>
                        ) : (
                            <div className="p-8 flex flex-col gap-8">
                                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                                <p className="text-richblack-300 font-medium">
                                    {card.description}
                                </p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default LearningGrid;