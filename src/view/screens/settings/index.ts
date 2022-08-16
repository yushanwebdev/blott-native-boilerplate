import {connect} from 'react-redux';

import {RootState} from '../../../../shared/redux/reducers';
import Component from './Component';

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

const mapDispatchToProps = () => ({});

const settingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default settingsContainer;
