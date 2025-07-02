import React from 'react';
import Item from './Item';

function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          <h1>Ingredients</h1>
          {food.extendedIngredients.map((item) => (
            <Item item={item} key={item.name}></Item>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemList;
