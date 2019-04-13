const initialState = {
  tasks: [
    {
      title: "task1",
      description: "task1 description",
      createdAt: "2019-3-22"
    },
    {
      title: "task2",
      description: "task2 description",
      createdAt: "2019-3-23"
    }
  ]
};

const noop = (state = initialState, action) => {
  return state;
};

export default noop;
