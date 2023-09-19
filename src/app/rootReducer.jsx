import { combineReducers } from '@reduxjs/toolkit';
import OrderDetailsReducer from '../modules/Order_details/slices/OrderDetailsSlice';
import SelectedCategorySliceReducer from '../modules/Main_catalog/components/slices/SelectedCategorySlice';
import OrdersFeedSliceReducer from '../modules/Order_details/slices/OrdersFeedSlice';
import toggleModalSlice from '../modules/Order_details/slices/toggleModalSlice';
import OrderInformation from '../modules/Order_details/slices/OrderInformation';

const rootReducer = combineReducers({
  OrderDetails: OrderDetailsReducer,
  Categories: SelectedCategorySliceReducer,
  OrdersFeed: OrdersFeedSliceReducer,
  ModalSlice: toggleModalSlice,
  OrderTotal: OrderInformation
});

export default rootReducer;