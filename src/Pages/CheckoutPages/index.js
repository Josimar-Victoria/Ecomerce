import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CheckoutCard from "../../Components/CheckoutCard";
import Total from "../../Components/Total";
import { useStateValue } from "../../StateProvide";


const CheckouPages = () => {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();

  function FormRow() {
    return (
      <>
        {
          basket?.map((products) => (
          <Grid item xs={12} sm={8} md={6} lg={4}>
           <CheckoutCard key={products.id} products={products}/>
          </Grid>
          ))
        }
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
        <Typography align="center" gutterBottom variant="h4">
            <Total/>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
    marginTop: '2rem'
  },
}));

export default CheckouPages;
