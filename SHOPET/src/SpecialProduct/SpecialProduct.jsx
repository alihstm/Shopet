import styles from "../SpecialProduct/SpecialProduct.module.css";
import banner from "../assets/Material/Banner.png";
import dryFood from "../assets/Material/CatDryFood.svg";
import jrDogFood from "../assets/Material/jrDogFood.svg";
import dogCan from "../assets/Material/DogCan.svg";
import multiVitamin from "../assets/Material/MultiVitamin.svg";

export default function SpecialProduct() {
  const products = [
    {
      img: dryFood,
      title: "فروش انواع غذای خشک",
      color: "var(--pink)",
      btnBgColor: "var(--darkPink)",
    },
    {
      img: jrDogFood,
      title: "غذای سگ نژاد جونیور",
      color: "var(--slimeGreen)",
      btnBgColor: "var(--lightGreen)",
    },
    {
      img: dogCan,
      title: "انواع کنسرو برای سگ",
      color: "var(--lightOrange)",
      btnBgColor: "var(--darkOrange)",
    },
    {
      img: multiVitamin,
      title: "قرص و پودر های مولتی ویتامین",
      color: "var(--purple)",
      btnBgColor: "var(--lightPurple)",
    },
  ];

  return (
    <main className={styles.specialProduct}>
      <section className={styles.banner}>
        <div className={styles.Texts}>
          <p>دنیای عجیب حیوانات خانگی</p>
          <span>
            محصولات ویژه{" "}
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
          </span>
        </div>
        <img src={banner} alt="Banner" />
      </section>

      <section className={styles.products}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{ backgroundColor: product.color }}
            className={styles.product}
          >
            <div className={styles.productInfo}>
              <h3>{product.title}</h3>
              <button style={{ backgroundColor: product.btnBgColor }}>
                خرید کنید
                <svg
                  style={{ color: product.btnBgColor }}
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

            <div className={styles.vector}>
              <img
                src={product.img}
                alt={product.title}
                className={styles.productImage}
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
