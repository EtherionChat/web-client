import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useBoop from './use-boop';

describe('useBoop', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useBoop());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
