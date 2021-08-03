import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyTypography from '../../atoms/MyTypography/MyTypography';
import Typography from '@material-ui/core/Typography';
import customtheme from '../../theme.jsx';
import {ThemeProvider } from '@material-ui/core/styles';
const DescriptionList= ({ title,text}) => {
const useStyles = makeStyles((theme) => ({
    
    root: {
        width: 390,
        filter: "blur(1px)"
      },

      listStyles:
      {
        paddingLeft:'20px',
      }
   

}));


    const classes = useStyles();
    const noBlur=text.slice(0,text.length-1);
    const blur=text[text.length-1];
 return (
     <div >
     <ThemeProvider theme={customtheme}>
        <Typography  variant="h2">{title}</Typography>
        <ul className={classes.listStyles} >
        {noBlur.map((bodyName)=>(
           <li ><Typography variant="h1" data-testId='heading'>{bodyName}</Typography></li>
        ))}
       </ul>
       <div className={classes.root}>
       <ul className={classes.listStyles} >
       <li>
           <Typography variant="h1" component="h5"  >{blur}</Typography>
       </li>
       </ul>
        </div>
        </ThemeProvider>  
     </div>
 )

}
export default DescriptionList


