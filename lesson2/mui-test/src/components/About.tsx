
import { Box, Typography } from "@mui/material"
import {TextField} from "@mui/material"
import {Button} from "@mui/material"

function About(){

    return (
    <>
        <Box>
            <Typography variant="h2">Marsell</Typography>
            <Typography>
                tegelen programmeerimisega, inseneeriaga, käsitööga, jahiga, allveejahiga, kalastusega, telkimisega. Ehitan kodus täissuuruses lennusimulaatori ja muud uskumatud masinavärki.
            </Typography>

            <Typography variant="h3">kontakt: marsell@tlu.ee</Typography>
            <TextField variant="filled" label={"i don't bite :3"}></TextField>
            <Button>"Call To Action"</Button>

        </Box>
    </>
  )
}

export default About