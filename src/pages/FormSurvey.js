import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar'


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  
  export default function SimpleAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <div className="wrapper">
          <Sidebar/>
        </div>
      </div>
    );
  }