import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/global-style';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import 'jest-styled-components';

const initialState = {
  tasks: {
    allTasks: [],
  },
  task: {},
  users: { allUsers: [], loggedUser: {} },
};
const mockStore = configureStore();
const store = mockStore(initialState);

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';
export { customRender as renderWithProvider };

// import { render } from '@testing-library/react';
// import { ThemeProvider } from 'styled-components';
// import { mainTheme } from './styles/global-style';
// import configureStore from 'redux-mock-store';
// import { Provider } from 'react-redux';
// import '@testing-library/jest-dom';
// import 'jest-styled-components';
// import rootReducer from './redux/reducers/index';

// const initialState = {
//   tasks: {
//     allTasks: [],
//   },
//   task: {},
//   users: { allUsers: [], loggedUser: {} },
// };
// const mockStore = configureStore({
//   reducer: rootReducer,
//   initialState,
// });

// let options = {};
// options = { initialState, mockStore, ...options };

// const AllTheProviders = ({ children }) => {
//   return (
//     <Provider store={mockStore}>
//       <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
//     </Provider>
//   );
// };

// const customRender = (ui, options) =>
//   render(ui, { wrapper: AllTheProviders, ...options });

// // re-export everything
// export * from '@testing-library/react';
// export { customRender as renderWithProvider };
