import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useDispatch } from 'react-redux';
import { login } from '../../../actions/auth/auth';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const remember = true;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  // const defaultValues = {
  //   email: '',
  //   password: '',
  //   remember: true,
  // };

  const [loginForm, setLoginForm] = useState(
    {
      email: '',
      password: '',
    },
  );

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    // defaultValues,
  });

  const handleChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
    console.log(loginForm);
  };

  // const {
  //   handleSubmit,
  //   formState: { isSubmitting },
  // } = methods;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginForm);
    try{
      dispatch(login(loginForm, navigate));
    }catch(err){
      console.log(err);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField 
        name="email" 
        label="Email address" 
        value={loginForm.email}
        onChange={handleChange}
        />

        <TextField
          name="password"
          label="Password"
          value={loginForm.password}
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <RHFCheckbox name="remember" label="Remember me"/>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <Button fullWidth size="large" type="submit" variant="contained" >
        Login
      </Button>
    </FormProvider>
  );
}
