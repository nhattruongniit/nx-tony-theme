import { render } from '@testing-library/react';

import ThemesChauCoreComponents from './themes-chau-core-components';

describe('ThemesChauCoreComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemesChauCoreComponents />);
    expect(baseElement).toBeTruthy();
  });
});
