import React from "react";
// import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import ColorModeSwitch from "../ColorModeSwitch";
import { Spacer } from "components/atoms";
import useScroll from "components/hooks/useScrolled";

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
  const { pathname } = useRouter();

  return (
    <HeaderBox scrolled={scrolled}>
      <HeaderContainer>
        {/* left */}
        <ElementBox>
          <ColorModeSwitch />
          <Spacer width={5} />
          <LangSwitcher />
        </ElementBox>

        {/* right */}
        <ElementBox>
          {/* links */}
          <HeaderLink active={pathname === "/"}>
            <Link href="/">Home</Link>
          </HeaderLink>
          <HeaderLink active={pathname === "/blogs"}>
            <Link href="/blogs">Blog</Link>
          </HeaderLink>
          <HeaderBtn title="Start a Demo" btnStyle="success" small />
        </ElementBox>
      </HeaderContainer>
    </HeaderBox>
  );
};

Header.propTypes = {};

export default Header;
