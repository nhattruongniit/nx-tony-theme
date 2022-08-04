import { render } from '@testing-library/react';

import { AccountPopover } from './AccountPopover';

describe('AccountPopoverComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountPopover />);
    expect(baseElement).toBeTruthy();
  });
});
