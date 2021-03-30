import { useEffect, useState } from 'react';

export const DashboardPresentational = props => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted, props])

  return (
    <h1>Dashboard</h1>
  );
};

export default DashboardPresentational;