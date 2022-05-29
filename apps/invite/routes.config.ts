import { Routes, init } from '@nx/next-router';

const routes: Routes = {
  home: {
    pattern: '/invite',
    page: '/index',
  },
};

init(routes);
