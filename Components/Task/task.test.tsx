import Task from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Task', () => {
  describe('task not endend initialized with title="Title test", userName="Jonh" and adte="1er juin 2022", should render these 3 infos if existing and not taskTextEnded class ', () => {
    beforeEach(() => {
      render(
        <Task
          title='Title Test'
          userName='Jonh'
          date='1er juin 2022'
          ended={false}
        />
      );
    });

    it('renders the good title', () => {
      const title = screen.getByText('Title Test');
      expect(title).toHaveTextContent('Title Test');
    });
    it('renders the good  userName ', () => {
      const userName = screen.getByTestId('userName');
      expect(userName).toHaveTextContent('Jonh');
    });
    it('renders the good date', () => {
      const date = screen.getByTestId('date');
      expect(date).toHaveTextContent('1er juin 2022');
    });
    it(' task not ended should not have "taskTextEnded class"', () => {
      const divElement = screen.getByTestId('divWrap');
      expect(divElement).not.toHaveClass('taskTextEnded');
    });
  });
  describe('task not endend initialized with title="Title test", no userName, no date', () => {
    beforeEach(() => {
      render(<Task title='TitleTest' ended={false} />);
    });

    it('renders no  userName ', () => {
      const userName = screen.getByTestId('userName');
      expect(userName).not.toBeInTheDocument;
    });
    it('renders no date', () => {
      const date = screen.getByTestId('date');
      expect(date).not.toBeInTheDocument;
    });
  });
  describe('task with no title send an error message', () => {
    it('renders error message if title is empty string ', () => {
      const resultFn = () => {
        render(<Task title='' ended={false} />);
      };
      expect(resultFn).toThrowError;
    });
  });
  describe('task endend initialized with title="Title test", userName="Jonh" and date="1er juin 2022", should render with taskTextEnded class and with the title crossed out', () => {
    beforeEach(() => {
      render(
        <Task
          title='Title Test'
          userName='Jonh'
          date='1er juin 2022'
          ended={true}
        />
      );
    });

    it(' task ended should have "taskTextEnded class"', () => {
      const divElement = screen.getByTestId('divWrap');
      expect(divElement).toHaveClass('taskTextEnded');
    });
    // Another option (better?) : check if the title is crossed out
    it(' task ended should have the title crossed out', () => {
      const divElement = screen.getByTestId('divWrap');
      expect(divElement).toHaveStyle('text-decoration: line-through');
    });
  });
});
