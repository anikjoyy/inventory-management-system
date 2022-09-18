import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ItemDetails = () => {
  const [items, setItems] = useState({});
  const { _id, name, img, price, shortDescription, quantity, supplierName } =
    items;
  const { productId } = useParams();

  useEffect(() => {
    const getItemById = async () => {
      const url = `https://localhost:5000/products/${productId}`;
      const { data } = await axios.get(url);
      setItems(data);
    };
    getItemById();
  }, [items, productId]);

  // DELIVERED
  const handleDelivered = (id) => {
    const getQuantity = async () => {
      const newUpdate = { quantity };
      const url = `https://localhost:5000/delivered/${_id}`;
      const { data } = await axios.put(url, newUpdate);
      console.log(data);
      if (data.modifiedCount) {
        toast.success('Successfully Delivered', { id: 'test' });
      }
    };
    getQuantity();
  };

  // ADD TO STOCK
  const handleAddToStock = async (event) => {
    event.preventDefault();

    const getQuantity = event.target.add.value;
    if (getQuantity >= 1) {
      const newQuantity = parseInt(getQuantity) + parseInt(quantity);

      const url = `https://localhost:5000/addtostock/${productId}`;
      const { data } = await axios.put(url, { newQuantity });

      if (data.modifiedCount === 1 || data.matchedCount === 1) {
        toast.success('Successfully added to stock');
      }
    }

    event.target.reset();
  };

  return (
    <div className='flex flex-col w-full lg:flex-row bg-base-200'>
      <div className='card lg:card-side bg-base-100 shadow-xl my-5 mx-12 lg:mx-52'>
        <figure>
          <img style={{ height: '50vh' }} src={img} alt='Album' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Name: {name}</h2>
          <div className='card-body'>
            <p>Description: {shortDescription}</p>
            <p>Price: ${price}</p>
            <p>Author: {supplierName}</p>
            <p>
              Available Stock:{' '}
              <span className='text-danger fw-bold'>
                {quantity ? quantity : 'Out of Stock'}
              </span>
            </p>
          </div>
          <div>
            <button
              onClick={handleDelivered}
              className='btn btn-outline-danger text-white'
            >
              Delivered
            </button>
          </div>
        </div>
      </div>

      <div className='divider lg:divider-horizontal'></div>

      <div className='card w-full max-w-sm shadow-xl bg-base-100 mx-auto justify-center items-center my-3'>
        <h2 className='text-center text-primary font-bold text-3xl mt-2'>
          Add Stock
        </h2>
        <form
          onSubmit={handleAddToStock}
          className='grid grid-cols-1 gap-3 justify-items-center mt-2'
        >
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Add Quantity</span>
            </label>
            <input
              type='number'
              name='add'
              placeholder='Add Quantity'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control'>
            <input
              className='w-100 btn btn-outline-danger w-100 mx-auto text-white mt-0 mb-4 py-3'
              type='submit'
              value='Add to Stock'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemDetails;
