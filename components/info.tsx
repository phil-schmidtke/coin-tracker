"use client";

import { motion } from "framer-motion";
import { BTC, ETH, USDT } from "../utils/infoTexts";
import InfoComponent from "./infoComponent";

export default function Info({ activeSymbol }: { activeSymbol: string }) {

  if (activeSymbol === 'BTC') {
    return (
      <InfoComponent>
        <div>
          <h2>{BTC.title}</h2>
          <p>{BTC.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'ETH') {
    return (
      <InfoComponent>
        <div>
          <h2>{ETH.title}</h2>
          <p>{ETH.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'USDT') {
    return (
      <InfoComponent>
        <div>
          <h2>{USDT.title}</h2>
          <p>{USDT.text}</p>
        </div>
      </InfoComponent>
    )
  } else {
    return (
      <InfoComponent>
        <div>
          <h2>Coming soon!</h2>
          <p>More info will be added soon!</p>
        </div>
      </InfoComponent>
    )
  }
}