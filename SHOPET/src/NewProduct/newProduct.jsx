import { useState } from "react";
import styles from "../NewProduct/newProduct.module.css";
import catFoodPermium from "../assets/Material/CatFoodPremium.svg";
import catFoodKitzy from "../assets/Material/CatFoodPermium2k.svg";
import dogFood from "../assets/Material/DogFood3k.svg";
import catMultiVitamin from "../assets/Material/CatMultiVitamin.svg";
import plusIcon from "../assets/Material/Plus-2.svg";

export default function NewProduct() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    {
      img: catFoodPermium,
      detail: "غذای گربه مفید پریمیوم (۴ کیلوگرم)",
      price: "۴۳۷/۰۰۰",
    },
    {
      img: catFoodKitzy,
      detail: "غذای گربه kitzy پریمیوم (۲ کیلوگرم)",
      price: "۵۱۵/۰۰۰",
    },
    {
      img: dogFood,
      detail: "غذای سگ Science diet (۳ کیلوگرم)",
      price: "۴۹۸/۰۰۰",
    },
    {
      img: catMultiVitamin,
      detail: "مولتی ویتامین گربه Nulo (۴ کیلوگرم)",
      price: "۵۴۷/۰۰۰",
    },
  ];

  return (
    <main className={styles.newProduct}>
      <div className={styles.title}>
        <h1>جدیدترین محصولات</h1>
        <button>مشاهده همه</button>
      </div>

      <section className={styles.products}>
        {products.map((product, index) => (
          <div key={index} className={styles.product}>
            <img src={product.img} alt={product.detail} />
            <div>
              <p className={styles.detail}>{product.detail}</p>
              <span className={styles.price}>
                قیمت: <p>{product.price}</p>
              </span>
              <button
                aria-label={`افزودن ${product.detail} به سبد خرید`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={plusIcon} alt="افزودن به سبد خرید" />
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        ))}
      </section>

      <div className={styles.pageOrder}>
        {products.map((_, index) => (
          <div
            key={index}
            className={`${styles.circle} ${
              hoveredIndex === index ? styles.hovered : ""
            }`}
          />
        ))}
      </div>
    </main>
  );
}
