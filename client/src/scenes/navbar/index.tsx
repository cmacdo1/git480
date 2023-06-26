import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SavingsIcon from '@mui/icons-material/Savings';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Button,
  Theme,
} from '@mui/material';
import FlexBetween from '@/components/FlexBetween';
import LogOut from '../logout';

type Palette = {
  primary: {
    [key: string]: string;
  };
};

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState('dashboard');
  const customPalette: Palette = {
    primary: {
      '100': '#fcf0dd',
    },
  };

  const isMediumScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem: string) => {
    setSelected(menuItem);
    handleMenuClose();
  };

  const location = useLocation();

  const isLinkActive = (link: string) => {
    return location.pathname === link;
  };

  const isLoggedIn = true;

  const isSignInPage = location.pathname === '/';
  const isCreateAccountPage = location.pathname === '/api/register';

  if (isSignInPage || isCreateAccountPage) {
    // Render the navbar without the right side for sign-in and create account pages
    return (
      <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        {/* LEFT SIDE */}
        <FlexBetween gap="0.75rem">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <SavingsIcon sx={{ fontSize: '28px', color: 'pink' }} />
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h4" fontSize="16px">
              MoneyMinder
            </Typography>
          </Link>
        </FlexBetween>
      </FlexBetween>
    );
  }

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <SavingsIcon sx={{ fontSize: '28px', color: 'pink' }} />
        </Link>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <Typography variant="h4" fontSize="16px">
            MoneyMinder
          </Typography>
        </Link>
      </FlexBetween>

      {/* RIGHT SIDE */}
      {isLoggedIn && (
        <>
          {isMediumScreen ? (
            <>
              <Button onClick={handleMenuOpen} style={{ color: palette.grey[300] }}>
                <MenuIcon />
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem
                  onClick={() => handleMenuItemClick('Dashboard')}
                  selected={selected === 'Dashboard'}
                >
                  <Link
                    to="/dashboard"
                    style={{
                      color: selected === 'Dashboard' ? 'inherit' : palette.grey[700],
                      textDecoration: 'inherit',
                    }}
                  >
                    Dashboard
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => handleMenuItemClick('Accounts')}
                  selected={selected === 'Accounts'}
                >
                  <Link
                    to="/accounts"
                    style={{
                      color: selected === 'Accounts' ? 'inherit' : palette.grey[700],
                      textDecoration: 'inherit',
                    }}
                  >
                    Accounts
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => handleMenuItemClick('Loans')}
                  selected={selected === 'Loans'}
                >
                  <Link
                    to="/loans"
                    style={{
                      color: selected === 'Loans' ? 'inherit' : palette.grey[700],
                      textDecoration: 'inherit',
                    }}
                  >
                    Loans
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => handleMenuItemClick('Budget')}
                  selected={selected === 'Budget'}
                >
                  <Link
                    to="/budget"
                    style={{
                      color: selected === 'Budget' ? 'inherit' : palette.grey[700],
                      textDecoration: 'inherit',
                    }}
                  >
                    Budget
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => handleMenuItemClick('Log Out')}
                  selected={selected === 'Log Out'}
                >
                  <Link to={''}>
                    <LogOut />
                  </Link>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <FlexBetween gap="2rem">
              <Box sx={{ '&:hover': { color: customPalette.primary['100'] } }}>
                <Link
                  to="/dashboard"
                  onClick={() => setSelected('Dashboard')}
                  style={{
                    color: isLinkActive('/dashboard') ? customPalette.primary['100'] : palette.grey[700],
                    textDecoration: 'inherit',
                  }}
                >
                  Dashboard
                </Link>
              </Box>
              <Box sx={{ '&:hover': { color: customPalette.primary['100'] } }}>
                <Link
                  to="/accounts"
                  onClick={() => setSelected('Accounts')}
                  style={{
                    color: isLinkActive('/accounts') ? customPalette.primary['100'] : palette.grey[700],
                    textDecoration: 'inherit',
                  }}
                >
                  Accounts
                </Link>
              </Box>
              <Box sx={{ '&:hover': { color: customPalette.primary['100'] } }}>
                <Link
                  to="/loans"
                  onClick={() => setSelected('Loans')}
                  style={{
                    color: isLinkActive('/loans') ? customPalette.primary['100'] : palette.grey[700],
                    textDecoration: 'inherit',
                  }}
                >
                  Loans
                </Link>
              </Box>
              <Box sx={{ '&:hover': { color: customPalette.primary['100'] } }}>
                <Link
                  to="/budget"
                  onClick={() => setSelected('Budget')}
                  style={{
                    color: isLinkActive('/budget') ? customPalette.primary['100'] : palette.grey[700],
                    textDecoration: 'inherit',
                  }}
                >
                  Budget
                </Link>
              </Box>
              <Box sx={{ '&:hover': { color: customPalette.primary['100'] } }}>
                <Link
                  to={''}
                  style={{
                    color: selected === 'Log Out' ? 'inherit' : palette.grey[700],
                    textDecoration: 'inherit',
                  }}
                >
                  <LogOut />
                </Link>
              </Box>
            </FlexBetween>
          )}
        </>
      )}
    </FlexBetween>
  );
};

export default Navbar;
