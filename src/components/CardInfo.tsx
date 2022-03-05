import {useNavigate} from 'react-router-dom'

import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

type CardInfoPropsType = {
  card_number: string
  first_name: string
  last_name: string
}

const CardInfo = ({card_number,first_name,last_name}:CardInfoPropsType) => {
  const navigate = useNavigate()
  return (
    <Card sx={{ color: (theme) => theme.palette.secondary.main }} elevation={3}>
      <CardContent>
        <Typography variant="h4">{card_number}</Typography>
        <Grid container spacing={2}>
          <Grid item xs={10} md={5}>
            <Typography variant="body1">{first_name}</Typography>
          </Grid>
          <Grid item xs={10} md={5}>
            <Typography variant="body1">{last_name}</Typography>
          </Grid>
        </Grid>
        <CardActions sx={{ marginTop: (theme) => theme.spacing(2) }}>
          <Button size="small" color="secondary" variant="contained" onClick={() => navigate('/cards/card1')}>
            Learn More
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default CardInfo
