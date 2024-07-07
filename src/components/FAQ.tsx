import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'Как работает генерация текста?',
    answer:
      'Вы указываете параметры, и ИИ создает текст на их основе. Вы можете указать тему, описание, тип контента, целевую аудиторию, ключевые слова, стиль письма, тон письма и язык генерации.',
    value: 'item-1',
  },
  {
    question: 'Можно ли редактировать уже существующие тексты?',
    answer:
      'Да, вы можете загрузить свой текст и указать параметры для его улучшения. ИИ предложит вам изменения, которые сделают текст более качественным и соответствующим вашим требованиям.',
    value: 'item-2',
  },
  {
    question: 'Предоставляете ли вы бесплатный пробный период?',
    answer:
      'Да, вы можете воспользоваться всеми функциями нашего сервиса бесплатно. На бесплатном пробном периоде доступно 5 генераций. Это поможет вам оценить все преимущества перед оформлением подписки.',
    value: 'item-3',
  },
  {
    question: 'Какие тарифные планы доступны?',
    answer:
      'У нас есть бесплатный пробный период и три платных плана: Стартовый, Про и Эксперт. Каждый план предоставляет разные уровни доступа к функциям и количеству генераций.',
    value: 'item-4',
  },
  {
    question: 'Какие типы контента можно генерировать с помощью вашего сервиса?',
    answer:
      'Вы можете создавать разнообразные типы контента, включая посты для социальных сетей, статьи для блогов, описания товаров, email-рассылки, рекламные тексты и многое другое.',
    value: 'item-5',
  },
  {
    question: 'Как я могу просмотреть историю своих генераций?',
    answer:
      'В вашем личном кабинете доступна история всех сгенерированных текстов. Вы можете вернуться к любой генерации, отредактировать ее или использовать повторно.',
    value: 'item-6',
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-b from-section-foreground to-primary text-transparent bg-clip-text">
          Часто задаваемые вопросы
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Остались вопросы?{' '}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Напишите нам
        </a>
      </h3>
    </section>
  );
};
