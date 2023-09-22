import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Input, Button, Modal, ButtonEdit } from '../../components/';
import { useNavigate } from 'react-router';

const Edit = () => {

  const [title, setTitle] = useState(localStorage.getItem('title'));
  const [firstParagraph, setFirstParagraph] = useState(localStorage.getItem('firstParagraph'));
  const [description, setTDescription] = useState(localStorage.getItem('description'));
  const [emphasis, setEmphasis] = useState(localStorage.getItem('emphasis'));
  const [image, setImage] = useState(localStorage.getItem('image'));
  /*eslint-disable*/
  const [value, setValue] = useState({});
  const [validationModal, setValidationModal] = useState(false);
  const [validationSend, setValidationSend] = useState(false);

  const nav = useNavigate();
  const id = new Date()



  const handleSubmit = async (event) => {
    setValidationModal(true)
    event.preventDefault();
  }

  useEffect(() => {
    const post = async () => {
      if (validationSend) try {

        const response = await fetch(`http://localhost:3001/posts/${localStorage.getItem('id')}`, {
          method: 'PATCH',

          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            date: `${id.toUTCString()}`,
            title: `${title}`,
            description: `${description}`,
            emphasis: `${emphasis}`,
            image: `${image}`,
            firstParagraph: `${firstParagraph}`

          }),


        })
        const data = await response.json();
        setValue(data);
      } catch (error) {
        console.log(error);
      } finally {
          setValidationSend(false)
          setTitle('');;
          setTDescription('');
          setEmphasis('');
          setImage('');
          setFirstParagraph('');
          nav('/list');
        }
    }
    post();

  }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [validationSend])
  useEffect(() => {
    const verify = () => {
      if (localStorage.getItem('login') === 'false') {
        nav('/')
      }
    }
    verify()
    /* eslint-disable */
  }, [localStorage.getItem('login')])

  const handleClickCloseModal = () => setValidationModal(false)
  const handleSend = () => {
    setValidationSend(true);
    setValidationModal(false);
  }
  return (<>
    {validationModal &&
      <Modal >
        <Button onClick={handleSend} text='YES' style={{ backgroundColor: 'green', marginTop: '1rem' }} />
        <Button onClick={handleClickCloseModal} text='NO' style={{ backgroundColor: 'red', marginTop: '1rem' }} />
      </Modal>
    }
    <Container>
      <header>Edit</header>

      <span>Title: <Input value={title}

        onChange={(e) => setTitle(e.target.value)} /></span>
      <span>First paragraph: <Input value={firstParagraph} onChange={(e) => setFirstParagraph(e.target.value)} /></span>


      <span style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>

        <ButtonEdit onClick={() => setTDescription((prevState) => prevState + '<p> </p>')} text='paragraph' />
        <ButtonEdit onClick={() => setTDescription((prevState) => prevState + '<i> </i>')} text='italic' />
        <ButtonEdit onClick={() => setTDescription((prevState) => prevState + '<p><b><i> </i></b></p>')} text='emphasis' />

      </span>
      <span>Description: <textarea style={{
        width: "92%", padding: " 1rem 1rem", marginTop: '1rem'
      }} value={description} onChange={(e) => setTDescription(e.target.value)} /></span>
      <span>Emphasis: <Input value={emphasis} onChange={(e) => setEmphasis(e.target.value)} /></span>
      <span>Image: <Input value={image} onChange={(e) => setImage(e.target.value)} /></span>
      <div><Button onClick={() => setValidationModal(true)} style={{ backgroundColor: 'green' }} text='SEND' /></div>
      <div><Button onClick={() => nav('/actions')} style={{ marginTop: '.5rem' }} text='BACK' /></div>
    </Container>
  </>
  )
}

export default Edit


const Container = styled.div`

height: auto;

max-width: 80%;
display:flex;
flex-direction:column;
color: white;
background-color: #161515e1;
padding:  1rem 2rem  3rem 2rem;
letter-spacing: 2px;
border-radius: 5px;

@media(max-width:700px){
  margin-top: 5rem;
}

div{
    width: 100%;
    display: flex;
  }
header{
  
  padding-top:2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 300;
  color: #ededf1;
  text-shadow: 4px 3px 12px orangered;

}

span{
text-shadow: 4px 3px 12px orangered;
display: flex;
justify-content:flex-start;
align-items: flex-start;
flex-direction: column;
margin-top: 3rem;
font-size: 1.5rem;

}

`