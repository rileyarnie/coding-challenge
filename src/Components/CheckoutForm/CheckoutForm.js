import { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid } from "@material-ui/core";
import { CartContext } from "../Cart/CartContext";

const CheckoutForm = ({ open, closeCart, handleClose }) => {

    const [cart, setCart, _, totalPrice] = useContext(CartContext)
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        estate: "",
        address: "",
        deliveryNotes: "",
    })

    const handleChange = (event) => {
        setUserInfo({ [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        console.log(Object.values(userInfo))
        //basic validation to make sure all fields are entered
        if (Object.values(userInfo).some(item => item ==="")) {
            alert(`Please enter all fields`)
        }
        else {
            event.preventDefault()
            handleClose()
            setUserInfo({})
            closeCart()
            setTimeout(() => {
                //this is to mimic api call to backend
                alert(`Your Order of $ ${totalPrice} has been placed`)
            }, 300)
        }
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Checkout</DialogTitle>
                <DialogContent>
                    <DialogContentText>Please fill in form to checkout</DialogContentText>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    onChange={handleChange}
                                    variant="outlined"
                                    autoFocus
                                    margin="dense"
                                    name="firstName"
                                    label="First Name"
                                    type="text"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    onChange={handleChange}
                                    variant="outlined"
                                    name="lastName"
                                    margin="dense"
                                    label="Last Name"
                                    type="email"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    onChange={handleChange}
                                    name="phoneNumber"
                                    variant="outlined"
                                    margin="dense"
                                    label="Phone Number"
                                    type="email"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={handleChange}
                                    variant="outlined"
                                    margin="dense"
                                    name="estate"
                                    label="Estate"
                                    type="email"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={handleChange}
                                    variant="outlined"
                                    name="address"
                                    margin="dense"
                                    label="Address"
                                    type="email"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleChange}
                                    multiline
                                    rows={3}
                                    variant="outlined"
                                    margin="dense"
                                    name="deliveryNotes"
                                    label="Delivery Notes"
                                    type="email"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={12} md={4}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    onClick={handleClose}
                                    color="secondary"
                                >
                                    Cancel
                </Button>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    onClick={handleSubmit}
                                    color="primary"
                                >
                                    Confirm Chekout
                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CheckoutForm;
