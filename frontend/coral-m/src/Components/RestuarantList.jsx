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
} from '@chakra-ui/react';


const RestuarantList = () => {
  const [restuarants, setRestuarants] = React.useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(response => setRestuarants(response));
  }, []);
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Resturant</Th>
            <Th>Address</Th>
          </Tr>
        </Thead>
        <Tbody>
          {restuarants.map(restaurant => (
            <Tr>
              <Td>{restaurant.name}</Td>
              <Td>{restaurant.address}</Td>
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
