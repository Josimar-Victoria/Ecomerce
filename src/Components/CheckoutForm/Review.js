import { List, Typography } from '@material-ui/core'
import React from 'react'
import { useStateValue } from '../../StateProvide';
import { getBasketTotal } from '../../reducer';
import accounting from 'accounting';
import { ListItem, ListItemText } from '@material-ui/core';
const Review = () => {

  const [{basket}, dispatch] = useStateValue()
  console.log(basket);
  return (
    <>
      <Typography variant="h6" gutterBottom>
         Order Summary
      </Typography>
      <List disablePadding>
          {
            basket?.map(product => (
              <ListItem key={product.id}>
                <ListItemText primary={product.name} secondary={`Qty ${1}`}/>
                <Typography variant="body2">
                {accounting.formatMoney(product.price)}
                </Typography>
              </ListItem>
            ))
          }
          <ListItem>
            <ListItemText primary='Total'/>
            <Typography variant="subtitle1">
              {accounting.formatMoney(getBasketTotal(basket))} 
            </Typography>
          </ListItem>
      </List>
    </>
  )
}

export default Review
