import { createMuiTheme } from '@material-ui/core/styles';

/**
 * @param px input px as per 1920 * 1080 resolution
 */
export const pxToRem = (px) => `${px / 22.5}rem`;

/**
 * @param px input px as per 1920 * 1080 resolution
 */
export const pxToVh = (px) => `${px * 0.09259}vh`;

export const pxToVh1974 = (px) => `${px * 0.10266940451}vh`;

/**
 * @param px input px as per 1920 * 930 resolution
 */
export const pxToVh930 = (value) => {
  const newValue = (value * 1080) / 930;
  return pxToVh(newValue);
};
/**
 * @param px input px as per 1920 * 1080 resolution
 */
export const pxToVw = (px) => `${px * 0.05208}vw`;

export default createMuiTheme({
  palette: {
    primary: {
      main: '#5DAAE0',
      light: 'rgb(93,175,240,0.5)',
      dark: 'rgb(93,175,240,0.2)',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: '#FF7E7E',
    },
    common: {
      white: '#FFFFFF',
      black: 'rgb(0,0,0)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#5DAAE0',
    },
    background: {
      default: '#273D49',
      main: 'radial-gradient(#58687E, #39495E)',
    },
    divider: 'rgb(255,255,255,0.5)',
    grey: {
      50: 'rgb(255,255,255,0.5)',
      100: 'rgb(255,255,255,0.65)',
      200: 'rgb(255,255,255,0.85)',
      300: 'rgb(255,255,255)',
      400: 'rgb(0,0,0,0.5)',
      500: 'rgb(0,0,0,0.65)',
      600: 'rgb(0,0,0,0.85)',
    },
    // eslint-disable-next-line no-dupe-keys
    background: {
      main: 'radial-gradient(#58687E, #39495E)',
      paper: '#273D49',
      default: 'rgba(39, 61, 73, .75)',
    },
    cardBackground: {
      main: 'rgba(39, 61, 73, .75)',
      color: '#FFFFFF',
    },
    solidBackground: {
      main: '#273D49',
    },
    chatHeadBackground: {
      main: '#FC7500',
      color: '#FFFFFF',
    },
    chatWindowBackground: {
      main: '#39495E',
    },
    popOver: {
      main: '#273d49',
    },
  },
  shadows: ['none', '0px 3px 6px rgba(0,0,0,.20)'],
  spacing: 8,
  typography: {
    pxToRem: (px) => pxToRem(px),
    pxToVh: (px) => pxToVh(px),
    pxToVw: (px) => pxToVw(px),
    pxToVh1974: (px) => pxToVh1974(px),
    pxToVh930: (px) => pxToVh930(px),
    h1: {
      fontSize: pxToRem(50),
      lineHeight: '2.05rem',
    },
    // used MWB
    h2: {
      fontSize: pxToRem(40),
      color: '#5DAAE0',
      lineHeight: '2.05rem',
    },
    // used
    h3: {
      fontSize: pxToRem(30),
      color: 'rgb(255,255,255,0.5)',
      lineHeight: 1.04,
    },
    h4: {
      fontSize: pxToRem(26),
      lineHeight: 1.17,
    },
    // used
    h5: {
      fontSize: pxToRem(24),
      color: 'rgb(255,255,255,0.65)',
      lineHeight: 'normal',
    },
    h6: {
      fontSize: pxToRem(22),
    },
    // used MWD
    subtitle1: {
      fontSize: pxToRem(20),
      color: 'rgb(255,255,255,0.85)',
      lineHeight: 'normal',
    },
    // used call prep
    subtitle2: {
      fontSize: pxToRem(18),
      color: 'rgb(255,255,255,0.85)',
    },
    body1: {
      fontSize: pxToRem(20),
      color: 'rgb(255,255,255,0.65)',
      lineHeight: 'normal',
    },
    // used call prep
    body2: {
      fontSize: pxToRem(20),
      color: 'rgb(255,255,255)',
      lineHeight: '1.5',
    },
    caption: {
      fontSize: pxToRem(16),
      color: '#FFFFFF',
    },
    overline: {
      fontSize: pxToRem(14),
      color: 'inherit',
      textTransform: 'none',
    },

    fontFamily: 'Roboto',
  },
  status: {
    // My business variables
    safe: '#5FC32C',
    safe2: '#CFFFB5',
    warning: '#FF8888',
  },
  border: {
    fine: {
      primary: `${pxToRem(1)} solid #5DAAE0`,
      secondary: `${pxToRem(1)} solid #FFFFFF`,
      main: `${pxToRem(1)} solid`,
    },
    standard: {
      primary: `${pxToRem(2)} solid #5DAAE0`,
      secondary: `${pxToRem(2)} solid #FFFFFF`,
      main: `${pxToRem(2)} solid`,
    },
    broad: {
      primary: `${pxToRem(3)} solid #5DAAE0`,
      secondary: `${pxToRem(3)} solid #FFFFFF`,
      main: `${pxToRem(3)} solid`,
    },
  },
  overrides: {
    Mui: {
      focused: {
        backgroundColor: 'none !important',
      },
    },
    MuiAvatar: {
      root: {
        lineHeight: 'unset',
      },
    },
    MuiCheckbox: {
      root: {
        color: '#9CA4AF',
      },
    },

    MuiPaper: {
      rounded: {
        borderRadius: pxToRem(4),
      },
      elevation1: {
        boxShadow: 'none',
      },
    },
    MuiIconButton: {
      root: {
        padding: pxToRem(12),
      },
      disabled: {
        color: '#FFFFFF',
      },
      edgeEnd: {
        marginRight: pxToRem(0),
      },
    },
    MuiListItemIcon: {
      root: {
        marginRight: pxToRem(16),
        minWidth: 0,
      },
    },
    MuiListItemSecondaryAction: {
      root: {
        right: pxToRem(4),
      },
    },
    MuiListItem: {
      root: {
        paddingTop: pxToRem(11),
        paddingBottom: pxToRem(11),
        '&.Mui-selected': {
          backgroundColor: 'rgba(0,0,0,0.14)',
        },
      },
      button: {
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.08)',
        },
      },
      gutters: {
        paddingLeft: pxToRem(16),
        paddingRight: pxToRem(16),
      },
      secondaryAction: {
        paddingRight: pxToRem(32),
      },
      dense: {
        paddingTop: pxToRem(8),
        paddingBottom: pxToRem(8),
      },
    },
    MuiList: {
      padding: {
        paddingTop: pxToRem(8),
        paddingBottom: pxToRem(8),
      },
    },
    MuiMenuItem: {
      root: {
        height: pxToRem(24),
        color: '#ffffff',
        fontSize: '1rem',
        boxSizing: 'content-box',
        minHeight: '0',
        paddingTop: pxToRem(11),
        paddingBottom: pxToRem(11),
      },
      gutters: {
        paddingLeft: pxToRem(16),
        paddingRight: pxToRem(16),
      },
    },
    MuiInputBase: {
      input: {
        fontSize: pxToRem(20),
        padding: `${pxToRem(6)} 0 ${pxToRem(7)}`,
        '& .Mui-focused': {
          backgroundColor: 'none !important',
        },
      },
    },

    MuiExpansionPanel: {
      expanded: {
        margin: '0px',
      },
      rounded: {
        '&:last-child': {
          borderBottomLeftRadius: pxToRem(4),
          borderBottomRightRadius: pxToRem(4),
          borderTopLeftRadius: pxToRem(4),
          borderTopRightRadius: pxToRem(4),
        },
        '&:first-child': {
          borderBottomLeftRadius: pxToRem(4),
          borderBottomRightRadius: pxToRem(4),
          borderTopLeftRadius: pxToRem(4),
          borderTopRightRadius: pxToRem(4),
        },
      },
      root: {
        '&$expanded': {
          margin: pxToRem(0),
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 0,
      },
      paddingCheckbox: {
        width: pxToVw(48),
        padding: '0 0 0.4rem',
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        minHeight: pxToRem(48),
        '&$expanded': {
          minHeight: pxToRem(64),
        },
      },
      content: {
        '& > :last-child': {
          paddingRight: pxToRem(32),
        },
        '&$expanded': {
          margin: '0px',
        },
      },
      expandIcon: {
        right: pxToRem(8),
        position: 'absolute',
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: `${pxToRem(8)} ${pxToRem(24)} ${pxToRem(24)}`,
      },
    },

    MuiButton: {
      root: {
        minWidth: pxToRem(64),
        padding: `${pxToRem(6)} ${pxToRem(16)}`,
        borderRadius: pxToRem(4),
      },
      text: {
        padding: `${pxToRem(6)} ${pxToRem(8)}`,
      },
      startIcon: {
        display: 'inherit',
        marginLeft: pxToRem(-4),
        marginRight: pxToRem(8),
      },
      sizeSmall: {
        padding: `${pxToRem(4)} ${pxToRem(8)}`,
        minWidth: pxToRem(64),
      },

      outlined: {
        border: `${pxToRem(1)} solid #3B607A`,
        padding: `${pxToRem(5)} ${pxToRem(16)}`,
      },
      outlinedSecondary: {
        border: `${pxToRem(1)} solid rgba(255,255,255,0.5)`,
        '&:hover': {
          border: `${pxToRem(1)} solid rgba(255,255,255,0.8)`,
        },
      },
    },
    MuiDialogTitle: {
      root: {
        padding: `${pxToRem(24)} ${pxToRem(24)} ${pxToRem(20)}`,
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: pxToRem(600),
      },
      paperScrollPaper: {
        maxHeight: `calc(100% - ${pxToRem(96)})`,
      },
    },
    MuiDialogActions: {
      root: {
        padding: '0',
      },
      spacing: {
        '& > :last-child': {
          marginLeft: '0',
        },
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: pxToRem(24),
      },
      fontSizeLarge: {
        fontSize: pxToRem(35),
      },
      fontSizeSmall: {
        fontSize: pxToRem(20),
      },
    },
    MuiSelect: {
      icon: {
        top: `calc(50% - ${pxToRem(12)})`,
      },
      select: {
        minWidth: pxToRem(16),
        paddingRight: `${pxToRem(32)} !important`,
      },
    },
    MuiTableRow: {
      head: {
        height: pxToRem(56),
      },
    },
    MuiFab: {
      root: {
        minHeight: 'unset',
      },
      sizeSmall: {
        height: '1em',
        width: '1em',
        fontSize: '2rem',
      },
    },
    MuiSwitch: {
      root: {
        width: pxToRem(62),
        height: pxToRem(47),
        padding: pxToRem(12),
      },
      thumb: {
        width: pxToRem(20),
        height: pxToRem(20),
        boxShadow: `${pxToRem(0)} ${pxToRem(3)} ${pxToRem(6)}rgba(0,0,0,.20)`,
      },
      switchBase: {
        width: pxToRem(48),
        height: pxToRem(48),
      },
      track: {
        width: pxToRem(34),
        height: pxToRem(14),
        marginTop: pxToRem(-7),
        marginLeft: pxToRem(-17),
        borderRadius: pxToRem(7),
        top: '50%',
        left: '50%',
        position: 'absolute',
      },
    },
    PrivateSwitchBase: {
      root: {
        padding: pxToRem(12),
      },
    },
    PrivateRadioButtonIcon: {
      root: {
        color: '#5DAEE0',
      },
    },
    MuiFormControlLabel: {
      labelPlacementStart: {
        marginLeft: pxToRem(16),
        marginRight: pxToRem(-14),
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: pxToRem(16),
        '& .Mui-focused': {
          backgroundColor: 'none !important',
        },
      },
    },
    CustomSelect: {
      selectInputContainer: {
        margin: `${pxToRem(0)} ${pxToRem(0)} ${pxToRem(10)}  ${pxToRem(0)}`,
      },
    },

    MuiInput: {
      formControl: {
        'label + &': {
          marginTop: pxToRem(16),
        },
        '& .Mui-focused': {
          backgroundColor: 'none !important',
        },
      },
      underline: {
        '&:before': {
          borderBottom: `${pxToRem(2)} solid #3B607A`,
        },
        '&:after': {
          borderBottom: `${pxToRem(2)} solid rgb(93,175,240,0.2)`,
        },
        '&:hover:before': {
          borderBottom: `${pxToRem(
            2
          )} solid rgba(93, 170, 224, 0.7) !important`,
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        transform: `translate(0, ${pxToRem(24)}) scale(1)`,
      },
    },
    MuiTypography: {
      root: {
        display: 'block',
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: pxToRem(18),
        marginTop: '0.5vh !important',
        marginBottom: '0 !important',
        padding: '1vh !important',
        borderRadius: '1vh !important',
        marginLeft: '0.5vw !important',
        maxWidth: 'infinite',
      },
      touch: {
        fontSize: pxToRem(18),
      },
    },
    MuiTab: {
      root: {
        minWidth: 'unset !important',
        padding: `${pxToRem(0)} ${pxToRem(0)}`,
      },
      textColorInherit: {
        color: '#FFFFFF',
        fill: '#FFFFFF',
      },
      selected: {
        color: '#5DAAE0',
        fill: '#5DAAE0',
      },
      labelIcon: {
        minHeight: 'unset',
        paddingTop: pxToRem(9),
      },
    },
    MuiTabs: {
      root: {
        minHeight: 'unset',
        minWidth: 'unset',
        maxWidth: 'unset',
      },
      fixed: {
        overflow: 'hidden',
      },
    },
    MuiListItemText: {
      root: {
        padding: `0 ${pxToRem(16)}`,
        marginTop: 0,
        marginBottom: 0,
        '&:first-child': {
          paddingLeft: '0',
        },
      },
      multiline: {
        marginTop: 0,
        marginBottom: 0,
      },
    },
    MuiGrid: {
      'spacing-xs-8': {
        '& > $item': {
          padding: `${pxToVh(4)} ${pxToVw(4)}`,
        },
        width: `calc(100% + ${pxToVw(8)})`,
        margin: `-${pxToRem(4)}`,
      },
      'spacing-xs-10': {
        '& > $item': {
          padding: `${pxToVh(8)} ${pxToVw(8)}`,
        },
        width: `calc(100% + ${pxToVw(16)})`,
        margin: `-${pxToRem(8)}`,
      },
    },
    MuiSnackbar: {
      anchorOriginBottomLeft: {
        '@media (min-width: 600px)': {
          left: pxToRem(24),
          bottom: pxToRem(24),
        },
        left: pxToRem(24),
        bottom: pxToRem(24),
        right: 'auto',
      },
      root: {
        boxSizing: 'border-box',
      },
    },
    MuiSnackbarContent: {
      root: {
        '@media (min-width: 600px)': {
          boxSizing: 'border-box',
          minWidth: pxToRem(450),
          maxWidth: pxToRem(568),
          borderRadius: pxToRem(8),
          flexWrap: 'nowrap',
          wordBreak: 'break-word',
        },
        backgroundColor: '#E5F3FF',
        minWidth: pxToRem(450),
        minHeight: pxToRem(70),
        padding: `${pxToRem(6)} ${pxToRem(24)} ${pxToRem(6)} ${pxToRem(24)}`,
        borderRadius: pxToRem(8),
        opacity: 1,
        flexWrap: 'nowrap',
        wordBreak: 'break-word',
        marginLeft: '3.85vw',
        marginBottom: '1.8vh',
        boxSizing: 'border-box',
      },
      action: {
        paddingLeft: pxToRem(24),
        marginRight: `-${pxToRem(8)}`,
        color: 'inherit',
      },
      message: {
        paddingTop: pxToRem(8),
        paddingBottom: pxToRem(5),
        color: '#435368',
        fontWeight: 'bold',
        fontSize: pxToRem(20),
      },
    },
  },
});
