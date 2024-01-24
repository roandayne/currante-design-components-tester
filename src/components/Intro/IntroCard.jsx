import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function IntroCard({title, body, image, headerFont, nonHeaderFont}) {
  return (
    <Card sx={{ display: 'flex', margin: "20px 0px 0 0" }}>
      <CardContent>
        <Typography variant='p' sx={{ fontSize: "14px", fontWeight: "bold", fontFamily: headerFont }}>{title}</Typography>
        <Typography variant='p' sx={{ fontSize: "12px", fontFamily: nonHeaderFont }}>{body}</Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 100, padding: "20px 20px 20px 10px" }}
        image={image}
        alt="Live from space album cover"
      />
    </Card>
  );
}