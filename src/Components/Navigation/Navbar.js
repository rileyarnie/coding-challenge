import { useContext } from "react"
import { Badge, IconButton } from "@material-ui/core"
import Appbar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { ShoppingCart } from "@material-ui/icons"
import { makeStyles } from "@material-ui/styles"
import { CartContext } from "../Cart/CartContext"

const useStlyes = makeStyles({
    appBar: {
        backgroundColor: "#ffff",
        padding: "0.8rem",
        alignItems: "center",
        marginBottom: "0.5rem"
    }
})

const Navbar = ({ toggleCart }) => {

    const classes = useStlyes()
    const [cart, setCart, totalItems] = useContext(CartContext)


    return (
        <Appbar position="sticky" elevation={0} className={classes.appBar}>
            <Toolbar >
                <Typography variant="h4" color="textPrimary"> Wine Shop</Typography>
                <IconButton onClick={toggleCart}>
                    <Badge color="primary" badgeContent={totalItems}>
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Toolbar>
        </Appbar>
    )
}

export default Navbar