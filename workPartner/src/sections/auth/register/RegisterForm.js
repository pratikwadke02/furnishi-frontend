import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { useDispatch } from 'react-redux';

import { register } from '../../../actions/auth/auth';
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };


  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    // defaultValues,
  });

  // const {
  //   handleSubmit,
  //   formState: { isSubmitting },
  // } = methods;

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registerForm);
    try{
      dispatch(register(registerForm, navigate));
    }catch(error){
      console.log(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField name="firstName" label="First name" fullWidth value={registerForm.firstName} onChange={handleChange} />
          <TextField name="lastName" label="Last name" fullWidth value={registerForm.lastName} onChange={handleChange} />
        </Stack>

        <TextField name="email" label="Email address" value={registerForm.email} onChange={handleChange} />

        <TextField
          name="password"
          label="Password"
          value={registerForm.password}
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button fullWidth size="large" type="submit" variant="contained" >
          Register
        </Button>
      </Stack>
    </FormProvider>
  );
}
