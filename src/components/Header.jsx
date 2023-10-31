export const Header = ({ darkMode, cambio }) => {

    return (
        <header className={`${!darkMode ? "bg-Very-Pale-Blue" : "bg-Very-Dark-Blue-Top"} h-[235px] pt-8 px-6 transition-all rounded-b-[20px] mb-[900px] md:mb-[430px] xl:mb-[200px]`}>
            <h1 className={`${!darkMode ? "text-Very-Dark-Blue" : "text-Very-Pale-Blue"} text-2xl font-bold mb-1`}>Social Media Dashboard</h1>
            <p className={`${!darkMode ? "text-Dark-Grayish-Blue" : "text-Desaturated-Blue"} font-bold mb-6`}>Total Followers: 23,004</p>
            <hr className="bg-black mb-[19px]" />
            <div className="flex justify-between">
                <p className={`${!darkMode ? "text-Dark-Grayish-Blue" : "text-Desaturated-Blue"} font-bold`}>Dark Mode</p>
                <label htmlFor="darkmode" className={`relative ${darkMode ? "bg-Toggle-Gradient" : "bg-Toggle"} w-12 h-6 rounded-full cursor-pointer p-[3px]`} >
                    <input onClick={cambio} id="darkmode" type="checkbox" hidden />
                    <div>
                        <div className={`w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full ${darkMode && "translate-x-[24px]"} transition-all`}></div>
                    </div>
                </label>
            </div>  
        </header>
    )
}