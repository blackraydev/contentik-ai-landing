import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { WandSparkles, Pencil, Settings, List } from 'lucide-react';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <WandSparkles size={40} className="text-colorful" />,
    title: 'Генерация',
    description: 'Создавайте уникальный контент на основе указанных параметров',
  },
  {
    icon: <Pencil size={40} className="text-colorful" />,
    title: 'Редактирование',
    description: 'Улучшайте и адаптируйте ваши тексты',
  },
  {
    icon: <Settings size={40} className="text-colorful" />,
    title: 'Параметры',
    description:
      'Настраивайте тему, описание, тип контента, целевую аудиторию, ключевые слова, стиль письма, тон письма и язык генерации',
  },
  {
    icon: <List size={40} className="text-colorful" />,
    title: 'История',
    description: 'Сохраняйте и просматривайте все ваши генерации',
  },
];

export const Features = () => {
  return (
    <section id="features" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-section-foreground to-primary text-transparent bg-clip-text">
          Преимущества
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Contentik AI позволяет вам генерировать и редактировать тексты с использованием ИИ, экономя
        ваше время и усилия. Вы можете указать все необходимые параметры для получения идеального
        текста.
      </p>
      <div className="shadow"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted relative hover-group">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{description}</CardDescription>
            </CardContent>
            <div className="hover-elem" />
          </Card>
        ))}
      </div>
    </section>
  );
};
