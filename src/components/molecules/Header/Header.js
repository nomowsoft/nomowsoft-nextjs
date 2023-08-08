import React from "react";
// import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import ColorModeSwitch from "../ColorModeSwitch";
import { Spacer } from "components/atoms";
import useScroll from "components/hooks/useScrolled";
import useTranslation from "next-translate/useTranslation";

import LangSwitcher from "../LangSwitch";
import {
  HeaderBox,
  ElementBox,
  HeaderBtn,
  HeaderLink,
  HeaderContainer,
} from "./Header.styles";

const Header = () => {
  const { scrolled } = useScroll();
  const { pathname, push } = useRouter();
  const t = useTranslation();

  return (
    <HeaderBox scrolled={scrolled}>
      <HeaderContainer scrolled={scrolled}>
        {/* left */}
        <ElementBox>
          <ColorModeSwitch />
          <Spacer width={5} />
          <LangSwitcher />
        </ElementBox>

        {/* right */}
        <ElementBox>
          {/* links */}
          <HeaderLink
            active={pathname === "/" || pathname === "/recommended_questions"}
          >
            <Link href="/">{t.t("common:home")}</Link>
          </HeaderLink>
          <HeaderLink active={pathname === "/blogs"}>
            <Link href="/blogs">{t.t("common:blog")}</Link>
          </HeaderLink>
          <HeaderBtn
            title={t.t("common:start_demo")}
            btnStyle="success"
            small
            onClick={() => push("/start_demo")}
          />
        </ElementBox>
      </HeaderContainer>
    </HeaderBox>
  );
};

Header.propTypes = {};

export default Header;
