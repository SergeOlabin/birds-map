import React, { useEffect, useState } from 'react';
import { IBird } from '../types/birds';
import { BirdComponent } from './Bird';
import '../styles/sidebar.sass';

export interface ISidebarComponentProps {

}

const SidebarComponent: React.FC<ISidebarComponentProps> = ({  }) => {
  const [birds, setBirds] = useState<IBird[]>([]);

  useEffect(() => {

    (async () => {
      const res = await (await fetch('https://zapari.any.do/birds/20')).json();
      const fetchedBirds: IBird[] = res.items;

      setBirds(fetchedBirds);
    })()

  }, [])

  console.log('birds', birds)

  return (
    <>
    <div className="sidebar"></div>
      {birds?.map(b => <BirdComponent bird={b}></BirdComponent>)}
    </>
  );
};

export default React.memo(SidebarComponent);
