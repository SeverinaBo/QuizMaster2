import {useState} from "react";
import {Helmet} from "react-helmet-async";
import {Button, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import CreateGame from "../Game/CreateGame";

function MainAppPage() {
    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    return (
        <>

            <Typography variant="h4" sx={{ mb: 5 }}>
                Welcome to Quiz master
            </Typography>

           <CreateGame/>

        </>
    )
}
export default MainAppPage