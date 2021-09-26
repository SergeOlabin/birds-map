import React from 'react';
import { IBird } from '../types/birds';

export interface IBirdPanelProps {
  bird: IBird,
}

export const BirdInfo: React.FC<IBirdPanelProps> = ({ bird }) => {
  return (
    <>
      <div className="bird-info">
      <div className="name">{bird.name}</div>
        <div className="desc-container">
          <img className="photo" src={bird.image} alt={bird.name} width="400" height="300" />
          <div className="sound">
            <audio src={bird.sound} controls />
          </div>
        </div>


      </div>
    </>
  );
};
