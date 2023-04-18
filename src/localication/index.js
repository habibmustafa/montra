import { store } from "../store";

export const l = ( option ) => {
   const language = store.getState().local.language;

   console.log("Language: ",language);
   let strings = {}

   if(language === "en") {
      strings = {
         onboarding1title: `Gain total control\nof your money`,
         onboarding1text: `Become your own money manager\nand make every cent count`,
         onboarding2title: `Know where your\nmoney goes`,
         onboarding2text: `Track your transaction easily,\nwith categories and financial report`,
         onboarding3title: `Planning ahead`,
         onboarding3text: `Setup your budget for each category\nso you in control`,
         signup: `Sign Up`,
         login: `Login`,
         signupwithgoogle: `Sign Up with Google`,
         orwith: `Or with`,
         forgotpassword: `Forgot Password`,
         dontaccount: `Don’t have an account yet?`,
         haveaccount: `Already have an account?`,
         password: `Password`,
         name: `Name`,
         termsofservices1: `By signing up, you agree to the`,
         termsofservices2: `Terms of Service and Privacy Policy`,
         dontworry: `Don’t worry.\nEnter your email and we’ll send you a link to reset your password.`,
         continue: `Continue`,
         emailway: `Your email is on the way`,
         emailwaytext: `Check your email test@test.com and follow the instructions to reset your password`,
         gogmail: `Go to Gmail`,
         setuppin: `Let’s  setup your PIN`,
         resetuppin: `Ok. Re type your PIN again`,
         enterpin: `Enter PIN`,
         mismatchedpin: `The entered PINs do not match. Please try again`,
         incorrectpin: `PIN code is incorrect`,
         required: `Required`,
         erroremail: `Enter a valid email address`,
         errorpassword: `Enter a password of 6-16 characters`,
         errorname: `Enter a name of 3-16 letters [A-Z]-[a-z]`,
         incorrect: `Incorrect email or password`,
      }
   }
   else if (language === "az") {
      strings = {
         onboarding1title: `Pulunuza tam\nnəzarət edin`,
         onboarding1text: `Öz pul meneceriniz olun və hər\nqəpiyin hesabını yaradın`,
         onboarding2title: `Pulunuzun hara\ngetdiyini bilin`,
         onboarding2text: `Kateqoriyalar və maliyyə hesabatı ilə\nəməliyyatınızı asanlıqla izləyin`,
         onboarding3title: `Öncədən planlaşdırma`,
         onboarding3text: `Hər bir kateqoriya üçün büdcənizi\nqurun ki, nəzarət sizdə olsun`,
         signup: `Qeydiyyat`,
         login: `Giriş`,
         signupwithgoogle: `Google ilə Qeydiyyat`,
         orwith: `Və ya`,
         forgotpassword: `Şifrəni unutmusunuz`,
         dontaccount: `Hələ hesabınız yoxdur?`,
         haveaccount: `Artıq bir hesabınız var mı?`,
         password: `Şifrə`,
         name: `Ad`,
         termsofservices1: `Qeydiyyatdan keçməklə siz`,
         termsofservices2: `Xidmət Şərtləri və Məxfilik Siyasəti ilə razılaşırsınız`,
         dontworry: `Narahat olmayın.\nE-poçtunuzu daxil edin və biz sizə parolunuzu sıfırlamaq üçün link göndərəcəyik.`,
         continue: `Davam et`,
         emailway: `E-poçtunuz yoldadır`,
         emailwaytext: `test@test.com e-poçtunuzu yoxlayın və parolunuzu sıfırlamaq üçün təlimatlara əməl edin`,
         gogmail: `Gmail-ə gedin`,
         setuppin: `PİN kodunuzu təyin edin`,
         resetuppin: `PİN kodunuzu yenidən daxil edin`,
         enterpin: `PIN kodu daxil edin`,
         mismatchedpin: `Daxil edilmiş PIN-lər uyğun gəlmir. Zəhmət olmasa bir daha cəhd edin`,
         incorrectpin: `PIN kodu səhvdir`,
         required: `Zəruri`,
         erroremail: `Etibarlı e-poçt ünvanı daxil edin`,
         errorpassword: `6-16 simvoldan ibarət parol daxil edin`,
         errorname: `3-16 hərfdən ibarət ad daxil edin [A-Z]-[a-z]`,
         incorrect: `Yanlış e-poçt və ya parol`,
      }
   }

   return strings[option];
}

