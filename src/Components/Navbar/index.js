import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import logo from '../../img/Yamgo_Faz.svg'
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvide';
import { auth } from '../../firebase';
import { actionTypes } from '../../reducer';

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory()
  const [{basket, user}, dispatch] = useStateValue()

  const handleAuthClick = (state) => {
    if(user){
      auth.signOut()
      dispatch({
        type:actionTypes.EMPTY_BASKET,
        basket:[],
      });
      dispatch({
        type:actionTypes.SET_USER,
        user: null,
      })
      history.push('/')
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
         <Link to='/'>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} alt='logo' className={classes.image}/>
            </IconButton>
         </Link>
          <div className={classes.grow}>
          <Typography variant="h6" color="textPrimary" component='p'>
            Helllo {user ? user?.email : 'Guest'}
          </Typography>
          </div>
          <div className={classes.button}> 
          <Link to='/SignIn'>
            <Button variant="outlined" onClick={handleAuthClick}>
             <strong>{user ? 'Sign Out' : 'Sign In'}</strong>
            </Button>
          </Link>

            <Link to='/checkout-page'>
              <IconButton aria-label='show cart items' color='inherit'>
               <Badge badgeContent={basket?.length} color='secondary'>
                 <ShoppingCart fontSize='large' color='primary'/>
               </Badge>
            
              </IconButton>
            </Link>

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '7rem'
      },
      appBar:{
       backgroundColor: "whitesmoke",
       boxShadow: "none",
      },
      button:{
        marginLeft: theme.spacing(2)
      },
      grow: {
       flexGrow: 1,
      },
      image: {
        height: '3rem',
        marginRight: '10%'
      },
      title: {
        flexGrow: 1,
     },
  }));