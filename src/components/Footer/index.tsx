"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
    <div className="vamos">
    <div className="my-6 text-center mx-auto max-w-full px-4">
  <h3 className="text-[clamp(2rem,7vw,3rem)] font-extrabold relative leading-tight">
    <span className="text-primary/80 relative" style={{
      textShadow: `
        0 0 20px #0451e0ff,
        0 0 30px #3e7ef5ff,
        0 0 35px #8ab2fdff,
        2px 2px 0 #000
      `
    }}>
      Vamos
    </span>
    <span className="text-white relative ml-2" style={{
      textShadow: `
        0 0 20px #ffffff,
        0 0 30px #a0e0ff,
        0 0 35px #60a0ff,
        2px 2px 0 #000
      `
    }}>
      Nautilus
    </span>
    <span className="text-primary/80 relative ml-2" style={{
      textShadow: `
        0 0 20px #0451e0ff,
        0 0 30px #3e7ef5ff,
        0 0 35px #8ab2fdff,
        2px 2px 0 #000
      `
    }}>
      Club
    </span>
  </h3>
</div>

</div>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-2.svg"
                    alt="logo"
                    className="w-full logo dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    className="hidden logo w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Complejo Nautilus Club<br />
                  Mar del Plata, Buenos Aires, Argentina.
                </p>
                
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Links Útiles
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/horarios"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Horarios
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/actividades"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Actividades
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contacto"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Institucional
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/identidad"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Identidad
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/historia"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Historia
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/instalaciones"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Instalaciones
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Seguínos
                </h2>
                <ul>
                  <li>
                    <Link
                      href="https://www.instagram.com/complejo_nautilus_club/"
                      className="mb-4 flex items-center gap-2 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="18"
                        height="18"
                        className="shrink-0" /* Evita que el icono se aplaste si el texto es largo */
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 011.757 1.148 4.92 4.92 0 011.148 1.757c.17.46.354 1.26.41 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.902 4.902 0 01-1.148 1.757 4.902 4.902 0 01-1.757 1.148c-.46.17-1.26.354-2.43.41-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 01-1.757-1.148 4.92 4.92 0 01-1.148-1.757c-.17-.46-.354-1.26-.41-2.43-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.902 4.902 0 011.148-1.757 4.902 4.902 0 011.757-1.148c.46-.17 1.26-.354 2.43-.41 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.741 0 8.332.013 7.052.072 5.773.13 4.77.312 4.005.57c-.8.27-1.48.637-2.154 1.31-.673.673-1.04 1.354-1.31 2.154-.258.765-.44 1.768-.498 3.047C0 8.332 0 8.741 0 12s.013 3.668.072 4.948c.058 1.28.24 2.282.498 3.047.27.8.637 1.48 1.31 2.154.673.673 1.354 1.04 2.154 1.31.765.258 1.768.44 3.047.498C8.332 24 8.741 24 12 24s3.668-.013 4.948-.072c1.28-.058 2.282-.24 3.047-.498.8-.27 1.48-.637 2.154-1.31.673-.673 1.04-1.354 1.31-2.154.258-.765.44-1.768.498-3.047C24 15.668 24 15.259 24 12s-.013-3.668-.072-4.948c-.058-1.28-.24-2.282-.498-3.047-.27-.8-.637-1.48-1.31-2.154-.673-.673-1.354-1.04-2.154-1.31-.765-.258-1.768-.44-3.047-.498C15.668 0 15.259 0 12 0z" />
                        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
                        <circle cx="18.406" cy="5.594" r="1.44" />
                      </svg>
                      Complejo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/gym_nautilusciromar"
                      className="mb-4 flex items-center gap-2 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="18"
                        height="18"
                        className="shrink-0" /* Evita que el icono se aplaste si el texto es largo */
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 011.757 1.148 4.92 4.92 0 011.148 1.757c.17.46.354 1.26.41 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.902 4.902 0 01-1.148 1.757 4.902 4.902 0 01-1.757 1.148c-.46.17-1.26.354-2.43.41-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 01-1.757-1.148 4.92 4.92 0 01-1.148-1.757c-.17-.46-.354-1.26-.41-2.43-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.902 4.902 0 011.148-1.757 4.902 4.902 0 011.757-1.148c.46-.17 1.26-.354 2.43-.41 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.741 0 8.332.013 7.052.072 5.773.13 4.77.312 4.005.57c-.8.27-1.48.637-2.154 1.31-.673.673-1.04 1.354-1.31 2.154-.258.765-.44 1.768-.498 3.047C0 8.332 0 8.741 0 12s.013 3.668.072 4.948c.058 1.28.24 2.282.498 3.047.27.8.637 1.48 1.31 2.154.673.673 1.354 1.04 2.154 1.31.765.258 1.768.44 3.047.498C8.332 24 8.741 24 12 24s3.668-.013 4.948-.072c1.28-.058 2.282-.24 3.047-.498.8-.27 1.48-.637 2.154-1.31.673-.673 1.04-1.354 1.31-2.154.258-.765.44-1.768.498-3.047C24 15.668 24 15.259 24 12s-.013-3.668-.072-4.948c-.058-1.28-.24-2.282-.498-3.047-.27-.8-.637-1.48-1.31-2.154-.673-.673-1.354-1.04-2.154-1.31-.765-.258-1.768-.44-3.047-.498C15.668 0 15.259 0 12 0z" />
                        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
                        <circle cx="18.406" cy="5.594" r="1.44" />
                      </svg>
                      Gimnasio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/futbolciromar"
                      className="mb-4 flex items-center gap-2 text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="18"
                        height="18"
                        className="shrink-0" /* Evita que el icono se aplaste si el texto es largo */
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 011.757 1.148 4.92 4.92 0 011.148 1.757c.17.46.354 1.26.41 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.902 4.902 0 01-1.148 1.757 4.902 4.902 0 01-1.757 1.148c-.46.17-1.26.354-2.43.41-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 01-1.757-1.148 4.92 4.92 0 01-1.148-1.757c-.17-.46-.354-1.26-.41-2.43-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.902 4.902 0 011.148-1.757 4.902 4.902 0 011.757-1.148c.46-.17 1.26-.354 2.43-.41 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.741 0 8.332.013 7.052.072 5.773.13 4.77.312 4.005.57c-.8.27-1.48.637-2.154 1.31-.673.673-1.04 1.354-1.31 2.154-.258.765-.44 1.768-.498 3.047C0 8.332 0 8.741 0 12s.013 3.668.072 4.948c.058 1.28.24 2.282.498 3.047.27.8.637 1.48 1.31 2.154.673.673 1.354 1.04 2.154 1.31.765.258 1.768.44 3.047.498C8.332 24 8.741 24 12 24s3.668-.013 4.948-.072c1.28-.058 2.282-.24 3.047-.498.8-.27 1.48-.637 2.154-1.31.673-.673 1.04-1.354 1.31-2.154.258-.765.44-1.768.498-3.047C24 15.668 24 15.259 24 12s-.013-3.668-.072-4.948c-.058-1.28-.24-2.282-.498-3.047-.27-.8-.637-1.48-1.31-2.154-.673-.673-1.354-1.04-2.154-1.31-.765-.258-1.768-.44-3.047-.498C15.668 0 15.259 0 12 0z" />
                        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
                        <circle cx="18.406" cy="5.594" r="1.44" />
                      </svg>
                      Escuela de fútbol
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              
              Desarrollado por{" "}
              <a
                href="https://tujo.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                TuJo
              </a>
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
