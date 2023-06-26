import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import SignIn from "@/scenes/signin";
import CreateAccount from "@/scenes/create";
import Dashboard from "@/scenes/dashboard";
import Accounts from "@/scenes/accounts";
import Loans from "@/scenes/loans";
import Budget from "@/scenes/budget";
import LogOut from "@/scenes/logout";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route 
                path="/" 
                element={<SignIn />} 
              />
              <Route 
                path="api/register" 
                element={<CreateAccount />} 
              />
              <Route 
                path="/dashboard" 
                element={<Dashboard />} 
              />
              <Route 
                path="/accounts" 
                element={<Accounts />} 
              />
              <Route 
                path="/loans" 
                element={<Loans />} 
              />
              <Route 
                path="/budget" 
                element={<Budget />} 
              />
              <Route 
                path="api/logout" 
                element={<LogOut />} 
              />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
