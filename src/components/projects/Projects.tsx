import { useEffect, useState } from "react";
import { photoList } from "@/data/photoList";

export const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 1024) {
        setItemsPerPage(1); 
      } else if (width < 1280) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerPage < photoList.length) {
      setStartIndex((prev) => prev + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex((prev) => prev - itemsPerPage);
    }
  };

  const visibleProjects = photoList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div id="projetos" className="container mx-auto px-4">
      <div>
        <div className="mt-44 uppercase text-center text-3xl font-bold bg-gradient-to-b from-[#130834] via-[#38179A] to-[#130834] bg-clip-text text-transparent drop-shadow-[8px_8px_5px_black] font-opensans">
          <h1>Projetos</h1>
        </div>

        <div className="mt-12 flex items-center justify-around w-full max-w-screen-xl mx-auto">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`${
              itemsPerPage === 1 ? "w-6 h-6 mr-2" : "px-4 py-3"
            } bg-white text-black rounded-full disabled:opacity-50 shrink-0 transition-all duration-200 cursor-pointer hover:bg-violet-950`}
          >
            <span className="block rotate-180">➜</span>
          </button>

          <div className="flex gap-6 flex-wrap justify-center">
            {visibleProjects.map((photo, index) => (
              <div
                key={index}
                className="bg-[#0000002d] w-80 sm:max-w-xs md:w-96 shadow-[0_7px_29px_rgba(100,100,111,0.1)] text-white rounded-md p-4 flex flex-col gap-2 hover:opacity-90 border-b-4 border-b-violet-950"
              >
                <img
                  src={photo.img}
                  alt={photo.alt}
                  className="w-full h-40 object-cover rounded"
                />

                <h2 className="text-lg font-bold mt-4 text-center">
                  {photo.title}
                </h2>

                <p className="text-sm text-gray-300 mt-2 line-clamp-3 text-justify">
                  {photo.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3 text-xs">
                  {photo.technologies.map((tech, i) => (
                    <span key={i} className="bg-zinc-950 px-2 py-1 rounded border border-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4 text-xl justify-center">
                  <a
                    href={photo.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src="/assets/world-wide-web (1).png" 
                      width={20} 
                    />
                  </a>
                  <a
                    href={photo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src="/assets/github.png" 
                      width={20} 
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= photoList.length}
            className={`${
              itemsPerPage === 1 ? "w-6 h-6 ml-2" : "px-4 py-3"
            } bg-white text-black rounded-full disabled:opacity-50 shrink-0 transition-all duration-200 cursor-pointer hover:bg-violet-950`}
          >
            ➜
          </button>
        </div>
      </div>
    </div>
  );
};
