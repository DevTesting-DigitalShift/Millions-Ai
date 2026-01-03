import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "../public/fonts/RobertSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-myfont",
  display: "swap",
});
