import React from 'react';
import { useForm, FieldValues,FieldError  } from 'react-hook-form';
import { Button, TextInput, Paper, Col, Grid } from '@mantine/core';

interface FormData {
  usernameOrEmail: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: FieldValues) => {
  console.log(data);
  // Implemente a lógica de autenticação aqui
};
const getErrorMessage = (error: FieldError | undefined): string => {
  return error?.message || '';
};

  return (
  <form onSubmit={handleSubmit(onSubmit)} style={{background:'transparent'}}>
    <Grid>
    <Col style={{ padding: '1rem' }}>
        {/* Restante do código */}
      </Col>
    </Grid>
    <Grid>
  <Col>
    <TextInput
      {...register('usernameOrEmail', { required: 'O campo nome de usuário ou e-mail é obrigatório' })}
      label="Nome de usuário ou e-mail"
      placeholder="Digite seu nome de usuário ou e-mail"
      error={errors.usernameOrEmail?.message as string || ''}
      variant="unstyled"
    />
  </Col>
</Grid>
        <Grid>
          <Col>
            <TextInput
              {...register('password', { required: 'O campo senha é obrigatório' })}
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              error={errors.password?.message as string || ''}
              variant="unstyled"
            />
          </Col>
        </Grid>
        <Grid>
          <Col>
          <Button type="submit" color="gray">Login</Button>
          </Col>
        </Grid>
      </form>
  );
};

export default LoginForm;