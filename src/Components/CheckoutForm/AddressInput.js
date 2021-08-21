import { Button } from '@material-ui/core';
import { Grid} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvide';
const AddressInput = ({nextStep}) => {
    const [{shippingData}, dispatch] = useStateValue()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        dispatch({ 
            type: actionTypes.SET_SHIPPING_DATA,
            shippingData: data,
        })
        nextStep()
    }
    console.log(shippingData);
    console.log(watch("example")); // watch input value by passing the name of it
    
    return (
        <div>
            <Grid item xs={12} sm={6} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="" {...register("firsName", { required: true })} placeholder="firsName" />
                <input defaultValue="" {...register("lastName", { required: true })} placeholder="lastName" />
                <input defaultValue="" {...register("addressl", { required: true })} placeholder="addressl" />
                <input defaultValue="" {...register("email", { required: true })} placeholder="email" />
                <input defaultValue="" {...register("city", { required: true })} placeholder="city" />
                <input {...register("postCode", { required: true })} placeholder="postCode"  />
                {errors.exampleRequired && <span>This field is required</span>}
                <div style={{display: 'flex', justifyContent:'space-between',marginTop:'1rem'}}>
                    <Button component={Link} to="/checkout-page">Back to the Checkout Pages</Button>
                    <Button type="submit" variant="contained" color="primary">Next</Button>
                </div>
                </form>
            </Grid>

        </div>
    )
}

export default AddressInput
