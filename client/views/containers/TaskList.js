import { connect } from "react-redux";
import TaskList from "../components/TaskList";
import { tasksSelectors } from "../../state/ducks/tasks";

const mapStateToProps = state => {
  return {
    tasks: tasksSelectors.getTasks(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
