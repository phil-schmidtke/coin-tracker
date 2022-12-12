"use client";

import { motion } from "framer-motion";
import { BTC, ETH, USDT, BNB, USDC, BUSD, XRP, DOGE, ADA, MATIC } from "../utils/infoTexts";
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
  } else if (activeSymbol === 'BNB') {
    return (
      <InfoComponent>
        <div>
          <h2>{BNB.title}</h2>
          <p>{BNB.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'USDC') {
    return (
      <InfoComponent>
        <div>
          <h2>{USDC.title}</h2>
          <p>{USDC.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'BUSD') {
    return (
      <InfoComponent>
        <div>
          <h2>{BUSD.title}</h2>
          <p>{BUSD.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'XRP') {
    return (
      <InfoComponent>
        <div>
          <h2>{XRP.title}</h2>
          <p>{XRP.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'DOGE') {
    return (
      <InfoComponent>
        <div>
          <h2>{DOGE.title}</h2>
          <p>{DOGE.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'ADA') {
    return (
      <InfoComponent>
        <div>
          <h2>{ADA.title}</h2>
          <p>{ADA.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'MATIC') {
    return (
      <InfoComponent>
        <div>
          <h2>{MATIC.title}</h2>
          <p>{MATIC.text}</p>
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