import { render } from '@testing-library/react';

import ThemesCore from './themes-core';

describe('ThemesCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemesCore />);
    expect(baseElement).toBeTruthy();
  });
});
