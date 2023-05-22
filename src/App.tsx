import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Risk from './pages/risk';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function Copyright() {
  return (
    <Box sx={{
      paddingX: 10,
      border: '1px solid black',
      width: '100%',
      height: '100%',
    }}>

    </Box>
  );
}

export default function App() {

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Container
      maxWidth="xl"
    >
      <Risk />
    </Container>
    </LocalizationProvider>
  );
}
