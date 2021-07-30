import { useRouter } from "next/router";
import Link from "next/link";
import { IconBox } from "./ColorModeSwitch";

function LangSwitcher() {
  const router = useRouter();
  return (
    <IconBox small>
      <Link
        href={router.asPath}
        passHref
        locale={router.locale === "ar" ? "en" : "ar"}
      >
        {router.locale.toUpperCase()}
      </Link>
    </IconBox>
  );
}

export default LangSwitcher;
