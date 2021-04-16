import { useContext, useState } from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import { Button, CardContent, Checkbox } from "@material-ui/core"
import { CartContext } from "../Cart/CartContext"

const useStlyes = makeStyles({
    container: {
        margin: "0.5rem 0rem",
    },
    image: {
        objectFit: "contain",
        height: "200px"
    },
    quantity: {
        display: "flex",
        justifyContent: "space-between"
    },
    button: {
        padding: "0.3rem",

    },
    buttons: {
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem 0rem"
    },
})


const Wine = ({ wine }) => {

    const classes = useStlyes()
    const [showDetails, setShowDetails] = useState(false)
    const { cost, details, image, name, no } = wine
    const [cart, setCart] = useContext(CartContext)
    const [bottleChecked, setBotleChecked] = useState(false)
    const [caseChecked, setCaseChecked] = useState(false)
    const [error, setError] = useState(false)

    const handleBottleChange = (event) => {
        setBotleChecked(event.target.checked);
        setError(false)

    };

    const handleCaseChange = (event) => {
        setCaseChecked(event.target.checked);
        setError(false)

    };

    const toggleDetails = () => {
        setShowDetails(prevState => !prevState)

    }

    const addItemToCart = (wine) => {
        if (!bottleChecked && !caseChecked) {
            setError(true)
        }

        bottleChecked &&
            setCart((prevState) => {
                //check if item in cart
                const itemInCart = cart.find((element) => element.no === wine.no && element.bottle === true)
                if (itemInCart) {
                    return prevState.map((item) => item.no === wine.no && item.bottle ? ({ ...item, totalCost: (item.totalCost + wine.cost.bottle), quantity: (item.quantity + 1) }) : item
                    )
                }
                return [...prevState, { ...wine, quantity: 1, cost: wine.cost.bottle, totalCost: (wine.cost.bottle), bottle: true }]
            })
        caseChecked &&
            setCart((prevState) => {
                //check if item in cart
                const itemInCart = cart.find((element) => element.no === wine.no && element.case === true)
                if (itemInCart) {
                    return prevState.map((item) => item.no === wine.no && item.case ? ({ ...item, totalCost: (item.totalCost + wine.cost.case), quantity: (item.quantity + 1) }) : item
                    )
                }
                return [...prevState, { ...wine, quantity: 1, cost: wine.cost.case, totalCost: (wine.cost.case), case: true }]
            })
    }

    return (
        <Card className={classes.container}>
            <CardContent className={classes.content}>
                <Grid container >
                    <Grid item xs={3} >
                        <div>
                            <img className={classes.image} src={`https://storage.googleapis.com/wineshop-assets/wine-bottles/${image}`} alt="name" />
                        </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={8}>
                        <Typography variant="h3" color="textSecondary"> {no}</Typography>
                        <Typography variant="h6" color="textSecondary"> {name}</Typography>
                        <div className={classes.quantity}>
                            <div className="left">
                                <Typography>Bottle</Typography>
                                <Typography>${cost.bottle}</Typography>
                                {/* <Typography>QTY</Typography> */}
                                <Checkbox
                                    checked={bottleChecked}
                                    onChange={handleBottleChange}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>
                            <div className="right">
                                <Typography>Case</Typography>
                                <Typography>${cost.case}</Typography>
                                {/* <Typography>QTY</Typography> */}
                                <Checkbox
                                    color="primary"
                                    checked={caseChecked}
                                    onChange={handleCaseChange}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>
                        </div>

                        <div className={classes.buttons}>
                            <Button onClick={toggleDetails} size="small" style={{ background: "lightgray" }} >Details</Button>
                            <Button onClick={() => addItemToCart({ ...wine, image: `https://storage.googleapis.com/wineshop-assets/wine-bottles/${image}` })} size="small" style={{ background: "gray" }} >Add To Cart</Button>
                        </div>
                    </Grid>
                    {error && <Typography align="center" color="secondary">Please select a case or bottle</Typography>}
                    {
                        showDetails &&
                        <Typography>{details}</Typography>
                    }
                </Grid>

            </CardContent>
        </Card>
    )
}
export default Wine