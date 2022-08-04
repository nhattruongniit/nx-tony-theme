import { render } from '@testing-library/react';

import { ThemeMode } from './ThemeMode';

describe('ThemeModeComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeMode />);
    expect(baseElement).toBeTruthy();
  });
});
