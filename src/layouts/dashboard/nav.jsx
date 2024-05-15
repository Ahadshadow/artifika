/* eslint-disable perfectionist/sort-imports */

import { useEffect } from 'react';
import PropTypes from 'prop-types';
// import Divider from '@mui/material/Divider';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

// import { account } from 'src/_mock/account';
import Logo from 'src/assets/images/artifika.png';

import Scrollbar from 'src/components/scrollbar';

import { NAV } from './config-layout';
import navConfig from './config-navigation';

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();

  const upLg = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          mt: upLg ? 10 : 2,
          borderRight: '1px solid #DDE2E4',
        },
      }}
    >
      {/* <Logo sx={{ mt: 3, ml: 4 }} /> */}
      {!upLg && (
        <Box sx={{ width: '153px', ml: 2, mb: 2.75 }}>
          <img src={Logo} alt="logo" />
        </Box>
      )}
      {/* <Divider sx={{ borderStyle: 'solid' }} /> */}

      {/* {renderAccount} */}
      <Box sx={{ mt: 2, ml: 3, mb: 3 }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 'fontWeightMedium', color: 'primary.main', mb: 1 }}
        >
          Chatbot name
        </Typography>
        <Box
          sx={{
            width: '240px',
            height: '45px',
            border: '1px solid #DDE2E4',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: 'fontWeightMedium', color: 'primary.main', pl: 2 }}
          >
            Artifika
          </Typography>
        </Box>
      </Box>
      <Box sx={{ pl: 1 }}>{renderMenu}</Box>

      {/* <Box sx={{ flexGrow: 1 }} /> */}

      {/* {renderUpgrade} */}
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            // borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightRegular',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightMedium',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.06),
          borderRadius: '29px',
        }),
        '&:hover': {
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.06),
          borderRadius: '29px',
        },
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 1.5 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
