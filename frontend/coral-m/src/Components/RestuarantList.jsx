import React,{useEffect} from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { RestContext } from './restContext';
import { Navigate, Link, useNavigate } from 'react-router-dom';


const RestuarantList = () => {

  const { restaurants } = React.useContext(RestContext);
  const navigate = useNavigate();

  return (
    <TableContainer>
      <Heading>Restaurants</Heading>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Resturant</Th>
            <Th>Address</Th>
          </Tr>
        </Thead>
        <Tbody>
          {restaurants &&
            restaurants.map(restaurant => (
                <Tr onClick={()=>navigate(`/${restaurant.id}`)} key={restaurant.id}>
                  <Td>{restaurant.name}</Td>
                  <Td>
                    {restaurant.address +
                      ',' +
                      restaurant.city +
                      ',' +
                      restaurant.state +
                      ',' +
                      restaurant.zipcode}
                  </Td>
                </Tr>
            ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Resturant</Th>
            <Th>Address</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default RestuarantList;
