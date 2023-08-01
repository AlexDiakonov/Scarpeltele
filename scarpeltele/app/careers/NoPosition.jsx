import React from 'react';
import NoJobs from '../assets/icons/NoJobs';
import Button from '../Atoms/Button/Button';
import Typography from '../Atoms/Typography/Typography';
import styles from './careers.module.scss';
import ArrowTopRight from '../assets/icons/ArrowTopRight';
import MailIcon from '../assets/icons/MailIcon';
const NoPosition = () => {
  const mail = 'sskvortsova@scarpeltele.com';
  return (
    <div className={styles.noJobs}>
      <NoJobs />
      <div className={styles.noJobs_content}>
        <Typography
          className={styles.noJobs_content_description}
          component="p"
          variant="body1"
        >
          Maybe you cannot see any open vacancies at this point of time,
          nevertheless please share your CV with us, thus we contact you when a
          new open position arises and would match your profile
        </Typography>
        <div className={styles.noJobs_content_links}>
          <Button
            className={styles.overlay_modal_footer_link}
            link={true}
            href="mailto:sskvortsova@scarpeltele.com"
          >
            Contact our HR
            <ArrowTopRight className={styles.overlay_modal_footer_link_icon} />
          </Button>
          <Button
            className={styles.overlay_modal_footer_link}
            onClick={() => {
              navigator.clipboard.writeText(mail);
            }}
          >
            Copy mail
            <MailIcon className={styles.overlay_modal_footer_link_icon} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoPosition;
