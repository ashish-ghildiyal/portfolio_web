import "../styles/banner.css";
import { BANNER_IMAGES } from "../data/banner";
import { PROFILE }       from "../data/profile";

export default function Banner({ bannerIndex, setBannerIndex, typedText, isTyping,sectionRef }) {
  return (
    <section id="home" ref={sectionRef}>
      <div className="banner-wrap">
        {/* Background image */}
        <div
          className="banner-bg"
          style={{ backgroundImage: `url('${BANNER_IMAGES[bannerIndex]}')` }}
        />

        {/* Dark overlay */}
        <div className="banner-overlay" />

        {/* Text content */}
        <div className="banner-content">
          <div>
            <p className="banner-hello">Hello I'm</p>
            <h1 className="banner-name">{PROFILE.name}</h1>

            <div className="banner-typed">
              {typedText}
              <span style={{ opacity: isTyping ? 1 : 0, transition: "opacity 0.3s" }}>|</span>
            </div>

            <a
              href={PROFILE.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="banner-btn"
            >
              ⬇ Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="banner-dots">
        {BANNER_IMAGES.map((_, i) => (
          <button
            key={i}
            className="banner-dot"
            onClick={() => setBannerIndex(i)}
            style={{ background: i === bannerIndex ? "#e74c3c" : "#555" }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}