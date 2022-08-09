import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment, reset, incrementByAmount } from './counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <input type='text' value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
      <div>
        <button onClick={resetAll}>reset</button>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>add amount</button>
      </div>
    </div>
  );
};
