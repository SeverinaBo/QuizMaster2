import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import AdbIcon from '@mui/icons-material/Adb';

import {Link} from 'react-router-dom';
import LanguagePopover from "./LanguagePopover";
import AccountPopover from "./AccountPopover";
import HeaderNavigation from "./HeaderNavigation";




function ResponsiveAppBar() {
    const [ setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                                component={Link}
                                to={`/`}>
                        <Avatar alt="logo" src="/assets/illustrations/logoForMain.png"  />
                    </IconButton>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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

                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
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
                     />
                 <HeaderNavigation/>
                    <LanguagePopover />
                    <AccountPopover />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;