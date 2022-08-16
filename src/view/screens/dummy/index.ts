import {connect} from 'react-redux';

import Component from './Component';

interface IStateToProps {}

interface IDispatchToProps {}

export interface Props extends IStateToProps, IDispatchToProps {
  dummyText: string;
  componentId?: string;
}

const mapStateToProps = (): IStateToProps => ({});

const mapDispatchToProps = (): IDispatchToProps => ({});

const dummyContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default dummyContainer;
