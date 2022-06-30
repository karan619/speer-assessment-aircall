import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import DialpadIcon from "@mui/icons-material/Dialpad";
import VoicemailIcon from "@mui/icons-material/Voicemail";

const BottomNavBar = () => {
  return (
    <>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="KeyPad" icon={<DialpadIcon />} />
        <BottomNavigationAction label="Voicemail" icon={<VoicemailIcon />} />
      </BottomNavigation>
    </>
  );
};

export default BottomNavBar;
