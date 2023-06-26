import { Box } from "@mui/material";
import { styled } from "@mui/system";

const AccountBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.light,
    borderRadius: "1rem",
    boxShadow: "0px .25rem .25rem rgba(242, 180, 85, .8)",
    maxWidth: "35%",
    margin: "5rem auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        maxWidth: "100%",
        margin: "5rem auto",
    },
}));

export default AccountBox;