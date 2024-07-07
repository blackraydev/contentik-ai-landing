import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

interface UseCaseProps {
  title: string;
  description?: string;
}

const useCasesList: UseCaseProps[] = [
  {
    title: 'Посты для соц. сетей',
    description: 'Создавайте привлекательный контент для ваших подписчиков.',
  },
  {
    title: 'Блоги и статьи',
    description: 'Генерируйте информативные и увлекательные статьи для вашего блога.',
  },
  {
    title: 'Описание товаров',
    description: 'Создавайте точные и привлекательные описания для продуктов вашего магазина.',
  },
  {
    title: 'Email-рассылки',
    description: 'Разрабатывайте эффективные и персонализированные письма для ваших клиентов.',
  },
  {
    title: 'Рекламные тексты',
    description: 'Создавайте запоминающиеся и яркие рекламные тексты для ваших кампаний.',
  },
  {
    title: 'Сценарии для видео',
    description:
      'Разрабатывайте креативные сценарии для видеороликов на YouTube и других платформах.',
  },
  {
    title: 'Обучающие материалы',
    description: 'Создавайте полезные и структурированные обучающие тексты и гайды.',
  },
  {
    title: 'И многое другое!',
  },
];

export const UseCases = () => {
  return (
    <section id="use-cases" className="container py-24 sm:py-32">
      <div>
        <h2 className="mb-8 text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-b from-section-foreground to-primary text-transparent bg-clip-text">
            Примеры использования
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-2 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
          {useCasesList.map(({ title, description }: UseCaseProps) => (
            <Card key={title}>
              <CardHeader
                className={`space-y-1 flex md:flex-row ${
                  description ? 'items-start' : 'items-center'
                } justify-start gap-4`}
              >
                <div>
                  <CardTitle>{title}</CardTitle>
                  {description && (
                    <CardDescription className="text-md mt-2">{description}</CardDescription>
                  )}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
