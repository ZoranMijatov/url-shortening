/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,jsx,ts}'],
  theme: {
    extend: {
      colors: {
        almostBlack: '#34313D',
        lightPurple: '#4B3F6B',
        darkPurple: '#3A3054',
        gray: '#9E9AA8',
        lightGray: '#EFF1F7',
        turquoise: '#2BD0D0',
        error: '#F46363',
        headerLink: '#9E9AA8',
        footerLink: '#BFBFBF',
        buttonHover: '#9AE3E3',
      },
      maxWidth: {
        container: '1110px',
        hero: '600px',
      },
      transitionProperty: {
        height: 'height',
      },
      backgroundImage: {
        hero: "url('./src/assets/hero-image.svg')",
        banner:
          "url('./src/assets/decorative-blobs/left-banner-blob.svg'), url('./src/assets/decorative-blobs/bottom-banner-blob.svg'), url('./src/assets/decorative-blobs/right-banner-blob.svg')",
        form: "url('./src/assets/decorative-blobs/left-form-blob.svg'), url('./src/assets/decorative-blobs/right-form-blob.svg')",
      },
      backgroundPosition: {
        hero: '105%',
        banner: '-65% 115%, 0% -30%,  120% 60%',
        form: '-25% -10%, 165% 75%',
      },
    },
  },
  plugins: [],
};
