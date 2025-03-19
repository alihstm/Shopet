import styles from "../Footer/Footer.module.css";
import Logo from "../assets/Material/Logo.svg";
import callingIcon from "../assets/icons/Calling-icon.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.linkQA}>
          <h3>دسترسی سریع</h3>

          <ul>
            <a href="#">درباره ما</a>
            <a href="#">تماس با ما</a>
            <a href="#">سوالات متداول</a>
            <a href="#">پیگیری سفارشات</a>
          </ul>
        </div>

        <div className={styles.linkQA}>
          <h3>لینک های مهم</h3>

          <ul>
            <a href="#">حساب کاربری من</a>
            <a href="#">سبد خرید</a>
            <a href="#">قوانین و مقررات</a>
            <a href="#">سیاست حفظ حریم شخصی</a>
          </ul>
        </div>

        <div className={styles.about}>
          <div className={styles.logoBrand}>
            <img src={Logo} />
            <h3>فروشگاه شاپت</h3>
          </div>

          <p className={styles.description}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>

          <div className={styles.contact}>
            <img src={callingIcon} />

            <p>شماره تماس</p>

            <span>۰۹۱۷۱۲۳۴۵۶۷</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
