import React from 'react';

export default function TodoItem({item}) {
  const { name } = item;
  return (
    <div>{name}</div>
  )
}