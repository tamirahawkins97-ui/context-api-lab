import { createContext, useContext, useState, type ReactNode } from 'react';

type Filter = 'all' | 'active' | 'completed';

type FilterContextValue = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

const FilterContext = createContext<FilterContextValue | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<Filter>('all');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }

  return context;
};
