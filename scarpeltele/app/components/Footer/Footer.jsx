'use client';
import Link from 'next/link';
import Container from '../../Atoms/Container/Container';
import MainLogo from '../../assets/icons/MainLogo';
import styles from './footer.module.scss';
import Typography from '../../Atoms/Typography/Typography';
import LocationIcon from '../../assets/icons/Location';
import MailIcon from '../../assets/icons/MailIcon';
import Phone from '../../assets/icons/Phone';
import LinkedIn from '../../assets/icons/LinkedIn';
import classNames from 'classnames';

const Footer = () => {
  return (
    <footer id="footer" className={styles.bgWrapper}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerContainer_leftSide}>
          <Link className={styles.footerContainer_leftSide_logo} href={'/'}>
            <MainLogo />
          </Link>
          <nav
            className={classNames(
              styles.footerContainer_nav,
              styles.noDisplayPc,
            )}
          >
            <ul className={styles.footerContainer_nav_rightSide}>
              <li className={styles.footerContainer_nav_rightSide_item}>
                <Link href={'/blog'}>
                  <Typography variant="body3">Blog</Typography>
                </Link>
              </li>
              <li className={styles.footerContainer_nav_rightSide_item}>
                <Link href={'#'}>
                  <Typography variant="body3">Careers</Typography>
                </Link>
              </li>
              <li className={styles.footerContainer_nav_rightSide_item}>
                <Link href={'#'}>
                  <Typography variant="body3">FAQ</Typography>
                </Link>
              </li>
              <li className={styles.footerContainer_nav_rightSide_item}>
                <Link href={'#'}>
                  <Typography variant="body3">Privacy Policy</Typography>
                </Link>
              </li>
              <li className={styles.footerContainer_nav_rightSide_item}>
                <Link href={'#'}>
                  <Typography variant="body3">Terms of use</Typography>
                </Link>
              </li>
            </ul>
          </nav>
          <Link
            className={classNames(
              styles.footerContainer_leftSide_location,
              styles.mNoDisplay,
            )}
            href="https://goo.gl/maps/BpKrccH3ksVitNbg7"
            target="_blank"
          >
            <Typography
              className={classNames(
                styles.footerLinkText,
                styles.footerContainer_leftSide_location_text,
              )}
              variant="body4"
            >
              <LocationIcon />
              Georgiou Katsounotou 6, b3036 Limassol, Cyprus
            </Typography>
          </Link>
          <div className={styles.mobileOrganizer}>
            <ul className={styles.footerContainer_leftSide_links}>
              <li className={styles.footerContainer_leftSide_links_item}>
                <Link
                  className={styles.footerContainer_leftSide_links_item_link}
                  href="mailto:contact@scarpeltele.com"
                  target="_blank"
                >
                  <Typography className={styles.footerLinkText} variant="body4">
                    <MailIcon />
                    contact@scarpeltele.com
                  </Typography>
                </Link>
              </li>
              <li className={styles.footerContainer_leftSide_links_item}>
                <Link
                  className={styles.footerContainer_leftSide_links_item_link}
                  target="_blank"
                  href="tel:+357 25 056 456"
                >
                  <Typography className={styles.footerLinkText} variant="body4">
                    <Phone /> +357 25 056 456
                  </Typography>
                </Link>
              </li>
              <li className={styles.footerContainer_leftSide_links_item}>
                <Link
                  className={styles.footerContainer_leftSide_links_item_link}
                  href="https://www.linkedin.com/company/scarpel-telecom/"
                  target="_blank"
                >
                  <Typography className={styles.footerLinkText} variant="body4">
                    <LinkedIn />
                    scarpel-telecom
                  </Typography>
                </Link>
              </li>
            </ul>
            <Link
              className={classNames(
                styles.footerContainer_leftSide_location,
                styles.noDisplayPc,
              )}
              href="https://goo.gl/maps/BpKrccH3ksVitNbg7"
              target="_blank"
            >
              <Typography
                className={classNames(
                  styles.footerLinkText,
                  styles.footerContainer_leftSide_location_text,
                )}
                variant="body4"
              >
                <LocationIcon />
                Georgiou Katsounotou 6, b3036 Limassol, Cyprus
              </Typography>
            </Link>
            <Typography
              className={classNames(
                styles.noDisplayPc,
                styles.mobileOrganizer_mobileRights,
              )}
              variant="body5"
            >
              © All Rights Reserved 2023. Scarpel Limited
            </Typography>
          </div>
        </div>

        <nav
          className={classNames(styles.footerContainer_nav, styles.mNoDisplay)}
        >
          <ul className={styles.footerContainer_nav_rightSide}>
            <li className={styles.footerContainer_nav_rightSide_item}>
              <Link href={'/blog'}>
                <Typography variant="body3">Blog</Typography>
              </Link>
            </li>
            <li className={styles.footerContainer_nav_rightSide_item}>
              <Link href={'#'}>
                <Typography variant="body3">Careers</Typography>
              </Link>
            </li>
            <li className={styles.footerContainer_nav_rightSide_item}>
              <Link href={'#'}>
                <Typography variant="body3">FAQ</Typography>
              </Link>
            </li>
            <li className={styles.footerContainer_nav_rightSide_item}>
              <Link href={'#'}>
                <Typography variant="body3">Privacy Policy</Typography>
              </Link>
            </li>
            <li className={styles.footerContainer_nav_rightSide_item}>
              <Link href={'#'}>
                <Typography variant="body3">Terms of use</Typography>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
      <Container
        className={classNames(styles.bgWrapper_rights, styles.mNoDisplay)}
      >
        <Typography variant="body5">
          © All Rights Reserved 2023. Scarpel Limited
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
