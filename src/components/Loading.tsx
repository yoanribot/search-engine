import React from "react";
import { Rings as Loader } from "react-loader-spinner";

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Loader color="#00BFFF" height={550} width={80} />
  </div>
);
