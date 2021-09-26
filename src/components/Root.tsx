import React, { useState } from 'react';
import { MainView } from './MainView';
import Sidebar from './Sidebar';
import "../styles/root.scss";
import { IBird } from '../types/birds';
import { ActiveBirdProvider } from '../providers/active-bird.provider';

export interface IRootProps {

}

export const Root: React.FC<IRootProps> = ({  }) => {

  return (
    <div className="root">

      <ActiveBirdProvider>
        <Sidebar></Sidebar>
        <MainView></MainView>
      </ActiveBirdProvider>

    </div>

  );
};
