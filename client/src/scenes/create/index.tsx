// create account
import BoxHeader from '@/components/BoxHeader';
import AccountBox from '@/components/AccountBox';
import Button from '@mui/base/Button';
import { Box, TextField } from '@mui/material';
// import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // // Send the form data to the back-end API
      // const response = await axios.post('http://localhost:8080/api/register', {
      //   name,
      //   email,
      //   password,
      //   confirmPassword,
      // });
      // Save user data to local storage
    const userData = {
      name,
      email,
      password,
      confirmPassword,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

      // Registration successful, handle the response as needed
      // console.log(response.data);

      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      // Set success message
      setSuccessMessage('User Successfully Created');

      // Redirect to the login page after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);

    } catch (error) {
      // Registration failed
      console.error(error);
      console.log("Registration Failed");
    }
  };
    
    return (
        <AccountBox>
          <Box>
            {successMessage && (
              <div
                style={{
                  color: 'white',
                  textAlign: 'center',
                  paddingTop: '1rem',
                }}
              >
                {successMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <Box
                alignItems="center"
                justifyContent="center"
                sx={{ marginBottom: '2rem' }}
              >
                <BoxHeader 
                  title="Name" 
                  subtitle="" 
                  sideText=""
                />
                <TextField
                  label="Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{ width: '100%', marginTop: '.25rem' }}
                  InputProps={{ sx: { backgroundColor: 'grey' } }}
                />

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ width: '100%', marginTop: '.25rem' }}
                  InputProps={{ sx: { backgroundColor: 'grey' } }}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ width: '100%', marginTop: '.25rem' }}
                  InputProps={{ sx: { backgroundColor: 'grey' } }}
                />

                <BoxHeader 
                  title="Confirm Password" 
                  subtitle="" 
                  sideText="" 
                />
                <TextField
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  sx={{ width: '100%', marginTop: '.25rem' }}
                  InputProps={{ sx: { backgroundColor: 'grey' } }}
                />

                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '1rem' 
                  }}>
                  <Button type="submit" color="primary">
                    Create Account
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </AccountBox>
    );
};

export default CreateAccount;