import React, { useState, useEffect } from 'react';
import '../../styles/MainCard.css';

type CarouselItem = {
    img_src: string;
    mainHeading: string;
    subHeading: string;
};

type MainCardProps = {
    carousel_data: CarouselItem[];
};

const MainCard: React.FC<MainCardProps> = ({ carousel_data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel_data.length);
        }, 5000); 

        return () => clearInterval(intervalId);
    }, [carousel_data.length]);

    return (
        <div className='mainCard-container'>
            <div className='mainCard-secondaryContainer'>
                <div className="left rounded-20 shadow-white-mid border-white-mid">
                    <img src={carousel_data[currentIndex].img_src} alt="" className='' />
                </div>
                <div className="right">
                    <div className="mainHeading">
                        <h1>{carousel_data[currentIndex].mainHeading}</h1>
                    </div>
                    <div className="subHeading">
                        <p>
                            {carousel_data[currentIndex].subHeading}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCard;
