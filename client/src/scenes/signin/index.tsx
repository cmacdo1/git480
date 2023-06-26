// Sign in page
import BoxHeader from '@/components/BoxHeader';
import AccountBox from '@/components/AccountBox';
import Button from '@mui/base/Button';
import { Box, Divider, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
// import axios, { AxiosResponse } from 'axios';
import { SetStateAction, useState } from 'react';

const SignIn = () => {
  const navigate = useNavigate();

  // Add state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const { email: storedEmail, password: storedPassword } = JSON.parse(userData);
      if (email === storedEmail && password === storedPassword) {
        // User authentication successful
        // Perform further actions such as saving tokens, redirecting, etc.
        navigate('/dashboard');
        console.log('Sign In Successful');
      } else {
        // User authentication failed
        console.log('Sign In Failed');
      }
    } else {
      // User data not found in local storage
      console.log('User data not found');
    }
  };

  // const handleSubmit = async (e: { preventDefault: () => void; }) => {
  //     e.preventDefault();

  //     try {
  //       const response: AxiosResponse = await axios.post('http://localhost:8080/api/login', {
  //         email: email,
  //         password: password,
  //       });
  
  //       // Save the token in the browser's cookies
  //       document.cookie = `jwtoken=${response.data.token}; expires=${new Date(
  //         Date.now() + 25892000000
  //       ).toUTCString()}; path=/;`;

  
  //       // Redirect to the dashboard page
  //       navigate('/dashboard');
  //       console.log("Sign In Successful")
  //     } catch (error) {
  //       console.error(error);
  //       console.log("Login Failed");
  //     }
  // };

  // Add event handlers to update the email and password state variables
  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };
    
    return (
        <AccountBox>
          <Box>
            <form onSubmit={handleSubmit}>
              <Box
                alignItems="center"
                justifyContent="center"
                sx={{ marginBottom: '2rem' }}
              >
                <BoxHeader 
                  title="Email" 
                  subtitle="" 
                  sideText="" 
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ width: '100%', marginTop: '.25rem' }}
                  InputProps={{ sx: { backgroundColor: 'grey' } }}
                  value={email} // Bind the value to the email state variable
                  onChange={handleEmailChange} // Set the onChange event handler
                />

                <BoxHeader 
                  title="Password" 
                  subtitle="" 
                  sideText="" 
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ width: '100%', marginTop: '.25rem' }}
                  InputProps={{ sx: { backgroundColor: 'grey' } }}
                  value={password} // Bind the value to the password state variable
                  onChange={handlePasswordChange} // Set the onChange event handler
                />

                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '1rem' 
                  }}>
                  <Button type="submit" color="primary">
                    Log In
                  </Button>
                </Box>
              </Box>
            </form>
            
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginTop: '1rem' 
              }}>
              <Divider 
                sx={{ 
                  width: '125%', 
                  borderWidth: '.15rem', 
                  backgroundColor: 'rgba(242, 180, 85, .8)' 
                }}/>
            </Box>
            
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginTop: '1rem' 
              }}>
              <Link 
                to="api/register"
                style={{ 
                  textDecoration: 'none', 
                  color: 'white', 
                  marginBottom: "2rem" 
                }}>
                  Create Account
              </Link>
            </Box>
          </Box>
        </AccountBox>
    );
};

export default SignIn;