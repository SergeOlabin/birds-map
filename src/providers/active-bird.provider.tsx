import React, { useState } from 'react';
import { IBird } from '../types/birds';

export interface IActiveBirdContext {
  activeBird: IBird | null,
  setActiveBird: (bird: IBird) => void,
}

export const ActiveBirdContext = React.createContext<IActiveBirdContext>({
  activeBird: null,
  setActiveBird: (bird: IBird) => {},
});

export const ActiveBirdProvider: React.FC<{}> = ({ children }) => {
  const [activeBird, setActiveBird] = useState<IBird | null>(null);

  return (
    <>
      <ActiveBirdContext.Provider value={{ activeBird, setActiveBird }}>
        {children}
      </ActiveBirdContext.Provider>
    </>
  )
}

