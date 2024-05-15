import { useState } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { account } from 'src/_mock/account';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Support',
    icon: 'assets/icons/navbar/support.png',
  },
  {
    label: 'Log out',
    icon: 'assets/icons/navbar/logout.png',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton onClick={handleOpen}  disableRipple disableFocusRipple>
        <Box component="span" sx={{ width: 25, height: 25, mr: 1.5 }}>
          <SvgColor src="/assets/icons/navbar/profile.svg" sx={{ width: 25, height: 25 }} />
        </Box>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
            borderColor: '#DDE2E4', 
            borderStyle: 'solid',
            borderWidth: 1, 
            boxShadow: "none",
            borderRadius:"15px"
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2, display: 'flex', alignItems: 'center' }}>
          <Box>
            <img src={account.displayPhoto} alt="profile" />
          </Box>
          <Typography variant="body2" sx={{ pl: 2.5 }}>
            {account.displayName}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'solid',borderColor:"#DDE2E4" }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem key={option.label} onClick={handleClose}>
            <Box
              sx={{
                my: 0.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <img src={option.icon} alt={option.label} style={{ width: 20, height: 20 }} />
              <Typography variant="body2" sx={{ pl: 2.5 }}>
                {option.label}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
