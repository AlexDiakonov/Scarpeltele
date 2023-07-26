import Button from '../../Atoms/Button/Button';
import Container from '../../Atoms/Container/Container';
import Typography from '../../Atoms/Typography/Typography';
import MessageIcon from '../../assets/icons/MessageIcon';
import HeroSms from '../../assets/illustrations/HeroSms';
import SmsFireWall from '../../assets/illustrations/SmsFireWall';
import TwoFactorAuth from '../../assets/illustrations/TwoFactorAuth';
import LeftHeroSectionImage from '../../assets/illustrations/LeftHeroSectionImage';
import RightHeroSectionImage from '../../assets/illustrations/RightHeroSectionImage';
import styles from './hero.module.scss';

const HeroSection = () => {
  return (
    <div data-section id="hero" className={styles.heroSection}>
      <LeftHeroSectionImage className={styles.heroSection_leftImage} />
      <RightHeroSectionImage className={styles.heroSection_rightImage} />
      <Container className={styles.heroSection_wrapper}>
        <Typography
          component="h1"
          className={styles.heroSection_wrapper_title}
          variant="h1Title"
        >
          Score Scalable SMS. Worldwide.
          <MessageIcon className={styles.heroSection_wrapper_title_icon} />
        </Typography>
        <Button
          link={true}
          href="#contact"
          className={styles.heroSection_wrapper_btn}
        >
          Contact An Expert
        </Button>
        <ul className={styles.heroSection_wrapper_benefitList}>
          <li className={styles.heroSection_wrapper_benefitList_item}>
            <HeroSms
              className={styles.heroSection_wrapper_benefitList_item_icon}
            />
            <div>
              <Typography
                className={styles.heroSection_wrapper_benefitList_item_title}
                component="h5"
                variant="h5title"
              >
                A2P Messaging
              </Typography>
              <Typography component="p" variant="body2">
                Boost your marketing. With a 99% open rate, SMS helps you
                effectively reach your audience, drive conversions, and foster
                brand loyalty.
              </Typography>
            </div>
          </li>
          <li className={styles.heroSection_wrapper_benefitList_item}>
            <SmsFireWall
              className={styles.heroSection_wrapper_benefitList_item_icon}
            />
            <div>
              <Typography
                className={styles.heroSection_wrapper_benefitList_item_title}
                component="h5"
                variant="h5title"
              >
                SMS Firewall
              </Typography>
              <Typography component="p" variant="body2">
                Prevent A2P SMS traffic loss. Secure your communication from
                fraud. Increase your revenue. Gain customer&#39;s loyalty. All
                that with the help of our Firewall Solution.
              </Typography>
            </div>
          </li>
          <li className={styles.heroSection_wrapper_benefitList_item}>
            <TwoFactorAuth
              className={styles.heroSection_wrapper_benefitList_item_icon}
            />
            <div>
              <Typography
                className={styles.heroSection_wrapper_benefitList_item_title}
                component="h5"
                variant="h5title"
              >
                Two-Factor Authentication
              </Typography>
              <Typography component="p" variant="body2">
                Enhance your users&#39; account security with Scarpel. This
                added layer of protection deters unauthorised access, builds
                customer trust, and safeguards your business&#39; reputation.
              </Typography>
            </div>
          </li>
        </ul>
      </Container>
      <RightHeroSectionImage className={styles.heroSection_rightImage} />
    </div>
  );
};

export default HeroSection;
