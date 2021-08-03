import React from 'react'
import {ListItem, ListItemIcon, ListItemText, ThemeProvider} from '@material-ui/core';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import {Dashboard, DashboardOutlinedIcon} from '@material-ui/icons';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import customtheme from '../../theme';


const useStyles = makeStyles((theme) => ({
  selectedItemStyle: {
    backgroundColor: 'rgba(90, 197, 104, 0.15)',
    borderRadius: '10px',
    height: '50px',
    width: '240px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 10px',
    cursor: 'pointer',
},
selectedIcon: {
  color: '#5ac568',
  width: '24px',
  height: '24px', 
},
selectedTypographyStyle: {
  fontSize: '16px',
  color: '#5ac568',
  fontFamily: 'Montserrat',
  lineHeight: '24px',
  letterSpacing: '0.1px',
},
}));


export default function MyListItem(props){
  const classes = useStyles();
  return(
    <ThemeProvider theme = { customtheme}>
    <Grid direction = "column" container className={classes.selectedItemStyle}>
      <ListItem>
      <ListItemIcon>
        <TurnedInNotOutlinedIcon className={classes.selectedIcon}/>
      </ListItemIcon>
      <ListItemText primary={<Typography variant="subtitle1" className={ classes.selectedTypographyStyle }>{ "Saved Jobs" }</Typography>} />
      </ListItem>
      </Grid>
      </ThemeProvider>
  );
}