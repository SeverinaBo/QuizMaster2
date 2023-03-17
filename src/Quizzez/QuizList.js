import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import QuizCard from "./QuizCard";


// ----------------------------------------------------------------------

QuizList.propTypes = {
    quizzes: PropTypes.array.isRequired,
};

export default function QuizList({ quizzes, ...other }) {
    return (
        <Grid container spacing={3} {...other}>
            {quizzes.map((quiz) => (
                <Grid key={quizzes.id} item xs={12} sm={6} md={3}>
                    <QuizCard quiz={quiz} />
                </Grid>
            ))}
        </Grid>
    );
}