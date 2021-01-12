import { configureStore } from '@reduxjs/toolkit';
import nominationReducer from '../features/components/Nominations/NominationSlice';
import searchReducer from '../features/components/Search/SearchSlice'



export default configureStore({
  reducer: {
    nomination: nominationReducer,
    search: searchReducer
  },
});
