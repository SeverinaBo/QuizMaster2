
import {Helmet} from "react-helmet-async";
import { Typography} from "@mui/material";

import {styled} from "@mui/material/styles";
import CreateOrJoin from "../Game/CreateOrJoin";
import useResponsive from "../hooks/useResponsive";
import ResponsiveAppBar from "../layouts/dashboard/header/ResponsiveAppBar";



const StyledSection = styled('div')(({ theme }) => ({
    width: '100%',
    flex: 1,
    position: 'relative',
    maxWidth: 480,
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    align: "center",
    boxShadow: theme.customShadows.card,
    backgroundColor: theme.palette.background.default,
}));

function MainAppPage() {

    const mdUp = useResponsive('up', 'md');

/*    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    }; */

    return (
        <>

            <Helmet>
                <title> Main | Quizmaster </title>
            </Helmet>

<ResponsiveAppBar/>

            {mdUp && (
                <StyledSection
                               justifyContent="center"
                               alignItems="center"
                               spacing={2}>
                <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                    WELCOME TO QUIZMASTERS
                </Typography>
                    <CreateOrJoin/>
                </StyledSection>
                )}





        </>
    )
}
export default MainAppPage