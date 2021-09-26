import React, { useState } from 'react';
import { MainView } from './MainView';
import Sidebar from './Sidebar';
import "../styles/root.scss";
import { IBird } from '../types/birds';

export interface IRootProps {

}

export const Root: React.FC<IRootProps> = ({  }) => {
  const [activeBird, setActiveBird] = useState<IBird | null>(null);

  return (
    <div className="root">
      <Sidebar></Sidebar>
      <MainView activeBird={activeBird}></MainView>
    </div>

  );
};
