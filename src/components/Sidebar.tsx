import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ActiveBirdContext } from '../providers/active-bird.provider';
import { IBird } from '../types/birds';
import { BirdComponent } from './Bird';

export interface ISidebarComponentProps {

}

// TODO: key / ids

const SidebarComponent: React.FC<ISidebarComponentProps> = ({ }) => {
  const [birds, setBirds] = useState<IBird[]>([]);
  const { setActiveBird } = useContext(ActiveBirdContext);

  const fetchBirds = useCallback(async () => {
    const res = await (await fetch('https://zapari.any.do/birds/20')).json();
    const fetchedBirds: IBird[] = res.items;

    console.log('fetching birds', birds, fetchedBirds)

    setBirds([...birds, ...fetchedBirds]);
  }, [birds]);

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    // TODO: Check typings
    const target = event.target as HTMLElement;

    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      console.log('BOTTOM');
      fetchBirds();
    }
  }

  useEffect(() => {
    fetchBirds();
  }, []);

  return (
    <>
      <div className="sidebar" onScroll={onScroll}>
        {birds?.map(b => <div onClick={() => setActiveBird(b)}>
          <BirdComponent bird={b}></BirdComponent>
        </div>)}

      </div>
    </>
  );
};

export default React.memo(SidebarComponent);
