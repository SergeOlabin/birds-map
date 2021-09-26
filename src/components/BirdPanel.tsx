import React from 'react';
import { IBird } from '../types/birds';

export interface IBirdPanelProps {
  bird: IBird,
}

export const BirdPanel: React.FC<IBirdPanelProps> = ({ bird }) => {
  return (
    <>
      <div className="bird-panel">
        <span className="name">{bird.name}</span>
        <img className="photo" src={bird.image} alt={bird.name} width="400" height="300" />
        <div className="sound">
          <audio src={bird.sound} controls  />
        </div>
      </div>
    </>
  );
};
