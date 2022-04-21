import React, { useState, useEffect } from "react";
import axios from "axios";
import { Main, XButton, YesButton } from "./index.js"

export default function Profiles(props) {

    const postChoosePerson = (id, boolean) => {
        const body = {
            id: id,
            choice: boolean,
        }
        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sergio/choose-person", body)
            .then(res => {
                props.setIsMatch(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <Main>
            <img src={props.profile.photo} />
            <p>{props.profile.name}</p>
            <p>{props.profile.bio}</p>
            <div>
                <XButton onClick={() => postChoosePerson(props.profile.id, false)}>✕</XButton>
                <YesButton onClick={() => postChoosePerson(props.profile.id, true)}>♥</YesButton>
            </div>
        </Main>
    );

}