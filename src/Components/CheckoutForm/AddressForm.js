import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import AddressInput from "./AddressInput";

const AddressForm = ({nextStep}) => {

  const metodos = useForm();
  return (
    <>
      <Typography variant="h6" gutterBottom >
          Shipping Address
      </Typography>
        <FormProvider {...metodos}>
          <>
            <Grid container spacing={3}>
              <AddressInput nextStep={nextStep}/> 
            </Grid>
          </>
        </FormProvider>
    </>
  );
};

export default AddressForm;
