import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";

function Spinner({ color = "white" }) {
  return <Ring size="40" stroke="5" bgOpacity="0" speed="2" color={color} />;
}

export default Spinner;
