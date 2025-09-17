import { useState } from "react"


function Dice() {

    const [diceState, setDiceState] = useState(6);

    function DiceRoll() {
        setDiceState(Math.floor(Math.random() * 6))
    }

    return(
        <>
            <div>
                <div>roll for agility:</div>
            </div>
            <div>
                <button onClick={() => DiceRoll()}>
                    <h2>[ {diceState} ]</h2>
                </button>
                <h2></h2>
            </div>

        </>
    )
}

export default Dice