import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: '/src/assets/avatar1.png',
    name: 'Анна',
    userName: 'Копирайтер',
    comment:
      'Как копирайтер, я всегда ищу способы сэкономить время. Этот инструмент - настоящая находка!',
  },
  {
    image: '/src/assets/avatar2.png',
    name: 'Дмитрий',
    userName: 'Блогер',
    comment:
      'Сервис помогает мне создавать интересные и уникальные посты для моего блога. Читатели заметили улучшение и вовлеченность выросла.',
  },
  {
    image: '/src/assets/avatar3.png',
    name: 'Ольга',
    userName: 'Руководитель отдела маркетинга',
    comment:
      'Сервис просто потрясающий! Моя команда SMM теперь может создавать уникальный контент, который привлекает больше подписчиков.',
  },
  {
    image: '/src/assets/avatar4.png',
    name: 'Иван',
    userName: 'SMM-специалист',
    comment:
      'Contentik значительно упростил мою работу. Теперь я могу создавать качественный контент быстрее и проще.',
  },
  {
    image: '/src/assets/avatar5.png',
    name: 'Наталья',
    userName: 'Редактор новостного портала',
    comment:
      'Благодаря этому инструменту я могу генерировать статьи для нашего сайта намного быстрее. Спасибо Contentik!',
  },
  {
    image: '/src/assets/avatar6.png',
    name: 'Мария',
    userName: 'Контент-менеджер',
    comment:
      'Contentik стал незаменимым помощником в моей работе. Благодаря ему я могу создавать качественные статьи быстрее и эффективнее.',
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="pb-8 text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-section-foreground to-primary text-transparent bg-clip-text">
          У нас есть фанаты
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(({ image, name, userName, comment }: TestimonialProps) => (
          <Card key={userName} className="max-w-md md:break-inside-avoid overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage alt="" src={image} />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{userName}</CardDescription>
              </div>
            </CardHeader>

            <CardContent>{comment}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
