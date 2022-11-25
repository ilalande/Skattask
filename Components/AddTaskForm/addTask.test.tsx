import AddTaskForm from './index';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// Spécs de ce composant = Afficher le placeholder, pouvoir récupérer la valeur de ce qui est entré après un entrée. Actionner la fonction
const mockedSsetTitleTaskEntered = jest.fn();
const mockedAddTaskFn = jest.fn();

const MockAddTaskForm = () => {
  return (
    <AddTaskForm
      placeholder='Ajouter du texte'
      titleTaskEntered='bip'
      setTitleTaskEntered={mockedSsetTitleTaskEntered}
      submitFunction={mockedAddTaskFn}
    />
  );
};

describe('AddTaskForm', () => {
  describe('renders an input with the value', () => {
    beforeEach(() => {
      render(<MockAddTaskForm />);
    });

    it('renders an input', () => {
      const input = screen.getByPlaceholderText('Ajouter du texte');
      expect(input).toBeInTheDocument;
    });
    it('renders an input with the value of  titleTaskEntered', () => {
      const input = screen.getByPlaceholderText('Ajouter du texte');
      expect(input).toHaveValue('bip');
    });
  });
  it('should be call the two function on the input when submited', () => {
    render(<MockAddTaskForm />);
    const input = screen.getByPlaceholderText('Ajouter du texte');
    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'Next title' } });
    fireEvent.submit(input);

    expect(mockedAddTaskFn).toHaveBeenCalled();
    expect(mockedSsetTitleTaskEntered).toHaveBeenCalled();
  });
});
