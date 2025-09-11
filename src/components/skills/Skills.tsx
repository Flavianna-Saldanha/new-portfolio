import { skillsList } from "@/data/skillsList";

export const Skills = () => {
    return (
        <div id="habilidades" className="container mx-auto">
            <div>
                <div className="mt-44 uppercase text-center text-4xl font-bold bg-gradient-to-b from-[#130834] via-[#38179A] to-[#130834] bg-clip-text text-transparent drop-shadow-[8px_8px_5px_black] font-opensans">
                    <h1>Habilidades</h1>
                </div>
                <div className="mt-12 mx-5 flex flex-wrap justify-center gap-4">
                    {skillsList.map((skills, index) => (
                        <div
                            key={index}
                            className="w-44 h-48 p-12 flex items-center bg-[#060707] border-b-4 border-b-violet-950 cursor-pointer hover:opacity-50"
                        >
                        <img src={skills.src} alt={skills.alt} />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}