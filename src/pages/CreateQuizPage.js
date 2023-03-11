import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";


import ResponsiveAppBar from "../layouts/dashboard/header/ResponsiveAppBar";

import CreateGameIntro from "../Game/CreateGame";


const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));


export default function CreateQuizPage() {


    return (
        <>
            <ResponsiveAppBar/>

            <StyledContent>
                <CreateGameIntro/>

            </StyledContent>

        </>
    )
}


