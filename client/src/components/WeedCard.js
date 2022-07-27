import React from 'react'


import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';
const WeedCard = ({strainName, image, flowerType, description, id}) => {
  return (
    
    <Grid.Col span={4}>
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section >
        <Image
          src= {image}
          height={160}
          alt="Norway"
        />
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{strainName}</Text>
        <Badge color="pink" variant="light">
         {flowerType}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {description}
      </Text>
      <Group position="center" spacing="xl">
      <Button variant="light" color="blue"  mt="md" radius="md">
        Info  
      </Button>
      <Button variant="light" color="blue"  mt="md" radius="md">
        Add to Cart   
      </Button>
      </Group>
    </Card>
    </Grid.Col>


  )
}

export default WeedCard