import { ToggleButton, Typography } from '@mui/material'
import {ToggleButtonGroup} from '@mui/material'

import { Link } from 'react-router';

function Header() {

    return(
        <>
            <hr />
            <ToggleButtonGroup
                exclusive
                aria-label="text alignment"
            >
                <Typography variant='h3'>Very professional website |</Typography>
                <ToggleButton value="left" aria-label="left aligned">
                    <Link to={"/home"} preventScrollReset>
                        <Typography>Home</Typography>
                    </Link>
                </ToggleButton>

                <ToggleButton value="center" aria-label="centered">
                    <Link to={"/about"} preventScrollReset>
                        <Typography>About</Typography>
                    </Link>
                </ToggleButton>

                <ToggleButton value="right" aria-label="right aligned">
                    <Link to={"/sumthin'"} preventScrollReset>
                        <Typography>Something</Typography>
                    </Link>
                </ToggleButton>
                <Typography variant='h3'>|</Typography>
                
            </ToggleButtonGroup>
            <hr />
        </>
    )
}

export default Header