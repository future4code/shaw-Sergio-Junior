import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Profiles from './components/Profile/Profiles';
import Matches from "./components/Matches/Matches";
import { Header, Footer, MainContainerApp, Body } from "./index" 

function App() {

  const [profile, setProfile] = useState([])
  const [isMatch, setIsMatch] = useState("")
  const [matches, setMatches] = useState([])
  const [page, setPage] = useState("")

  useEffect(() => {
    getProfileToChoose()
  }, [isMatch])

  const getProfileToChoose = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sergio/person")
      .then(res => {
        setProfile(res.data.profile)
        setPage("Home")
      })
      .catch(err => {
        console.log(err);
      });
  }

  const putClear = () => {
    axios
      .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sergio/clear")
      .then(res => {
        alert("Matches are emprty")
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  const getMatches = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sergio/matches")
      .then(res => {
        setMatches(res.data.matches)
        setPage("Matches")
      })
      .catch(err => {
        console.log(err);
      });
  }

  const selectPage = () => {
    switch (page) {
      case "Home":
        return <Profiles profile={profile} isMatch={isMatch} setIsMatch={setIsMatch} />
        break;
      case "Matches":
        return <Matches matches={matches} getMatches={getMatches} />
        break;
      default:
        return <Profiles profile={profile} isMatch={isMatch} setIsMatch={setIsMatch} />
        break;
    }
  }


  return (
    <Body>
      <MainContainerApp>
        <Header>
          <div>
            <h1><span>astro</span>match</h1>
          </div>
          <div >
            {
              page === "Home" ?
                <button className="buttonsHeader" onClick={getMatches}>💌</button> :
                <button className="buttonsHeader" onClick={getProfileToChoose}>👥</button>
            }
          </div>
        </Header>
        <div>
          {profile ? selectPage() : putClear()}
        </div>
      </MainContainerApp>
      <Footer>
        <button onClick={() => putClear()}>Limpar swipes e matches</button>
      </Footer>
    </Body>
  );
}

export default App;
