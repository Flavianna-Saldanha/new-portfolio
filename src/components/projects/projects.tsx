import { photoList } from "@/data/photoList";

export const Projects = () => {
  return (
    <div>
        <div className="mt-44 uppercase text-center text-4xl font-bold bg-gradient-to-b from-[#130834] via-[#38179A] to-[#130834] bg-clip-text text-transparent drop-shadow-[8px_8px_5px_black] font-opensans">
            <h1>Projetos</h1>
        </div>
        <div>
            <div>
                {photoList.map((photo, index) => (
                    <div
                        key={index}
                    ></div>
                ))}
            </div>
        </div>
    </div>
  );
}
