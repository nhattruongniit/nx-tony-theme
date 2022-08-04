import { render } from '@testing-library/react';

import ThemesChauCoreConfigs from './themes-chau-core-configs';

describe('ThemesChauCoreConfigs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemesChauCoreConfigs />);
    expect(baseElement).toBeTruthy();
  });
});
