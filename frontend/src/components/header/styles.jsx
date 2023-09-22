import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  margin-bottom: 3rem;
  margin-top: 2rem;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-size: 2.5rem;
    letter-spacing: 2px;
    span {
      cursor: pointer;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      letter-spacing: 2px;
      img{
        width: 3rem;
        margin-left: 1rem;
        @media (min-width: 980px) {
        width: 5rem;
      }
      }

      @media (min-width: 980px) {
        width: 50%;
      }
    }
    @media (min-width: 980px) {
      font-size: 3rem;
    }

    a {
      text-decoration: none;
      color: black;
      cursor: pointer;

      :hover {
        color: #bd00bd;
        transition: all 0.4s;
      }
    }
  }
`;
export const MobileMenu = styled.div`
  z-index: 10;
  cursor: pointer;
  display: none;

  justify-content: flex-end;
  div {
    width: 50%;
    width: 52px;
    height: 3px;
    margin: 8px;
    background-color: #6e6e6e;
  }

  @media (max-width: 999px) {
    display: block;
  }

  transform: translateX(-10px);
  animation: animeLeft 0.4s forwards;

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
export const Logo = styled.div`
  color: white;

  display: flex;
  .logo {
    font-weight: 600;
    padding: 1rem;
    margin: 0;
    background-color: black;
    transition: all 0.2s;
    :hover {
      background-color: #bd00bd;
      color: black;
    }
  }
  .name {
    padding: 1rem;
    background-color: white;
    color: black;
    letter-spacing: 15px;
    transition: all 0.2s;
    display: hidden;
    :hover {
      display: flex;
    }
  }

  @media (max-width: 999px) {
    display: none;
  }
`;
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  li {
    letter-spacing: 3px;
    margin-left: 32px;
  }
  @media (max-width: 999px) {
    display: none;
  }
`;
export const Alink = styled.div`
  cursor: pointer;
  cursor: pointer;
  transition: all 0.4s;
  border-bottom: 1px solid transparent;
  :hover {
    color: #bd00bd;
    border-bottom: 1px solid #bd00bd;
  }
`;

//componente HeaderBack

export const HeaderB = styled.header`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0;
  padding: 1rem;
  font-size: 2rem;
  transition: all 0.4s;
  :hover {
    background-color: #bd00bd;
    color: white;
    box-shadow: 6px 5px 1px black;
  }

  span {
    margin-left: 10px;
  }
`;
