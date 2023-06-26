import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox'
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ResponsiveContainer, 
  BarChart, 
  XAxis, 
  YAxis, 
  Legend, 
  Bar,
  Tooltip,
  Cell,
  Pie,
  PieChart,
  Area,
  AreaChart, 
} from 'recharts';

type Palette = {
  primary: {
    [key: string]: string;
  };
  secondary: {
    [key: string]: string;
  };
};

const Row1 = () => {
  const [budgetData, setBudgetData] = useState({});

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
    value: value,
  }));

  const series = [
    {
      name: 'Student',
      data: [
        {
          id: 1,
          date: "January",
          payment: "$90",
          interest: "30%",
          lateFee: "$20",
          remaining: 34500
      },
      {
        id: 2,
          date: "February",
          payment: "$1250",
          interest: "20%",
          lateFee: "$10",
          remaining: 33150
      },
      {
        id: 3,
          date: "March",
          payment: "$950",
          interest: "28%",
          lateFee: "$550",
          remaining: 34550
      },
      {
        id: 4,
          date: "April",
          payment: "$100",
          interest: "33%",
          lateFee: "$2200",
          remaining: 37550
      },
      {
        id: 5,
          date: "May",
          payment: "$1800",
          interest: "22%",
          lateFee: "$0",
          remaining: 35750
      },
      {
        id: 6,
          date: "June",
          payment: "$2700",
          interest: "18%",
          lateFee: "$0",
          remaining: 33050
      },
      {
        id: 7,
          date: "July",
          payment: "$1200",
          interest: "75%",
          lateFee: "$0",
          remaining: 31850,
      },
      {
        id: 8,
          date: "August",
          payment: "$500",
          interest: "15%",
          lateFee: "$50",
          remaining: 31350,
      },
      {
        id: 9,
          date: "September",
          payment: "$800",
          interest: "34%",
          lateFee: "$0",
          remaining: 30550,
      },
      {
        id: 10,
          date: "October",
          payment: "$1500",
          interest: "5%",
          lateFee: "$100",
          remaining: 29050,
      },
      {
        id: 11,
          date: "November",
          payment: "$700",
          interest: "28%",
          lateFee: "$0",
          remaining: 28350,
      },
      {
        id: 12,
          date: "December",
          payment: "$2000",
          interest: "11%",
          lateFee: "$0",
          remaining: 26350,
      }
      ],
    },
    {
      name: 'Auto',
      data: [
        {
          id: 13, 
          date: "January", 
          payment: "$550", 
          interest: "15%", 
          lateFee: "$30", 
          remaining: 27150 
      },
      { 
        id: 14,
          date: "February", 
          payment: "$900", 
          interest: "12%", 
          lateFee: "$0", 
          remaining: 26250 
      },
      { 
        id: 15,
          date: "March", 
          payment: "$350", 
          interest: "18%", 
          lateFee: "$15", 
          remaining: 25985 
      },
      { 
        id: 16,
          date: "April", 
          payment: "$1200", 
          interest: "10%", 
          lateFee: "$0", 
          remaining: 24785 
      },
      { 
        id: 17,
          date: "May", 
          payment: "$700", 
          interest: "20%", 
          lateFee: "$40", 
          remaining: 24045 
      },
      { 
        id: 18,
          date: "June", 
          payment: "$1800", 
          interest: "15%", 
          lateFee: "$0", 
          remaining: 22245 
      },
      { 
        id: 19,
          date: "July", 
          payment: "$400", 
          interest: "25%", 
          lateFee: "$25", 
          remaining: 21870 
      },
      { 
        id: 20,
          date: "August", 
          payment: "$1000", 
          interest: "18%", 
          lateFee: "$0", 
          remaining: 20870 
      },
      { 
        id: 21,
          date: "September", 
          payment: "$600", 
          interest: "22%", 
          lateFee: "$10", 
          remaining: 20280 
      },
      { 
        id: 22,
          date: "October", 
          payment: "$1500", 
          interest: "12%", 
          lateFee: "$0", 
          remaining: 18780 
      },
      { 
        id: 23,
          date: "November", 
          payment: "$800", 
          interest: "20%", 
          lateFee: "$50", 
          remaining: 17930 
      },
      { 
        id: 24,
          date: "December", 
          payment: "$2000", 
          interest: "15%", 
          lateFee: "$0", 
          remaining: 15930 
      },
      ]
    }
  ];
  const rows = [
    {
      id: 31,
      month: 'Jan',
      checking: 57943.67,
      savings: 48209.56,
      total: 60000,
    },
    {
      id: 32,
      month: 'Feb',
      checking: 67973.88,
      savings: 49209.56,
      total: 60000,
    },
    {
      id: 33,
      month: 'Mar',
      checking: 57913.63,
      savings: 53609.77,
      total: 60000,
    },
    {
      id: 34,
      month: 'Apr',
      checking: 57733.29,
      savings: 54109.77,
      total: 60000,
    },
    {
      id: 35,
      month: 'May',
      checking: 58233.29,
      savings: 53859.77,
      total: 60000,
    },
    {
      id: 36,
      month: 'Jun',
      checking: 58152.54,
      savings: 53559.02,
      total: 60000,
    },
    {
      id: 37,
      month: 'Jul',
      checking: 59152.54,
      savings: 54208.52,
      total: 60000,
    },
    {
      id: 38,
      month: 'Aug',
      checking: 59112.54,
      savings: 55208.52,
      total: 60000,
    },
    {
      id: 39,
      month: 'Sep',
      checking: 59137.54,
      savings: 49209.56,
      total: 60000,
    },
    {
      id: 40,
      month: 'Oct',
      checking: 58987.24,
      savings: 56408.52,
      total: 60000,
    },
    {
      id: 41,
      month: 'Nov',
      checking: 59487.24,
      savings: 56108.52,
      total: 60000,
    },
    {
      id: 42,
      month: 'Dec',
      checking: 58687.24,
      savings: 58108.52,
      total: 60000,
    },
  ];

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

  useEffect(() => {
    if (isSmallScreen) {
      setChartWidth(300); // Adjust the desired width for small screens
    } else {
      setChartWidth(450); // Default width for larger screens
    }
  }, [isSmallScreen]);

  const [selected, setSelected] = useState('accounts');
  useTheme();
  const customPalette: Palette = {
    primary: {
      '300': '#f7d299',
    },
    secondary: {
      '500': '#8884d8',
    },
  };


  return (
    <>
        <DashboardBox gridArea="a" marginTop="3rem">
          <NavLink
            to="/accounts"
            onClick={() => setSelected('accounts')}
            style={{ textDecoration: 'none', color: selected === 'accounts' ? customPalette.primary['300'] : 'inherit' }}
          >
            <BoxHeader 
              title='Accounts'
              subtitle=''
              sideText=''
            />
          </NavLink>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <ResponsiveContainer width="100%" height="80%">
              <BarChart
                width={500}
                height={300}
                data={rows}
                margin={{
                  top: 0,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}>
                <defs>
                  <linearGradient id="Checking" x1="0" y1="0" x2="0" y2="1">
                      <stop 
                        offset="15%" 
                        stopColor={customPalette.primary[300]} 
                        stopOpacity={0.8}
                      />
                      <stop 
                        offset="99%" 
                        stopColor={customPalette.primary[300]} 
                        stopOpacity={0}
                      />
                  </linearGradient>
                  <linearGradient id="Savings" x1="0" y1="0" x2="0" y2="1">
                      <stop 
                        offset="15%" 
                        stopColor={customPalette.secondary[500]} 
                        stopOpacity={0.8}
                      />
                      <stop 
                        offset="99%" 
                        stopColor={customPalette.secondary[500]} 
                        stopOpacity={0}
                      />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis dataKey="total" />
                <Tooltip />
                <Legend 
                  formatter={(value) => (
                    <span style={{ color: '#FFF' }}>{value}</span>
                  )}
                />
                <Bar dataKey="checking" fill="url(#Checking)" name='Checking'/>
                <Bar dataKey="savings" fill="url(#Savings)" name='Savings'/>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </DashboardBox>
        <DashboardBox gridArea="b" marginTop="3rem">
          <NavLink
            to="/loans"
            onClick={() => setSelected('loans')}
            style={{ textDecoration: 'none', color: selected === 'loans' ? customPalette.primary['300'] : 'inherit' }}
          >
            <BoxHeader 
                title='Loans'
                subtitle=''
                sideText=''
            />
          </NavLink>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart 
                margin={{
                  top: 30,
                  right: 30,
                  left: 5,
                  bottom: 55,
                }}
              >
                <defs>
                <linearGradient id="Auto" x1="0" y1="0" x2="0" y2="1">
                  <stop 
                    offset="5%" 
                    stopColor={customPalette.primary[300]} 
                    stopOpacity={0.5}
                  />
                  <stop 
                    offset="95%" 
                    stopColor={customPalette.primary[300]} 
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="Student" x1="0" y1="0" x2="0" y2="1">
                  <stop 
                    offset="5%" 
                    stopColor={customPalette.secondary[500]} 
                    stopOpacity={0.5}
                  />
                  <stop 
                    offset="95%" 
                    stopColor={customPalette.secondary[500]} 
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
                <XAxis 
                  dataKey="date" 
                  type="category" 
                  allowDuplicatedCategory={false} 
                />
                <YAxis dataKey="remaining" />
                <Tooltip 
                  formatter={(value) => (
                    <span style={{ color: 'black' }}>{value}</span>
                  )}
                  itemStyle={{ color: 'black' }}
                />
                <Legend
                  formatter={(value) => (
                    <span style={{ color: '#FFF' }}>{value}</span>
                  )}
                />
                <Area
                  dataKey="remaining"
                  data={series[0].data}
                  name={series[0].name}
                  key={series[0].name}
                  stroke="#8884d8" // Set the color for the first Area
                  fill="url(#Student)" 
                />
                <Area
                  dataKey="remaining"
                  data={series[1].data}
                  name={series[1].name}
                  key={series[1].name}
                  stroke="#f7d299"
                   // Set the color for the second line
                  fill="url(#Auto)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </DashboardBox>
        <DashboardBox gridArea="c" marginTop="3rem">
          <NavLink
            to="/budget"
            onClick={() => setSelected('budget')}
            style={{ textDecoration: 'none', color: selected === 'budget' ? customPalette.primary['300'] : 'inherit' }}
          >
            <BoxHeader 
                  title='Budget'
                  subtitle=''
                  sideText=''
            />
          </NavLink>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <ResponsiveContainer width="100%" height="80%">
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
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                    />
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