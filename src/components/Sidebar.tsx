import React, { useCallback, useEffect, useState } from 'react';
import { IBird } from '../types/birds';
import { BirdComponent } from './Bird';

export interface ISidebarComponentProps {

}

// TODO: key / ids

const SidebarComponent: React.FC<ISidebarComponentProps> = ({  }) => {
  const [birds, setBirds] = useState<IBird[]>([]);

  const fetchBirds = useCallback(async () => {
    const res = await (await fetch('https://zapari.any.do/birds/20')).json();
    const fetchedBirds: IBird[] = res.items;

    setBirds([...birds, ...fetchedBirds]);
  }, []);



  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {

    // TODO: Check typings
    const target = event.target as HTMLElement;

    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      console.log('BOTTOM')
    }


  }



  useEffect(() => {
    fetchBirds();
  }, [fetchBirds]);


  return (
    <>
      <div className="sidebar" onScroll={onScroll}>
        {birds?.map(b => <BirdComponent bird={b}></BirdComponent>)}

      </div>
    </>
  );
};

export default React.memo(SidebarComponent);
