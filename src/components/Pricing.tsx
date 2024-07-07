import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: 'Пробный',
    popular: 0,
    price: 0,
    description: 'Идеально подходит для ознакомления с возможностями сервиса',
    buttonText: 'Попробовать бесплатно',
    benefitList: ['5 генераций', '1 редактирование', 'GPT-3.5'],
  },
  {
    title: 'Стартовый',
    popular: 0,
    price: 499,
    description: 'Стартовый набор для распробывания новых возможностей',
    buttonText: 'Выбрать',
    benefitList: ['100 генераций', '25 редактирований', 'GPT-3.5'],
  },
  {
    title: 'Про',
    popular: 1,
    price: 1499,
    description: 'Подходит для активного использования',
    buttonText: 'Выбрать',
    benefitList: ['500 генераций', '100 редактирований', 'GPT-4 Omni', 'Приоритетная поддержка'],
  },
  {
    title: 'Эксперт',
    popular: 0,
    price: 3999,
    description: 'Идеально для профессионалов и агентств',
    buttonText: 'Выбрать',
    benefitList: ['2000 генераций', '250 редактирований', 'GPT-4 Omni', 'Персональная поддержка'],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-section-foreground to-primary text-transparent bg-clip-text">
          Тарифы
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Выберите план, который подходит именно вам, и начните работать с Contentik уже сегодня
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <div className="tariffGradient dark:tariffGradientDark">
            <Card
              key={pricing.title}
              className={
                pricing.popular === PopularPlanType.YES
                  ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10 tariffGradient'
                  : ''
              }
            >
              <CardHeader>
                <CardTitle className="flex item-center justify-between">
                  {pricing.title}
                  {pricing.popular === PopularPlanType.YES ? (
                    <Badge variant="secondary" className="bg-colorful text-sm text-primary">
                      Популярный
                    </Badge>
                  ) : null}
                </CardTitle>
                <div className="pt-2">
                  <span className="text-3xl font-bold">{pricing.price} ₽</span>
                  <span className="text-muted-foreground"> / месяц</span>
                </div>

                <CardDescription className="pt-2 pb-4">{pricing.description}</CardDescription>
                <Button className="w-full p-0">
                  <a
                    rel="noreferrer noopener"
                    href="https://blackraydev.github.io/contentik-ai"
                    className="w-full h-full flex items-center justify-center"
                  >
                    {pricing.buttonText}
                  </a>
                </Button>
              </CardHeader>

              <hr className="w-4/5 m-auto mb-4" />

              <CardFooter className="flex">
                <div className="space-y-4">
                  {pricing.benefitList.map((benefit: string) => (
                    <span key={benefit} className="flex">
                      <Check className="text-green-500" /> <h3 className="ml-2">{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
