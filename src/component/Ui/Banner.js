import React from 'react';
import { Carousel } from 'antd';

const images = [
    'https://media.istockphoto.com/id/1190641416/photo/streaming-live-esport-event-on-computer-at-home.jpg?s=612x612&w=0&k=20&c=llsUBVdhL9uJHlDCrxbqWu1DD22sUWMSvab88NtXuN8=',
    'https://media.istockphoto.com/id/1314343964/photo/top-end-system-unit-for-gaming-computer-close-up.jpg?s=612x612&w=0&k=20&c=d_xKRis8Ccy90gbqCjScpuAEVOvpQN0kdnBxA_H9zRs=',
    // Add other image URLs here
];

const Banner = () => (
    <Carousel autoplay>
        {images.map((imageUrl, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', background: '#364d79' }}>
                <img src={imageUrl} alt={`Image ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '440px', marginTop: '20px' }} />
            </div>
        ))}
    </Carousel>
);

export default Banner;
