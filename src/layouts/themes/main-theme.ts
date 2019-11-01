import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFCA28',
    },
    secondary: {
      main: '#42A5F5',
    },
    error: {
      main: '#FF7043',
    },
    background: {
      default: '#BDBDBD',
    },
    text: {
      primary: '#009688',
      secondary: '#00897B',
      disabled: '',
      hint: '',
    },
  },
});

export default theme;
