import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledSection = styled('div')(({theme}) => ({
    width: '50%',
    flex: 1,
    position: 'absolute',
    margin: 300,
    display: 'flex',
    textAlign: "center",
    flexDirection: 'column',

}));

function CreateOrJoin() {

    const navigate = useNavigate();

    return (
        <>
            <StyledSection>
                <Button margin='20' type="submit" variant="contained"
                        onClick={() => {
                            navigate('/create', {replace: true})
                        }}>
                    Create a game
                </Button>


                <Button margin='20' type="submit" variant="contained"
                        onClick={() => {
                            navigate('/join', {replace: true})
                        }}>
                    Join a game
                </Button>
            </StyledSection>
        </>
    )
}

export default CreateOrJoin