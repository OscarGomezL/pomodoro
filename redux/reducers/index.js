import {combineReducers} from 'redux'
import logger from './logger'

const allReducers = combineReducers({
	log: logger,
})

export default allReducers