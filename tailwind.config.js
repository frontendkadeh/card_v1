/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,css}"],
  theme: {
    extend: {
      backgroundImage: {
        "david": "url('./david.webp')", 
        "facebook" : "url('./facebook.svg')"
      },
      keyframes : {
        keyFrameActPis : {
          "0%"  :{transform : 'scale(1) ' },
          "50%" : {transform : 'scale(0.8) rotate(360deg)'},
          "100%"  :{transform : 'scale(1) rotate(-360deg)' },
        }
      },
      animation : {
        actPic : 'keyFrameActPis 3s ease-in-out forwards'
      }
    },
  },
  plugins: [],
};
