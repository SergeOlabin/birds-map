import React from "react";
import { IBird } from '../types/birds';

export interface IBirdComponentProps {
  bird: IBird,
}

export const BirdPanel: React.FC<IBirdComponentProps> = ({ bird }) => {
  return (
    <>
      <div className="bird-container">
        {bird.name}

      </div>
    </>
  );
};
