import React from "react";
import "../styles/separator.scss";

export interface ISeparatorProps {

}

export const Separator: React.FC<ISeparatorProps> = ({  }) => {
  return (
    <>
      <hr className="separator"></hr>
    </>
  );
};
