import { OverviewCard, OverviewTodayCard } from "./OverviewCard"
import data from "../../data/data.json"

export function OverviewContainer({ darkMode }) {
  return (
    <section className="max-w-[1440px] mx-auto absolute left-0 right-0 top-[191px] flex flex-wrap justify-center gap-x-[30px]">
      {
        data.overview.map(object => 
          <OverviewCard  
            key={object.id} 
            objeto={object}
            bg={darkMode?"bg-Dark-Desaturated-Blue":"bg-Light-Grayish-Blue"}
            textColor={darkMode?'text-white':'text-Very-Dark-Blue'}
            bgHover={darkMode?'hover:brightness-125':'hover:brightness-95'}
          />
        )
      }
    </section>
  )
}

export function OverviewTodayContainer({ darkMode}) {
  return(
    <section>
      <h2 className="text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-8">Overview Today</h2>
      <div className="flex flex-wrap max-w-[1440px] mx-auto justify-center gap-x-[30px]">
        {
          data.overviewToday.map(objeto => 
            <OverviewTodayCard 
              key={objeto.id} 
              object={objeto}
              bg={darkMode?"bg-Dark-Desaturated-Blue":"bg-Light-Grayish-Blue"}
              textColor={darkMode?'text-white':'text-Very-Dark-Blue'}
              bgHover={darkMode?'hover:brightness-125':'hover:brightness-95'}
            />
          )
        }
      </div>
    </section>
  )
}