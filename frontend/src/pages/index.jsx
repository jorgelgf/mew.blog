import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Feeds from "./feeds";
import About from "./about";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Signature from "../components/signature";
import Footer from "../components/footer";
import Article from "./article";
import SectionBottom from "../components/sections/SectionBottom";
import ButtonBack from "../components/button/ButtonBack";
import Loading from "./loading";

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    //logica do botão de subir
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      if (scrollPercent >= 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && <ButtonBack onClick={handleClickBack} />}
      <Header />
      {children}
      <Signature />
      <SectionBottom />
      <Footer />
    </>
  );
};

const Rout = () => {
  useEffect(() => { });
  return (
    <Routes>
      <Route path="/" element={<Loading />} />

      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="*" element={<Loading />} />

      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/feeds"
        element={
          <Layout>
            <Feeds />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <About />
        }
      />

      <Route
        path="/article"
        element={
          <Layout>
            <Article />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Rout;
