import styles from "../GroomingSupplies/GroomingSupplies.module.css";
import cage from "../assets/Material/Cage.svg";
import backPack from "../assets/Material/BackPack.svg";
import collar from "../assets/Material/Collar.svg";
import carryBox from "../assets/Material/CarryBox.svg";
import handiGroom from "../assets/Material/PetGrooming.svg";
import glove from "../assets/Material/Glove.svg";
import plusIcon from "../assets/Material/Plus-2.svg";

export default function groomingSupplies() {
  const products = [
    {
      img: cage,
      detail: "باکس حمل سگ و گربه سایز ۳ پانیتو",
      price: "۴۳۷/۰۰۰",
    },
    {
      img: backPack,
      detail: "کوله پشتی حبابدار سگ و گربه مدل یونیورس",
      price: "۵۱۵/۰۰۰",
    },
    {
      img: collar,
      detail: "قلاده کتفی پد دار سگ سایز بزرگ پلیس",
      price: "۳۲۹/۰۰۰",
    },
    {
      img: carryBox,
      detail: "باکس حمل سگ و گربه سایز ۳ پانیتو",
      price: "۴۵۷/۰۰۰",
    },
    {
      img: handiGroom,
      detail: "سشوار حیوانات خانگی مدل PET GROOMING",
      price: "۵۸۶/۰۰۰",
    },
    {
      img: glove,
      detail: "دستکش مخصوص نگهداری حیوانات خانگی",
      price: "۳۸۷/۰۰۰",
    },
  ];
  return (
    <main className={styles.groomingSupplies}>
      <section className={styles.banner}>
        <h1>لوازم نگهداری سگ</h1>

        <button>
          مشاهده همه
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </button>
      </section>

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
                className={styles.addButton}
              >
                <img src={plusIcon} alt="افزودن به سبد خرید" />
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
