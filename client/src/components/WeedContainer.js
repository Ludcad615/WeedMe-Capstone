import React from 'react'
import WeedCard from './WeedCard'
import { Grid } from '@mantine/core';

const WeedContainer = ({data}) => {
  return (
    <Grid>
        {data.map((data)=>{
            return (
            <WeedCard 
            strainName={data.strain_name} 
            image={data.image} 
            flowerType={data.flower_type} 
            description={data.description} 
            key={data.id}
            id={data.id} 
            reviews={data.reviews}/>)
        })}
    </Grid>
  )
}

export default WeedContainer