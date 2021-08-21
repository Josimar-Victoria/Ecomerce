import { makeStyles, Paper, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useState } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";


const Checkout = () => {

const classes = useStyles();
const [ activeStep, setActiveStep ] = useState(0)
const step = ["Shipping address", "Payment details" ]


const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
}
const backStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
}
const Form = () => activeStep === 0 ? <AddressForm nextStep={nextStep}/> : <PaymentForm/>
    
    return (
        <>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                   <Typography component="h1" variant="h4" align="center">
                     Checkout
                   </Typography>
                   <Stepper activeStep={activeStep} className={classes.stepper}>
                       {step.map(step => (
                           <Step key={step}>
                               <StepLabel>{step}</StepLabel>
                           </Step>
                       ))}
                   </Stepper>
                   <Form/>
                </Paper>
            </main>
        </>
    )
}

export default Checkout

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'absolute',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]:{
            width: '600',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]:{
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            password: theme.spacing(3)
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        shapeMargin: theme.spacing(3),
        marginLeft: theme.spacing(1)
    }
  }));
