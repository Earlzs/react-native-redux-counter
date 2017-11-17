import * as TYPES  from './types';

const increase = () => ({ type: TYPES.INCREASE });
const decrease = () => ({ type: TYPES.DECREASE });
const reset = () => ({ type: TYPES.RESET });

export {
    increase,
    decrease,
    reset
}