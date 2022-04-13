import React from 'react';

import TodoItem from './TodoItem';
import { Typography, TextField, Button } from '@mui/material';

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
      <Typography component='h1' variant='h1'>
        Todo List
      </Typography>

      {data.map((todo, i) => (
        <TodoItem 
          key={i}
          item={todo}
        />
      ))}

      <TextField 
        label="field"
        variant='standard'
        color='info'
      />
      
      <Button 
        variant='contained'
        // color="neutral"
        color='primary'
      >
        submit
      </Button>
    </div>
  )
}