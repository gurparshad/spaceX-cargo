import { combineReducers } from 'redux';
import shipmentReducer from './shipmentReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  shipment: shipmentReducer,
  menu: menuReducer,
});

export default rootReducer;
