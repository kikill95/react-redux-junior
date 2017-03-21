import { connect } from 'react-redux';
import { UpdateA } from '../actions/main';
import Element1 from '../components/Element1/index';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    variableA: state.variableA
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (value) => {
      dispatch(UpdateA(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Element1);
