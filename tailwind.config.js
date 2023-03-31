/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./App.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/screens/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      // fontSize: {
      //    tiny: ["12px", { lineHeight: "12px", fontWeight: "500" }],
      //    small: ["13px", { lineHeight: "16px", fontWeight: "500" }],
      //    body3: ["14px", { lineHeight: "18px", fontWeight: "500" }],
      //    body2: ["16px", { lineHeight: "19px", fontWeight: "600" }],
      //    body1: ["16px", { lineHeight: "19px", fontWeight: "500" }],
      //    title3: ["17px", { lineHeight: "22px", fontWeight: "600" }],
      //    title2: ["24px", { lineHeight: "29px", fontWeight: "600" }],
      //    title1: ["32px", { lineHeight: "39px", fontWeight: "700" }],
      //    titlex: ["64px", { lineHeight: "80px", fontWeight: "700" }],
      // },
      screens: {
         mini: { max: "385px" },
      },
      extend: {
         colors: {
            dark: {
               25: "#292B2D",
               50: "#212325",
               75: "#161719",
               100: "#0D0E0F",
            },
            light: {
               20: "#91919F",
               40: "#F2F4F5",
               60: "#F1F1FA",
               80: "#FCFCFC",
               100: "#FFFFFF",
            },
            violet: {
               20: "#EEE6FF",
               40: "#D3BDFF",
               60: "#B18AFF",
               80: "#8F57FF",
               100: "#7F3DFF",
            },
            red: {
               20: "#FDD5D7",
               40: "#FDA2A9",
               60: "#FD6F7A",
               80: "#FD5662",
               100: "#FD3C4A",
            },
            green: {
               20: "#CFFAEA",
               40: "#93EACA",
               60: "#65D1AA",
               80: "#2AB784",
               100: "#00A86B",
            },
            yellow: {
               20: "#FCEED4",
               40: "#FCDDA1",
               60: "#FCCC6F",
               80: "#FCBB3C",
               100: "#FCAC12",
            },
            blue: {
               20: "#BDDCFF",
               40: "#8AC0FF",
               60: "#57A5FF",
               80: "#248AFF",
               100: "#0077FF",
            },
         },

         fontFamily: {
            "inter-thin": "Inter-Thin",
            "inter-extralight": "Inter-ExtraLight",
            "inter-light": "Inter-Light",
            "inter-regular": "Inter-Regular",
            "inter-medium": "Inter-Medium",
            "inter-semibold": "Inter-SemiBold",
            "inter-bold": "Inter-Bold",
            "inter-extrabold": "Inter-ExtraBold",
            "inter-black": "Inter-Black",
         },
      },
   },
   plugins: [],
};
