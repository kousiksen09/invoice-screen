import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from './utils/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Invoice from './views/Invoice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.main,
    padding: '1rem',
    fontFamily: 'Roboto',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Invoice />
        </Provider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
