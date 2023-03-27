import { ReactElement } from 'react';
import { Sources } from './Sources';

type NavigationItem = {
  label: string;
  urlPath: string;
  element: ReactElement;
};

const pages: NavigationItem[] = [
  {
    label: 'Sources',
    urlPath: '/',
    element: <Sources />,
  },
];

export default pages;
