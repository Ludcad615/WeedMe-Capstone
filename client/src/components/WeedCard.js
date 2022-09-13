import React from 'react'
import { Link } from 'react-router-dom';
import StrainReviews from './StrainReviews';

import { Card, Image, Text, Badge, Button, Group, Grid, Anchor } from '@mantine/core';
const WeedCard = ({strainName, image, flowerType, description, id, reviews}) => {
  return (
    <Grid.Col span={4}>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image style={{paddingTop:"3%"}} src={image} height={140} alt="Norway" />
        </Card.Section>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{strainName}</Text>
          <Badge color="green" variant="dark">
            {flowerType}
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          {description}
        </Text>
        <Group position="center" spacing="l">
          <Anchor component={Link} to="/reviews">
          <Button variant="light" color="blue" mt="md" radius="md">
            Reviews
            
          </Button>
          </Anchor>

          {/* <Button variant="light" color="blue" mt="md" radius="md">
            Add to Cart
          </Button> */}
        </Group>
      </Card>
    </Grid.Col>
    
  );
}

export default WeedCard