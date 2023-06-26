import { Box, useMediaQuery } from '@mui/material';
import Row1 from './Row1';

const gridTemplateLargeScreens = `
    "a b"
    "a b"
    "a b"
    "a b"
    "a b"
    "a b"
    "a b"
    "a b"
    "a b"
    "a b"
    "a b"
    "a b"
    "a b"
    "a b"
`;
const gridTemplateSmallScreens = `
    "b"
    "b"
    "b"
    "b"
    "a"
    "a"
    "a"
    "a"
    "a"
    "a"
    "a"
    "a"
`

const Budget = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
    return (
        <Box 
            width="100%" 
            height="100%" 
            display="grid" 
            gap="1.5rem"
            sx={
                isAboveMediumScreens ? {
                gridTemplateColumns: "repeat(2, minmax(370px, 1fr))",
                gridTemplateRows: "repeat(8, minmax(60px, 1fr))",
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

export default Budget;