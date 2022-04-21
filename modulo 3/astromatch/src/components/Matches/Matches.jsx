import React, { useEffect } from "react";
import { Main } from "./index"

export default function Matches(props) {

    useEffect(() => {
        
    }, [props.matches])

    const matches = props.matches.map((match) => {
        return (
            <Main>
                <img src={match.photo} />
                <p>{match.name}</p>
            </Main>
        )
    })

    return (
        <div>
            {matches}
        </div>
    );

}