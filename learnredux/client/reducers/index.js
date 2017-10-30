import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './posts'
import comments from './comments'

const rootReduce = combineReducers({
  posts,
  comments,
  routing: routerReducer
})

export default rootReduce
