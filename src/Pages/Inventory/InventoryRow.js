import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryRow = ({ product }) => {
  const { _id, name, img, price, quantity, supplierName } = product;

  const navigate = useNavigate();

  const navigateToItemDetails = (id) => {
    navigate(`/products/${id}`);
  };

  // DELETE ITEM
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      const url = `https://blooming-beyond-44986.herokuapp.com/products/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <>
      <tr>
        <td>
          <div className='avatar'>
            <div className='w-8 rounded'>
              <img src={img} alt={name} />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{supplierName}</td>
        <td>{quantity}</td>
        <td>
          <button
            onClick={() => navigateToItemDetails(_id)}
            className='btn btn-xs'
          >
            Edit
          </button>
        </td>
        <td>
          <button
            onClick={() => handleDelete(product._id)}
            className='btn btn-xs'
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default InventoryRow;
