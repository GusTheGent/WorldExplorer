import * as React from "react";
import { TitleProps } from "./types";

const Title: React.FunctionComponent<TitleProps> = ({ title }) => {
  return (
    <React.Fragment>
      <h1>{title}</h1>
    </React.Fragment>
  );
};

export default Title;
