import { render } from '@testing-library/react';

import ThemesChauCore from './themes-chau-core';

describe('ThemesChauCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemesChauCore />);
    expect(baseElement).toBeTruthy();
  });
});
