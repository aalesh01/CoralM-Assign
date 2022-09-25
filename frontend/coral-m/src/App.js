import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import RestuarantList from './Components/RestuarantList';
import RestDetails from './Components/RestDetails';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Routes>
          <Route path="/" element={<RestuarantList />} />
          <Route path="/:restId" element={<RestDetails />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
