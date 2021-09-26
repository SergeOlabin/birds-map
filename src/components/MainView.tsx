import React, { useContext } from 'react';
import { ActiveBirdContext } from '../providers/active-bird.provider';
import { BirdMap } from './BirdMap';
import { BirdInfo } from './BirdInfo';
import { Separator } from './Separator';

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
            <BirdInfo bird={activeBird} />
            {/* <Separator /> */}
            <BirdMap bird={activeBird}/>
          </>)
        }
      </div>
    </>
  );
};
