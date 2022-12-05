import './App.css';
import './all.min.css';
import logo from './logo1.svg';
function App() {
  return (
    <>
      {/* Start Header  */}
      <header>
        <div class="top_header">
          <div class="container">
            <div class="header justify_contant">
              <div class="icon">
                <p><a><i class="fa-regular fa-envelope"></i>info@cdmi.in </a>
                  <a><i class="fa-solid fa-certificate"></i>Verify Certificate</a></p>
              </div>
              <div>
                <p>HAVE ANY QUESTION ? +91 90333 16003</p>
              </div>
              <div class="soc_icon">
                <a><i class="fa-brands fa-facebook-f"></i></a>
                <a><i class="fa-brands fa-twitter"></i></a>
                <a><i class="fa-brands fa-google-plus-g"></i></a>
                <a><i class="fa-brands fa-linkedin"></i></a>
                <a><i class="fa-solid fa-camera-retro"></i></a>
                <a><i class="fa-brands fa-youtube"></i></a>
                <a><i class="fa-brands fa-whatsapp"></i></a>

              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Navigation Bar */}
      <nav class="sticky">
        <div class="container">
          <div class="d_flex justify_contant logo">
            <div class="logo">
              <a> <img src={logo}></img></a>
            </div>
            <div class="nav">
              <ul class="main_menu">
                <li><a href="#" class="active">HOME</a></li>
                <li><a href="#">COURSES<img src={require('./images/drop.png')} style={{ width: "20px", height: "12px", marginLeft: "5px" }}></img> </a></li>
                <li><a href="#">COLLAGE COURCES</a></li>
                <li><a href="#">ACTIVITIES<img src={require('./images/drop.png')} style={{ width: "20px", height: "12px", marginLeft: "5px" }}></img></a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">KNOW US<img src={require('./images/drop.png')} style={{ width: "20px", height: "12px", marginLeft: "5px" }}></img></a></li>
                <li><a href="#">GET IN TOUCH</a></li>
                <li><a href="#">STUDENT ZONE</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* -----------------End Navigation BAr---------- */}
      {/* =======Slider================= */}
      <div class="slider_img">
        <img src={require('./images/3.jpg')}></img>
      </div>
      {/* ====================Start Section================== */}
      {/* -----------CREATIVE COURSE Start------------------- */}
      <main>
        <div class="spacer">
          <div class="container">
            <div class="text_center">
              <p class="sec_title">CREATIVE COURSE</p>
              <h1>OFFERED COURSES</h1>
            </div>
            <div class="cource_video">
              <div class="d_flex justify_contant">
                <div class="cource_box">
                  <video muted autoPlay loop>
                    <source src={require('./images/graphics-animation-course.mp4')}></source>
                  </video>
                  <div class="cource_title">
                    <a href="#"><h2>Development Courses</h2></a>
                  </div>
                  <hr size="1" color="#DCDCDC"></hr>
                  <div class="d_flex logo justify_contant">
                    <div class="star_img">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </div>
                    <div>
                      <a href="#"><button class="btn">Know More...!</button></a>
                    </div>
                  </div>
                </div>
                <div class="cource_box">
                  <video muted autoPlay loop>
                    <source src={require('./images/it-training-institute.mp4')}></source>
                  </video>
                  <div class="cource_title">
                    <a href="#"><h2>Design Courses</h2></a>
                  </div>
                  <hr size="1" color="#DCDCDC"></hr>
                  <div class="d_flex logo justify_contant">
                    <div class="star_img">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </div>
                    <div>
                      <a href="#"><button class="btn">Know More...!</button></a>
                    </div>
                  </div>
                </div>
                <div class="cource_box">
                  <video muted autoPlay loop>
                    <source src={require('./images/letest-technology-course.mp4')}></source>
                  </video>
                  <div class="cource_title">
                    <a href="#"><h2>Programming IT</h2></a>
                  </div>
                  <hr size="1" color="#DCDCDC"></hr>
                  <div class="d_flex logo justify_contant">
                    <div class="star_img">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </div>
                    <div>
                      <a href="#"><button class="btn">Know More...!</button></a>
                    </div>
                  </div>
                </div>
                <div class="cource_box">
                  <video muted autoPlay loop>
                    <source src={require('./images/multimedia-training-institute.mp4')}></source>
                  </video>
                  <div class="cource_title">
                    <a href="#"><h2>Trendy Courses</h2></a>
                  </div>
                  <hr size="1" color="#DCDCDC"></hr>
                  <div class="d_flex logo justify_contant">
                    <div class="star_img">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </div>
                    <div>
                      <a href="#"><button class="btn">Know More...!</button></a>
                    </div>
                  </div>
                </div>
                <div class="cource_box">
                  <video muted autoPlay loop>
                    <source src={require('./images/civil-engineering-course.mp4')}></source>
                  </video>
                  <div class="cource_title">
                    <a href="#"><h2>Civil-Mech. Engineering</h2></a>
                  </div>
                  <hr size="1" color="#DCDCDC"></hr>
                  <div class="d_flex logo justify_contant">
                    <div class="star_img">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </div>
                    <div>
                      <a href="#"><button class="btn">Know More...!</button></a>
                    </div>
                  </div>
                </div>
                <div class="cource_box">
                  <video muted autoPlay loop>
                    <source src={require('./images/Business_Development.mp4')}></source>
                  </video>
                  <div class="cource_title">
                    <a href="#"><h2>Business Development</h2></a>
                  </div>
                  <hr size="1" color="#DCDCDC"></hr>
                  <div class="d_flex logo justify_contant">
                    <div class="star_img">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star-half-stroke"></i>
                    </div>
                    <div>
                      <a href="#"><button class="btn">Know More...!</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="spacer_top text_center">
              <a href="#"><button class="btn_all">View All Cources   <i class="fa-solid fa-arrow-right"></i></button></a>
            </div>
          </div>
        </div>
        {/* -----------CREATIVE COURSE End------------------- */}
        {/* --------------------------About Us Start------------------ */}
        <div class="spacer">
          <div class="flex logo">
            <div class="about">
              <p class="sec_title margin_10">ABOUT US</p>
              <h4>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h4>
              <p class="text_justify text">Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 8 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
              <a href="#"><button class="btn_all">Enroll Now..!   <i class="fa-solid fa-arrow-right"></i></button></a>
            </div>
            <div class="about_img">
              <img src={require('./images/about-us.jpg')}></img>
            </div>
          </div>
        </div>
        <div class="counter">
          <img src={require('./images/counter_bg.jpg')}></img>
          <div class="count_icon">
            <div class="d_flex">
              <div class="counter_img">
                <div class="counter_set">
                </div>
                <h1>8000+</h1>
                <h3>HAPPY STUDENT</h3>
              </div>
              <div class="counter_img">
                <div class="counter_set1">
                </div>
                <h1>10+</h1>
                <h3>CERTIFICATION APPROVAL</h3>
              </div>
              <div class="counter_img">
                <div class="counter_set2">
                </div>
                <h1>60+</h1>
                <h3>CERTIFIED TEACHERS</h3>
              </div>
              <div class="counter_img">
                <div class="counter_set3">
                </div>
                <h1>4000+</h1>
                <h3>STUDENTS PLACED</h3>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------About Us End------------------ */}
        {/* ------------------------HAPPY STUDENTS START--------------- */}
        <div class="spacer_top">
          <div class="container">
            <div class="flex justify_contant">
              <div class="student">
                <p class="sec_title">HAPPY STUDENTS</p>
                <h1>ALUMNI SPEAK</h1>
                <div class="d_flex logo justify_contant mar_top">
                  <div class="quote">
                    <i class="fa-solid fa-quote-right"></i>
                  </div>
                  <div class="prev_next d_flex">
                    <div class="bt"><i class="fa-solid fa-chevron-left"></i></div>
                    <div class="bt"><i class="fa-solid fa-chevron-right"></i></div>
                  </div>
                  <p class="text">It was a great time at Creative Design & Multimedia Institute(CDMI). The learning experience was very satisfying. The faculties were very helpful in gaining knowledge and exploring the software tools. I am so thankful to Creative  Multimedia Institute for helping me to start my career in Android field.”</p>
                  <div class="d_flex logo">
                    <div class="game_dev">
                      <img src={require('./images/dharmesh.jpg')}></img>
                    </div>
                    <div class="dev_data">
                      <h3>Dharmesh M. Katariya</h3>
                      <p>Game Developer<i>@ Prabha Tech Games</i></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="student_img">
                <img src={require('./images/happy-students.jpg')}></img>
                <img src={require('./images/testimonial_shape.png')}></img>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------Happy Student End----------------------- */}
        {/* -----------------------Read Our Difference----------------------- */}
        <div class="spacer bg_gray">
          <div class="container">
            <div class="read_title">
              <p class="sec_title">READ OUR DIFFERENCE</p>
              <h1>WHY CHOOSE CREATIVE</h1>
            </div>
            <div class="read_our d_flex">
              <div class="read">

              </div>
              <div class="read">

              </div>
              <div class="read">

              </div>
              <div class="read">

              </div>
              <div class="read">

              </div>
              <div class="read">

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
