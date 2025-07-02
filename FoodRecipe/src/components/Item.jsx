import React from 'react';

function Item({ item }) {
  return (
    <div>
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
        alt={item.name}
      />
      <h3>
        {item.name} : {item.amount} {item.unit}
      </h3>
    </div>
  );
}

export default Item;
