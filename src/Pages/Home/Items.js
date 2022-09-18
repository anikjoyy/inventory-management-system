import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Item from './Item';

const Items = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://blooming-beyond-44986.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='mx-12 my-10'>
      <h4 className='text-2xl text-secondary text-center my-12'>
        Available Books
      </h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {items.slice(-6).map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
        {isLoading ? <Loading></Loading> : Items}
      </div>
      <div>
        <Link to='/products' className='text-secondary'>
          See All
        </Link>
      </div>
    </div>
  );
};

export default Items;
