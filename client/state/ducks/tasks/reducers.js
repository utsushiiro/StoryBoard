const initialState = {
  tasks: [
    {
      text: "task1"
    },
    {
      text: "task2"
    }
  ]
};

const noop = (state = initialState, action) => {
  return state;
};

export default noop;
