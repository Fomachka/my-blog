import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__links}>
          <p>Have a question?</p>
          <div>
            <a
              className={styles.footer__link}
              href="mailto:fomachka93@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Email
            </a>
            <a
              className={styles.footer__link}
              href="https://github.com/Fomachka"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              className={styles.footer__link}
              href="https://www.instagram.com/manee.roma/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.footer__copyright}>
          <p>Copyright &copy; KIM MAN KHI - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
