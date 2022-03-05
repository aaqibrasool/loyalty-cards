import useSWR from "swr";
import axios from "axios";

import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { allCardsUrl } from "../constants/externalEndPoints";
import CardInfo from "../components/CardInfo";
import { CardType } from "../types/Card";

const fetchFirstCard = (url: string) =>
  axios.get(url).then((res) => res.data[0] as CardType);

const CardDetails = () => {
  const { data, error } = useSWR(allCardsUrl, fetchFirstCard);

  if (error) {
    return <Typography variant="h3">Error while loading card</Typography>;
  }

  return (
    <>
      {data ? (
        <CardInfo 
        {...data}
        />
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default CardDetails;
