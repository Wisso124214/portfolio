import { useEffect } from 'react';

const InfinityScroll = ({ loading, fetchMoreData }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 100 || loading) return;
      fetchMoreData();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, fetchMoreData]);

  return null;
};

export default InfinityScroll;