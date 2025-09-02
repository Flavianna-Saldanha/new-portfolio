import Image from "next/image";

export const Header = () => {
    return (
        <div className="after:content-[''] after:absolute after:top-0 after:right-0 after:w-[42%] after:h-screen after:bg-white after:[clip-path:polygon(100%_33%,100%_0%,100%_100%,0%_100%)] after:-z-10">
            <div className="relative h-[calc(100vh-90px)] flex flex-col justify-between items-center lg:flex-row lg:justify-around lg:items-start">
                <div className="mt-50 relative">
                    <div className="relative bg-white w-15 h-6 rounded-xl flex justify-center items-center mb-4 ml-40">
                        <Image
                            src="/assets/woman-technologist-light-skin-tone.png"
                            alt="woman technologist"
                            width={20}
                            height={20}
                        />
                    </div>

                    <div className="absolute top-6 left-[67%] -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-white" />
                    
                    <div>
                        <div className="w-72 overflow-y-hidden m-auto font-bold text-3xl text-center uppercase drop-shadow-[8px_8px_5px_rgb(0,0,0)] sm:text-4xl lg:w-[450px] lg:text-5xl">
                            I'm Flavianna Saldanha
                        </div>
                        <div className="italic font-opensans uppercase text-[10px] mr-5 text-end text-gray-500 drop-shadow-[8px_8px_5px_black]">
                            Front-end Developer
                        </div>
                    </div>
                </div>

                <div className="w-full drop-shadow-[8px_8px_5px_black] overflow-y-hidden lg:w-auto">
                    <Image
                        src="/assets/foto-ap.png"
                        alt="woman technologist"
                        width={1200}
                        height={1200}
                        className="m-auto w-3/4 sm:w-7/12 lg:w-lg lg:mt-[18px]"
                    />
                </div>
            </div>
        </div>
    );
}
