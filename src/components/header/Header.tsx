import Image from "next/image";

export const Header = () => {
    return (
        <div className="after:content-[''] after:absolute after:top-0 after:right-0 after:w-[42%] after:h-screen after:bg-white after:[clip-path:polygon(100%_33%,100%_0%,100%_100%,0%_100%)] after:-z-10">
            <div className="h-[calc(100vh-90px)] border border-red-600 flex flex-col justify-between items-center">
                <div className="mt-28">
                    <div className="bg-white w-15 h-6 rounded-xl flex justify-center items-center mb-4 ml-40">
                        <Image
                            src="/assets/woman-technologist-light-skin-tone.png"
                            alt="woman technologist"
                            width={20}
                            height={20}
                        />
                        <div className="absolute left-20 mt-8 ml-40 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-white"/>
                    </div>
                    <div>
                        <div className="w-72 m-auto font-bold text-3xl text-center uppercase drop-shadow-[8px_8px_5px_rgb(0,0,0)]">I'm Flavianna Saldanha</div>
                        <div className="italic font-opensans uppercase text-[10px] text-end text-gray-500 drop-shadow-[8px_8px_5px_black]">Front-end Developer</div>
                    </div>
                </div>
                <div className="drop-shadow-[8px_8px_5px_black]">
                    <Image
                        src="/assets/foto-ap.png"
                        alt="woman technologist"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
}