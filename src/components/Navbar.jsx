// import { useGSAP } from "@gsap/react";
// import {
//   RiAppleFill,
//   RiMenu3Fill,
//   RiSearchLine,
//   RiShoppingBagLine,
//   RiCloseLine,
// } from "@remixicon/react";



// import gsap from "gsap";
// import React, { useEffect, useRef, useState } from "react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const logoRef = useRef(null);
//   const listRef = useRef(null);
//   const btnRef = useRef(null);
//     const dropLiRef = useRef(null);

//     useEffect(() => {
//   if (menuOpen) {
//     gsap.to(dropLiRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       ease: "power2.out",
//       pointerEvents: "auto",
//     });
//   } else {
//     gsap.to(dropLiRef.current, {
//       opacity: 0,
//       y: -20,
//       duration: 0.5,
//       ease: "power2.in",
//       pointerEvents: "none",
//     });
//   }
// }, [menuOpen]);


//   useGSAP(() => {
//     const tl = gsap.timeline();
//     tl.from(logoRef.current, {
//       x: -50,
//       duration: 1.5,
//       rotate: -360,
//       opacity: 0,
//       stagger: 0.1,
//       ease: "power2.out",
//     })

//       .from(
//         listRef.current.children,
//         {
//           y: -20,
//           delay: 1,
//           duration: 1,
//           opacity: 0,
//           stagger: 0.1,
//           ease: "power2.out",
//         },
//         "<",
//       )
//       .from(
//         btnRef.current.children,
//         {
//           x: 50,
//           rotate: -360,
//           duration: 1.5,
//           opacity: 0,
//           stagger: 0.1,
//           ease: "power2.out",
//         },
//         "<",
//       )
//       .from(
//         dropLiRef.current,
//         {
//           y: -200,
//           duration: 1,
//           opacity: 0,
//           stagger: 0.1,
//           ease: "power2.out",
//         },
//         "<",
//       );
//   }, []);

//   return (
//     <div className="bg-black text-white px-5 lg:px-20 lg:py-5 py-5 relative">
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <RiAppleFill ref={logoRef} color="rgba(173,184,194,1)" size={22} />

//         {/* Desktop Nav */}
//         <ul
//           ref={listRef}
//           className=" hidden  lg:flex items-center gap-8 text-sm text-gray-300"
//         >
//           <li className="hover:cursor-pointer">Home</li>
//           <li className="hover:cursor-pointer">Mac</li>
//           <li className="hover:cursor-pointer">iPad</li>
//           <li className="hover:cursor-pointer">iPhone</li>
//           <li className="hover:cursor-pointer">Watch</li>
//           <li className="hover:cursor-pointer">AirPods</li>
//           <li className="whitespace-nowrap hover:cursor-pointer">TV & Home</li>
//           <li className="hover:cursor-pointer">Entertainment</li>
//           <li className="hover:cursor-pointer">Accessories</li>
//           <li className="hover:cursor-pointer">Support</li>
//         </ul>

//         {/* Right Icons */}
//         <div ref={btnRef} className="buttons flex items-center gap-6">
//           <RiSearchLine className="btn hover:cursor-pointer" size={20} color="rgba(173,184,194,1)" />
//           <RiShoppingBagLine
//             className="btn hover:cursor-pointer"
//             size={20}
//             color="rgba(173,184,194,1)"
//           />

//           {/* Mobile Menu Button */}
//           <RiMenu3Fill
//             className="lg:hidden cursor-pointer"
//             size={22}
//             color="rgba(173,184,194,1)"
//             onClick={() => setMenuOpen(!menuOpen)}
//           />
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       <ul
//   className={`lg:hidden fixed top-0 left-0 w-full h-screen 
//   bg-[#161617] z-50 backdrop-blur-xl
//   flex flex-col justify-start pt-18 items-start pl-10 
//   font-bold gap-3 text-3xl text-gray-300
//   transition-all duration-500 ease-out
//   ${
//     menuOpen
//       ? "opacity-100 translate-y-0 pointer-events-auto"
//       : "opacity-0 -translate-y-5 pointer-events-none"
//   }`}
// >
//   {/* Close Button */}
//   <button
//     onClick={() => setMenuOpen(false)}
//     className="absolute top-6 right-6 text-gray-300 hover:text-white transition"
//   >
//     <RiCloseLine size={28} />
//   </button>

//   <li className="hover:translate-x-2 transition">Store</li>
//   <li className="hover:translate-x-2 transition">Mac</li>
//   <li className="hover:translate-x-2 transition">iPad</li>
//   <li className="hover:translate-x-2 transition">iPhone</li>
//   <li className="hover:translate-x-2 transition">Watch</li>
//   <li className="hover:translate-x-2 transition">AirPods</li>
//   <li className="hover:translate-x-2 transition">TV & Home</li>
//   <li className="hover:translate-x-2 transition">Entertainment</li>
//   <li className="hover:translate-x-2 transition">Accessories</li>
//   <li className="hover:translate-x-2 transition">Support</li>
// </ul>


//     </div>
//   );
// };

// export default Navbar;

import { useGSAP } from "@gsap/react";
import {
  RiAppleFill,
  RiMenu3Fill,
  RiSearchLine,
  RiShoppingBagLine,
  RiCloseLine,
} from "@remixicon/react";

import gsap from "gsap";
import React, { useRef, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const listRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
  const tl = gsap.timeline();

  // Logo
  tl.from(logoRef.current, {
    x: -20,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  // Desktop list (only if visible)
  if (window.innerWidth >= 1024 && listRef.current) {
    tl.from(
      listRef.current,
      {
        y: 15,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4"
    );
  }

  // Right buttons
  if (btnRef.current) {
    tl.from(
      btnRef.current.children,
      {
        x: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      },
      "-=0.4"
    );
  }

}, { scope: navRef });

  return (
    <nav
      ref={navRef}
      className="bg-black text-white px-5 lg:px-20 py-5 relative"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <RiAppleFill
          ref={logoRef}
          size={22}
          className="text-gray-300"
        />

        {/* Desktop Nav */}
        <ul
          ref={listRef}
          className="hidden lg:flex items-center gap-8 text-sm text-gray-300"
        >
          {[
            "Home",
            "Mac",
            "iPad",
            "iPhone",
            "Watch",
            "AirPods",
            "TV & Home",
            "Entertainment",
            "Accessories",
            "Support",
          ].map((item) => (
            <li key={item} className="cursor-pointer hover:text-white transition">
              {item}
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div ref={btnRef} className="flex items-center gap-6">
          <RiSearchLine size={20} className="text-gray-300 cursor-pointer" />
          <RiShoppingBagLine size={20} className="text-gray-300 cursor-pointer" />

          <RiMenu3Fill
            className="lg:hidden cursor-pointer text-gray-300"
            size={22}
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#161617] z-50 backdrop-blur-xl
        transform transition-transform duration-500 ease-out
        ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-gray-300"
        >
          <RiCloseLine size={28} />
        </button>

        <ul className="flex flex-col pt-24 pl-10 gap-6 text-3xl text-gray-300 font-semibold">
          {[
            "Store",
            "Mac",
            "iPad",
            "iPhone",
            "Watch",
            "AirPods",
            "TV & Home",
            "Entertainment",
            "Accessories",
            "Support",
          ].map((item) => (
            <li
              key={item}
              className="hover:translate-x-2 transition-transform duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
