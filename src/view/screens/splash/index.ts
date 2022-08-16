import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

import {RootState} from '../../../../shared/redux/reducers';
import {splashScreenLaunched} from '../../../../shared/redux/thunk/app';
import Component from './Component';

interface IStateToProps {}

interface IDispatchToProps {
  splashLaunched: () => (
    dispatch: Dispatch<any>,
    getState: () => RootState,
  ) => void;
}

export interface Props extends IStateToProps, IDispatchToProps {
  componentId: string;
}

const mapStateToProps = (state: RootState): IStateToProps => ({
  app: state.app,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
): IDispatchToProps => ({
  splashLaunched: () => dispatch(splashScreenLaunched()),
});

const splashContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default splashContainer;
