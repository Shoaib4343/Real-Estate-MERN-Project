import React, { useState, useEffect } from "react";

// Images for testimonials
import aboutImg1 from "../../public/services.jpeg";
import aboutImg2 from "../../public/one (1).jpeg";
import aboutImg3 from "../../public/one (3).jpeg";
import aboutImg4 from "../../public/one (4).jpeg";
import aboutImg5 from "../../public/one (5).jpeg";
import aboutImg6 from "../../public/one (6).jpeg";
import aboutImg7 from "../../public/one (7).jpeg";
import aboutImg8 from "../../public/one (8).jpeg";
import aboutImg9 from "../../public/one (11).jpeg";

// Quote Icon
import quoteIcon from "../../public/quate_icon.png";

// Testimonial data
const testimonialsData = [
    {
        img: aboutImg1,
        name: "Michael Thompson",
        profession: "Software Engineer",
        feedback: "Top-notch real estate service, always available with expert guidance. Highly professional and truly dedicated to clients' needs.",
    },
    {
        img: aboutImg2,
        name: "Daniel Martinez",
        profession: "Product Designer",
        feedback: "Dedicated real estate experts, always ready to help. Their support was invaluable throughout my buying experience.",
    },
    {
        img: aboutImg3,
        name: "Michael Smith",
        profession: "Medical Officer",
        feedback: "Fantastic real estate experience. The team was professional, responsive, and genuinely focused on my needs.",
    },
    {
        img: aboutImg4,
        name: "Emily Johnson",
        profession: "Data Scientist",
        feedback: "Incredible customer service with a professional team. They made my home buying process smooth and enjoyable.",
    },
    {
        img: aboutImg5,
        name: "James Williams",
        profession: "Entrepreneur",
        feedback: "Highly recommend their services for any real estate needs. Very knowledgeable and responsive.",
    },
    {
        img: aboutImg6,
        name: "Sophia Brown",
        profession: "Architect",
        feedback: "The real estate experts guided me through every step of the process with great advice and support.",
    },
    {
        img: aboutImg7,
        name: "Liam Davis",
        profession: "Marketing Specialist",
        feedback: "Their expertise made my property search stress-free. Wonderful experience working with their team.",
    },
    {
        img: aboutImg8,
        name: "Olivia Wilson",
        profession: "HR Manager",
        feedback: "Exceptional service and attention to detail. I couldn't be happier with my new home.",
    },
    {
        img: aboutImg9,
        name: "Ethan Martinez",
        profession: "Photographer",
        feedback: "They truly care about their clients and work tirelessly to ensure satisfaction. Amazing experience!",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [cardsPerSlide, setCardsPerSlide] = useState(3);

    // Update the number of cards per slide based on screen size
    useEffect(() => {
        const updateCardsPerSlide = () => {
            if (window.innerWidth < 640) setCardsPerSlide(1); // Mobile: 1 card
            else if (window.innerWidth < 1024) setCardsPerSlide(2); // Tablet: 2 cards
            else setCardsPerSlide(3); // Desktop: 3 cards
        };

        updateCardsPerSlide();
        window.addEventListener("resize", updateCardsPerSlide);
        return () => window.removeEventListener("resize", updateCardsPerSlide);
    }, []);

    const totalSlides = Math.ceil(testimonialsData.length / cardsPerSlide);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex, totalSlides]);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
            setIsAnimating(false);
        }, 500); // Match this to your CSS transition duration
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
            );
            setIsAnimating(false);
        }, 500);
    };

    return (
        <div >
            <section className="bg-pink-50 py-16 overflow-hidden my-10">
                <div className="max-w-screen-2xl container mx-auto px-5">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                            Clients speak volumes{" "}
                            <span className="text-orange-500">about us</span>
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Listen to the stories of our satisfied clients, sharing their
                            experiences and successes with our exceptional real estate
                            services.
                        </p>
                    </div>

                    {/* Testimonial Cards Slider */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)`,
                            display: "flex",
                        }}
                    >
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <div
                                key={index}
                                className="min-w-full flex gap-8 justify-center"
                            >
                                {testimonialsData
                                    .slice(index * cardsPerSlide, index * cardsPerSlide + cardsPerSlide)
                                    .map((testimonial, i) => (
                                        <div
                                            key={i}
                                            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between relative"
                                        >
                                            {/* Quote Icon */}
                                            <img
                                                src={quoteIcon}
                                                alt="quote icon"
                                                className="w-6 h-6 absolute top-4 left-4 opacity-50"
                                            />
                                            <div className="mb-4 text-center">
                                                <img
                                                    src={testimonial.img}
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 rounded-full object-cover mx-auto"
                                                />
                                            </div>
                                            <p className="text-gray-700 text-sm mb-3 text-center">
                                                "{testimonial.feedback}"
                                            </p>
                                            <div className="text-center">
                                                <h4 className="text-gray-800 font-semibold">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-gray-500 text-sm">
                                                    {testimonial.profession}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>

                    {/* Dots for Slider */}
                    <div className="flex justify-center mt-6">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                                    index === currentIndex
                                        ? "bg-orange-500"
                                        : "bg-gray-300"
                                }`}
                                onClick={() => setCurrentIndex(index)}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
