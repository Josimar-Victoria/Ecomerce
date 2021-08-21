import { Button, makeStyles } from '@material-ui/core';
import accounting from 'accounting';
import React from 'react'
import { Link } from 'react-router-dom';
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../StateProvide';
const Total = () => {
    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue()

    return (
        <div className={classes.root}>
            <h5>total de products: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket))}</h5> 
            <Link to="/Checkout">
              <Button className={classes.button} variant='contained' color='secondary'>
              Check out
              </Button>
            </Link>
        </div>
    )
}

export default Total

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '20vh'
    },
    button: {
        marginTop: '2rem'
    }

}))