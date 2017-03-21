import { connect } from 'react-redux';
import { UpdateA } from '../actions/main';
import Element2 from '../components/Element2/index';

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

export default connect(mapStateToProps, mapDispatchToProps)(Element2);
