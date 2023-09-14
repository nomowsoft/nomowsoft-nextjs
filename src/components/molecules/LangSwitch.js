import { useRouter } from "next/router";
import Link from "next/link";
import { IconBox } from "./ColorModeSwitch";

function LangSwitcher({ locale }) {
  var Lang;
  if (locale == "ar") {
    Lang = "AR";
  } else {
    Lang = "EN";
  }
  const router = useRouter();
  return (
    <IconBox small>
      <Link
        href={router.asPath}
        passHref
        locale={router.locale === "ar" ? "en" : "ar"}
      >
        {Lang}
      </Link>
    </IconBox>
  );
}

export default LangSwitcher;
