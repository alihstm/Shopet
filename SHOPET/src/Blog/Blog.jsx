import { useState } from "react";
import styles from "../Blog/Blog.module.css";
import blog1Img from "../assets/Material/blog-1.svg";
import blog2Img from "../assets/Material/blog-2.svg";
import blog3Img from "../assets/Material/blog-3.svg";
import profileIcon from "../assets/icons/Profile-icon-Orange.svg";
import calendarIcon from "../assets/icons/Calendar-icon.svg";

export default function Blog() {
  const blogs = [
    {
      img: blog1Img,
      publisher: "آرمان",
      date: "۱۴۰۰/۰۲/۲۴",
      title: "نکات کلیدی درباره ی نگهداری سگ در آپارتمان های ایرانی",
      description:
        "نگهداری سگ توی همه ی مناطق دنیا داره رواج بیشتر و بیشتری پیدا میکنه و خب همونطور که ...",
    },
    {
      img: blog2Img,
      publisher: "رویین",
      date: "۱۴۰۱/۰۵/۱۳",
      title: "۱۳ تا از بهترین نژاد های سگ برای افراد مبتدی را بشناسید!",
      description:
        "سگ ها میتونن بهترین دوست ما، همبازی بچه هامون یا نگهبان خونمون باشن. ولی برای ...",
    },
    {
      img: blog3Img,
      publisher: "علی",
      date: "۱۴۰۲/۰۸/۲۹",
      title: "۳ روش ساده برای آموزش فرمان نخور به سگ که همه باید بدانند.",
      description:
        "هر سگی باید یاد بگیره که از روی زمین چیزی نخوره چون اینکار میتونه کلی دردسر ایجاد کنه، از ...",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <main className={styles.blogs}>
      {blogs.map((blog, index) => (
        <div
          key={index}
          className={`${styles.blog} ${
            hoveredIndex !== null && hoveredIndex !== index ? styles.blur : ""
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className={styles.thumbnailPublish}>
            <img src={blog.img} />

            <div className={styles.publish}>
              <div className={styles.publisher}>
                <img src={profileIcon} />

                <span>منتشر کننده:</span>

                <p>{blog.publisher}</p>
              </div>

              <div className={styles.date}>
                <img src={calendarIcon} />

                <span>تاریخ:</span>

                <p>{blog.date}</p>
              </div>
            </div>
          </div>

          <div className={styles.details}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
