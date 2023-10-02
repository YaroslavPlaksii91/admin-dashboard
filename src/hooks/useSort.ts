import { useState, useMemo, useCallback } from 'react';

export const useSort = <T>(data: T[]) => {
  const [sortKey, setSortKey] = useState<string>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSort = useCallback(
    (key: string) => {
      if (key === sortKey) {
        setSortDirection(prevDirection =>
          prevDirection === 'asc' ? 'desc' : 'asc',
        );
      } else {
        setSortKey(key);
        setSortDirection('asc');
      }
    },
    [sortKey],
  );

  const sortData = (data: any[], key: string) => {
    return [...data].sort((a, b) => {
      const valueA = typeof a[key] === 'object' ? a[key].name : a[key];
      const valueB = typeof b[key] === 'object' ? b[key].name : b[key];

      if (valueA === valueB) {
        return 0;
      }

      if (sortDirection === 'asc') {
        return valueA < valueB ? -1 : 1;
      } else {
        return valueA > valueB ? -1 : 1;
      }
    });
  };

  const sortedData = useMemo(() => {
    return sortData(data, sortKey);
  }, [data, sortKey, sortData]);

  return {
    sortedData,
    sortKey,
    sortDirection,
    handleSort,
  };
};
