import Container from '../../Atoms/Container/Container';
import Typography from '../../Atoms/Typography/Typography';
import Button from '../../Atoms/Button/Button';
import styles from './faq.module.scss';
import FAQItem from '../../Atoms/FAQItem/FAQItem';
const faqMock = [
  {
    faq: 'What is A2P SMS, and how can it benefit my business?',
    faqDescription:
      'Scarpel Telecom offers coverage in 190 countries, connecting with mobile carriers internationally to help you reach your audience effectively and reliably.',
  },
  {
    faq: 'What is A2P SMS, and how can it benefit my business?',
    faqDescription:
      'Scarpel Telecom offers coverage in 190 countries, connecting with mobile carriers internationally to help you reach your audience effectively and reliably.',
  },
  {
    faq: 'What is A2P SMS, and how can it benefit my business?',
    faqDescription:
      'Scarpel Telecom offers coverage in 190 countries, connecting with mobile carriers internationally to help you reach your audience effectively and reliably.',
  },
  {
    faq: 'What is A2P SMS, and how can it benefit my business?',
    faqDescription:
      'Scarpel Telecom offers coverage in 190 countries, connecting with mobile carriers internationally to help you reach your audience effectively and reliably.',
  },
  {
    faq: 'What is A2P SMS, and how can it benefit my business?',
    faqDescription:
      'Scarpel Telecom offers coverage in 190 countries, connecting with mobile carriers internationally to help you reach your audience effectively and reliably.',
  },
  {
    faq: 'What is A2P SMS, and how can it benefit my business?',
    faqDescription:
      'Scarpel Telecom offers coverage in 190 countries, connecting with mobile carriers internationally to help you reach your audience effectively and reliably.',
  },
  {
    faq: 'What is A2P SMS, and how can it benefit my business?',
    faqDescription:
      'Scarpel Telecom offers coverage in 190 countries, connecting with mobile carriers internationally to help you reach your audience effectively and reliably.',
  },
  {
    faq: 'What is A2P SMS, and how can it benefit my business?',
    faqDescription:
      'Scarpel Telecom offers coverage in 190 countries, connecting with mobile carriers internationally to help you reach your audience effectively and reliably.',
  },
  {
    faq: 'What is A2P SMS, and how can it benefit my business?',
    faqDescription:
      'Scarpel Telecom offers coverage in 190 countries, connecting with mobile carriers internationally to help you reach your audience effectively and reliably.',
  },
  {
    faq: 'What is A2P SMS, and how can it benefit my business?',
    faqDescription:
      'Scarpel Telecom offers coverage in 190 countries, connecting with mobile carriers internationally to help you reach your audience effectively and reliably.',
  },
  {
    faq: 'What is A2P SMS, and how can it benefit my business?',
    faqDescription:
      'Scarpel Telecom offers coverage in 190 countries, connecting with mobile carriers internationally to help you reach your audience effectively and reliably.',
  },
];

const FAQ = () => {
  return (
    <div className={styles.faq}>
      <Container className={styles.faq_wrapper}>
        <div className={styles.faq_wrapper_titleWrap}>
          <Typography component="h2" variant="h2Title">
            FAQ
          </Typography>
          <Button variant="borderAndTransparent" href={'#'} link={true}>
            See all FAQ
          </Button>
        </div>
        <div className={styles.faq_wrapper_faqBlock}>
          {faqMock.slice(-8).map((item, idx) => {
            return (
              <FAQItem
                className={styles.faq_wrapper_faqBlock_faqItem}
                title={item.faq}
                description={item.faqDescription}
                key={idx}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
