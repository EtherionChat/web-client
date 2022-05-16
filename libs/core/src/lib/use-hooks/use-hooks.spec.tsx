import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useHooks from './use-hooks';

describe('useHooks', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useHooks());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
