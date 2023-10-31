import facebook from "../assets/images/icon-Facebook.svg"

const networkColors = {
  Facebook: 'bg-Facebook',
  Twitter: 'bg-Twitter',
  YouTube: 'bg-YouTube',
  Instagram: 'bg-Instagram'
}

const roundNumber = (number) => {
  if(number >= 10000){
    number = number / 1000
    return `${Math.round(number)}K`
  }
  return number
}

export function OverviewCard({ objeto, bg, textColor, bgHover }) {
  return (
    <article className={`${bg+" "+bgHover} cursor-pointer w-[326px] h-[216px] mb-4 rounded-[5px] overflow-hidden text-center`}>
      <div className={`${networkColors[objeto.network]} h-[4px] mb-8`} />
      <div className="flex items-center justify-center gap-2">
        <img src={`src/assets/images/icon-${objeto.network}.svg`} alt="hola" />
        <p className="text-xs text-Dark-Grayish-Blue font-bold">{objeto.user}</p>
      </div>
      <p className={`text-[56px] font-bold ${textColor}`}>{roundNumber(objeto.audience)}</p>
      <p className="uppercase tracking-[5px] text-Dark-Grayish-Blue text-[12px]">{objeto.audienceType}</p>
      <div className="flex items-center justify-center gap-1">
        <img src={`src/assets/images/icon-${objeto.isUp?"up":"down"}.svg`} alt="" />
        <p className={`text-xs font-bold ${objeto.isUp?"text-Lime-Green":"text-Bright-Red"}`}>{objeto.today} today</p>
      </div>
    </article>
  )
}

export function OverviewTodayCard({ object, bg, textColor, bgHover }) {
  return(
    <article className={`${bg+" "+bgHover} cursor-pointer w-[326px] mb-4 rounded-[5px] p-[27px]`}>
      <div className="flex items-center justify-between">
        <p className={textColor}>{object.statsType}</p>
        <img src={`src/assets/images/icon-${object.network}.svg`} alt="" />
      </div>
      <div className="flex justify-between">
        <p className={`${textColor} text-[42px] font-bold`}>{roundNumber(object.stats)}</p>
        <div className="flex items-center justify-center gap-1">
          <img src={`src/assets/images/icon-${object.isUp?"up":"down"}.svg`} alt="" />
          <p className={`text-xs font-bold ${object.isUp?"text-Lime-Green":"text-Bright-Red"}`}>{object.porcentage} Today</p>
        </div>
      </div>
    </article>
  )
}