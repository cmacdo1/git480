import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox'
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { 
  ResponsiveContainer,  
  Tooltip,
  XAxis, 
  YAxis, 
  Legend,
  Area,
  AreaChart
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
  const { palette } = useTheme();
  const customPalette: Palette = {
    primary: {
      '300': '#f7d299',
    },
    secondary: {
      '500': '#8884d8',
    },
  };
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
      id: 25,
      date: "01/14/22",
      payment: "$90",
      interest: "30%",
      lateFee: "$20",
      remaining: 34500
  },
  {
    id: 26,
      date: "02/02/22",
      payment: "$1250",
      interest: "20%",
      lateFee: "$10",
      remaining: 33150
  },
  {
    id: 27,
      date: "03/19/22",
      payment: "$950",
      interest: "28%",
      lateFee: "$550",
      remaining: 34550
  },
  {
    id: 28,
      date: "04/30/22",
      payment: "$100",
      interest: "33%",
      lateFee: "$2200",
      remaining: 37550
  },
  {
    id: 29,
      date: "05/03/22",
      payment: "$1800",
      interest: "22%",
      lateFee: "$0",
      remaining: 35750
  },
  {
    id: 30,
      date: "06/27/22",
      payment: "$2700",
      interest: "18%",
      lateFee: "$0",
      remaining: 33050
  },
  {
    id: 31,
      date: "07/01/22",
      payment: "$1200",
      interest: "75%",
      lateFee: "$0",
      remaining: 31850,
  },
  {
    id: 32,
      date: "08/13/22",
      payment: "$500",
      interest: "15%",
      lateFee: "$50",
      remaining: 31350,
  },
  {
    id: 33,
      date: "09/29/22",
      payment: "$800",
      interest: "34%",
      lateFee: "$0",
      remaining: 30550,
  },
  {
    id: 34,
      date: "10/12/22",
      payment: "$1500",
      interest: "5%",
      lateFee: "$100",
      remaining: 29050,
  },
  {
    id: 35,
      date: "11/02/22",
      payment: "$700",
      interest: "28%",
      lateFee: "$0",
      remaining: 28350,
  },
  {
    id: 36,
      date: "12/10/22",
      payment: "$2000",
      interest: "11%",
      lateFee: "$0",
      remaining: 26350,
  }
  ];

  const columns = [
    // { field: 'id', headerName: 'ID'},
    { field: 'date', headerName: 'Date',  },
    { field: 'payment', headerName: 'Payment',  },
    { field: 'interest', headerName: 'Interest',  },
    { field: 'lateFee', headerName: 'Late Fee', },
    { field: 'remaining', headerName: 'Remaining', },
  ];

  const autoRows = [
    { 
      id: 37,
      date: "01/17/22", 
      payment: "$550", 
      interest: "15%", 
      lateFee: "$30", 
      remaining: 27150 
  },
  { 
    id: 38,
      date: "02/28/22", 
      payment: "$900", 
      interest: "12%", 
      lateFee: "$0", 
      remaining: 26250 
  },
  { 
    id: 39,
      date: "03/13/22", 
      payment: "$350", 
      interest: "18%", 
      lateFee: "$15", 
      remaining: 25985 
  },
  { 
    id: 40,
      date: "04/01/22", 
      payment: "$1200", 
      interest: "10%", 
      lateFee: "$0", 
      remaining: 24785 
  },
  { 
    id: 41,
      date: "05/05/22", 
      payment: "$700", 
      interest: "20%", 
      lateFee: "$40", 
      remaining: 24045 
  },
  { 
    id: 42,
      date: "06/27/22", 
      payment: "$1800", 
      interest: "15%", 
      lateFee: "$0", 
      remaining: 22245 
  },
  { 
    id: 43,
      date: "07/04/22", 
      payment: "$400", 
      interest: "25%", 
      lateFee: "$25", 
      remaining: 21870 
  },
  { 
    id: 44,
      date: "08/25/22", 
      payment: "$1000", 
      interest: "18%", 
      lateFee: "$0", 
      remaining: 20870 
  },
  { 
    id: 45,
      date: "09/03/22", 
      payment: "$600", 
      interest: "22%", 
      lateFee: "$10", 
      remaining: 20280 
  },
  { 
    id: 46,
      date: "10/19/22", 
      payment: "$1500", 
      interest: "12%", 
      lateFee: "$0", 
      remaining: 18780 
  },
  { 
    id: 47,
      date: "11/24/22", 
      payment: "$800", 
      interest: "20%", 
      lateFee: "$50", 
      remaining: 17930 
  },
  { 
    id: 48,
      date: "12/25/22", 
      payment: "$2000", 
      interest: "15%", 
      lateFee: "$0", 
      remaining: 15930 
  },
  ];

  const autoColumns = [
    // { field: 'id', headerName: 'ID'},
    { field: 'date', headerName: 'Date',  },
    { field: 'payment', headerName: 'Payment',  },
    { field: 'interest', headerName: 'Interest',  },
    { field: 'lateFee', headerName: 'Late Fee',  },
    { field: 'remaining', headerName: 'Remaining',  },
  ];

  return (
    <>
        <DashboardBox gridArea="a" marginTop="3rem" height='165%'>
          <BoxHeader 
            title='Student'
            subtitle=''
            sideText=''
          />
          <Box
            mt='0.5rem'
            p='0 0.5rem'
            height='calc(45% - 3rem)'
            sx={{
              "& .MuiDataGrid-root": {
                color: palette.grey[300],
                border: 'none'
              },
              "& .MuiDataGrid-cell": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnSeparator": {
                visibility: "hidden",
              },
            }}
          >
            <DataGrid 
              columnHeaderHeight={25}
              rowHeight={35}
              hideFooter={true}
              rows={ rows }
              columns={ columns }
            />
          </Box>
          <BoxHeader 
            title='Auto'
            subtitle=''
            sideText=''
          />
          <Box
            mt='0.5rem'
            p='0 0.5rem'
            height='calc(45% - 3rem)'
            sx={{
              "& .MuiDataGrid-root": {
                color: palette.grey[300],
                border: 'none'
              },
              "& .MuiDataGrid-cell": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnSeparator": {
                visibility: "hidden",
              },
            }}
          >
            <DataGrid 
              columnHeaderHeight={25}
              rowHeight={35}
              hideFooter={true}
              rows={ autoRows }
              columns={ autoColumns }
            />
          </Box>
        </DashboardBox>
        <DashboardBox gridArea="b" marginTop="3rem">
        <BoxHeader 
              title='Graph'
              subtitle=''
              sideText=''
          />
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
        
    </>
  );
};

export default Row1;