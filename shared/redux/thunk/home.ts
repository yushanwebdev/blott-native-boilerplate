/**
 * Thunks are a great place for application business logic
 */
import {HomeService} from '../../services/home';
import {homeDataFetched, homeLaunched} from '../actions/home';
import {AppDispatch} from '../store';

export const loadHome = () => async (dispatch: AppDispatch) => {
  dispatch(homeLaunched());
  const data = await HomeService.loadData('React Native');

  dispatch(homeDataFetched(data));
};
