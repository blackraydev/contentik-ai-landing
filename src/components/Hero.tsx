import { Button } from './ui/button';
import { HeroCards } from './HeroCards';

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h2 className="inline">Воплощайте идеи с помощью</h2>{' '}
          <h1 className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
            Contentik AI
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Идеальный инструмент для создателей контента. Генерируйте качественный текст за считанные
          секунды!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3 p-0">
            <a
              rel="noreferrer noopener"
              href="https://app.contentik-ai.ru"
              className="w-full h-full flex items-center justify-center"
            >
              Начать сейчас
            </a>
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
