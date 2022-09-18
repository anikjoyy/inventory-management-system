import React from 'react';

const Banner = () => {
  return (
    <div className='hero min-h-[70vh] bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold text-primary'>Books Warehouse</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='btn btn-primary'>Let's Go</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
