import useSWR from "swr";
import axios from "axios";

import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardInfo from "../components/CardInfo";
import { allCardsUrl } from "../constants/externalEndPoints";

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
  const { data, error } = useSWR(allCardsUrl, fetchAllCards);

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
                <CardInfo 
                    card_number={el.card_number}
                    first_name={el.first_name}
                    last_name={el.last_name}
                />
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
