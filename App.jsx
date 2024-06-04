import { createTheme, ThemeProvider } from '@mui/material/styles';
import Invoice from './Invoice';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // You can change this color
    },
    secondary: {
      main: '#dc004e', // You can change this color
    },
    default: {
      main: '#9e9e9e', // You can change this color or add custom color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Invoice />
    </ThemeProvider>
  );
}

export default App;
