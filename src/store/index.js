import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk'


const creatStoreWithMiddleware = applyMiddleware(thunk)(createStore);  //applyMiddleware添加中间件

//rootReducer是每次actions发出后经过reducers处理函数处理过又返回的

const configureStore = () => {
    return creatStoreWithMiddleware(rootReducer)
}

const store = configureStore();
//然后我们将整个应用的状态暴露出去
export default store;