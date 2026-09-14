import { createBrowserRouter } from 'react-router';
import { RootLayout } from '@/app/layouts/root-layout';
import { HomePage } from '@/pages/home';
import { NotFoundPage } from '@/pages/not-found';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);
