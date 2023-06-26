import { Box, useMediaQuery } from '@mui/material';
import Row1 from './Row1';

const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b c"
    "a b c"
    "a b c"
    "a b c"
`;
const gridTemplateSmallScreens = `
    "a"
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "c"
`

const Dashboard = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1281px)");
    return (
        <Box 
            width="100%" 
            height="100%" 
            display="grid" 
            gap="1.5rem"
            sx={
                isAboveMediumScreens ? {
                gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
                gridTemplateAreas: gridTemplateLargeScreens,
                } : {
                    gridAutoColumns: "1fr",
                    gridAutoRows: "80px",
                    gridTemplateAreas: gridTemplateSmallScreens,
                }
            }
        >
            <Row1 />
        </Box>
    );
};

export default Dashboard;