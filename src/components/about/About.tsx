import Image from "next/image";

export const About = () => {
    return (
        <div className="container mx-auto">
            <div className="py-12 border-y border-gray-800 flex flex-col justify-center items-center gap-10 lg:flex-row lg:gap-5">
                <div>
                    <img 
                        src="/assets/IMG_1537 (3).png" 
                        alt="Minha foto" 
                        className="w-64 lg:w-[400px] lg:ml-5"
                    />
                </div>
                <div className="mx-10 text-justify flex flex-col gap-12 lg:w-[700px] lg:gap-9">
                    <div className="uppercase hidden text-center font-bold text-2xl lg:block lg:text-start">Sobre mim</div>
                    <div className="text-[18px]">Sou desenvolvedora front-end, apaixonada por criar interfaces web intuitivas e experiências digitais marcantes. Estou sempre em busca de aprendizado contínuo, dominando as bases de HTML, CSS e JavaScript. Por meio de projetos pessoais, tenho aprimorado minhas habilidades em responsividade, design de layout e interatividade. Possuo uma forte capacidade de aprendizado e sou proativa na busca por novas soluções.</div>
                    <div className="text-center lg:text-start">
                        <a
                            href="https://drive.google.com/file/d/1TLkD-NGPNaGa766hdk3nY0-9dEabVSje/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-violet-950 px-5 py-4 cursor-pointer inline-block text-center font-sans"
                        >
                        Download Currículo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}