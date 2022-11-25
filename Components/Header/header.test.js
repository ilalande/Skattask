import { renderWithProvider, screen } from '../../test-utils';
import Header from '../Header';

import '@testing-library/jest-dom';

// From https://github.com/nextauthjs/next-auth/issues/4184

jest.mock('next-auth/react', () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { name: 'bob' },
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return { data: mockSession, status: 'unauthenticated' };
    }),
  };
});

describe('Header', () => {
  it('Matches snapshot', async () => {
    const header = renderWithProvider(<Header />);
    expect(header).toMatchSnapshot();
  });
  it('Shows "sign out" if user is logued', async () => {
    renderWithProvider(<Header />);
    const logoutButton = screen.getByRole('button');
    expect(logoutButton).toHaveTextContent('sign out');
  });
});
