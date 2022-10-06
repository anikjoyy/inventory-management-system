import React from 'react';
import BackgroundImage from '../../Assets/Images/background.jpg';

const Banner = () => {
  return (
    <div
      className='hero min-h-[70vh]'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${BackgroundImage})`,
      }}
    >
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold text-primary'>Books Warehouse</h1>
          <p className='py-6 text-white'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='btn btn-secondary'>Let's Go</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
