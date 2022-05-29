import { Box } from '@mantine/core';
import { useDidUpdate, useNetwork } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import styles from './app.module.scss';
import AppProvider from './app-provider';
import Me from './pages';

function App() {
  const networkStatus = useNetwork();
  useDidUpdate(() => {
    showNotification({ message: 'Hello' });
  }, [networkStatus.online]);
  return (
    <AppProvider>
      <Suspense fallback={"loading..."}>
        <Box className={styles["app"]}>
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
        </Box>
      </Suspense>
    </AppProvider>
  );
}

export default App;
