import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun as SunSolid } from "@fortawesome/free-solid-svg-icons";
import { faSun as SunRegular } from "@fortawesome/free-regular-svg-icons";

function Sun({ theme }) {
  const icon = theme === "dark" ? SunRegular : SunSolid;
  return <FontAwesomeIcon icon={icon} />;
}

export default memo(Sun);
