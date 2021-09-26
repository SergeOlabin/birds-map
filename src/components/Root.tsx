import React from 'react';
import { MainView } from './MainView';
import Sidebar from './Sidebar';


export interface IRootProps {

}

export const Root: React.FC<IRootProps> = ({  }) => {
  return (
    <>
      <div>
        <Sidebar></Sidebar>
        <MainView></MainView>
      </div>

    </>
  );
};
