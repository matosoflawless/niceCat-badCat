/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';




function CatsCard(props) {

    // const catsProperties = {
        
        
    //     origin: catsData.origin.props,
    //     minWeight: catsData.min_weight.props,
    //     maxWeight: catsData.max_weight.props,
    //     length: catsData.length.props,
    //     maxLife: catsData.max_life_expectancy.props,
    //     minLife: catsData.min_life_expectancy.props,
    //     familyFriendly: catsData.family_friendly.props,
    //     health: catsData.general_health.props,
    //     playFullNess: catsData.playfulness.props,
    //     friendWithChildren: catsData.children_friendly.props,
    //     grooming: catsData.grooming.props,
    //     intelligence: catsData.intelligence.props,
    //     friendWithPets: catsData.other_pets_friendly.props,
            // "family_friendly", general_health", "playfulness", "children_friendly", "grooming", "intelligence", "other_pets_friendly"

    // }
// eslint-disable-next-line react/prop-types
console.log(props.data)
    
  return (
    
       <Card className='cat-card-main-div' sx={{width:"50%", height:400, display:"flex", flexWrap:"wrap"}}>
      <CardActionArea>
        <CardMedia className='cats_image'
          component="img"
          height="200px"
        
          image={props.data.image_link}
          alt="cats"
          sx={{objectFit:"cover", Width:"100%"}}

        />
        <CardContent>
     

          <Typography gutterBottom variant="h5" component="div">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    
  )
}

export default CatsCard