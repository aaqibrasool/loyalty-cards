import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const CreateCard = () => {
  const [cardNumber,setCardNumber] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [membership,setMembership] = useState('gold')
  const [userInfo,setUserInfo] = useState('')
  const navigate = useNavigate()

  const addCard = () => {
    if(!cardNumber || !firstName || !lastName || !userInfo) {
      alert('Kindly fill out all the fields')
      return
    }
    try {
      axios.post('https://mocki.io/v1/6dcbbb3d-3487-4955-a0e7-33170e76c772',{
        card_number:cardNumber,
        first_name:firstName,
        last_name:lastName,
        membership_tier:membership,
        user_description:userInfo
      })
      navigate('/cards')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Typography variant="h3" color="secondary">
        Fill Out the below mentioned fields to add your loyalty card.
      </Typography>
      <Box
        component="form"
        sx={{
          marginTop: (theme) => theme.spacing(12),
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField 
          label="Card Number" 
          variant="outlined" 
          value={cardNumber}
          onChange={e => setCardNumber(e.target.value)}
        />
        <TextField 
          label="First Name" 
          variant="outlined" 
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <TextField 
          label="Last Name" 
          variant="outlined" 
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <TextField 
          size="small" 
          sx={{ width: 200 }} 
          select 
          label="Membership" 
          value={membership}
          onChange={e => setMembership(e.target.value)}
          >
          <MenuItem value="gold">Gold</MenuItem>
          <MenuItem value="silver">Silver</MenuItem>
          <MenuItem value="bronze">Bronze</MenuItem>
        </TextField>
        <TextField
          label="Your Info"
          multiline
          rows={6}
          value={userInfo}
          onChange={e => setUserInfo(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={addCard}>
          Add Card
        </Button>
      </Box>
    </>
  );
};

export default CreateCard;
