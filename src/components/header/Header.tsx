export const Header = () => {
    return (
        <div className="h-[calc(100vh-90px)] flex flex-col justify-between after:content-[''] after:absolute after:top-0 after:right-0 after:w-[42%] after:h-screen after:bg-white after:[clip-path:polygon(100%_33%,100%_0%,100%_100%,0%_100%)] after:-z-10">
            <div>
                <div>
                    <div className="absolute left-60 top-50 w-16 h-7 bg-gray-200 rounded-xl flex justify-center items-center">
                        <img className="w-5" src="assets/woman-technologist-light-skin-tone.png" alt="" />
                    </div>
                    <div className="absolute left-[270px] top-56 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-gray-200"/>
                </div>
                
                <div className="w-3/4 m-auto mt-36 text-3xl text-center uppercase font-bold drop-shadow-[8px_8px_5px_rgb(0,0,0)] overflow-hidden leading-tight">
                    I'm Flavianna Saldanha
                </div>
                <div className="text-end w-3/4 mr-42 text-gray-500 uppercase text-[10px] italic font-opensans drop-shadow-[8px_8px_5px_black]">Front-end Developer</div>
            </div>

            <div className="drop-shadow-[8px_8px_5px_black]">
                <img className="w-3/4 m-auto" src="/assets/foto-ap.png" alt="" />
            </div>
        </div>
    );
}