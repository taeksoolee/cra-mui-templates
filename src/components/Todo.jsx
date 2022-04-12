import React from 'react';

import TodoItem from './TodoItem';
import { Button } from '@material-ui/core';

import './Todo.scss';

import { useTodos } from '../api';

export default function Todo() {
  const {
    data, error, isFetching
  } = useTodos();

  if(!data && isFetching) {
    return (<div>Fetiching...</div>)
  }

  if(!data && !isFetching && error) {
    return (<div>Error...</div>)
  }

  return (
    <div className='todo'>
      <h1>Todo List</h1>
      {data.map((todo, i) => (
        <TodoItem 
          key={i}
          item={todo}
        />
      ))}
      <Button 
        variant='contained'
        color="primary"
      >
        submit
      </Button>
    </div>
  )
}