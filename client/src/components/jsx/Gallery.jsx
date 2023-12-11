// InfiniteScrollImage.js
import React, { useState, useEffect, useRef } from 'react';
import '../styles/Heading.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;

const Image = styled.img`
  max-width: 30%;
  max-height: 30%;
  object-fit: cover;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &.zoomed {
    transform: scale(1.0);
    max-width: 80%;
    max-height: 80%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 5000;
    cursor: zoom-out;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
    transition: none;
    cursor: default;
  }
`;

const imageArray = Array.from({ length: 79 }, (_, index) => `${index + 1}.jpg`);

const InfiniteScrollImage = () => {
  const [images, setImages] = useState([]);
  const [zoomedIndex, setZoomedIndex] = useState(null);

  useEffect(() => {
    setImages(imageArray);
  }, []);

  const handleImageError = (index) => {
    console.error(`Error loading image at index ${index}`);
  };

  const handleImageClick = (index) => {
    if (window.innerWidth > 768) {
      // Only set zoomedIndex on devices larger than 768px
      setZoomedIndex(index === zoomedIndex ? null : index);
    }
  };

  const containerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setZoomedIndex(null);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="beautify-heading">
        <h1>Gallery</h1>
      </div>
      <Container ref={containerRef}>
        {images.map((image, index) => {
          if (index === 25 || index === 46 || index === 63 || index === 65 || index === 66 || index === 67 || index === 68) {
            return null;
          }

          const isZoomed = index === zoomedIndex;
          return (
            <Image
              key={index}
              src={`${process.env.PUBLIC_URL}/assets/gallery/${image}`}
              alt={`Image ${index}`}
              onClick={() => handleImageClick(index)}
              className={isZoomed ? 'zoomed' : ''}
              onError={() => handleImageError(index)}
            />
          );
        })}
      </Container>
    </>
  );
};

export default InfiniteScrollImage;
