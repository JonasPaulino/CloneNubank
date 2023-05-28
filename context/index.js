import React, { createContext, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [saldoConta, setSaldoConta] = useState('');
  const [totalFatura, setTotalFatura] = useState('');


  const contextValue = {
    saldoConta,
    setSaldoConta,
    totalFatura,
    setTotalFatura
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
