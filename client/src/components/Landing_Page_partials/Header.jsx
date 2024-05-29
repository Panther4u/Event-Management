// import { useRouter } from "next/router";

// function Header() {
//     const router = useRouter();

//     return (
//         <header className="absolute w-full z-30">
//             <div className="max-w-6xl mx-auto px-4 sm:px-6">
//                 <div className="flex items-center justify-between h-20">
//                     {/* Desktop navigation */}
//                     <nav className="flex grow">
//                         {/* Desktop sign in links */}
//                         <ul className="flex grow justify-end flex-wrap items-center">
//                             <li>
//                                 <a
//                                     onClick={() =>
//                                         router.push("/admin/auth")
//                                     }
//                                     className="btn-sm text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] ml-3 cursor-pointer"
//                                 >
//                                     Event Manager
//                                 </a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;
// // components/Landing_Page_partials/Header.js
// import React, { useState } from 'react';
// import { useRouter } from 'next/router';

// function Header() {
//     const router = useRouter();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const handleToggle = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <header className="absolute w-full z-30">
//             <div className="bg-blue-500">
//                 <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
//                     <a className="text-3xl font-bold leading-none" href="#">
//                         <svg className="h-10" alt="logo" viewBox="0 0 1024 1024">
//                             <path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0zm0 930C267.6 930 94 756.4 94 512S267.6 94 512 94s418 173.6 418 418-173.6 418-418 418z" />
//                         </svg>
//                     </a>
//                     <div className="lg:hidden">
//                         <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={handleToggle}>
//                             <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                 <title>Mobile menu</title>
//                                 <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
//                             </svg>
//                         </button>
//                     </div>
//                     <ul className={`lg:flex lg:items-center lg:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent`}>
//                         <li><a className="text-sm text-gray-400 hover:text-gray-500 block px-4 py-2 lg:inline-block lg:p-0" href="#">Home</a></li>
//                         <li className="hidden lg:block text-gray-300 lg:px-2">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0"></path>
//                             </svg>
//                         </li>
//                         <li><a className="text-sm text-gray-400 hover:text-gray-500 block px-4 py-2 lg:inline-block lg:p-0" href="#">About Us Us</a></li>
//                         <li className="hidden lg:block text-gray-300 lg:px-2">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0"></path>
//                             </svg>
//                         </li>
//                         <li><a className="text-sm text-gray-400 hover:text-gray-500 block px-4 py-2 lg:inline-block lg:p-0" href="#">Our Services</a></li>
//                         <li className="hidden lg:block text-gray-300 lg:px-2">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0"></path>
//                             </svg>
//                         </li>
//                         <li><a className="text-sm text-gray-400 hover:text-gray-500 block px-4 py-2 lg:inline-block lg:p-0" href="#">Contact</a></li>
//                         <li><a
//                             onClick={() => router.push("/admin/auth")}
//                             className="btn-sm text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] block px-4 py-2 lg:inline-block lg:p-0 cursor-pointer"
//                         >
//                             Event Manager
//                         </a></li>
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// }

// export default Header;


// import { useRouter } from 'next/router';
// import React, { useState } from 'react';

// const Header = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const router = useRouter();

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };
//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <div className="bg-blue-500 bg-transparent">
//       <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        
//           {/* <svg className="h-10" alt="logo" viewBox="0 0 10240 10240">
//             <path
//               xmlns="http://www.w3.org/2000/svg"
//               d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 13 7 14 0 205 116 303 184 180 126 287 216 466 396 282 281 511 593 775 1055 43 75 178 347 225 455 100 227 236 602 286 790 59 220 95 364 120 485 6 28 45 245 50 275 2 14 7 41 10 60 3 19 8 49 10 65 2 17 6 46 9 65 15 100 35 262 40 335 3 39 8 89 10 112 22 225 33 803 21 1043 -3 41 -7 129 -11 195 -3 66 -8 136 -10 155 -2 19 -6 76 -10 125 -3 50 -8 101 -10 115 -2 14 -6 57 -10 95 -7 72 -12 113 -20 175 -2 19 -7 55 -10 80 -6 46 -43 295 -51 340 -2 14 -9 54 -15 90 -5 36 -16 97 -24 135 -8 39 -17 84 -20 100 -12 68 -18 97 -50 248 -19 87 -47 204 -61 260 -14 56 -27 109 -29 117 -30 147 -232 810 -253 832 -4 4 -7 -23 -8 -60z"
//             ></path>
//           </svg> */}
//           <a className="text-2xl font-bold leading-none">
//                             {"< Shivam  "}
//                             <span className="text-[color:var(--darker-secondary-color)]">
//                                 EVE
//                             </span>
//                             {"nt />"}
//                         </a>

//         <div className="lg:hidden">
//           <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
//             <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//               <title>Mobile menu</title>
//               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
//             </svg>
//           </button>
//         </div>
//         <ul className={`hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
//           <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li>
//           <li class="text-gray-300">
// 				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
// 					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
// 				</svg>
// 			</li>
//           <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">About Us</a></li>
//           <li class="text-gray-300">
// 				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
// 					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
// 				</svg>
// 			</li>
//           <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Our Services</a></li>
//           <li class="text-gray-300">
// 				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
// 					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
// 				</svg>
// 			</li>
//           <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
//         </ul>
//         <a onClick={() => router.push("/admin/auth")} className="hidden lg:inline-block py-2 px-6 bg-[color:var(--darker-secondary-color)]  hover:bg-[color:var(--secondary-color)] text-sm text-white font-bold rounded-md transition duration-200" href="#">Event Manager</a>
//         {/* <a
//                                         onClick={() => router.push("/admin/auth")}
//                                         className="btn-sm text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] ml-3 cursor-pointer"
//                                     >
//                                         Event Manager
//                                     </a> */}
//       </nav>
//       <div className={`navbar-menu relative z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={closeMenu}></div>
//         <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
//           <div className="flex items-center mb-8">
//             {/* <a className="mr-auto text-3xl font-bold leading-none" href="#">
//               <svg className="h-10" alt="logo" viewBox="0 0 10240 10240">
//                 <path
//                   xmlns="http://www.w3.org/2000/svg"
//                   d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 14 7 5 0 38 14 74 30 174 81 463 289 655 467 156 142 397 383 529 529 358 398 658 861 856 1331 137 326 252 726 297 1044 9 68 22 162 29 210 6 49 11 92 11 96 1 3 2 18 4 34 6 63 4 313 -4 422 -34 454 -126 811 -314 1228 -247 541 -616 1065 -1111 1527 -323 310 -708 588 -1116 819 -36 21 -90 52 -120 69 -30 16 -75 42 -100 56 -106 62 -363 183 -549 257 -136 53 -364 121 -392 115 -13 -2 -26 1 -30 7 -3 5 -30 12 -60 16 -60 8 -186 38 -260 61 -28 9 -59 14 -70 11 -11 -3 -30 -8 -41 -11 -20 -6 -97 -14 -135 -13 -12 1 -17 14 -21 59 -15 161 45 270 129 242 11 -3 38 -7 60 -11 43 -7 79 -22 79 -34 0 -5 4 -9 9 -9 10 0 119 -50 180 -84 21 -12 43 -25 50 -30 6 -5 18 -12 25 -16 27 -11 247 -154 295 -194 25 -22 72 -58 105 -80 33 -22 79 -54 103 -70 92 -64 249 -183 341 -257 38 -30 72 -55 75 -55 4 0 17 -11 30 -25 38 -42 225 -185 369 -275 192 -120 384 -235 432 -248 12 -3 41 -14 64 -23 24 -9 48 -15 54 -12 6 2 30 -6 54 -18 24 -12 63 -30 88 -40 25 -11 60 -27 78 -35 17 -8 33 -12 36 -10 4 2 25 -6 48 -19 45 -26 124 -59 132 -52 3 3 28 -6 55 -19 59 -31 126 -62 166 -75 17 -6 31 -13 31 -15 0 -3 25 -14 55 -25 30 -11 63 -27 74 -35 11 -9 50 -26 87 -39 38 -12 84 -32 104 -43 20 -11 58 -30 85 -42 28 -12 55 -25 60 -28 13 -9 34 -17 120 -48 93 -34 113 -38 113 -21 0 16 43 45 76 53 12 3 49 10 83 14 35 4 71 11 81 16 10 5 47 13 83 17 36 5 88 14 115 21 28 7 66 14 85 15 19 1 39 4 45 5 18 5 50 -20 50 -38z"
//                   fill="#3b82f6"
//                 />
//               </svg>
//             </a> */}
//              <a className="text-2xl font-bold leading-none mr-auto">
//                             {"< Shivam  "}
//                             <span className="text-[color:var(--darker-secondary-color)]">
//                                 EVE
//                             </span>
//                             {"nt />"}
//                         </a>
//             <button className="navbar-close"onClick={closeMenu}>
//               <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
//             </button>
//           </div>
//           <div>
//             <ul>
//               <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a></li>
//               <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a></li>
//               <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Our Services</a></li>
//               <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a></li>
//             </ul>
//           </div>
//           <div className="mt-auto text-center">
//             <div className="pt-6">
//               <a className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0" href="/users/signin">Sign In</a>
//               <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"  href="/users/signup">Sign Up</a>
//             </div>
//             <p className="my-4 text-xs text-center text-gray-400">
//               <span>Copyright © 2024</span>
//             </p>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Header;




import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/router';

const Header = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleDropdown = (dropdownIndex) => {
    if (dropdownIndex === 1) {
      setDropdown1Open(!dropdown1Open);
      setDropdown2Open(false);
    } else if (dropdownIndex === 2) {
      setDropdown2Open(!dropdown2Open);
      setDropdown1Open(false);
    }
  };


  const router = useRouter();

  const closeDropdowns = () => {
    setDropdown1Open(false);
    setDropdown2Open(false);
  };

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
    <Helmet>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </Helmet>    
    <header id="nav-menu" aria-label="navigation bar">
      <div className="contain">
        <div className="nav-start">
          <a className="logo" href="/">
            <img
              src="https://github.com/Evavic44/responsive-navbar-with-dropdown/blob/main/assets/images/logo.png?raw=true"
              width="35"
              height="35"
              alt="Inc Logo"
            />
          </a>
          <nav className={`menu ${hamburgerOpen ? 'show' : ''}`}>
            <ul className="menu-bar">
              <li>
                <button
                  className="nav-link dropdown-btn"
                  onClick={() => toggleDropdown(1)}
                  aria-haspopup="true"
                  aria-expanded={dropdown1Open}
                  aria-label="browse"
                >
                  Home
                  <i className="bx bx-chevron-down" aria-hidden="true"></i>
                </button>
                <div id="dropdown1" className={`dropdown ${dropdown1Open ? 'active' : ''}`}>
                  <ul role="menu">
                    <li role="menuitem">
                      <a className="dropdown-link" href="#best-of-the-day">
                        <img
                          src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/botd.svg"
                          className="icon"
                        />
                        <div>
                          <span className="dropdown-link-title">Best of the day</span>
                          <p>Shorts featured today by curators</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#featured-streams">
                        <img
                          src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/fs.svg"
                          className="icon"
                        />
                        <div>
                          <span className="dropdown-link-title">Featured Streams</span>
                          <p>Leading creatives livestreams</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#subscriptions">
                        <img
                          src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/sp.svg"
                          className="icon"
                        />
                        <div>
                          <span className="dropdown-link-title">Subscriptions</span>
                          <p>Gain exclusive access</p>
                        </div>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#creative-feed">
                        <img
                          src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/cf.svg"
                          className="icon"
                        />
                        <div>
                          <span className="dropdown-link-title">Creative Feed</span>
                          <p>See trending creations</p>
                        </div>
                      </a>
                    </li>
                  </ul>

                  <ul role="menu">
                    <li className="dropdown-title">
                      <span className="dropdown-link-title">Browse by apps</span>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#adobe-xd">
                        <img
                          src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/xd.svg"
                        />
                        Adobe XD
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#after-effect">
                        <img
                          src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/ae.svg"
                        />
                        After Effect
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#sketch">
                        <img
                          src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/sketch.svg"
                        />
                        Sketch
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#indesign">
                        <img
                          src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/indesign.svg"
                        />
                        Indesign
                      </a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#figma">
                        <img
                          src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/figma.svg"
                        />
                        Figma
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  className="nav-link dropdown-btn"
                  onClick={() => toggleDropdown(2)}
                  aria-haspopup="true"
                  aria-expanded={dropdown2Open}
                  aria-label="discover"
                >
                  Our Services
                  <i className="bx bx-chevron-down" aria-hidden="true"></i>
                </button>
                <div id="dropdown2" className={`dropdown ${dropdown2Open ? 'active' : ''}`}>
                  <ul role="menu">
                    <li>
                      <span className="dropdown-link-title">Browse Categories</span>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#branding">Branding</a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#illustrations">Illustration</a>
                    </li>
                  </ul>
                  <ul role="menu">
                    <li>
                      <span className="dropdown-link-title">Download App</span>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#mac-windows">MacOS & Windows</a>
                    </li>
                    <li role="menuitem">
                      <a className="dropdown-link" href="#linux">Linux</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><a className="nav-link" href="/">About</a></li>
              <li> <a href="/users/signin" className="nav-link"> Signin </a></li>
              <li><a className="nav-link" href="/users/signup">Signup</a></li>
              
            </ul>
          </nav>
        </div>

        <div className="nav-end">
          <div className="right-contain">
          
          {/* <a href="/users/signin" className="block w-full py-1 px-3 mb-1 hover:text-blue-400 text-center text-md text-gray-500 font-bold leading-loose "> Signin </a>
          <a className="block w-full py-1 px-3 mb-1  hover:text-blue-400 text-center text-md text-gray-500 font-bold leading-loose " href="/users/signup">Signup</a> */}
          <a onClick={() => router.push("/admin/auth")} className="block w-full py-1 px-3 mb-1 bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] text-center text-sm text-white font-bold leading-loose rounded-md" href="#">Event Manager</a></div> 
          <button
            id="hamburger"
            aria-label="hamburger"
            aria-haspopup="true"
            aria-expanded={hamburgerOpen}
            onClick={toggleHamburger}
          >
            <i className="bx bx-menu" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
    </>

  );
};

export default Header;


