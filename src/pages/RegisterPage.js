// @mui
import {styled} from '@mui/material/styles';
import { Container, Typography} from '@mui/material';
// hooks

import {Link} from "react-router-dom";
import useResponsive from '../hooks/useResponsive';
import RegForm from "../sections/auth/registration/RegForm";
// components


// sections



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

export default function RegisterPage() {




    const mdUp = useResponsive('up', 'md');



    return (
        <>
                 <StyledRoot>


                {mdUp && (
                    <StyledSection>
                        <Typography variant="h3" sx={{px: 5, mt: 10, mb: 5}}>
                            Register to create
                        </Typography>
                        <img src="/assets/illustrations/signIn_illustration.png" alt="register"/>
                    </StyledSection>
                )}

                <Container maxWidth="sm">
                    <StyledContent>
                        <Typography variant="h4" gutterBottom>
                            Register
                        </Typography>

                        <Typography variant="body2" sx={{mb: 5}}>
                            Already have an account? {''}
                            <Link to={ "/login" } variant="subtitle2">Log In</Link>
                        </Typography>

<RegForm/>
                    </StyledContent>
                </Container>
            </StyledRoot>
        </>
    );
}
