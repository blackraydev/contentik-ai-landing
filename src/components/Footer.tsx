interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '#features',
    label: 'Преимущества',
  },
  {
    href: '#use-cases',
    label: 'Примеры',
  },
  {
    href: '#testimonials',
    label: 'Отзывы',
  },
  {
    href: '#pricing',
    label: 'Тарифы',
  },
  {
    href: '#faq',
    label: 'FAQ',
  },
];

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a rel="noreferrer noopener" href="#" className="font-bold text-xl flex">
            <img className="w-7 h-7 mr-2 rounded-md p-1 bg-logo" src="./img/logo.png" />
            Contentik AI
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">О сервисе</h3>
          {routeList.map(({ href, label }) => (
            <div>
              <a rel="noreferrer noopener" href={href} className="opacity-60 hover:opacity-100">
                {label}
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Сообщество</h3>
          <div>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://t.me/contentik_ai"
              className="opacity-60 hover:opacity-100"
            >
              Telegram Канал
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://t.me/contentik_ai_chat"
              className="opacity-60 hover:opacity-100"
            >
              Telegram Чат
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Поддержка</h3>
          <div>
            <a
              href="mailto:support@contentik-ai.ru?subject=Вопрос"
              className="opacity-60 hover:opacity-100"
            >
              support@contentik-ai.ru
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Условия</h3>
          <div>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://contentik-ai.ru/offer"
              className="opacity-60 hover:opacity-100"
            >
              Публичная оферта
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>&copy; 2024 «Contentik AI». Все права защищены</h3>
      </section>
    </footer>
  );
};
