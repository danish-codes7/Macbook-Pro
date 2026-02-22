// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React, { useRef } from "react";

// const Hero = () => {
//   const videoRef = useRef(null);
//   const textRef = useRef(null);
//   const priceRef = useRef(null);
//   const btn1 = useRef(null);
//   const btn2 = useRef(null);

//   useGSAP(() => {
//     const tl = gsap.timeline({ delay: 0.5 });

//     tl.from(videoRef.current, {
//       x: -150,
//       duration: 1,
//       opacity: 0,
//       ease: "power3.out",
//       onComplete: () => {
//         videoRef.current.play();
//       },
//     })

//       .from(
//         textRef.current.children,
//         {
//           y: -50,
//           stagger: 0.4,
//           duration: 1.2,
//           delay: 3,
//           opacity: 0,
//           ease: "power3.out",
//         },
//         "<",
//       )

//       .from(
//         priceRef.current.children,
//         {
//           x: 50,
//           stagger: 0.2,
//           duration: 1,
//           delay: 0.7,
//           opacity: 0,
//           ease: "power3.out",
//         },
//         "<",
//       );
//   }, []);

//   return (
//     <div className="w-full lg:relative text-white flex flex-col lg:flex-row items-center">
//       {/* Video Section */}
//       <div className="w-full lg:w-[70%] lg:mt-0 overflow-hidden">
//         <video
//           ref={videoRef}
//           className="w-full h-full object-cover"
//           src="/Videos/macbook2.mov"
//           muted
//           playsInline
//         />
//       </div>

//       {/* Text Section */}
//       <div className="w-full lg:absolute lg:w-[40%] lg:right-10  text-center lg:text-right px-6 lg:px-0">
//         <div ref={textRef} className="mt-10">
//           <h1
//             className="text-[6vw] lg:text-[4vw] lg:leading-[6vw] font-bold
//           bg-linear-to-r from-white to-blue-400
//           bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
//           >
//             MacBook Pro 14″ Now supercharged by M5 Chip.
//           </h1>
//         </div>

//         <div
//           ref={priceRef}
//           className="space-y-3"
//         >
//           <div className="text-[4.2vw] mt-5 lg:text-[1.5vw] font-bold">

//           <p>From $1699.00 or $2665.00/mo.</p>
//           <p>for 6 mo. at $299.00.</p>
//           </div>

//           <div className="flex mt-5 pb-10 lg:text-[1.3vw] items-center lg:justify-end justify-center gap-5">
//             <button
//               ref={btn1}
//               className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer hover:scale-105 duration-120 transition px-6 py-2 rounded-full mt-4"
//             >
//               Buy
//             </button>
//             <button
//               ref={btn2}
//               className="bg-blue-600  lg:ml-5 hover:bg-blue-700 hover:cursor-pointer hover:scale-105 duration-120 transition px-6 py-2 rounded-full mt-4"
//             >
//               Read More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Hero = () => {
  const container = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const priceRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(videoRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.5,
      });

      tl.to(textRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 0.8,
      })

        .to(
          priceRef.current.querySelectorAll("p, button"),
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.4",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="w-full min-h-screen relative text-white flex flex-col lg:flex-row items-center overflow-x-hidden"
    >
      {/* Video Section */}
      <div className="w-full lg:w-[70%] aspect-video overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-0 -translate-x-[17.5]"
          src="/Videos/macbook2.mp4"
          muted
          autoPlay
          playsInline
          preload="metadata"
          poster="/Images/macbook-poster.webp"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:absolute lg:w-[40%] lg:right-10 text-center lg:text-right px-6">
        <div ref={textRef} className="mt-10">
          <h1 className="opacity-0 translate-y-10 text-[6vw] lg:text-[4vw] lg:leading-[5vw] font-bold bg-linear-to-r from-white to-blue-400 bg-clip-text text-transparent">
            MacBook Pro 14″ Now supercharged by M5 Chip.
          </h1>
        </div>

        <div ref={priceRef} className="space-y-3">
          <div className="text-[4.2vw] mt-5 lg:text-[1.5vw] font-bold">
            <p className="opacity-0 translate-y-7.5">
              From $1699.00 or $2665.00/mo.
            </p>
            <p className="opacity-0 translate-y-7.5">
              for 6 mo. at $299.00.
            </p>
          </div>

          <div className="flex mt-5 pb-10 lg:text-[1.3vw] items-center lg:justify-end justify-center gap-5">
            <button className="opacity-0 translate-y-7.5 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-150 px-6 py-2 rounded-full">
              Buy
            </button>
            <button className="opacity-0 translate-y-7.5 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-150 px-6 py-2 rounded-full">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
