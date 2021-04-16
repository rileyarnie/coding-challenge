import { Card, IconButton, makeStyles, Typography } from "@material-ui/core"
import { useContext } from "react"
import { CartContext } from "./CartContext"

const useStlyes = makeStyles({
    wrapper: {
        padding: "1.5rem 1rem",
    },
    card: {
        padding: "1rem",
    },
    cardBody: {
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    right: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    item: {
        margin: "0 0.8rem"
    },
    image: {
        height: "100px"
    }

})

const CartItem = ({ item }) => {

    const [cart, setCart] = useContext(CartContext)
    const classes = useStlyes()


    const addItemToCart = (wine) => {

        wine.bottle === true &&
            setCart((prevState) => {
                //check if item in cart
                const itemInCart = cart.find((element) => element.no === wine.no && element.bottle === true)
                if (itemInCart) {
                    return prevState.map((item) => item.no === wine.no && item.bottle ? ({ ...item, totalCost: (item.totalCost + wine.cost), quantity: (item.quantity + 1) }) : item
                    )
                }
                return [...prevState, { ...wine, quantity: 1, cost: wine.cost.bottle, totalCost: (wine.cost.bottle), bottle: true }]
            })

        wine.case === true &&
            setCart((prevState) => {
                //check if item in cart
                const itemInCart = cart.find((element) => element.no === wine.no && element.case === true)
                if (itemInCart) {
                    return prevState.map((item) => item.no === wine.no && item.case ? ({ ...item, totalCost: (item.totalCost + wine.cost), quantity: (item.quantity + 1) }) : item
                    )
                }
                return [...prevState, { ...wine, quantity: 1, cost: wine.cost.case, totalCost: (wine.cost.case), case: true }]
            })
    }
    const removeItemFromCart = (wine) => {

        wine.bottle === true &&
            setCart((prevState) => {
                //check if item in cart
                const itemInCart = cart.find((element) => element.no === wine.no && item.quantity >= 1)
                if (itemInCart) {
                    return prevState.map((item) => item.no === wine.no && item.bottle && item.quantity >= 1 ? ({ ...item, totalCost: (item.totalCost - wine.cost), quantity: (item.quantity - 1) }) : item
                    )
                }
                return
            })

        wine.case === true &&
            setCart((prevState) => {
                //check if item in cart
                const itemInCart = cart.find((element) => element.no === wine.no && element.case === true)
                if (itemInCart) {
                    return prevState.map((item) => item.no === wine.no && item.case && item.quantity >= 1 ? ({ ...item, totalCost: (item.totalCost - wine.cost), quantity: (item.quantity - 1) }) : item
                    )
                }
                return
            })
    }

    return (
        <div style={{ display: item.quantity < 1 ? "none" : "" }} className={classes.wrapper}>
            <Card className={classes.card} elevation={1}>
                <Typography align="center" variant="caption">{item.bottle ? `Bottle of ` : `Case of `}{item.name}</Typography>
                <div className={classes.cardBody}>
                    <div className={classes.left}>
                        <img className={classes.image} src={item.image} alt={item.name} />
                    </div>
                    <div className={classes.right}>
                        <IconButton disabled={item.quantity < 1 ? true : false} onClick={() => removeItemFromCart(item, item.cost)} className={classes.item} size="small">-</IconButton>
                        <Typography>{item.quantity}</Typography>
                        <IconButton onClick={() => addItemToCart(item.bottle ? { ...item, bottle: true } : { ...item, case: true })} className={classes.item} size="small">+</IconButton>
                    </div>
                    <div className="pricing">
                        <Typography>${Math.round(item.totalCost).toFixed(2)}</Typography>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CartItem