import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('./components/WaterDropsBackground', () => () => null);

beforeAll(() => {
  global.IntersectionObserver = class {
    constructor(callback) {
      this.callback = callback;
    }

    observe() {
      this.callback([{ isIntersecting: true }], this);
    }

    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };

  window.scrollTo = jest.fn();
});

test('renders the portfolio home heading', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const heading = screen.getByRole('heading', { name: /i build/i });
  expect(heading).toBeInTheDocument();
});
