import TodoList from "../components/TodoList";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
