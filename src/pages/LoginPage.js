
// @mui
import {styled} from '@mui/material/styles';
import { Container, Typography} from '@mui/material';
// hooks

// sections
import {Link} from "react-router-dom";
import {LoginForm} from '../sections/auth/login';

import useResponsive from '../hooks/useResponsive';
// components

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const StyledSection = styled('div')(({theme}) => ({
    width: '100%',
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {


    const mdUp = useResponsive('up', 'md');



    return (
        <>


            <StyledRoot>

                {mdUp && (
                    <StyledSection>
                        <Typography variant="h3" sx={{px: 5, mt: 10, mb: 5}}>
                            Welcome to Quizmasters
                        </Typography>
                        <img src="/assets/illustrations/signIn_illustration.png" alt="login"/>
                    </StyledSection>
                )}

                <Container maxWidth="sm">
                    <StyledContent>
                        <Typography variant="h4" gutterBottom>
                            Sign in to your account
                        </Typography>

                        <Typography variant="body2" sx={{mb: 5}}>
                            Don’t have an account? {''}
                            <Link to={"/register"} variant="subtitle2">Register</Link>
                        </Typography>


                        <LoginForm/>
                    </StyledContent>
                </Container>
            </StyledRoot>
        </>
    );
}
