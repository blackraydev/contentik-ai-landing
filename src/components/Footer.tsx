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
            <img className="w-7 h-7 mr-2 rounded-md" src="./src/assets/logo.png" />
            Contentik
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
            <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
              Instagram
            </a>
          </div>

          <div>
            <a rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
              Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>&copy; 2024 Contentik AI </h3>
      </section>
    </footer>
  );
};
