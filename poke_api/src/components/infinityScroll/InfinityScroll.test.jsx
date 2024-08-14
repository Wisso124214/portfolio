import {describe, expect, it, vi} from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import InfinityScroll from 'infinityScroll/InfinityScroll'

describe('InfiniteScroll', () => {
    it('calls fetchMoreData on scroll to bottom', () => {
      const fetchMoreDataMock = vi.fn();
      render(<InfinityScroll loading={false} fetchMoreData={fetchMoreDataMock} />);
  
      // Simulate scroll
      fireEvent.scroll(window, { target: { scrollY: document.documentElement.scrollHeight - window.innerHeight } });
  
      expect(fetchMoreDataMock).toHaveBeenCalled();
    });
  
    it('not call fetchMoreData when loading is true', () => {
      const fetchMoreDataMock = vi.fn();
      render(<InfinityScroll loading={true} fetchMoreData={fetchMoreDataMock} />);
  
      // Simulate scroll to bottom
      fireEvent.scroll(window, { target: { scrollY: document.documentElement.scrollHeight - window.innerHeight } });
  
      expect(fetchMoreDataMock).not.toHaveBeenCalled();
    });
  });