import { Box, Button, Checkbox, Divider, Group, LoadingOverlay, PasswordInput, SegmentedControl, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';
import { useDidUpdate, useMediaQuery } from '@mantine/hooks';
import AuthForm from '../../app/auth-form/auth-form';
import Router from 'next/router';
import React, { useState } from 'react';
import styles from './index.module.scss';
import { GoogleIcon } from '../../app/assets/GoogleIcon';
import { FacebookIcon } from '../../app/assets/FacebookIcon';
import { TwitterIcon } from '../../app/assets/TwitterIcon';
/* eslint-disable-next-line */
export interface LoginProps { }

export function Login(props: LoginProps) {
  const matches = useMediaQuery('(min-width: 1200px)');
  const [value, setValue] = useState('login');
  useDidUpdate(() => {
    Router.push(`/${value}`);
  }, [value])
  return (
    <AuthForm>
      {/* <LoadingOverlay visible={true} /> */}

      <form className={styles['container']}>
        <Stack>
          <Stack spacing={0}>
            <Text
              sx={{
                fontSize: matches ? 48 : 42,
              }}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
              weight={700}
              style={{ fontFamily: 'Greycliff CF, sans-serif' }}>Welcome to Login!</Text>
            <Text color="dimmed">We're so excited to see you again!</Text>
          </Stack>
          <SimpleGrid cols={matches ? 3 : 1}>
            <Button leftIcon={<GoogleIcon />} variant="default" color="gray">
              Google
            </Button>
            <Button leftIcon={<FacebookIcon />} sx={(theme) => ({
              backgroundColor: '#4267B2',
              color: '#fff',
              '&:hover': {
                backgroundColor: theme.fn.darken('#4267B2', 0.1),
              },
            })}>
              Facebook
            </Button>
            <Button leftIcon={<TwitterIcon />} variant="default" >
              Twitter
            </Button>
          </SimpleGrid>
          <Divider label="Or continue with" labelPosition="center" />
          <TextInput
            placeholder="Email Or Username"
            label="Email Or Username:"
            required
            classNames={{
              input: "shake",
            }}
          />
          <PasswordInput
            placeholder="Password"
            label="Password:"
            required
          />
          <Group position="apart">
            <Checkbox value="remember" label="Remember me" />
            <Text variant="link" component="a" href="https://mantine.dev">Forgot your password?</Text>
          </Group>
          <Button>
            Login
          </Button>
          <Box component="span">Need an account? <Text variant="link" component="a" href="/register">Register</Text></Box>
        </Stack>
      </form>
    </AuthForm>
  );
}

export default Login;
