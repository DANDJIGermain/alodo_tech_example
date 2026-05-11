import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "../../dictionaries";

export default async function About(props) {
  const params = await props.params;
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict} lang={lang} />

      {/* START SECTION TOP */}
      <section className="section-top" style={{ backgroundImage: "url(/assets/img/bg/section-top.png)", backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
              <div className="section-top-title">
                <h1>{dict.about.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION TOP */}

      {/* ABOUT PAGE */}
      <section className="about_page_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="single_about_content">
                <h2>{dict.about.subtitle}</h2>
                <p>{dict.about.description}</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="single_about_content">
                <h2>{dict.about.history_title}</h2>
                <p>{dict.about.history_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END ABOUT PAGE */}

      {/* START TEAM MEMBERS */}
      <section id="team" className="team_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2>{dict.about.team_title}</h2>
            <p>{dict.about.team_desc}</p>
          </div>
          <div className="row text-center">
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="our-team">
                <div className="single-team">
                  <img src="/assets/img/team/1.jpg" className="img-fluid" alt={dict.team.member1_name} />
                  <h3>{dict.team.member1_name}</h3>
                  <p>{dict.team.member1_role}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="our-team">
                <div className="single-team">
                  <img src="/assets/img/team/2.jpg" className="img-fluid" alt={dict.team.member2_name} />
                  <h3>{dict.team.member2_name}</h3>
                  <p>{dict.team.member2_role}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="our-team">
                <div className="single-team">
                  <img src="/assets/img/team/3.jpg" className="img-fluid" alt={dict.team.member3_name} />
                  <h3>{dict.team.member3_name}</h3>
                  <p>{dict.team.member3_role}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12 mt-4">
              <div className="our-team">
                <div className="single-team">
                  <img src="/assets/img/team/1.jpg" className="img-fluid" alt={dict.team.member4_name} />
                  <h3>{dict.team.member4_name}</h3>
                  <p>{dict.team.member4_role}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12 mt-4">
              <div className="our-team">
                <div className="single-team">
                  <img src="/assets/img/team/2.jpg" className="img-fluid" alt={dict.team.member5_name} />
                  <h3>{dict.team.member5_name}</h3>
                  <p>{dict.team.member5_role}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12 mt-4">
              <div className="our-team">
                <div className="single-team">
                  <img src="/assets/img/team/3.jpg" className="img-fluid" alt={dict.team.member6_name} />
                  <h3>{dict.team.member6_name}</h3>
                  <p>{dict.team.member6_role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END TEAM MEMBERS */}

      {/* HIRE US (Careers Lead) */}
      <div className="hire_us_area section-padding">
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12">
              <div className="row align-items-center">
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <div className="hire_img">
                    <img src="/assets/img/icon/counter-4.png" className="img-fluid" alt="Join Us" />
                  </div>
                </div>
                <div className="col-lg-8 col-sm-6 col-xs-12">
                  <div className="hire_content">
                    <h2>{dict.about.hire_title}</h2>
                    <p>{dict.about.hire_desc}</p>
                    <a className="btn_one" href={`/${lang}/careers`}>{dict.about.hire_btn}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END HIRE US */}

      <Footer dict={dict} lang={lang} />
      {/* END FOOTER */}
    </>
  );
}
