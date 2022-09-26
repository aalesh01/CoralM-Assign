import React from 'react'
import {RestContext} from './restContext';

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
  Divider,Button,Box
} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const AdminPage = () => {

  const {restaurants} = React.useContext(RestContext);

  return (
    <Box>
      <Link to="/"> <Button colorScheme={'teal'} >Home</Button> </Link>
      <Divider/>
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Resturant Name</Th>
          <Th>Total Reviews</Th>
        </Tr>
      </Thead>
      <Tbody>
        {restaurants &&
          restaurants.map(restaurant => (
            <Tr sx={{ '&:hover': { cursor: "pointer", background: "grey", color: "white" }, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} key={restaurant.id}>
              <Td>{restaurant.id}</Td>
              <Td>{restaurant.name}</Td>
              <Td>
                {restaurant.reviews.length}
              </Td>
            </Tr>
          ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>ID</Th>
          <Th>Resturant Name</Th>
          <Th>Total Reviews</Th>
        </Tr>
      </Tfoot>
    </Table>
    </Box>
  )
}

export default AdminPage