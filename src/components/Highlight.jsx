import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Highlight = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const textRefs = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {

      // Fade heading on scroll
      gsap.to(headingRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 10%",
          end: "bottom 5%",
          scrub: true,
        },
      });

      // Fade cards
      [card1Ref.current, card2Ref.current].forEach((card) => {
        gsap.to(card, {
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 10%",
            end: "bottom 5%",
            scrub: true,
          },
        });
      });

      // Text animation
      textRefs.current.forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 70%",
            scrub: true,
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black rounded-t-4xl mt-10">

      {/* Heading */}
      <div
        ref={headingRef}
        className="sticky top-5 mx-auto rounded-t-4xl bg-[#FAF9F6] px-6 py-10"
      >
        <h1
          ref={(el) => (textRefs.current[0] = el)}
          className="text-3xl font-bold text-center lg:text-6xl lg:text-left"
        >
          Get the highlights.
        </h1>
      </div>

      {/* Card 1 */}
      <div
        ref={card1Ref}
        className="bg-black rounded-t-4xl sticky top-7 text-white py-16"
      >
        <div className="px-6 text-center">

          <h2
            ref={(el) => (textRefs.current[1] = el)}
            className="font-bold text-xl lg:text-5xl max-w-3xl mx-auto 
            bg-gradient-to-r from-white to-blue-400 
            bg-clip-text text-transparent"
          >
            Longest battery life ever in a Mac. Up to 24 hours. Hit the road.
          </h2>

          <div className="mt-10">
            <video
              src="/Videos/highlight-2.0.mp4"
              className="w-[76vw] aspect-video lg:h-[36vw] object-cover rounded-4xl"
              autoPlay
    
              muted
              loop
              playsInline
              preload="metadata"   // 🔥 Lazy load
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        ref={card2Ref}
        className="bg-white sticky top-5 rounded-t-4xl py-16"
      >
        <div className="text-center">

          <h2
            ref={(el) => (textRefs.current[2] = el)}
            className="font-bold text-xl lg:text-4xl max-w-4xl mx-auto"
          >
            Live Activities and the Phone app. Stay in touch without touching your phone.
          </h2>

          <img
            src="/Images/highlights-3.0.jpg"
            alt="MacBook feature highlight"
            className="mt-10 w-full h-[70vw] lg:h-[42vw] object-cover rounded-t-4xl"
            loading="lazy"   // 🔥 Lazy load image
            width="1200"
            height="800"
          />
        </div>
      </div>

    </section>
  );
};

export default Highlight;

