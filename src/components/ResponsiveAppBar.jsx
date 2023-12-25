import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ComputerIcon from '@mui/icons-material/Computer';


const pages = ['Home', 'Projects', 'Skills','About Me','Contact Me'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function scrollToSection(id) {
    const element = document.getElementById(id);
    console.log(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  return (
<AppBar position="static" sx={{backgroundColor:'black'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <ComputerIcon sx={{ display: { xs: 'none', md: 'flex',fontSize:'55px'}, mr: 1,paddingRight:'15px'}} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                style: {
                  backgroundColor: 'black' ,
                  color:'white' // Change this to your desired background color
                }}}
              sx={{
                display: { xs: 'block', md: 'none'}
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => { handleCloseNavMenu(); scrollToSection(page.toLowerCase()); }}>
                  <Typography className='font-open' textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ComputerIcon sx={{ display: { xs: 'flex', md: 'none'}, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Hamas
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' ,justifyContent:'flex-end'}}}>
            {pages.map((page) => (
              <Button
                
                key={page}
                onClick={() => scrollToSection(page.toLowerCase())}
                sx={{ my: 2, color: 'white', display: 'block',fontFamily:'Open Sans, sans-serif',textTransform:'capitalize'}}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;