import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddItem = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { isLoading } = useQuery('product', () =>
    fetch('http://localhost:5000/products').then((res) => res.json())
  );

  const imageStorageKey = 'c9892aa85b6e645ea1658cd548d36ce0';

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            img: img,
            shortDescription: data.shortDescription,
            price: data.price,
            quantity: data.quantity,
            supplierName: data.supplierName,
          };
          // send to your database
          fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success('Product added successfully');
                reset();
              } else {
                toast.error('Failed to add the product');
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className='text-2xl font-bold text-center text-primary mt-4'>
        Add a New Product
      </h2>
      <div className='flex h-[80vh] justify-center items-center'>
        <form
          className='border-4 border-base-300 px-3 py-3 bg-base-200 shadow-xl'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='form-control w-full max-w-xs '>
            <label className='label'>
              <span className='label-text'>Product Name</span>
            </label>
            <input
              type='text'
              placeholder='Product Name'
              className='input input-bordered w-full max-w-xs'
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is Required',
                },
              })}
            />
            <label className='label'>
              {errors.name?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Photo</span>
            </label>
            <input
              type='file'
              className='input input-bordered w-full max-w-xs'
              {...register('image', {
                required: {
                  value: true,
                  message: 'Image is Required',
                },
              })}
            />
            <label className='label'>
              {errors.name?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Description</span>
            </label>
            <textarea
              className='textarea w-full max-w-md'
              name='message'
              placeholder='Product Description'
              rows={4}
              {...register('shortDescription', {
                required: {
                  value: true,
                  message: 'Description is Required',
                },
              })}
            />
            <label className='label'>
              {errors.name?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full max-w-xs '>
            <label className='label'>
              <span className='label-text'>Price</span>
            </label>
            <input
              type='number'
              placeholder='Product Price'
              className='input input-bordered w-full max-w-xs'
              {...register('price', {
                required: {
                  value: true,
                  message: 'Price is Required',
                },
              })}
            />
            <label className='label'>
              {errors.name?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full max-w-xs '>
            <label className='label'>
              <span className='label-text'>Quantity</span>
            </label>
            <input
              type='number'
              placeholder='Product Quantity'
              className='input input-bordered w-full max-w-xs'
              {...register('quantity', {
                required: {
                  value: true,
                  message: 'Quantity is Required',
                },
              })}
            />
            <label className='label'>
              {errors.name?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className='form-control w-full max-w-xs '>
            <label className='label'>
              <span className='label-text'>Author</span>
            </label>
            <input
              type='text'
              placeholder='Author Name'
              className='input input-bordered w-full max-w-xs'
              {...register('supplierName', {
                required: {
                  value: true,
                  message: 'Author Name is Required',
                },
              })}
            />
            <label className='label'>
              {errors.name?.type === 'required' && (
                <span className='label-text-alt text-red-500'>
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <input
            className='btn w-full max-w-xs text-white'
            type='submit'
            value='Add'
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
