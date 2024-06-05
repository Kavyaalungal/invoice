import { createTheme, ThemeProvider } from '@mui/material/styles';
import Invoice from './Invoice';
import Navbar from './Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // Custom primary color
    },
    secondary: {
      main: '#ff9800', // Custom secondary color
    },
    default: {
      main: '#9e9e9e', // Custom default color
    },
  },
});

function App() {
  return (
    <div className='app-container'>
      {/* <Navbar/> */}

    
    <ThemeProvider theme={theme}>
      <Invoice />
    </ThemeProvider>
    </div>
  );
}

export default App;
