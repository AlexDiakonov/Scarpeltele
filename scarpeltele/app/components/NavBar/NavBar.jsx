"use client";
import classNames from "classnames";
import Container from "../../Atoms/Container/Container";
import styles from "./NavBar.module.scss";
import MainLogo from "../../assets/icons/MainLogo";
import { usePathname } from "next/navigation";
import Button from "../../Atoms/Button/Button";
import Typography from "../../Atoms/Typography/Typography";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "../../utils/useClickOutside";
import Link from "next/link";

const NavBar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);
  const [currentHeight, setHeight] = useState("");

  const ref = useRef(null);

  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };
  const menuToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (currentHeight === "" && window && window.innerWidth < 415) {
      setHeight(`${window.innerHeight - 96}px`);
    }
  }, [currentHeight, setHeight]);

  useEffect(() => {
    if (pathName === "/") {
      observer.current = new IntersectionObserver((entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;

        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      });

      const sections = document.querySelectorAll("[data-section]");

      sections.forEach((section) => {
        observer.current.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.current.unobserve(section);
        });
      };
    }
  }, [observer, setActiveSection, pathName]);

  useClickOutside(ref, () => setOpen(false), open);

  return (
    <header className={styles.headerStyler}>
      <Container className={styles.headerStyler_navWrap}>
        <nav className={styles.navWrapper}>
          <Link
            onClick={handleScrollUp}
            className={styles.navWrapper_logo}
            href="/"
          >
            <MainLogo />
          </Link>
          <div
            onClick={menuToggle}
            ref={ref}
            className={classNames(styles.navWrapper_menuContainer, {
              [styles.opened]: open,
            })}
          >
            <div
              style={{ height: `${open ? currentHeight : ""}` }}
              className={styles.navWrapper_menuContainer_organizer}
            >
              <ul className={styles.navWrapper_menuContainer_organizer_menu}>
                <li
                  className={
                    styles.navWrapper_menuContainer_organizer_menu_item
                  }
                >
                  <Link
                    className={classNames(
                      {
                        [styles.active]: activeSection === "hero",
                      },
                      [styles.navWrapper_menuContainer_organizer_menu_item_link]
                    )}
                    href="/#home"
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
                        [styles.active]: activeSection === "sol",
                      },
                      [styles.navWrapper_menuContainer_organizer_menu_item_link]
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
                        [styles.active]: activeSection === "why",
                      },
                      [styles.navWrapper_menuContainer_organizer_menu_item_link]
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
                        [styles.active]: activeSection === "abou",
                      },
                      [styles.navWrapper_menuContainer_organizer_menu_item_link]
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
                        [styles.active]: activeSection === "event",
                      },
                      [styles.navWrapper_menuContainer_organizer_menu_item_link]
                    )}
                    href="/#events"
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
                        [styles.active]: activeSection === "contac",
                      },
                      [styles.navWrapper_menuContainer_organizer_menu_item_link]
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
                <li
                  className={
                    styles.navWrapper_menuContainer_organizer_menu_item
                  }
                >
                  <Link
                    className={classNames(
                      {
                        [styles.active]:
                          pathName === "/blog" || activeSection === "blo",
                      },
                      [styles.navWrapper_menuContainer_organizer_menu_item_link]
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
                        [styles.active]:
                          pathName === "/faq" || activeSection === "fa",
                      },
                      [styles.navWrapper_menuContainer_organizer_menu_item_link]
                    )}
                    href="/faq"
                  >
                    <Typography
                      className={
                        styles.navWrapper_menuContainer_organizer_menu_item_link_text
                      }
                      variant="body2"
                    >
                      FAQ
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
