import { getDisplayName } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <label>Chheangngim</label>
        <div>
            <a className="navbtn" href="#about">About</a>
            <a className="navbtn" href="services">Services</a>
            <a className="navbtn" href="#portfolio">Portfolio</a>
            <a className="navbtn" href="#testimonial">Testimonial</a>
        </div>
        <input placeholder="Search" />
      </nav>
      <div style={{ display: 'flex' }}>
        <section id="section1">
          <h1>We Have Design Experience</h1>
            <p>Hi! My name is IM CHHEANGNGIM. I'm a student in ITC, majoring in computer science.</p>
            <a id="talk" href="#talk">Let's Talk</a>
            <a id="port" href="#port">Portfolio</a>
          <br/><br/><br/><br/>
          <p className="social">
                check out my
                <a href="#insta"><img className="SMicon" src="https://banner2.cleanpng.com/20180409/zjw/avgxtga41.webp" /></a>
                <a href="#telegram"><img className="SMicon" src="https://e7.pngegg.com/pngimages/733/307/png-clipart-computer-icons-logo-telegram-logo-angle-white.png" /></a>
                <a href="https://www.youtube.com"><img className="SMicon" src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNi0wOS5wbmc.png" /></a>
            </p>
        </section>
        <section id="section2">
            <img src="https://upload-os-bbs.hoyolab.com/upload/2023/10/07/365304145/92c4caf768520364502d5deb03bcb340_5414563440477720502.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70"
                id="profile" />
            <div className="top-right">"People ignore design that ignore peoeple"</div>
        </section>
      </div>
    </div>
  );
}
