import { useState } from 'react';

// material-ui
import {
//  Avatar,
//  AvatarGroup,
  Box,
  Button,
  Grid,
//  List,
//  ListItemAvatar,
//  ListItemButton,
//  ListItemSecondaryAction,
//  ListItemText,
//  MenuItem,
  Stack,
//  TextField,
  Typography
} from '@mui/material';

// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
//import ReportAreaChart from './ReportAreaChart';
//import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
// import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
// import avatar1 from 'assets/images/users/avatar-1.png';
// import avatar2 from 'assets/images/users/avatar-2.png';
// import avatar3 from 'assets/images/users/avatar-3.png';
// import avatar4 from 'assets/images/users/avatar-4.png';

// avatar style
// const avatarSX = {
//   width: 36,
//   height: 36,
//   fontSize: '1rem'
// };

// action style
// const actionSX = {
//   mt: 0.75,
//   ml: 1,
//   top: 'auto',
//   right: 'auto',
//   alignSelf: 'flex-start',
//   transform: 'none'
// };

// sales report status
// const status = [
//   {
//     value: 'today',
//     label: 'Today'
//   },
//   {
//     value: 'month',
//     label: 'This Month'
//   },
//   {
//     value: 'year',
//     label: 'This Year'
//   }
// ];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  // const [value, setValue] = useState('today');
  const [slot, setSlot] = useState('week');

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h2" style={{ color: '#0250c5' }}>儀表板</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="評鑑完成度" count="81%" percentage={15.3} extra="15.3%" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="距離下次評鑑時間" count="1/13" extra="剩餘4天" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="距離下次督察時間" count="12/25" extra="剩餘355天" />
      </Grid>
      {/* <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Sales" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" />
      </Grid> */}

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* 分項完成度 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sx={{ mb: -2.25 }}>
            <br /><Typography variant="h2" style={{ color: '#0250c5' }}>評鑑進度</Typography>  <br />
          </Grid>
          <Grid item>
            <Typography variant="h4">評鑑完成進度時間表</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="medium"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                每月進度
              </Button>
              <Button
                size="medium"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                每周進度
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
          <br /><br /><br />
            <Typography variant="h4" >各項目完成度</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h5" color="textSecondary">
                總共完成度
              </Typography>
              <Typography variant="h3">81%</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>
      {/* 項目細項完成度 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h4">評鑑項目細項完成度</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>

            {/* 分項完成度 */}
            <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sx={{ mb: -2.25 }}>
            <br /> <Typography variant="h2" style={{ color: '#0250c5' }}>督察進度</Typography>  <br />
          </Grid>
          <Grid item>
            <Typography variant="h4">督察完成進度時間表</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="medium"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                每月進度
              </Button>
              <Button
                size="medium"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                每周進度
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <br /><br /><br />
            <Typography variant="h4">各項目完成度</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h5" color="textSecondary">
                總共完成度
              </Typography>
              <Typography variant="h3">81%</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>
      {/* 項目細項完成度 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h4">督察細項完成度</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
