import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import '../styles/ScrollToTopArrow.css';


const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollY, setPrevScrollY] = useState(0);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    toggleVisibility();

    if (window.scrollY > prevScrollY) {
      setScrollDirection('down');
    } else if (window.scrollY < prevScrollY) {
      setScrollDirection('up');
    }

    setPrevScrollY(window.scrollY);
  };

  const scrollToTop = (e) => {
    e.preventDefault(); // Prevent the default behavior of the click event

    window.removeEventListener('scroll', handleScroll);

    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    });

    // Wait for the scroll to complete before re-attaching the scroll event listener
    setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 20000); // Adjust the timeout as needed
  };

  const scrollToBottom = (e) => {
    e.preventDefault();

    window.removeEventListener('scroll', handleScroll);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

    setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 20000);
  };


  useEffect(() => {
    let isScrolling;

    const handleScrollThrottled = () => {
      clearTimeout(isScrolling);
      handleScroll();

      isScrolling = setTimeout(() => {
        setIsVisible(false);
      }, 20000);
    };

    window.addEventListener('scroll', handleScrollThrottled);

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
    };
    //  eslint-disable-next-line
  }, [prevScrollY]); // Added prevScrollY as a dependency

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollDirection === 'up' ? scrollToTop : scrollToBottom}>
      {scrollDirection === 'up' ? <FaArrowUp /> : <FaArrowDown />}
    </div>
  );

};

export default ScrollToTopArrow;
