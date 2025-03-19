import styles from "./HeroSection.module.css";
import emptyPaw from "../assets/Material/Paw-Blue.svg";
import paw from "../assets/Material/Paw-Blue2.svg";
import offTag from "../assets/Material/75precentOff.svg";
import fishImg from "../assets/Material/fishImg.svg";
import catImg from "../assets/Material/catImg.svg";
import dogImg from "../assets/Material/dogImg.svg";

const categories = [
  {
    img: fishImg,
    label: "غذا ماهی",
    bgColor: "var(--lightGray)",
    iconBgColor: "var(--purpleBlue)",
  },
  {
    img: catImg,
    label: "غذا و لوازم گربه",
    bgColor: "var(--veryLightBlue)",
    iconBgColor: "var(--skyBlue)",
  },
  {
    img: dogImg,
    label: "غذا و لوازم سگ",
    bgColor: "var(--veryLightOrange)",
    iconBgColor: "var(--lightOrange)",
  },
];

export default function HeroSection() {
  return (
    <main className={styles.heroSection}>
      <section className={styles.banner}>
        <div className={styles.rightSide}>
          <div className={styles.vector2}>
            <img src={paw} />
          </div>

          <div className={styles.textBtn}>
            <div>
              <h2>بهترین و جدیدترین</h2>
              <h1>لوازم سگ خانگی</h1>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <button>
              خرید کنید
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.leftSide}>
          <div className={styles.off}>
            <h2>تخفیف تا</h2>
            <img src={offTag}></img>
          </div>

          <div className={styles.vector}>
            <img src={emptyPaw} />
          </div>
        </div>
      </section>

      <section className={styles.categories}>
        {categories.map((category, index) => (
          <div
            className={styles.category}
            key={index}
            style={{ backgroundColor: category.bgColor }}
          >
            <div className={styles.nameImage}>
              <img src={category.img} alt={category.label} />
              <p>{category.label}</p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
              style={{ backgroundColor: category.iconBgColor }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </div>
        ))}
      </section>
    </main>
  );
}
