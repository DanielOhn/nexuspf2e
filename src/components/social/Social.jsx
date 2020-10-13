import React from "react"

import "./Social.css"

import Discord from "../../icons/discord/DiscordIcon"
import Foundry from "../../icons/fvtt/FoundryIcon"

const Social = () => {
  return (
    <div className="social">
      <Discord src="https://discord.gg/y9nWHZN" />
      <Foundry src="https://play.nexuspf2e.xyz/join" />
    </div>
  )
}

export default Social
