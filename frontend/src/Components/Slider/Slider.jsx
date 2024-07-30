import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import '../Navbar/Navbar.css'
import './Slider.css';
import demoImage from '../Assets/demo.jpg';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sliderWrapperRef = useRef(null);
    const slideRefs = useRef([]);
    const autoSlideInterval = useRef(null);

    const slides = [
        { imgSrc: demoImage, title: 'enjoy next level of', description: 'Tension-Proof And Durabilty Of Strang And Toughness Aloy Head Boom', button: 'Button 1', title2: 'gamming', button2: 'Button 1-2' },
        { imgSrc: demoImage, title: 'enjoy next level of', description: 'Tension-Proof And Durabilty Of Strang And Toughness Aloy Head Boom', button: 'Button 1', title2: 'gamming', button2: 'Button 1-2' },
        { imgSrc: demoImage, title: 'enjoy next level of', description: 'Tension-Proof And Durabilty Of Strang And Toughness Aloy Head Boom', button: 'Button 1', title2: 'gamming', button2: 'Button 1-2' },
    ];

    const totalSlides = slides.length;

    const moveToNextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }
    };

    const moveToPrevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
        }
    };

    const startAutoSlide = () => {
        autoSlideInterval.current = setInterval(moveToNextSlide, 5000);
    };

    const stopAutoSlide = () => {
        if (autoSlideInterval.current) {
            clearInterval(autoSlideInterval.current);
        }
    };

    useEffect(() => {
        const updateSlider = () => {
            const slideWidth = slideRefs.current[0].clientWidth;
            sliderWrapperRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        };

        const handleTransitionEnd = () => {
            setIsTransitioning(false);
        };

        updateSlider();
        sliderWrapperRef.current.addEventListener('transitionend', handleTransitionEnd);
        window.addEventListener('resize', updateSlider);

        startAutoSlide();

        return () => {
            if (sliderWrapperRef.current) {
                sliderWrapperRef.current.removeEventListener('transitionend', handleTransitionEnd);
            }
            window.removeEventListener('resize', updateSlider);
            stopAutoSlide();
        };
    }, [currentIndex]);

    return (
        <div className="slider" onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
            <div className="slider-container">
                <button className="nav prev" onClick={moveToPrevSlide}><ChevronLeft size={20} absoluteStrokeWidth /></button>
                <div className="slider-wrapper" ref={sliderWrapperRef}>
                    {slides.map((slide, index) => (
                        <Slide key={index} slide={slide} slideRefs={slideRefs} />
                    ))}
                </div>
                <button className="nav next" onClick={moveToNextSlide}><ChevronRight size={20} absoluteStrokeWidth /></button>
            </div>
        </div>
    );
};

const Slide = ({ slide, slideRefs }) => {
    return (
        <div className="slide" ref={(el) => slideRefs.current.push(el)}>
            <img className="bg-image" src={slide.imgSrc} alt={`Slide ${slide.title}`} />
            <div className="slide-content">
                <h3>{slide.title}</h3>
                <h1>{slide.title2}</h1>
                <div className="slide-description">
                    <p>{slide.description}</p>
                </div>
                <div className="slide-button nav-login-cart">
                    {/* <button>{slide.button}</button> */}
                    {/* <button>{slide.button2}</button> */}
                    <Link style={{ textDecoration: 'none' }} to='/login'><button style={{ background: '#8262d2' }}>{slide.button}<ArrowRight style={{width: '22px', height: '22px', lineHeight: '30px', marginLeft: '10px'}} /></button></Link>
                    <Link style={{ textDecoration: 'none' }} to='/login'><button  className="button-none-active" style={{ background: 'transparent' }}>{slide.button2}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;
