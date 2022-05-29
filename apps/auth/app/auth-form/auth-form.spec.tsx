import { render } from '@testing-library/react';

import AuthForm from './auth-form';

describe('AuthForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthForm />);
    expect(baseElement).toBeTruthy();
  });
});
