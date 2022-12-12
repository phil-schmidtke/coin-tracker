"use client";

import { BTC, ETH, USDT, BNB, USDC, BUSD, XRP, DOGE, ADA, MATIC } from "../utils/infoTexts";
import InfoComponent from "./infoComponent";

export default function Info({ activeSymbol }: { activeSymbol: string }) {
  if (activeSymbol === 'BTC') {
    return (
      <InfoComponent>
        <div>
          <h2 className="text-xl">{BTC.title}</h2>
          <p className="mt-2">{BTC.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'ETH') {
    return (
      <InfoComponent>
        <div>
          <h2 className="text-xl">{ETH.title}</h2>
          <p className="mt-2">{ETH.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'USDT') {
    return (
      <InfoComponent>
        <div>
          <h2 className="text-xl">{USDT.title}</h2>
          <p className="mt-2">{USDT.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'BNB') {
    return (
      <InfoComponent>
        <div>
          <h2 className="text-xl">{BNB.title}</h2>
          <p className="mt-2">{BNB.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'USDC') {
    return (
      <InfoComponent>
        <div>
          <h2 className="text-xl">{USDC.title}</h2>
          <p className="mt-2">{USDC.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'BUSD') {
    return (
      <InfoComponent>
        <div>
          <h2 className="text-xl">{BUSD.title}</h2>
          <p className="mt-2">{BUSD.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'XRP') {
    return (
      <InfoComponent>
        <div>
          <h2 className="text-xl">{XRP.title}</h2>
          <p className="mt-2">{XRP.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'DOGE') {
    return (
      <InfoComponent>
        <div>
          <h2 className="text-xl">{DOGE.title}</h2>
          <p className="mt-2">{DOGE.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'ADA') {
    return (
      <InfoComponent>
        <div>
          <h2 className="text-xl">{ADA.title}</h2>
          <p className="mt-2">{ADA.text}</p>
        </div>
      </InfoComponent>
    )
  } else if (activeSymbol === 'MATIC') {
    return (
      <InfoComponent>
        <div>
          <h2 className="text-xl">{MATIC.title}</h2>
          <p className="mt-2">{MATIC.text}</p>
        </div>
      </InfoComponent>
    )
  } else {
    return (
      <InfoComponent>
        <div>
          <h2 className="text-xl">Coming soon!</h2>
          <p className="mt-2">More info will be added soon!</p>
        </div>
      </InfoComponent>
    )
  }
}