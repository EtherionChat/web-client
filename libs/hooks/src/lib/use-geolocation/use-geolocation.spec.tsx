import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useGeolocation from './use-geolocation';

describe('useGeolocation', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useGeolocation());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
