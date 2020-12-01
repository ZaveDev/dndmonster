import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Styled from "styled-components";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const MonsterCard = Styled.div`

  display: flex;
  flex-direction: column;
  margin: 2%;
  background: #4d4d4d;
  border-radius: 5px;
  padding: 2%;
  a{
    color:whitesmoke;
    text-decoration: none;
    &:visted{
      color:whitesmoke;
      text-decoration: none;
    }
  }
  .monster-head{
    display:flex;
    flex-direction: column;
    align-items: center;
    .details{
      display:flex;
      width: 30%;
      justify-content: center;
      div{
        padding: 1% 2%;
        width: 20%;
        background: #808080;
      }
    }
    .name{
      justify-content: center;
    }
    header{
      align-items: center;
      justify-content: center;
      display: flex;
      width: 100%;
      div{
        display: flex;
        width: 33%;
      }
    }
  }
  .monster-stats{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1%;
    div{
      display: flex;
      width: 30%;
      justify-content: space-around;
      padding-bottom: 1%;
      div{
        width: 25%;
        justify-content: center;
        background: #808080;
        border-radius: 5px;
      }
    }
  }
  .actions{
    margin: 1%;
    width: 10%;
  }
  .description{
    p, h3 {
      text-align: left; 
      padding: 0% 10%;
    }
  }
`;

const MonsterDetails = (props) => {
  const history = useHistory();
  const params = useParams();
  const [monster, setMonster] = useState();
  const [attackDescription, setAttackDescription] = useState("...");
  const [attackName, setAttackName] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.dnd5eapi.co/api/monsters/${params.monster}`)
      .then((res) => {
        res = res.data;
        setMonster(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const showAttackDescription = (name, desc) => {
    setAttackName(name);
    setAttackDescription(desc);
  };

  console.log(monster);
  return (
    <MonsterCard>
      {monster && (
        <>
          <div className={"monster-head"}>
            <header>
              <div>
                <Button variant="outlined" onClick={() => history.push("/")}>
                  <ArrowBackIcon />
                  Back
                </Button>
              </div>
              <div className={"name"}>
                <a
                  href={`https://www.dndbeyond.com/monsters/${monster.name}`}
                  target={"_blank"}
                >
                  <h1>{monster.name}</h1>
                </a>
              </div>
              <div></div>
            </header>
            <div className={"details"}>
              <div>
                HP
                <br />
                {monster.hit_points}
              </div>
              <div>
                AC
                <br />
                {monster.armor_class}
              </div>
              <div>
                XP
                <br />
                {monster.xp}
              </div>
            </div>
          </div>
          <div className={"monster-stats"}>
            <div>
              <div>
                <h4>STR: {monster.strength}</h4>
              </div>
              <div>
                <h4>DEX: {monster.dexterity}</h4>
              </div>
              <div>
                <h4>CON: {monster.constitution}</h4>
              </div>
            </div>
            <div>
              <div>
                <h4>INT: {monster.intelligence}</h4>
              </div>
              <div>
                <h4>WIS: {monster.wisdom}</h4>
              </div>
              <div>
                <h4>CHA: {monster.charisma}</h4>
              </div>
            </div>
          </div>
          <div>
            {monster.actions.map((action) => (
              <>
                <Button
                  variant="outlined"
                  className={"actions"}
                  onClick={() =>
                    showAttackDescription(action.name, action.desc)
                  }
                  color={"secondary"}
                >
                  <h3>{action.name}</h3>
                </Button>
              </>
            ))}
          </div>
          <div className={"description"}>
            <h2>Description</h2>
            <h3>{attackName}</h3>
            <p>{attackDescription}</p>
          </div>
        </>
      )}
    </MonsterCard>
  );
};

export default MonsterDetails;
