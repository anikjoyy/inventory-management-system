import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import InventoryRow from './InventoryRow';

const Inventory = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery('products', () =>
    fetch('https://blooming-beyond-44986.herokuapp.com/products').then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className='text-2xl'>All Products: {products.length}</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Author</th>
              <th>Quantity</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <InventoryRow
                key={product._id}
                product={product}
                refetch={refetch}
              ></InventoryRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
