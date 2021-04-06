import { useEffect, useState } from 'react';

export const DashboardPresentational = props => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted, props])

  return (
      <h1 class="h3 mb-4 text-gray-800">Dashboard</h1>
  );
};

export default DashboardPresentational;