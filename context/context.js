import React, {useContext, createContext, useState} from 'react';

const CountContext = createContext();
const CountProviderContext = CountContext.Provider;
const CountProvider = ({children}) => {
  const [countCara, setCountCara] = useState(0);
  const [countCarp, setCountCarp] = useState(0);
  //   const value = [countCara, setCountCara, countCarp, setCountCarp];

  return (
    <CountContext.Provider
      value={{countCara, setCountCara, countCarp, setCountCarp}}>
      {children}
    </CountContext.Provider>
  );
};

export {CountContext, CountProviderContext, CountProvider};
