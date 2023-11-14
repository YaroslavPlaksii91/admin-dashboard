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

  const sortedData = useMemo(() => {
    const sortData = (data: any[], key: string) => {
      return [...data].sort((a, b) => {
        const valueA = a[key];
        const valueB = b[key];

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

    return sortData(data, sortKey);
  }, [data, sortKey, sortDirection]);

  return {
    sortedData,
    sortKey,
    sortDirection,
    handleSort,
  };
};
