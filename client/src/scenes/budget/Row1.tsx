import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox';
import FlexBetween from '@/components/FlexBetween';
import { 
  Box,  
  Grid, 
  TextField, 
  useMediaQuery 
} from '@mui/material';
import { 
  PieChart, 
  Pie, Cell, 
  Legend, 
  ResponsiveContainer, 
  Tooltip 
} from 'recharts';
import { useState, useEffect } from 'react';

const Row1 = () => {
  const COLORS = [
    "#f2b455",
    "#a09de0",
    "#12efca",
    "#ffcdd5",
    "#f5c377",
    "#41f2d5",
    "#8884d8",
    "#ffc0cb",
  ];

  const [chartWidth, setChartWidth] = useState(500);
  const isSmallScreen = useMediaQuery('(max-width: 1200px)');
  const [budgetData, setBudgetData] = useState({});

  const handleUpdateBudget = (field: string, value: number) => {
    const updatedBudgetData = { ...budgetData, [field]: value };
    setBudgetData(updatedBudgetData);
    localStorage.setItem('budget', JSON.stringify(updatedBudgetData));
    console.log(`Updated ${field} field with value ${value}`);
  };

  const handleFieldChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    const numericValue = parseFloat(value);
    handleUpdateBudget(name, numericValue);
  };
  
  useEffect(() => {
    if (isSmallScreen) {
      setChartWidth(300);
    } else {
      setChartWidth(650);
    }
  }, [isSmallScreen]);

  useEffect(() => {
    const storedBudgetString = localStorage.getItem('budget');
  const storedBudget = storedBudgetString ? JSON.parse(storedBudgetString) : {};
  if (Object.keys(storedBudget).length > 0) {
    setBudgetData(storedBudget);
  } else {
    setBudgetData({
      income: 550,
      rent: 300,
      insurance: 275,
      electric: 200,
      internet: 700,
      gas: 100,
      groceries: 135,
      loans: 350,
    });
  }
}, []);

  const data = Object.entries(budgetData).map(([name, value]) => ({
    name,
    value: value || 0,
  }));

  return (
    <>
      <DashboardBox gridArea="a" marginTop="3rem">
        <BoxHeader title="Budget" subtitle="" sideText="" />
        <Grid container spacing={5} justifyContent='center' paddingTop={15}>
          <Grid item xs={4}>
            <FlexBetween flexDirection="column" gap="1rem">
              <BoxHeader 
                title="Income" 
                subtitle="" 
                sideText=""
              />
              <TextField
                label="Income"
                type="number"
                name="income"
                variant="outlined"
                fullWidth
                required
                sx={{ width: '100%', marginTop: '.25rem' }}
                InputProps={{ sx: { backgroundColor: 'grey' } }}
                onChange={handleFieldChange}
              />
              {/* <Button type="submit" color="primary">
                  Add
              </Button> */}

              <BoxHeader 
                title="Rent/Mortgage" 
                subtitle="" 
                sideText="" 
              />
              <TextField
                label="Rent/Mortgage"
                type="number"
                name="rent"
                variant="outlined"
                fullWidth
                required
                sx={{ width: '100%', marginTop: '.25rem' }}
                InputProps={{ sx: { backgroundColor: 'grey' } }}
                onChange={handleFieldChange}
              />
              {/* <Button type="submit" color="primary">
                  Add
              </Button> */}

              <BoxHeader 
                title="Insurance" 
                subtitle="" 
                sideText="" 
              />
              <TextField
                label="Insurance"
                type="number"
                name="insurance"
                variant="outlined"
                fullWidth
                required
                sx={{ width: '100%', marginTop: '.25rem' }}
                InputProps={{ sx: { backgroundColor: 'grey' } }}
                onChange={handleFieldChange}
              />
              {/* <Button type="submit" color="primary">
                  Add
              </Button> */}

              <BoxHeader 
                title="Electric" 
                subtitle="" 
                sideText="" 
              />
              <TextField
                label="Electric"
                type="number"
                name="electric"
                variant="outlined"
                fullWidth
                required
                sx={{ width: '100%', marginTop: '.25rem' }}
                InputProps={{ sx: { backgroundColor: 'grey' } }}
                onChange={handleFieldChange}
              />
              {/* <Button type="submit" color="primary">
                  Add
              </Button> */}
            </FlexBetween>
          </Grid>  
            <Grid item xs={4}>
              <FlexBetween flexDirection="column" gap="1rem">
              
              <BoxHeader 
                title="Internet" 
                subtitle="" 
                sideText="" 
              />
              <TextField
                label="Internet"
                type="number"
                name="internet"
                variant="outlined"
                fullWidth
                required
                sx={{ width: '100%', marginTop: '.25rem' }}
                InputProps={{ sx: { backgroundColor: 'grey' } }}
                onChange={handleFieldChange}
              />
              {/* <Button type="submit" color="primary">
                  Add
              </Button> */}

              <BoxHeader 
                title="Gas" 
                subtitle="" 
                sideText="" 
              />
              <TextField
                label="Gas"
                type="number"
                name="gas"
                variant="outlined"
                fullWidth
                required
                sx={{ width: '100%', marginTop: '.25rem' }}
                InputProps={{ sx: { backgroundColor: 'grey' } }}
                onChange={handleFieldChange}
              />
              {/* <Button type="submit" color="primary">
                  Add
              </Button> */}
              
              <BoxHeader 
                title="Groceries" 
                subtitle="" 
                sideText="" 
              />
              <TextField
                label="Groceries"
                type="number"
                name="groceries"
                variant="outlined"
                fullWidth
                required
                sx={{ width: '100%', marginTop: '.25rem' }}
                InputProps={{ sx: { backgroundColor: 'grey' } }}
                onChange={handleFieldChange}
              />
              {/* <Button type="submit" color="primary">
                  Add
              </Button> */}
              <BoxHeader 
                title="Loans" 
                subtitle="" 
                sideText="" 
              />
              <TextField
                label="Loans"
                type="number"
                name="loans"
                variant="outlined"
                fullWidth
                required
                sx={{ width: '100%', marginTop: '.25rem' }}
                InputProps={{ sx: { backgroundColor: 'grey' } }}
                onChange={handleFieldChange}
              />
              {/* <Button type="submit" color="primary">
                  Add
              </Button> */}
              </FlexBetween>
            </Grid>
          </Grid>         
      </DashboardBox>
      <DashboardBox gridArea="b" marginTop="3rem">
        <BoxHeader title="Graph" subtitle="" sideText="" />
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={chartWidth} height={chartWidth}>
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={Math.floor(chartWidth / 6)} // Adjust the inner radius based on the chart width
                  outerRadius={Math.floor(chartWidth / 3)} // Adjust the outer radius based on the chart width
                  paddingAngle={-2}
                  dataKey="value"
                >
                  {data.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  align="right"
                  verticalAlign="bottom"
                  layout="vertical"
                  wrapperStyle={{
                    right: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                  formatter={(value) => (
                    <span style={{ color: '#FFF' }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </Box>
      </DashboardBox>
    </>
  );
};

export default Row1;
