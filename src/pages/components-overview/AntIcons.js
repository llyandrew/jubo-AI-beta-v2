
import FileUpload from './FileUpload';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// material-ui
import {
  Grid,
  Typography,
  Button
} from '@mui/material';

// ==============================|| AI beta 評鑑檢查 ||============================== //

const AntIconsDefault = () => {
  const buttonStyle = {
    fontSize: '24px',
    background: 'linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%)',
  };
  return (
  <Grid>
    <Grid >
    <Typography variant="h2" style={{ fontSize: '30px', color: '#0250c5' }}>評鑑 AI Beta</Typography> <br /> <br />
    <Typography style={{ fontSize: '20px', color: 'gray' }}>AI Beta協助你更快的查閱準備資料是否完整，並且知道哪些檔案需要調整。</Typography> <br />
    <Typography style={{ fontSize: '20px', color: 'gray' }}>讓你在評鑑前更快速與安心地準備檔案。</Typography> <br />
    <br />
    </Grid>   

    <Grid  container rowSpacing={8} columnSpacing={5}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="上次AI評鑑時間" count="11/25" extra="完成度為81%" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} container direction="row" alignItems="flex-shrink">
        <Button variant="contained" color="primary" style={buttonStyle}>開始進行AI評鑑檢查</Button>
      </Grid>
    </Grid>
    <br /> <br />
    <FileUpload /> 
  </Grid>

//linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)
  );
};

export default AntIconsDefault;
