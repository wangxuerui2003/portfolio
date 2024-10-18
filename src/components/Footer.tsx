import SocialMediaLink from "./SocialMediaLink";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 justify-between w-full bg-secondary px-12 py-12 lg:px-36 lg:py-12">
      <div className="flex flex-col">
        <h1 className="text-lg lg:text-2xl font-bold mb-1 lg:mb-2">Ray Wang</h1>
        <p className="text-sm lg:text-md w-2/3">
          A 42 Malaysia graduate and a full stack web developer.
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg lg:text-2xl font-bold mb-1 lg:mb-2">Social</h1>
        <div className="flex gap-3">
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
      </div>
    </footer>
  );
}
