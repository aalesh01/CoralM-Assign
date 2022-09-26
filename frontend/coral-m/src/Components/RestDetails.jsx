import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Heading,
  Divider,
  Box,Input, Select, Flex,Button
} from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { RestContext } from './restContext';
import React from 'react';

const RestDetails = () => {
   
    const {restId} = useParams()
    const { restaurants } = React.useContext(RestContext);
    const [reviewObj, setReviewObj] = React.useState();

    const restaurnt = restaurants.find((rest) => rest.id === parseInt(restId))

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviewObj ({ ...reviewObj, [name]: value });
        };


    const handleSubmit = () => {
        fetch(`http://localhost:8080/review/${restId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewObj) ,
        }).then(
            alert('Review Submitted')
        ).then(window.location.reload())
    }
    return (
      <StatGroup>
       
       <Divider/>
        <Stat>
          <Heading>Resturant</Heading>
          <StatNumber>{restaurnt?.name}</StatNumber>
          <StatHelpText>
            {restaurnt?.address +
              ',' +
              restaurnt?.city +
              ',' +
              restaurnt?.state +
              ',' +
              restaurnt?.zipcode}
          </StatHelpText>
          <StatHelpText>{restaurnt?.cuisine} Cuisine</StatHelpText>
          <StatHelpText>{restaurnt?.rating} Rating </StatHelpText>
          <StatLabel>Reviews</StatLabel>
          {restaurnt?.reviews?.map(review => (
            <Box key={review.id}>
              <StatHelpText>
                {review?.rating} ⭐️ {review?.review}
              </StatHelpText>
              <Divider />
            </Box>
          ))}
        </Stat>
        <Divider />
          <Box width={"60%"} margin={"2%"} >
            <Select name='rating' onChange={handleChange} placeholder="Star Rating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
            <Input name='review' onChange={handleChange} aria-expanded={true} placeholder="Enter your Reviews here"></Input>
            <Button onClick={()=>handleSubmit()} width={"40%"} colorScheme={"teal"} >Submit</Button>
        </Box>
      </StatGroup>
    );
    }

export default RestDetails;