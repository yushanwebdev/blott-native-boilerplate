import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../../../shared/redux/reducers';
import {loadHome} from '../../../../shared/redux/thunk/home';
import Component from './Component';

interface IStateToProps {}

interface IDispatchToProps {
  loadHome: () => (
    dispatch: Dispatch<any>,
    getState: () => RootState,
  ) => Promise<void>;
}

export interface Props extends IStateToProps, IDispatchToProps {
  name: string;
  componentId: string;
}

const mapStateToProps = (): IStateToProps => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
): IDispatchToProps => ({
  loadHome: () => dispatch(loadHome()),
});

const homeContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default homeContainer;
