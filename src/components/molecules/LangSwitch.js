import { useRouter } from "next/router";
import Link from "next/link";
import { IconButton } from "components/atoms";

function LangSwitcher() {
  const router = useRouter();
  return (
    <IconButton small>
      <Link
        href={router.asPath}
        passHref
        locale={router.locale === "ar" ? "en" : "ar"}
      >
        {router.locale.toUpperCase()}
      </Link>
    </IconButton>
  );
}

export default LangSwitcher;
