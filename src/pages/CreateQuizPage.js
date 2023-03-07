import {Button, TextField } from "@mui/material";
import {styled} from "@mui/material/styles";
import {Helmet} from "react-helmet-async";


 const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));
function CreateQuizPage (props){

    const  nextStep  = props;

    const continueHandler = event => {
        event.preventDefault();
        nextStep();
    }


    return(
    <>
        <Helmet>
        <title> Create quiz | Quizmasters </title>
    </Helmet>
        
        <h1>Create New Quiz</h1>

        <StyledContent>
     <h3>Created by:</h3>
            
            <TextField placeholder="Name"
            name="name"
            required
            fullWidth
             />
            <Button
                style={{
                    fontSize: "1.6rem",
                    textAlign: "center",
                    fontWeight: "bold",
                    margin: "1rem 0"
                }}
                variant="contained"
                color="primary"
                fullWidth
                onClick={ continueHandler }
            >
                Continue
            </Button>
        </StyledContent>
    </>
        )
}


export default CreateQuizPage