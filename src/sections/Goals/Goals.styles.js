import styled from "styled-components";

export const Container = styled.div`
  .container {
    margin-top: 5rem;
    & .tab-content {
      margin-top: 2rem;
      & .discription {
        margin-top: 4rem;
      }
      .address {
        font-size: 24px;
      }
      .paragraph {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.text_100} !important;
      }
    }
  }
`;
export const NavLinkActive = styled.div`
  .nav-tabs {
    border-bottom: 0;
  }
  .nav-link {
    background-color: #217371 !important;
    border: 1px solid transparent;
    border-color: #217371 !important;
    color: #fff !important;
  }
  .active {
    background-color: #e66b26 !important;
    border: 1px solid transparent;
    border-color: #e66b26 !important;
    color: #fff !important;
  }
  .active:focus {
    border-color: #217371 !important;
  }
  button:focus {
    outline: #e66b26 5px;
  }
`;
