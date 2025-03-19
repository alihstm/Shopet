import styles from "./Header.module.css";
import Logo from "../assets/Material/Logo.svg";
import searchIcon from "../assets/icons/Search-icon.svg";
import tickIcon from "../assets/icons/TickSquare-icon-Orange.svg";
import truckIcon from "../assets/icons/Truck-icon.svg";
import buyIcon from "../assets/icons/Buy-icon.svg";
import heartIcon from "../assets/icons/Heart-icon.svg";
import profileIcon from "../assets/icons/Profile-icon-Black.svg";
import callingIcon from "../assets/icons/Calling-icon.svg";

const Icon = ({ src, alt, width = 20, height = 20 }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.news}>
        <span className={styles.highlight}>تا ٪۵۰</span>
        <p>تخفیف برای تمامی محصولات</p>
      </div>

      <nav className={styles.upperNav}>
        <div className={styles.logoBrand}>
          <img src={Logo} />
          <span className={styles.brand}>شاپت</span>
        </div>

        <div className={styles.search}>
          <input
            className={styles.searchInput}
            type="search"
            placeholder="محصول مورد نظر را جستجو کنید ..."
          />
          <img className={styles.searchIcon} src={searchIcon} />
        </div>

        <div className={styles.garranty}>
          <img src={tickIcon} />
          <div className={styles.Texts}>
            <h3>ضمانت اصالت کالا</h3>
            <p>۱۰۰٪ تضمین اصالت کالا</p>
          </div>
        </div>

        <div className={styles.sendings}>
          <img src={truckIcon} />
          <div class={styles.Texts}>
            <h3>ارسال رایگان</h3>
            <p>تمامی خرید ها</p>
          </div>
        </div>

        <img className={styles.icon} src={buyIcon} />
        <img className={styles.icon} src={heartIcon} />
        <img className={styles.icon} src={profileIcon} />
      </nav>

      <nav className={styles.lowerNav}>
        <ul className={styles.sections}>
          <a href="#home">
            خانه
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </a>

          <a href="#store">
            فروشگاه
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </a>

          <a href="#weblog">وبلاگ</a>

          <a href="#contact">تماس با ما</a>

          <a href="#about">درباره ما</a>
        </ul>

        <div className={styles.contact}>
          <img src={callingIcon}></img>
          <p>شماره تماس:</p>
          <span>۰۹۱۷۱۲۳۴۵۶۷</span>
        </div>
      </nav>
    </header>
  );
}
