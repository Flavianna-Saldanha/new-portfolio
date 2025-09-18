import Image from "next/image";

export const Header = () => {
    return (
        <div className="after:content-[''] after:absolute after:top-0 after:right-0 after:w-[42%] after:h-screen after:bg-white after:[clip-path:polygon(100%_33%,100%_0%,100%_100%,0%_100%)] after:-z-10 lg:after:[clip-path:polygon(75%_0%,100%_0%,100%_100%,0%_100%)]">
            <div className="overflow-y-hidden relative h-[calc(100vh-90px)] flex flex-col justify-between items-center lg:flex-row lg:justify-around lg:items-start">
                <div className="mt-40 relative lg:mt-60 lg:right-72 lg:w-96">
                    <div className="relative bg-white w-12 h-5 rounded-2xl flex justify-center items-center mb-4 ml-40 lg:w-16 lg:h-8 lg:ml-[200px]">
                        <Image
                            src="/assets/woman-technologist-light-skin-tone.png"
                            alt="woman technologist"
                            width={120}
                            height={120}
                            className="w-3 h-3 lg:w-6 lg:h-6"
                        />
                    </div>

                    <div className="absolute top-5 left-[190px] -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-white lg:border-l-[10px] lg:border-t-[10px] lg:left-[230px] lg:top-8" />
                    
                    <div>
                        <div className="w-72 overflow-y-hidden m-auto font-bold text-[22px] text-center uppercase drop-shadow-[8px_8px_5px_rgb(0,0,0)] sm:text-3xl lg:w-auto md:text-2xl lg:text-4xl xl:text-5xl">
                            I'm Flavianna Saldanha
                        </div>
                        <div className="italic font-opensans uppercase text-[8px] mr-5 text-end text-gray-500 drop-shadow-[8px_8px_5px_black]">
                            Front-end Developer
                        </div>
                    </div>
                </div>

                <div className="w-full drop-shadow-[10px_8px_5px_black] overflow-y-hidden lg:w-auto lg:absolute lg:bottom-0 lg:right-36">
                    <Image
                        src="/assets/foto-ap.png"
                        alt="woman technologist"
                        width={1200}
                        height={1200}
                        className="m-auto w-[47%] md:w-[28%] sm:w-[38%] lg:max-h-screen lg:w-[340px] xl:w-[500px] lg:object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
