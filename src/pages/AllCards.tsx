import useSWR from "swr";
import axios from "axios";

import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const allCardUrl = "https://mocki.io/v1/6dcbbb3d-3487-4955-a0e7-33170e76c772";

type CardsType = {
  card_number: string;
  first_name: string;
  last_name: string;
  user_description?: string;
  membership_tier: MembershipTierType;
}[];

type MembershipTierType = "bronze" | "silver" | "gold";

const fetchAllCards = (url: string) =>
  axios.get(url).then((res) => res.data as CardsType);

const AllCards = () => {
  const { data, error } = useSWR(allCardUrl, fetchAllCards);

  if (error) {
    return (
      <Typography variant="h3">Error while loading loyalty cards</Typography>
    );
  }
  return (
    <>
      {data ? (
        <Container maxWidth="xl">
          <Typography variant="h1">All Loyalty Cards</Typography>
          <Grid container spacing={2} my={4}>
            {data.map((el, idx) => (
              <Grid item xs={10} md={5} lg={4} key={idx}>
                <Card
                  sx={{ color: (theme) => theme.palette.secondary.main }}
                  elevation={3}
                >
                  <CardContent>
                    <Typography variant="h4">{el.card_number}</Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={10} md={5}>
                        <Typography variant="body1">{el.first_name}</Typography>
                      </Grid>
                      <Grid item xs={10} md={5}>
                        <Typography variant="body1">{el.last_name}</Typography>
                      </Grid>
                    </Grid>
                    <CardActions
                      sx={{ marginTop: (theme) => theme.spacing(2) }}
                    >
                      <Button
                        size="small"
                        color="secondary"
                        variant="contained"
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default AllCards;
