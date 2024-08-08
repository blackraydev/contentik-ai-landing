import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  oldPrice?: number;
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
    benefitList: ['3 создания', '1 редактирование'],
  },
  {
    title: 'Стартовый',
    popular: 0,
    oldPrice: 499,
    price: 399,
    description: 'Подходит для базового использования',
    buttonText: 'Попробовать бесплатно',
    benefitList: ['50 созданий', '25 редактирований'],
  },
  {
    title: 'Про',
    popular: 1,
    oldPrice: 999,
    price: 699,
    description: 'Подходит для активного использования',
    buttonText: 'Попробовать бесплатно',
    benefitList: ['150 созданий', '75 редактирований'],
  },
  {
    title: 'Эксперт',
    popular: 0,
    oldPrice: 1999,
    price: 1599,
    description: 'Подходит для серьёзной объемной работы',
    buttonText: 'Попробовать бесплатно',
    benefitList: ['500 созданий', '250 редактирований'],
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
        Выберите план, который подходит именно вам, и начните работать с Contentik AI уже сейчас
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <div
            className={
              pricing.popular === PopularPlanType.YES ? 'tariffGradient dark:tariffGradient' : ''
            }
          >
            <Card
              key={pricing.title}
              className={
                pricing.popular === PopularPlanType.YES
                  ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10 w-full'
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
                  {pricing.oldPrice && (
                    <p className="text-l line-through text-muted-foreground">
                      {pricing.oldPrice} / месяц
                    </p>
                  )}
                  <span className="text-3xl font-bold">{pricing.price} ₽</span>
                  <span> / месяц</span>
                </div>

                <CardDescription className="pt-2 pb-4">{pricing.description}</CardDescription>
                <Button className="w-full p-0">
                  <a
                    rel="noreferrer noopener"
                    href="https://app.contentik-ai.ru"
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
