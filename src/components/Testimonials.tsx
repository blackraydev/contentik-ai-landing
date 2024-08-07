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
    image: './img/testimonial1.jpg',
    name: 'Олег',
    userName: 'Блогер',
    comment:
      'Сервис помогает мне создавать интересные и уникальные посты для моего блога. Читатели заметили улучшение и вовлеченность выросла.',
  },
  {
    image: './img/testimonial2.jpg',
    name: 'Гульшат',
    userName: 'SMM-специалист',
    comment:
      'Как SMM-щик, я всегда ищу способы сэкономить время. Этот инструмент - настоящая находка!',
  },
  {
    image: './img/testimonial3.jpg',
    name: 'Гульназ',
    userName: 'SMM-специалист',
    comment:
      'Сервис просто потрясающий! С помощью него я могу легко генерировать тексты для своих клиентов. Удобный интерфейс и возможность настройки параметров делают его незаменимым инструментом в моей работе.',
  },
  {
    image: './img/testimonial4.jpg',
    name: 'Даниэль',
    userName: 'Копирайтер',
    comment:
      'Contentik значительно упростил мою работу. Теперь я могу создавать качественный контент быстрее и проще.',
  },
  {
    image: './img/testimonial5.jpg',
    name: 'Андрей',
    userName: 'Контент-менеджер',
    comment:
      'Contentik стал незаменимым помощником в моей работе. Благодаря ему я могу создавать качественные статьи быстрее и эффективнее.',
  },
  {
    image: './img/testimonial6.jpg',
    name: 'Максим',
    userName: 'Руководитель отдела маркетинга',
    comment:
      'Благодаря этому инструменту моя команда может создавать уникальный контент, который привлекает больше подписчиков. Спасибо Contentik!',
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-center pb-8 text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-section-foreground to-primary text-transparent bg-clip-text">
          У нас есть фанаты
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(({ image, name, userName, comment }: TestimonialProps) => (
          <Card key={userName} className="max-w-md md:break-inside-avoid relative hover-group">
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

            <div className="hover-elem" />
          </Card>
        ))}
      </div>
    </section>
  );
};
