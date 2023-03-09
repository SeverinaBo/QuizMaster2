import * as React from "react";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const HeaderNavigation = () => {
    const [setAnchorElNav] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                <Button
                    component={Link}
                    to={'/'}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'white', display: 'block'}}
                >
                    Home
                </Button>

                {/*    <Button
                element={Link}
                to={'/join'}
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'white', display: 'block'}}
            >
                Join Quiz
            </Button> */}

                <Button
                    component={Link}
                    to={'/create'}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'white', display: 'block'}}
                >
                    Create Quiz
                </Button>

                <Button
                    component={Link}
                    to={'/quizzes'}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'white', display: 'block'}}
                >
                    All Quizzez
                </Button>

                <Button
                    component={Link}
                    to={'/login'}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'white', display: 'block'}}
                >
                    About
                </Button>

                <Button
                    component={Link}
                    to={'/login'}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'white', display: 'block'}}
                >
                    Login
                </Button>
            </Box>
        </>
    );
}
export default HeaderNavigation