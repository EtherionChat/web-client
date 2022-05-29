import { Box } from '@mantine/core';
import { useDidUpdate, useNetwork } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import React, { Suspense } from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.scss';
import AppProvider from './AppProvider';
import Me from './pages';

function App() {
  const networkStatus = useNetwork();
  useDidUpdate(() => {
    showNotification({ message: 'Hello' });
  }, [networkStatus.online]);
  return (
    <AppProvider>
      <Suspense fallback={"loading..."}>
        <Box className="App">
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Me />}>
                {/* <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
              </Route>
            </Routes>
          </BrowserRouter>
        </Box>
      </Suspense>
    </AppProvider>
  );
}

export default App;
