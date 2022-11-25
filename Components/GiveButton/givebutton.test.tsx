import GiveButton from '.';
import { renderWithProvider, screen, fireEvent } from '../../test-utils';

// Spécs de ce composant :
// Le bouton user a la valeur par défaut "attribué à" s'il n'y a pas de userAgent.
// Sinon affiche le nom de l'utilisateur
// Si on click, affiche la liste des users. Possibilité de sélectionner un user
// Idem pour bouton date

describe('GiveButton', () => {
  describe('renders a button with title by default if authorName is empty and author if authorName is filled', () => {
    it('renders a button', () => {
      renderWithProvider(
        <GiveButton title='Default Text' type='user' image='/give-user.svg' />
      );
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument;
      expect(button).toHaveTextContent('Default Text');
    });
    it('renders a button with authorName by default if authorName is filled', () => {
      renderWithProvider(
        <GiveButton
          title='Default Text'
          type='user'
          image='/give-user.svg'
          userInStore='Bill'
        />
      );
      const button = screen.getByRole('button');

      expect(button).toHaveTextContent('Bill');
    });
  });
  // describe('renders a button which can be clicked to choose an author', () => {
  //   it('renders an input', () => {
  //    renderWithProvider(
  //       <GiveButton title='Default Text' type='user' image='/give-user.svg' />
  //     );

  //     const button = screen.getByRole('button');
  //     fireEvent.click(button);
  //     screen.debug;
  //     const userChosen = screen.getByTestId('userList-1');
  //     fireEvent.click(userChosen);
  //     expect(button).toHaveTextContent('Bill');
  //   });
  // });

  // A exploiter (mais hors de ma portée ) https://redux.js.org/usage/writing-tests#connected-components
});
