export const Contact = () => {
    return (
        <div id="contato">
            <div className="mt-44 uppercase text-center text-3xl font-bold bg-gradient-to-b from-[#130834] via-[#38179A] to-[#130834] bg-clip-text text-transparent drop-shadow-[8px_8px_5px_black] font-opensans">
                <h1>Contato</h1>
            </div>
            <p className="container mx-auto w-3/4 text-[21px] pt-14 text-justify lg:w-[870px]">
                Se você tem um projeto em mente, uma ideia para compartilhar ou apenas quer conversar sobre oportunidades e parcerias, ficarei muito feliz em ouvir você! 
                Vamos construir algo incrível juntos? Vou responder o mais rápido possível!
            </p>
            <div className="flex justify-center my-20 gap-11">
                <a href="mailto:flaviannasaldanhadev@gmail.com.br">
                    <div className="w-36 h-36 lg:w-44 lg:h-44 bg-[#070c1f] border-b-4 border-b-violet-950 uppercase font-bold flex flex-col justify-center items-center gap-4 hover:opacity-80">
                        <img 
                            src="/assets/email.png" 
                            width={40}
                        />
                        E-mail                 
                    </div> 
                </a>   
                <a href="https://wa.me/5588981488307" target="_blank">
                    <div className="w-36 h-36 lg:w-44 lg:h-44 bg-[#070c1f] border-b-4 border-b-violet-950 uppercase font-bold flex flex-col justify-center items-center gap-4 hover:opacity-80">
                        <img 
                            src="/assets/whatsapp.png" 
                            width={40}
                        />
                        WhatsApp
                    </div>
                </a>
            </div>
        </div>
    );
}