

// @mui
import {Container, Stack, Typography} from '@mui/material';
import ResponsiveAppBar from "../layouts/dashboard/header/ResponsiveAppBar";
// components

// ----------------------------------------------------------------------

export default function QuizListPage() {


    return (
        <>

            <title> Quizzez | Quizmaster </title>

            <ResponsiveAppBar/>

            <Container>
                <Typography variant="h4" sx={{mb: 5}}>
                    Quizez
                </Typography>

                <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end"
                       sx={{mb: 5}}/>
                <Stack direction="row" spacing={1} flexShrink={0} sx={{my: 1}}/>

            </Container>
        </>
    );
}
