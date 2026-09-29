import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultPortfolioData } from '../data/defaultData';

type PortfolioData = typeof defaultPortfolioData;

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: PortfolioData) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      return {
        ...defaultPortfolioData,
        ...parsed,
        // Ensure new sections exist even if old data was saved
        education: parsed.education || defaultPortfolioData.education,
        strategy: {
          ...defaultPortfolioData.strategy,
          ...(parsed.strategy || {})
        },
        aboutPage: parsed.aboutPage || defaultPortfolioData.aboutPage,
      };
    }
    return defaultPortfolioData;
  });

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(data));
  }, [data]);

  const updateData = (newData: PortfolioData) => {
    setData(newData);
  };

  return (
    <PortfolioContext.Provider value={{ data, updateData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
