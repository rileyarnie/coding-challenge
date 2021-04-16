import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"

const useStyles = makeStyles({
    container: {
        // width: "95vw",
        // marginLeft: "auto",
        // marginRight: "auto",
        marginBottom: "1rem"

    },
    paper: {
        padding: "0.5rem",
    },
    // heading: {
    //     display: "flex",
    //     justifyContent: "space-between",
    //     marginBottom: "1rem"
    // },
    body: {
        // display: "flex",
        // justifyContent: "space-between",
        // marginBottom: "1rem"
    }
})

const Header = ({ filterRed, filterWhite, filterSparkling, filterVintage, removeFilter }) => {
    const classes = useStyles()

    return (
        <Grid container justify="space-around" className={classes.container} >
            <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                    <Grid container className={classes.container}>
                        <Grid item xs={6}>
                            <Button size="small" ><Typography>Show Me</Typography></Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={removeFilter} size="small" ><Typography>Show All</Typography></Button>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.container} >
                        <Grid item xs={4}>
                            <Button onClick={filterWhite} disableElevation variant="contained" size="small" ><Typography>White</Typography></Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button onClick={filterRed} disableElevation variant="contained" size="small" ><Typography>Red</Typography></Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button onClick={filterSparkling} disableElevation variant="contained" size="small" ><Typography >Sparkling</Typography></Button>
                        </Grid>
                    </Grid>
                    <Grid className={classes.container} container>
                        <Grid item xs={4}>
                            <Typography variant="h6">Order By:</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Button disableElevation variant="contained" size="small" ><Typography>Price</Typography></Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button onClick={filterVintage} disableElevation variant="contained" size="small" ><Typography >Vintage</Typography></Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Header