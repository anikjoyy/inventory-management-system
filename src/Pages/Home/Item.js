import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
  const { _id, name, img, price, quantity, supplierName } = item;
  const navigate = useNavigate();

  const navigateToItemDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className='card-container'>
      <div className='card h-100 bg-base-200 border-danger'>
        <img
          style={{ height: '50vh' }}
          src={img}
          className='card-img-top card-image px-12 py-12 transform hover:scale-105 duration-500'
          alt='...'
        />
        <div className='card-body'>
          <h4 className='card-title text-center'>Name: {name}</h4>
          <p className='mb-1'>
            <span className='fw-bold'>Price: ${price}</span>
          </p>
          <p className='mb-1'>
            <span className='fw-bold'>Author: {supplierName}</span>
          </p>
          <p className='mb-1'>
            Available Stock:{' '}
            <span className='fw-bold'>
              {quantity ? quantity : 'Out of Stock'}
            </span>
          </p>
        </div>
        <button
          onClick={() => navigateToItemDetails(_id)}
          className='btn btn-outline-danger w-50 text-white mx-3 mt-0 mb-4 hover:bg-transparent hover:text-primary-focus'
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Item;
