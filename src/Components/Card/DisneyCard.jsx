import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DisneyCard({name,image,detalhes}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        sx={{height:'240px'}}
        image={image}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div" >
          {name}
        </Typography>
        {/*<Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>*/}
      </CardContent>
      <CardActions >
        {/*<Button size="small">Share</Button>*/}
        <Button size="small" onClick={detalhes}>Saiba Mais</Button>
      </CardActions>
    </Card>
  );
}