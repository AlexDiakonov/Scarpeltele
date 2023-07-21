'use client';
import classNames from 'classnames';
import Container from '../../Atoms/Container/Container';
import styles from './NavBar.module.scss';
import MainLogo from '../../assets/icons/MainLogo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Button from '../../Atoms/Button/Button';
import Typography from '../../Atoms/Typography/Typography';
import { useRef, useState } from 'react';
import useClickOutside from '../../utils/useClickOutside';

const NavBar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const menuToggle = () => {
    setOpen(!open);
  };

  useClickOutside(ref, () => setOpen(false), open);

  return (
    <header className={styles.headerStyler}>
      <Container className={styles.headerStyler_navWrap}>
        <nav className={styles.navWrapper}>
          <Link className={styles.navWrapper_logo} href="/">
            <MainLogo />
          </Link>
          <div
            onClick={menuToggle}
            ref={ref}
            className={classNames(styles.navWrapper_menuContainer, {
              [styles.opened]: open,
            })}
          >
            <div className={styles.navWrapper_menuContainer_organizer}>
              <ul className={styles.navWrapper_menuContainer_organizer_menu}>
                <li
                  className={
                    styles.navWrapper_menuContainer_organizer_menu_item
                  }
                >
                  <Link
                    className={classNames(
                      {
                        [styles.active]: pathName === '/',
                      },
                      [
                        styles.navWrapper_menuContainer_organizer_menu_item_link,
                      ],
                    )}
                    href="/"
                  >
                    <Typography
                      className={
                        styles.navWrapper_menuContainer_organizer_menu_item_link_text
                      }
                      variant="body2"
                    >
                      Home
                    </Typography>
                  </Link>
                </li>
                <li
                  className={
                    styles.navWrapper_menuContainer_organizer_menu_item
                  }
                >
                  <Link
                    className={classNames(
                      {
                        [styles.active]: pathName === '/solutions',
                      },
                      [
                        styles.navWrapper_menuContainer_organizer_menu_item_link,
                      ],
                    )}
                    href="/#solution"
                  >
                    <Typography
                      className={
                        styles.navWrapper_menuContainer_organizer_menu_item_link_text
                      }
                      variant="body2"
                    >
                      Solutions
                    </Typography>
                  </Link>
                </li>
                <li
                  className={
                    styles.navWrapper_menuContainer_organizer_menu_item
                  }
                >
                  <Link
                    className={classNames(
                      {
                        [styles.active]: pathName === '#/whyUs',
                      },
                      [
                        styles.navWrapper_menuContainer_organizer_menu_item_link,
                      ],
                    )}
                    href="/#whyUs"
                  >
                    <Typography
                      className={
                        styles.navWrapper_menuContainer_organizer_menu_item_link_text
                      }
                      variant="body2"
                    >
                      Why us
                    </Typography>
                  </Link>
                </li>
                <li
                  className={
                    styles.navWrapper_menuContainer_organizer_menu_item
                  }
                >
                  <Link
                    className={classNames(
                      {
                        [styles.active]: pathName === '/about',
                      },
                      [
                        styles.navWrapper_menuContainer_organizer_menu_item_link,
                      ],
                    )}
                    href="/#about"
                  >
                    <Typography
                      className={
                        styles.navWrapper_menuContainer_organizer_menu_item_link_text
                      }
                      variant="body2"
                    >
                      About
                    </Typography>
                  </Link>
                </li>
                <li
                  className={
                    styles.navWrapper_menuContainer_organizer_menu_item
                  }
                >
                  <Link
                    className={classNames(
                      {
                        [styles.active]: pathName === '/events',
                      },
                      [
                        styles.navWrapper_menuContainer_organizer_menu_item_link,
                      ],
                    )}
                    href="/events"
                  >
                    <Typography
                      className={
                        styles.navWrapper_menuContainer_organizer_menu_item_link_text
                      }
                      variant="body2"
                    >
                      Events
                    </Typography>
                  </Link>
                </li>
                <li
                  className={
                    styles.navWrapper_menuContainer_organizer_menu_item
                  }
                >
                  <Link
                    className={classNames(
                      {
                        [styles.active]: pathName === '/blog',
                      },
                      [
                        styles.navWrapper_menuContainer_organizer_menu_item_link,
                      ],
                    )}
                    href="/blog"
                  >
                    <Typography
                      className={
                        styles.navWrapper_menuContainer_organizer_menu_item_link_text
                      }
                      variant="body2"
                    >
                      Blog
                    </Typography>
                  </Link>
                </li>
                <li
                  className={
                    styles.navWrapper_menuContainer_organizer_menu_item
                  }
                >
                  <Link
                    className={classNames(
                      {
                        [styles.active]: pathName === '/contact',
                      },
                      [
                        styles.navWrapper_menuContainer_organizer_menu_item_link,
                      ],
                    )}
                    href="#contact"
                  >
                    <Typography
                      className={
                        styles.navWrapper_menuContainer_organizer_menu_item_link_text
                      }
                      variant="body2"
                    >
                      Contact
                    </Typography>
                  </Link>
                </li>
              </ul>
              <Button
                href="#contact"
                link={true}
                className={styles.navWrapper_menuContainer_organizer_menu_btn}
              >
                Book a demo
              </Button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default NavBar;