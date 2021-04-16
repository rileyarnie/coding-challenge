import Drawer from "@material-ui/core/Drawer"
import { Button, IconButton, makeStyles, Typography } from "@material-ui/core"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CartItem from "./CartItem";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const drawerWidth = 250

const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    cartHeader: {
        display: "flex",
        padding: "0 1rem",
        background: "#ffff",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1,
        borderBottom: "1px solid gray",
        width: "100%",
    },
    pricing: {
        padding: "1rem",
        position: "sticky",
        top: 45,
        zIndex: 1,
        background: "#ffff",


    }
})

const Cart = ({ open, toggleCart }) => {
    const classes = useStyles()
    const [cart, setCart, _, totalPrice] = useContext(CartContext)
    const [openCart, setOpenCart] = useState(false);

    const handleClickOpen = () => {
        setOpenCart(true);
    };

    const handleClose = () => {
        setOpenCart(false);
    };



    return (
        <Drawer className={classes.drawer} open={open} anchor="right" classes={{ paper: classes.drawerPaper }} >
            <div className={classes.cartHeader}>
                <IconButton onClick={toggleCart} className={classes.closeButton}><HighlightOffIcon /></IconButton>
                <Button disabled={totalPrice < 1 ? true : false} onClick={handleClickOpen} size="small">Checkout</Button>
            </div>
            <div className={classes.pricing}>

                <Typography variant="h6">Your Total: ${Math.round(totalPrice).toFixed(2)}</Typography>
            </div>
            {cart.map((item, index) =>
                <CartItem item={item} key={index} />
            )}
            <CheckoutForm open={openCart} handleClickOpen={handleClickOpen} handleClose={handleClose} closeCart={toggleCart} />
        </Drawer>
    )
}

export default Cart