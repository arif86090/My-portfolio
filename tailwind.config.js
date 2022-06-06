module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#45ccb8",
          secondary: "#1e293b",
          accent: "#3A4246",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
}
// #00cec91c;