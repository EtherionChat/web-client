import styles from './stripes-screen.module.scss';
import { Box } from '@mantine/core';
import classNames from 'classnames';
/* eslint-disable-next-line */
export interface StripesScreenProps {
  children: React.ReactNode;
}

export function StripesScreen(props: StripesScreenProps) {
  return (
    <Box className={classNames(styles['woosh-overlay'], styles['woosh'])}>
      {props.children}
    </Box>
  );
}

export default StripesScreen;
