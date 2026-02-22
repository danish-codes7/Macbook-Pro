// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import React, { useRef } from "react";

// const Footer = () => {
//   const contentRef = useRef();
//   const exploreRef = useRef();
//   const shopRef = useRef();
//   const moreRef = useRef();
//   const h1Ref = useRef();
//   useGSAP(
//     () => {
//       gsap.registerPlugin(ScrollTrigger);

//       const animateSection = (ref) => {
//         gsap.from(ref.current.children, {
//           y: 40,
//           opacity: 0,
//           stagger: 0.15,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: ref.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         });
//       };

//       gsap.from(h1Ref.current, {
//         y: 40,
//         opacity: 0,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: h1Ref.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       });

//       animateSection(exploreRef);
//       animateSection(shopRef);
//       animateSection(moreRef);
//     },
//     { scope: contentRef },
//   );
//   return (
//     <section
//       id="Footer"
//       className="bg-white py-20 rounded-t-4xl text-gray-800 sm:pl-20 px-5 md:pl-40"
//     >
//       <div ref={h1Ref}>
//         <h1 className="h1 text-3xl md:text-5xl lg:text-6xl font-bold">Mac</h1>
//       </div>
//       <div
//         ref={contentRef}
//         className="content md:flex md:items-start md:justify-between md:mt-10 md:w-[50%]"
//       >
//         <div
//           ref={exploreRef}
//           className="explore my-3 font-bold text-2xl md:text-3xl md:leading-10 md:font-semibold"
//         >
//           <p className="mt-10 md:mt-0 text-xl text-gray-400">Explore Mac</p>
//           <h1>Explore All Mac</h1>
//           <h1>MacBook Air</h1>
//           <h1>MacBook Pro</h1>
//           <h1>iMac</h1>
//           <h1>Mac mini</h1>
//           <h1>Mac Studio</h1>
//           <h1>Mac Pro</h1>
//           <h1>Displays</h1>
//           <h1 className="font-medium md:text-xl">Compare Mac</h1>
//           <p className="font-medium pb-5 md:text-xl">Switch from PC to Mac</p>
//         </div>

//         <div
//           ref={shopRef}
//           className="shop font-bold md:text-xl md:leading-8 md:font-semibold leading-7 py-5"
//         >
//           <p className="font-medium md:font-normal text-gray-400">Shop Mac</p>
//           <h3>Shop</h3>
//           <h3>Mac Accessories</h3>
//           <h3>Ways to Buy</h3>
//           <h3>Personal Setup</h3>
//         </div>

//         <div
//           ref={moreRef}
//           className="more font-semibold leading-7 md:text-xl md:leading-8 py-3"
//         >
//           <p className="text-gray-400">More from Mac</p>
//           <h3>Mac Support</h3>
//           <h3>AppleCare</h3>
//           <h3>macOS Tahoe</h3>
//           <h3>Apple Intelligence</h3>
//           <h3>Apps by Apple</h3>
//           <h3>Apple Creator Studio</h3>
//           <h3>Better with iPhone</h3>
//           <h3>iCloud+</h3>
//           <h3>Mac for Business</h3>
//           <h3>Education</h3>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".footer-section");

      gsap.from(".footer-title", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      sections.forEach((section) => {
        gsap.from(section.children, {
          y: 25,
          opacity: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="bg-white py-20 rounded-t-4xl text-gray-800 px-6 md:px-20"
    >
      <h2 className="footer-title text-3xl md:text-5xl lg:text-6xl font-bold">
        Mac
      </h2>

      <div className="mt-12 grid gap-10 md:grid-cols-3 max-w-5xl">
        
        {/* Explore */}
        <div className="footer-section space-y-3">
          <p className="text-gray-400 font-medium">Explore Mac</p>
          <ul className="space-y-2 font-medium">
            <li>Explore All Mac</li>
            <li>MacBook Air</li>
            <li>MacBook Pro</li>
            <li>iMac</li>
            <li>Mac mini</li>
            <li>Mac Studio</li>
            <li>Mac Pro</li>
            <li>Displays</li>
            <li>Compare Mac</li>
            <li>Switch from PC to Mac</li>
          </ul>
        </div>

        {/* Shop */}
        <div className="footer-section space-y-3">
          <p className="text-gray-400 font-medium">Shop Mac</p>
          <ul className="space-y-2 font-medium">
            <li>Shop</li>
            <li>Mac Accessories</li>
            <li>Ways to Buy</li>
            <li>Personal Setup</li>
          </ul>
        </div>

        {/* More */}
        <div className="footer-section space-y-3">
          <p className="text-gray-400 font-medium">More from Mac</p>
          <ul className="space-y-2 font-medium">
            <li>Mac Support</li>
            <li>AppleCare</li>
            <li>macOS Tahoe</li>
            <li>Apple Intelligence</li>
            <li>Apps by Apple</li>
            <li>Apple Creator Studio</li>
            <li>Better with iPhone</li>
            <li>iCloud+</li>
            <li>Mac for Business</li>
            <li>Education</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;