import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "../../dictionaries";

export default async function Blog(props) {
  const params = await props.params;
  const lang = params.lang;
  const dict = await getDictionary(lang);

  const articles = [
    {
      id: 1,
      title: dict.blog.article1_title,
      desc: dict.blog.article1_desc,
      date: "12 Mai 2025",
      img: "/assets/img/blog/1.jpg"
    },
    {
      id: 2,
      title: dict.blog.article2_title,
      desc: dict.blog.article2_desc,
      date: "05 Mai 2025",
      img: "/assets/img/blog/2.jpg"
    },
    {
      id: 3,
      title: dict.blog.article3_title,
      desc: dict.blog.article3_desc,
      date: "28 Avril 2025",
      img: "/assets/img/blog/3.jpg"
    }
  ];

  return (
    <>
      <Navbar dict={dict} lang={lang} />

      <section className="section-top" style={{ backgroundImage: "url(/assets/img/bg/section-top.png)", backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
              <div className="section-top-title">
                <h1>{dict.blog.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            {articles.map((article) => (
              <div key={article.id} className="col-lg-4 col-sm-6 col-xs-12 mb-4">
                <div className="home_single_blog">
                  <img src={article.img} className="img-fluid" alt={article.title} />
                  <div className="home_blog_content">
                    <div className="blog_title_info">
                      <h2><a href="#">{article.title}</a></h2>
                      <span>{article.date}</span>
                    </div>
                    <p>{article.desc}</p>
                    <a className="home_b_btn" href="#">{dict.blog.read_more}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer dict={dict} lang={lang} />
    </>
  );
}
