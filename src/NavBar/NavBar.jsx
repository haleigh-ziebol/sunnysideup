import React, {useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import { Box } from '@mui/material';

function NavBar() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 360, height:80, bgcolor: 'background.paper'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<EventNoteIcon />} />
        <BottomNavigationAction icon={<ForumIcon />} />
        <BottomNavigationAction icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}
export default NavBar;