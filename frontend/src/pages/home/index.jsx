import { Section, ButtonSection, SectionInsta } from "../../components/";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const Home = () => {
  document.title = 'Mew.Blog';

  const [itens, setItens] = useState(null)
  const navigate = useNavigate();

  const handleClickFeeds = () => {
    return navigate("/feeds");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const data = async () => {
      try {
        const res = await fetch("http://localhost:3001/posts/")
        const response: object = await res.json();
        setItens(response);
      } catch (err) {
        console.log(err);
      }
    }
    data();
  }, []);

  return (
    <>    {
    }
      {itens && itens.map((i, index) => {

        if (index < 3) return <Section key={index}
          onClick={() => {
            localStorage.setItem('titleArticle', i.title)
            localStorage.setItem('descriptionArticle', i.description)
            localStorage.setItem('emphasisArticle', i.emphasis)
            localStorage.setItem('dateArticle', i.date)
            localStorage.setItem('imageArticle', i.image)
            localStorage.setItem('firstParagraphArticle', i.firstParagraph)



            navigate("/article")
          }}
          tittle={i.title}
          subtitle="Veja detalhes"
          date={i.date}
          img={i.image}
        />
        return null
      })}


      <ButtonSection onClick={handleClickFeeds} text="Todos os Posts" />
      <SectionInsta />

    </>
  );
};

export default Home;
