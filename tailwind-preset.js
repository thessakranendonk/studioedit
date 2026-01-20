// tailwind.preset.js
import plugin from "tailwindcss/plugin";


export default {
  theme: {
    /* =========================
     * COLORS
     * ========================= */
    colors: {
      current: "currentColor",
      error: "#e71010",
      brand: {
        evenLighter: "#c5e2e7",
        lightest: "#52868E",
        lighter: "#4A7B82",
        base: "#3d6469",
        dark: "#34565B",
        darkest: "#042d34ff",
      },
      ui: {
        error: red[700],
      },
    },

    /* =========================
     * TEXT SHADOW
     * ========================= */
    textShadow: {
      sm: "0 1px 10px var(--tw-shadow-color)",
      DEFAULT: "0 2px 10px var(--tw-shadow-color)",
      lg: "0 8px 16px var(--tw-shadow-color)",
    },

    /* =========================
     * Z-INDEX
     * ========================= */
    zIndex: {
      60: "60",
      70: "70",
      80: "80",
      90: "90",
      100: "100",
    },

    /* =========================
     * ANIMATIONS
     * ========================= */
    keyframes: {
      draw: {
        "50%": { strokeDashoffset: "0" },
      },
      fadeIn: {
        "0%": { filter: "blur(40px)", opacity: "0" },
        "100%": { filter: "blur(0)", opacity: "1" },
      },
      fadeInOut: {
        "0%": { filter: "blur(40px)", opacity: "0" },
        "50%": { filter: "blur(0)", opacity: "1" },
        "100%": { filter: "blur(40px)", opacity: "0" },
      },
    },

    animation: {
      fadeIn: "fadeIn 2s ease-in-out 1",
      fadeInFast: "fadeIn 1s ease-in-out 1",
      fadeInOutSlow: "fadeInOut 3s ease-in-out 1",
      path: "draw 3.5s infinite",
    },
  },

  plugins: [
    /* =========================
     * OFFICIAL PLUGINS
     * ========================= */
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),

    /* =========================
     * UTILITIES
     * ========================= */
    plugin(({ addUtilities }) => {
      addUtilities({
        ".inset-center": {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        ".inset-x-center": {
          left: "50%",
          transform: "translateX(-50%)",
        },
        ".inset-y-center": {
          top: "50%",
          transform: "translateY(-50%)",
        },

        ".img-sm": { width: "280px", height: "280px" },
        ".img": { width: "600px", height: "600px" },
        ".img-about-sm": { width: "280px", height: "280px" },
        ".img-about-md": { width: "600px", height: "600px" },
        ".img-about-xxl": { width: "800px", height: "800px" },

        ".br-left": {
          borderRadius: "15% 85% 85% 15% / 28% 44% 56% 72%",
        },
        ".br-right": {
          borderRadius: "20% 80% 25% 70% / 30% 46% 54% 70%",
        },
        ".br-right-about": {
          borderRadius: "64% 39% 25% 73% / 56% 43% 44% 44%",
        },
        ".br-center": { borderRadius: "50%" },
        ".br-right-footer": {
          borderRadius: "25% 58% 30% 70% / 15% 25% 54% 67%",
        },

        ".img-settings": {
          position: "relative",
          transformStyle: "preserve-3d",
          boxShadow: "0 1px 2px rgba(0,0,0,0)",
        },

        ".img-wrap": {
          position: "absolute",
          background: "#9d9d9d",
          perspective: "1000px",
          boxShadow: "0 0 0 40px rgba(255,255,255,0.4)",
          transition: "all 0.4s ease-in-out",
        },

        ".img-wrap-footer": {
          position: "absolute",
          background: "#51868E",
          perspective: "1000px",
          boxShadow: "0 0 0 40px rgba(255,255,255,0.4)",
          transition: "all 0.4s ease-in-out",
        },

        ".back-img": {
          position: "absolute",
          inset: "0",
          backgroundPosition: "center",
          transformOrigin: "50% 100%",
          zIndex: "100",
          transition: "all 0.6s ease-in-out",
          boxShadow: "inset 1px 1px 3px rgba(0,0,0,0)",
        },
      });
    }),

    /* =========================
     * BASE STYLES
     * ========================= */
    plugin(({ addBase }) => {
      addBase({
        ":root": {
          "--color-primary": "#315182",
          "--color-background": "#ecf3f8",
          "--color-copy": "rgba(0, 0, 0, 0.9)",
        },
        body: {
          overflowY: "scroll",
        },
        "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
          WebkitAppearance: "none",
          margin: "0",
        },
        'input[type="number"]': {
          MozAppearance: "textfield",
        },
      });
    }),

    /* =========================
     * MATCH UTILITIES
     * ========================= */
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "text-shadow": (value) => ({ textShadow: value }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
