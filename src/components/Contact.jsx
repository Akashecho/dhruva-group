import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="Decorative" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-gradient-to-br from-dhruva-dark via-dhruva-black to-dhruva-dark py-24 text-white sm:overflow-hidden border border-gold-500/20">
        {/* Decorative elements */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-gold-500/20 to-transparent blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-gold-500/30 rounded-full"></div>
        </div>

        <div className="absolute -top-20 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-teal-400/20 to-transparent blur-2xl"></div>
          <div className="absolute top-10 right-10 w-20 h-20 border border-teal-400/20 rounded-full"></div>
        </div>

        {/* Orbital decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-gold-500/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-gold-500/5 rounded-full"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="mb-10 font-manrope text-gold-500 text-[10px] uppercase tracking-[0.3em]">
            Partner with Dhruva
          </p>

          <AnimatedTitle
            title="Let's B<b>u</b>ild The<br/>F<b>u</b>ture T<b>o</b>gether"
            className="special-font !md:text-[6.2rem] w-full font-cormorant !text-5xl !font-bold !leading-[.9]"
          />

          <p className="mt-6 max-w-md font-manrope text-white/60">
            Ready to transform your industry? Connect with Dhruva Group and discover
            how our expertise across defence, AI, and technology can elevate your vision.
          </p>

          <Button
            title="Get In Touch"
            containerClass="mt-10 cursor-pointer bg-gold-500 text-dhruva-black hover:bg-gold-400 transition-colors px-8 py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;