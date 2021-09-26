import React, { useContext } from 'react';
import { ActiveBirdContext } from '../providers/active-bird.provider';
import { BirdMap } from './BirdMap';
import { BirdPanel } from './BirdPanel';

export interface IMainViewProps {
  // activeBird: IBird | null,
}

export const MainView: React.FC<IMainViewProps> = ({ }) => {
  const { activeBird } = useContext(ActiveBirdContext);

  return (
    <>
      <div className="main-view">
        {activeBird &&
          (<>
            <BirdPanel bird={activeBird} />
            <BirdMap bird={activeBird}/>
          </>)
        }
      </div>
    </>
  );
};
