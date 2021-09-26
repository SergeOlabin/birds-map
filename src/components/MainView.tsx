import React from 'react';
import { IBird } from '../types/birds';
import { BirdComponent } from './Bird';

export interface IMainViewProps {
  activeBird: IBird | null,
}

export const MainView: React.FC<IMainViewProps> = ({ activeBird }) => {
  return (
    <>
      <div className="main-view">
        {activeBird &&
          <BirdComponent bird={activeBird}></BirdComponent>
        }
      </div>
    </>
  );
};
