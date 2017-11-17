


import { combineReducers } from 'redux';
import counter from './counter'     //导入计算reducers

export default combineReducers({  //将所有的reducers包装在一起
  counter,
}); 