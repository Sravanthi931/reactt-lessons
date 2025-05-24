import React from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";
export default function Box(props) {
 
  {
    return props.flag === 1 ? <Box1 /> : <Box2 />;
  }

}