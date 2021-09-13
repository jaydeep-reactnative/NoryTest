import { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { renderRoutes } from '../utils/routes';
import Navbar from '../components/Navbar/Navbar';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box d={{ md: 'flex' }}>
        <Routes />
      </Box>
    </ChakraProvider>
  );
}

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box flex="1">
        <Switch>
          <Suspense fallback={<div />}>
            {renderRoutes.map(([key, value]) => (
              <Route key={key} path={value.path} exact={value.exact}>
                <value.component />
              </Route>
            ))}
          </Suspense>
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
