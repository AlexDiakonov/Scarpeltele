'use client';
import Container from '../../Atoms/Container/Container';
import MainLogo from '../../assets/icons/MainLogo';
import styles from './footer.module.scss';
import Typography from '../../Atoms/Typography/Typography';
import LocationIcon from '../../assets/icons/Location';
import MailIcon from '../../assets/icons/MailIcon';
import Phone from '../../assets/icons/Phone';
import LinkedIn from '../../assets/icons/LinkedIn';
import classNames from 'classnames';
import Link from 'next/link';
import { useRef, useState } from 'react';
import DropArrow from './DropArrow';
import useClickOutside from '@/app/utils/useClickOutside';

const Footer = () => {
  const [legalDrop, setLegalDrop] = useState(false);
  const dropRef = useRef(null);

  const legalDropHandler = () => {
    setLegalDrop(!legalDrop);
  };

  var currentDate = new Date();

  useClickOutside(dropRef, legalDropHandler, legalDrop);

  var currentYear = currentDate.getFullYear();
  return (
    <footer id='footer' className={styles.bgWrapper}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerContainer_leftSide}>
          <a className={styles.footerContainer_leftSide_logo} href={'/'}>
            <MainLogo />
          </a>
          <nav
            className={classNames(
              styles.footerContainer_nav,
              styles.noDisplayPc
            )}
          >
            <ul className={styles.footerContainer_nav_rightSide}>
              <li className={styles.footerContainer_nav_rightSide_item}>
                <a href={'/blog'}>
                  <Typography variant='body3'>Blog</Typography>
                </a>
              </li>
              <li className={styles.footerContainer_nav_rightSide_item}>
                <Link href={'/careers'}>
                  <Typography variant='body3'>Careers</Typography>
                </Link>
              </li>
              <li className={styles.footerContainer_nav_rightSide_item}>
                <Link href={'/faq'}>
                  <Typography variant='body3'>FAQ</Typography>
                </Link>
              </li>

              <li className={styles.footerContainer_nav_rightSide_drop}>
                <Typography
                  onClick={legalDropHandler}
                  className={styles.dropTitle}
                  variant='body3'
                >
                  Legal Documents
                  <DropArrow
                    className={classNames(styles.dropArrow, {
                      [styles.turnArrow]: legalDrop,
                    })}
                  />
                </Typography>
                <ul
                  ref={dropRef}
                  className={classNames(styles.dropContainer, {
                    [styles.openContainer]: legalDrop, // Add the 'open' class when legalDrop is true
                  })}
                >
                  <li>
                    <Link href={'/privacy-policy'}>
                      <Typography variant='body3'>Privacy Policy</Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/terms-of-use'}>
                      <Typography variant='body3'>Terms of use</Typography>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/data-protection-agreement'}>
                      <Typography variant='body3'>
                        Data Protection Agreement
                      </Typography>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <a
            className={classNames(
              styles.footerContainer_leftSide_location,
              styles.mNoDisplay
            )}
            href='https://goo.gl/maps/BpKrccH3ksVitNbg7'
            target='_blank'
          >
            <Typography
              className={classNames(
                styles.footerLinkText,
                styles.footerContainer_leftSide_location_text
              )}
              variant='body4'
            >
              <LocationIcon />
              Georgiou Katsounotou 6, 3036 Limassol, Cyprus
            </Typography>
          </a>
          <div className={styles.mobileOrganizer}>
            <ul className={styles.footerContainer_leftSide_links}>
              <li className={styles.footerContainer_leftSide_links_item}>
                <a
                  className={styles.footerContainer_leftSide_links_item_link}
                  href='mailto:contact@scarpeltele.com'
                  target='_blank'
                >
                  <Typography className={styles.footerLinkText} variant='body4'>
                    <MailIcon />
                    contact@scarpeltele.com
                  </Typography>
                </a>
              </li>
              <li className={styles.footerContainer_leftSide_links_item}>
                <a
                  className={styles.footerContainer_leftSide_links_item_link}
                  target='_blank'
                  href='tel:+357 25 056 456'
                >
                  <Typography className={styles.footerLinkText} variant='body4'>
                    <Phone /> +357 25 056 456
                  </Typography>
                </a>
              </li>
              <li className={styles.footerContainer_leftSide_links_item}>
                <a
                  className={styles.footerContainer_leftSide_links_item_link}
                  href='https://www.linkedin.com/company/scarpel-telecom/'
                  target='_blank'
                >
                  <Typography className={styles.footerLinkText} variant='body4'>
                    <LinkedIn />
                    scarpel-telecom
                  </Typography>
                </a>
              </li>
            </ul>
            <a
              className={classNames(
                styles.footerContainer_leftSide_location,
                styles.noDisplayPc
              )}
              href='https://goo.gl/maps/BpKrccH3ksVitNbg7'
              target='_blank'
            >
              <Typography
                className={classNames(
                  styles.footerLinkText,
                  styles.footerContainer_leftSide_location_text
                )}
                variant='body4'
              >
                <LocationIcon />
                Georgiou Katsounotou 6, 3036 Limassol, Cyprus
              </Typography>
            </a>
            <Typography
              className={classNames(
                styles.noDisplayPc,
                styles.mobileOrganizer_mobileRights
              )}
              variant='body5'
            >
              © All Rights Reserved {currentYear}. Scarpel Limited
            </Typography>
          </div>
        </div>

        <nav
          className={classNames(styles.footerContainer_nav, styles.mNoDisplay)}
        >
          <ul className={styles.footerContainer_nav_rightSide}>
            <li className={styles.footerContainer_nav_rightSide_item}>
              <Link href={'/blog'}>
                <Typography variant='body3'>Blog</Typography>
              </Link>
            </li>
            <li className={styles.footerContainer_nav_rightSide_item}>
              <Link href={'/careers'}>
                <Typography variant='body3'>Careers</Typography>
              </Link>
            </li>
            <li className={styles.footerContainer_nav_rightSide_item}>
              <Link href={'/faq'}>
                <Typography variant='body3'>FAQ</Typography>
              </Link>
            </li>
            <li className={styles.footerContainer_nav_rightSide_drop}>
              <Typography
                onClick={legalDropHandler}
                className={styles.dropTitle}
                variant='body3'
              >
                Legal Documents
                <DropArrow
                  className={classNames(styles.dropArrow, {
                    [styles.turnArrow]: legalDrop,
                  })}
                />
              </Typography>
              <ul
                ref={dropRef}
                className={classNames(styles.dropContainer, {
                  [styles.openContainer]: legalDrop, // Add the 'open' class when legalDrop is true
                })}
              >
                <li className={styles.dropItem}>
                  <Link href={'/privacy-policy'}>
                    <Typography variant='body3'>Privacy Policy</Typography>
                  </Link>
                </li>
                <li className={styles.dropItem}>
                  <Link href={'/terms-of-use'}>
                    <Typography variant='body3'>Terms of use</Typography>
                  </Link>
                </li>
                <li className={styles.dropItem}>
                  <Link href={'/data-protection-agreement'}>
                    <Typography variant='body3'>
                      Data Protection Agreement
                    </Typography>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </Container>
      <Container
        className={classNames(styles.bgWrapper_rights, styles.mNoDisplay)}
      >
        <Typography variant='body5'>
          © All Rights Reserved {currentYear}. Scarpel Limited
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
