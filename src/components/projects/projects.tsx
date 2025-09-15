import { photoList } from "@/data/photoList";

export const Projects = () => {
  return (
    <div id="projetos" className="container mx-auto">
      <div>
        <div className="mt-44 uppercase text-center text-4xl font-bold bg-gradient-to-b from-[#130834] via-[#38179A] to-[#130834] bg-clip-text text-transparent drop-shadow-[8px_8px_5px_black] font-opensans">
          <h1>Projetos</h1>
        </div>

        <div className="mt-12 mx-5 flex flex-wrap justify-center gap-6">
          {photoList.map((photo, index) => (
            <div
              key={index}
              className="w-96 bg-[#060707] text-white rounded-md shadow-lg p-4 flex flex-col gap-2 hover:opacity-90 transition border-b-4 border-b-violet-950"
            >
              <img
                src={photo.img}
                alt={photo.alt}
                className="w-full h-40 object-cover rounded"
              />

              <h2 className="text-lg font-bold mt-4">{photo.title}</h2>

              <p className="text-sm text-gray-300 mt-2 line-clamp-3 text-justify">
                {photo.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3 text-xs">
                {photo.technologies.map((tech, i) => (
                  <span key={i} className="bg-violet-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4 text-xl">
                <a
                  href={photo.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400"
                >
                  <img src="/assets/world-wide-web (1).png" width={20}/>
                </a>
                <a
                  href={photo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400"
                >
                  <img src="/assets/github.png" width={20}/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
