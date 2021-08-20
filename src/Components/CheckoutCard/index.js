import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import accounting from "accounting";
import DeleteIcon from '@material-ui/icons/Delete';
import { useStateValue } from "../../StateProvide";
import { actionTypes } from "../../reducer";
export default function CheckoutCard({products:{id,
  name,
  producType,
  image,
  price,
  rantig,
  description}}) {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue()
  
  const removeItems = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id:id,
  })
  
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
      <div className={classes.cardRating}>
      {Array(rantig)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
      </div>
        <IconButton onClick={removeItems}>
         <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: "1.5rem",
  },
  action: {
   marginTop: "1rem"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions:{
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  cardRating:{
    display: "flex",
  }

}));
