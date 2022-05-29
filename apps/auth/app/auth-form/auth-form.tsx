import { Image, Group, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import styles from './auth-form.module.scss';

/* eslint-disable-next-line */
export interface AuthFormProps {
  children: React.ReactNode;
}

export function AuthForm(props: AuthFormProps) {
  const matches = useMediaQuery('(min-width: 900px)');
  return (
    <Group grow sx={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden"
    }}>
      <Box sx={{
        backgroundColor: 'white',
        padding: '50px 100px',
      }}>
        {props.children}
      </Box>
      {matches && (
        <Box sx={{
          height: '100%',
          backgroundImage: `url(https://img.thuthuatphanmem.vn/uploads/2018/10/19/nice-wallpaper-4k_040153771.jpg)`,
        }}>
        </Box>)}
    </Group>
  );
}

export default AuthForm;
