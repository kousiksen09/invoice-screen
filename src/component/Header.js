import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CompanyLogo from '../assets/CompanyLogo.svg';
import { Typography } from '@material-ui/core';
import HrcWhiteLogoIcon from '../assets/HRC-White-logo.svg';
import { pxToVh, pxToRem, pxToVw } from '../utils/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    height: '10vh',
    width: '100%',
  },
  companyLogo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: '100%',
    width: '30%',
  },
  logo: {
    position: 'absolute',
    height: pxToVh(80),
    width: pxToVw(80),
  },
  headerTxt: {
    position: 'absolute',
    left: '5vw',
    top: '1vh',
    overflow: 'hidden',
    lineHeight: '4.67vh',
    textOverflow: 'ellipsis',
    display: 'inline-block',
    color: theme.palette.text.primary,
    fontSize: pxToRem(48),
    fontWeight: 700,
  },
  hrcLogoDiv: {
    position: 'relative',
    top: '-3vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '50%',
  },
  hrcLogo: {
    position: 'absolute',
    height: pxToVh(160),
    width: pxToVw(270),
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.companyLogo}>
        <img src={CompanyLogo} alt='logo' className={classes.logo} />
        <Typography variant='h4' className={classes.headerTxt}>
          ABC Products
        </Typography>
      </div>
      <div className={classes.hrcLogoDiv}>
        <img src={HrcWhiteLogoIcon} alt='hrc' className={classes.hrcLogo} />
      </div>
    </div>
  );
}

export default Header;
