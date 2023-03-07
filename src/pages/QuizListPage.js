import { Helmet } from 'react-helmet-async';

// @mui
import { Container, Stack, Typography } from '@mui/material';
// components

// ----------------------------------------------------------------------

export default function QuizListPage() {

/*  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  }; */

  return (
    <>
      <Helmet>
        <title> Quizzez | Quizmaster </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Quizez
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}/>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }} />

      </Container>
    </>
  );
}
