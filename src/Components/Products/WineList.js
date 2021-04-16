import { useState, useEffect } from "react"
import { Grid, makeStyles } from "@material-ui/core"
import axios from "axios"
import Wine from "./Wine"


const useStlyes = makeStyles({
    container: {

    },
})

const WineList = ({ filterBy }) => {
    const classes = useStlyes()
    const [wineList, setWineList] = useState([])
    const [filteredWineList, setFilteredWineList] = useState([])

    useEffect(() => {
        axios.get("https://storage.googleapis.com/wineshop-assets/wine-shop.json").then(res => { setWineList(res.data); setFilteredWineList(res.data) }).catch(error => console.error(error.message))
    }, [])

    useEffect(() => {
        if (filterBy === "red") {
            setFilteredWineList(wineList.filter((wine) =>
                wine.tags.includes("red")
            ))
        }
        else if (filterBy === "white") {
            setFilteredWineList(wineList.filter((wine) =>
                wine.tags.includes("white")
            ))
        }
        else if (filterBy === "sparkling") {
            setFilteredWineList(wineList.filter((wine) =>
                wine.tags.includes("sparkling")
            ))
        }
        else if (filterBy === "vintage") {
            setFilteredWineList(wineList.filter((wine) =>
                wine.tags.includes("vintage")
            ))
        }
        else {
            setFilteredWineList(wineList)

        }
    }, [filterBy, wineList])

    return (
        <Grid className={classes.container} spacing={2} container>
            {filteredWineList.map((wine, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Wine wine={wine} />
                </Grid>
            ))}
        </Grid>
    )
}
export default WineList