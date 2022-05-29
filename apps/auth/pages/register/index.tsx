import { Box, Button, Checkbox, Divider, Group, PasswordInput, SegmentedControl, Stack, Text, TextInput } from '@mantine/core';
import { joiResolver, useForm } from '@mantine/form';
import { useDidUpdate } from '@mantine/hooks';
import Joi from 'joi';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { GoogleIcon } from 'apps/auth/app/assets/GoogleIcon';
import { FacebookIcon } from 'apps/auth/app/assets/FacebookIcon';
import { TwitterIcon } from 'apps/auth/app/assets/TwitterIcon';
import AuthForm from 'apps/auth/app/auth-form/auth-form';

const schema = Joi.object({
  username: Joi.string().required().min(3).message('Name should have at least 3 letters'),
  email: Joi.string().required()
    .email({ tlds: { allow: false } })
    .message('Invalid email'),
  password: Joi.string().required().min(8).message('Password should have at least 8 letters'),
  confirmPassword: Joi.string().required().valid(Joi.ref('password')),
});


/* eslint-disable-next-line */
export interface RegisterProps { }

export function Register(props: RegisterProps) {
  const [value, setValue] = useState('register');
  const form = useForm({
    schema: joiResolver(schema),
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  useDidUpdate(() => {
    Router.push(`/${value}`);
  }, [value])
  return (
    <AuthForm>
      {/* <LoadingOverlay visible={true} /> */}

      <form onSubmit={form.onSubmit((values) => console.log(values))} className={styles['container']}>
        <Stack>
          <Stack spacing={0}>
            <Text
              sx={{
                fontSize: 48,
              }}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
              weight={700}
              style={{ fontFamily: 'Greycliff CF, sans-serif' }}>Welcome to Register!</Text>
            <Text color="dimmed">{"We're so excited to see you again!"}</Text>
          </Stack>
          <Group grow>
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
          </Group>
          <Divider label="Or continue with" labelPosition="center" />
          <TextInput
            placeholder="Email"
            label="Email:"
            required
            classNames={{
              input: "shake",
            }}
            {...form.getInputProps('email')}
          />
          <TextInput
            placeholder="Username"
            label="Username:"
            required
            classNames={{
              input: "shake",
            }}
            {...form.getInputProps('username')}
          />
          <PasswordInput
            placeholder="Password"
            label="Password:"
            required
            {...form.getInputProps('password')}
          />
          <PasswordInput
            placeholder="Confirm Password"
            label="Confirm Password:"
            required
            {...form.getInputProps('confirmPassword')}
          />
          <Group position="apart">
            <Checkbox value="remember" label="Remember me" />
            <Text variant="link" component="a" href="https://mantine.dev">Forgot your password?</Text>
          </Group>
          <Button type="submit">
            Register
          </Button>
          <Text variant="link" component="a" href="/register">Already have an account?</Text>
        </Stack>
      </form>
    </AuthForm>
  );
}

export default Register;
