import SocialMediaLink from "./SocialMediaLink";

export default function SocialMediaBar() {
  return (
    <div className="hidden lg:flex lg:flex-col fixed top-1/4 left-3 justify-center items-center w-auto h-auto bg-card gap-3 z-10 py-12 px-6 rounded-md shadow-md animate-bounce-horizontal">
      <SocialMediaLink
        href="https://www.linkedin.com/in/xue-rui-wang-b75080267/"
        iconSrc="/icons/linkedin.png"
        iconAlt="LinkedIn"
      />
      <SocialMediaLink
        href="https://github.com/wangxuerui2003"
        iconSrc="/icons/github.png"
        iconAlt="GitHub"
      />
      <SocialMediaLink
        href="mailto:wangxuerui2003@gmail.com"
        iconSrc="/icons/gmail.png"
        iconAlt="Gmail"
      />
      <SocialMediaLink
        href="https://wa.me/60169627951"
        iconSrc="/icons/whatsapp.png"
        iconAlt="Whatsapp"
      />
    </div>
  );
}
