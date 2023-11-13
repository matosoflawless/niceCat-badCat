/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { Progress } from 'flowbite-react';




function CatsCard(props) {

  const avarageWeight = ((props.data.max_weight + props.data.min_weight) / 2)
  const avarageLifeExpectency = ((props.data.max_life_expectancy + props.data.min_life_expectancy) / 2)
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
<>
    <Card sx={{ width: 450, border: 2, margin: 2 }}>
      <CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Favourite
          </Button>
        </CardActions>
        <CardMedia className='cats_image'
          component="img"
          height="350px"
          image={props.data.image_link}
          alt="cats"
          sx={{ objectFit: "cover", width: 1 }}

        />
        <CardContent>

          <Box sx={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
            <Typography className='title' variant="h4" component="div" align='center' marginBottom={2}>
              {props.data.name}
            </Typography>
            <Typography variant="h5" color="text.secondary" marginBottom={2} align='center'>
              From: {props.data.origin}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography >
                Avarage Weight: {avarageWeight}
              </Typography>
              <Typography>
                Length: {props.data.length}
              </Typography>
            </Box>
            <Typography align='center' margin={2}>
              Average Life Expectancy: {avarageLifeExpectency}
            </Typography>
          </Box>
        <Box>
          <div className='progress-bar-parent'>
            <div className='progress-bar-child'>
            </div>
          </div>
        </Box>

        </CardContent>
      </CardActionArea>


    </Card>
    </>
  )
}

export default CatsCard