import Image from "next/image";

export const About = () => {
  return (
    <div id="sobre" className="mx-auto">
      <div className="py-14 border-y border-gray-800 flex flex-col justify-center items-center gap-10 lg:flex-row lg:gap-5">
        <div>
          <img
            src="/assets/IMG_1537 (3).png"
            alt="Minha foto"
            className="w-64 lg:w-[350px] lg:ml-5"
          />
        </div>
        <div className="mx-10 text-justify flex flex-col gap-12 md:w-lg lg:w-xl lg:gap-8">
          <div className="uppercase hidden text-center font-bold text-2xl lg:block lg:text-start lg:text-2xl">
            Sobre mim
          </div>
          <div className="leading-8 text-[18px]lg:text-[15px] lg:leading-8">
            Sou desenvolvedora front-end, apaixonada por criar interfaces web
            intuitivas e experiências digitais marcantes. Tenho domínio sólido
            de TypeScript e React, com foco em Next.js e Tailwind CSS. Aplico
            esses conhecimentos em projetos pessoais, buscando sempre aprimorar
            a responsividade, o design de layout e a interatividade das
            interfaces. Sou proativa, com forte capacidade de aprendizado e
            sempre em busca de novas soluções tecnológicas.
          </div>
          <div className="text-center lg:text-start">
            <a
              href="https://drive.google.com/file/d/1HJxQTxCV_t2NGfRTNYhmDgsapd8WmIOU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-violet-950 px-5 py-4 cursor-pointer inline-block text-center font-sans hover:bg-violet-950"
            >
              Download Currículo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
