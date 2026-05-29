function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="flex flex-col gap-8">
        <span className="text-red-500 text-center font-semibold uppercase tracking-widest">
          Automatizaciones con IA
        </span>

        <h1 className="text-5xl md:text-8xl text-center font-bold leading-tight">
          Construyendo sistemas modernos con React e IA
        </h1>

        <p className="text-zinc-400 text-xl text-center max-w-2xl">
          Aprendiendo desarrollo moderno, automatizaciones y agentes IA paso a
          paso.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full transition">
            Empezar
          </button>

          <button className="border border-zinc-400 hover:border-zinc-500 px-8 py-3 rounded-full transition">
            Ver proyectos
          </button>
        </div>
        <p className="text-gray-400 text-center mt-6">
          +100 horas aprendiendo IA y desarrollo moderno
        </p>
      </div>
    </section>
  );
}

export default Hero;
