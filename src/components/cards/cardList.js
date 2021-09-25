import React from 'react';
import CardView from './card';

function CardList() {
  const list = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {list.map((e, i) => {
        return <CardView />;
      })}
    </>
  );
}

export default CardList;
