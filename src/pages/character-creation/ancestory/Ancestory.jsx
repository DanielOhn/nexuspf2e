import React from "react"

import Post from "../../../components/post/Post"
import data from "../../../json/ancestories.json"

import "./Ancestory.css"

const Ancestory = () => {
  return (
    <Post title="Ancestory" date="10/17/2020">
      <div className="ancestories">
        {data.Ancestries.map((race, j) => {
          return (
            <div>
              <div
                className="ancestory-card"
                style={{ backgroundImage: `url(${race.url})` }}
                key={j}
              >
                <h3>{race.name}</h3>

                <div className="ancestory-overlay">
                  <p>Health: {race.hp}</p>
                  <p>Speed: {race.speed}</p>
                  <p>Size: {race.size}</p>
                  <div className="abilities">
                    <div className="boost">
                      <p className="green">Ability Boosts</p>
                      {race.abilityBoosts.map((ability, j) => {
                        return <p>{ability}</p>
                      })}
                    </div>
                    {race.abilityFlaws && (
                      <div className="flaw">
                        <p className="red">Ability Flaw</p>

                        {race.abilityFlaws.map((ability, j) => {
                          return <p>{ability}</p>
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Post>
  )
}

export default Ancestory
