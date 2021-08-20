import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from '../Product';
import { ProductsData } from '../../productsData';

export default function Products() {
  const classes = useStyles();
  console.log(ProductsData);
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {
          ProductsData.map((products) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
           <Product  key={products.id}  products={products}/>
          </Grid>
          ))
        }
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
}));
