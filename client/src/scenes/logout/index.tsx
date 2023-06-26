import { useTheme } from "@mui/material";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LogOut = () => {
    const { palette } = useTheme();
    const navigate = useNavigate();

    const handleLogout = () => {
      navigate('/');
      console.log("Logout Successful");
    };

  // const handleSubmit = async (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();

  //   try {
  //     await axios.get('http://localhost:8080/api/logout');
  //     navigate('/');
  //     console.log("Logout Successful");
  //   } catch (error) {
  //     console.error(error);
  //     console.log("Logout Failed");
  //   }
  // };

  return (
    // <button 
    //     onClick={handleSubmit}
    // >
    //     Logout
    // </button>
    <Link
        to={''}
        onClick={handleLogout}
        style={{
            color: palette.grey[700],
            textDecoration: 'inherit',
        }}>
        Logout
    </Link>
  );
};

export default LogOut;