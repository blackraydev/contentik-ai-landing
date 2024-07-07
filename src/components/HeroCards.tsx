import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[60px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="/src/assets/avatar1.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Анна</CardTitle>
            <CardDescription>Копирайтер</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          Как копирайтер, я всегда ищу способы сэкономить время. Этот инструмент - настоящая
          находка!
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-16 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="/src/assets/avatar4.png"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Иван</CardTitle>
          <CardDescription>SMM-специалист</CardDescription>
        </CardHeader>

        <CardContent className="text-center">
          <p>
            Contentik значительно упростил мою работу. Теперь я могу создавать качественный контент
            быстрее и проще.
          </p>
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">Пробный</CardTitle>
          <div className="pt-2">
            <span className="text-3xl font-bold">0 ₽</span>
            <span className="text-muted-foreground"> / месяц</span>
          </div>

          <CardDescription className="pt-2">
            Идеально подходит для ознакомления с возможностями сервиса
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full p-0">
            <a
              rel="noreferrer noopener"
              href="https://blackraydev.github.io/contentik-ai"
              className="w-full h-full flex items-center justify-center"
            >
              Попробовать бесплатно
            </a>
          </Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {['5 генераций', '1 редактирование', 'GPT 3.5'].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" /> <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
