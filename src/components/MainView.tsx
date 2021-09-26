import React, { useContext } from 'react';
import { ActiveBirdContext } from '../providers/active-bird.provider';

export interface IMainViewProps {
  // activeBird: IBird | null,
}

export const MainView: React.FC<IMainViewProps> = ({ }) => {
  const { activeBird } = useContext(ActiveBirdContext);

  return (
    <>
      <div className="main-view">
        {activeBird &&
          activeBird.name
        }
      </div>
    </>
  );
};
