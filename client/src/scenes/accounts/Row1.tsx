import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox'
import { Box, useTheme, } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { 
  Bar, 
  BarChart, 
  Legend, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
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
  const data = [
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

  const checking = [
    {
      id: 1,
      name: "Costco",
      date: "01/01/22",
      month: "Jan",
      amount: "$359.25",
      credit_debit: "-",
      total: 57943.67,
    },
    {
      id: 2,
      name: "Sam's Club",
      date: "02/01/22",
      month: "Feb",
      amount: "$10030.21",
      credit_debit: "+",
      total: 67973.88,
    },
    {
      id: 3,
      name: "Pizza Hut",
      date: "03/01/22",
      month: "Mar",
      amount: "$60.25",
      credit_debit: "-",
      total: 57913.63,
    },
    {
      id: 4,
      name: "QuickTrip",
      date: "01/05/22",
      month: "Jan",
      amount: "$50.00",
      credit_debit: "-",
      total: 54859.54
    },
    {
      id: 5,
      name: "Salary Deposit",
      date: "02/15/22",
      month: "Feb",
      amount: "$3000.00",
      credit_debit: "+",
      total: 57859.54
    },
    {
      id: 6,
      name: "Starbucks",
      date: "03/10/22",
      month: "Mar",
      amount: "$5.75",
      credit_debit: "-",
      total: 57853.79
    },
    {
      id: 7,
      name: "Amazon",
      date: "04/20/22",
      month: "Apr",
      amount: "$120.50",
      credit_debit: "-",
      total: 57733.29
    },
    {
      id: 8,
      name: "Birthday Gift",
      date: "05/01/22",
      month: "May",
      amount: "$500.00",
      credit_debit: "+",
      total: 58233.29
    },
    {
      id: 9,
      name: "Four Peaks Brewery",
      date: "06/12/22",
      month: "Jun",
      amount: "$80.75",
      credit_debit: "-",
      total: 58152.54
    },
    {
      id: 10,
      name: "Bonus",
      date: "07/07/22",
      month: "Jul",
      amount: "$1000.00",
      credit_debit: "+",
      total: 59152.54
    },
    {
      id: 11,
      name: "AMC",
      date: "08/18/22",
      month: "Aug",
      amount: "$40.00",
      credit_debit: "-",
      total: 59112.54
    },
    {
      id: 12,
      name: "Target Refund",
      date: "09/25/22",
      month: "Sep",
      amount: "$25.00",
      credit_debit: "+",
      total: 59137.54
    },
    {
      id: 13,
      name: "Safeway",
      date: "10/05/22",
      month: "Oct",
      amount: "$150.30",
      credit_debit: "-",
      total: 58987.24
    },
    {
      id: 14,
      name: "Freelance Job",
      date: "11/10/22",
      month: "Nov",
      amount: "$500.00",
      credit_debit: "+",
      total: 59487.24
    },
    {
      id: 15,
      name: "Fry's Electronics",
      date: "12/20/22",
      month: "Dec",
      amount: "$800.00",
      credit_debit: "-",
      total: 58687.24
    },
  ];

  const savings = [
    {
      id: 16,
      name: "Retirement",
      date: "01/25/22",
      month: "Jan",
      amount: "$10000",
      credit_debit: "+",
      total: 49209.56,
    },
    {
      id: 17,
      name: "Transfer",
      date: "02/07/23",
      month: "Feb",
      amount: "$1000.00",
      credit_debit: "-",
      total: 48209.56,
    },
    {
      id: 18,
      name: "Vacation",
      date: "03/01/23",
      month: "Mar",
      amount: "$5400.21",
      credit_debit: "+",
      total: 53609.77,
    },
    {
      id: 19,
      name: "Investment Dividend",
      date: "04/12/22",
      month: "Apr",
      amount: "$500.00",
      credit_debit: "+",
      total: 54109.77,
    },
    {
      id: 20,
      name: "Charitable Donation",
      date: "05/02/22",
      month: "May",
      amount: "$250.00",
      credit_debit: "-",
      total: 53859.77
    },           
    {
      id: 21,
      name: "Business Expense",
      date: "06/18/22",
      month: "Jun",
      amount: "$300.75",
      credit_debit: "-",
      total: 53559.02
    },            
    {
      id: 22,
      name: "Royalty Payment",
      date: "07/05/22",
      month: "Jul",
      amount: "$800.00",
      credit_debit: "+",
      total: 54359.02
    },            
    {
      id: 23,
      name: "Insurance Premium",
      date: "08/10/22",
      month: "Aug",
      amount: "$150.50",
      credit_debit: "-",
      total: 54208.52
    },            
    {
      id: 24,
      name: "Tax Refund",
      date: "09/15/22",
      month: "Sep",
      amount: "$1000.00",
      credit_debit: "+",
      total: 55208.52
    },
    {
      id: 25,
      name: "Rental Income",
      date: "10/20/22",
      month: "Oct",
      amount: "$1200.00",
      credit_debit: "+",
      total: 56408.52
    },
    {
      id: 26,
      name: "Car Repair",
      date: "11/03/22",
      month: "Nov",
      amount: "$300.00",
      credit_debit: "-",
      total: 56108.52
    },
    {
      id: 27,
      name: "Scholarship Award",
      date: "12/12/22",
      month: "Dec",
      amount: "$2000.00",
      credit_debit: "+",
      total: 58108.52
    },
    {
      id: 28,
      name: "Medical Expense",
      date: "01/05/23",
      month: "Jan",
      amount: "$450.00",
      credit_debit: "-",
      total: 57658.52
    },
    {
      id: 29,
      name: "Freelance Payment",
      date: "02/18/23",
      month: "Feb",
      amount: "$800.00",
      credit_debit: "+",
      total: 58458.52
    },
    {
      id: 30,
      name: "Subscription Renewal",
      date: "03/10/23",
      month: "Mar",
      amount: "$50.00",
      credit_debit: "-",
      total: 58408.52
    },
  ];

  const columns = [
    // { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'date', headerName: 'Date' },
    { field: 'month', headerName: 'Month'},
    { field: 'amount', headerName: 'Amount' },
    { field: 'credit_debit', headerName: 'Credit/Debit' },
    { field: 'total', headerName: 'Total' },
  ];

  const { palette } = useTheme();
  const customPalette: Palette = {
    primary: {
      '300': '#f7d299',
      '500': '#12efc8',
    },
    secondary: {
      '500': '#8884d8',
    },
  };

  return (
    <>
        <DashboardBox gridArea="a" marginTop="3rem" height='165%'>
          <BoxHeader 
            title='Checking'
            subtitle=''
            sideText=''
          />
          <Box
            mt='0.5rem'
            p='0 0.5rem'
            height='calc(45% - 3rem)'
            // width='620px'
            // display="flex"
            // justifyContent="center"
            // alignItems="center"
            // height="100%"
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
              rows={ checking }
              columns={ columns }
            />
          </Box>
          <BoxHeader 
            title='Savings'
            subtitle=''
            sideText=''
          />
          <Box
            mt='0.5rem'
            p='0 0.5rem'
            height='calc(45% - 3rem)'
            // width='620px'
            // display="flex"
            // justifyContent="center"
            // alignItems="center"
            // height="100%"
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
              rows={ savings }
              columns={ columns }
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
            <ResponsiveContainer width="100%" height="80%">
              <BarChart
                width={500}
                height={300}
                data={data}                
                margin={{
                  top: 0,
                  right: 30,
                  left: -5,
                  bottom: 0,
                }}>
                <defs>
                  <linearGradient id="Checking" x1="0" y1="0" x2="0" y2="1">
                      <stop 
                        offset="5%" 
                        stopColor={customPalette.primary[300]} 
                        stopOpacity={0.8}
                      />
                      <stop 
                        offset="95%" 
                        stopColor={customPalette.primary[300]} 
                        stopOpacity={0}
                      />
                  </linearGradient>
                  <linearGradient id="Savings" x1="0" y1="0" x2="0" y2="1">
                      <stop 
                        offset="5%" 
                        stopColor={customPalette.secondary[500]} 
                        stopOpacity={0.8}
                      />
                      <stop 
                        offset="95%" 
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

    </>
  );
};

export default Row1;