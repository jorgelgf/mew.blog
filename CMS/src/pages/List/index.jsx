import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from 'react-router';
import { Button, Modal } from '../../components/';

const List = () => {
  const [itens, setItens] = useState(null);
  const [validationModal, setValidationModal] = useState(false);

  const nav = useNavigate();
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
  }, [validationModal]);

  const handleDelete = async (id) => {
    localStorage.setItem('id', id);
    setValidationModal(!validationModal);
  }
  const handleDeleteOk = async () => {
    await fetch(`http://localhost:3001/posts/${localStorage.getItem('id')}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setValidationModal(!validationModal);
  }
  return (<>
    {validationModal &&
      <Modal >
        <Button text='YES' onClick={handleDeleteOk} style={{ backgroundColor: 'green', marginTop: '1rem' }} />
        <Button text='NO' onClick={() => setValidationModal(false)} style={{ backgroundColor: 'red', marginTop: '1rem' }} />
      </Modal>}
    <S.Container>
      <header><h1>Title</h1></header>
      {itens && <>
        {itens.map((i, index) => {
          return <span key={index}>
            {i.title.length > 11 ? <p>{i.title.substring(0, 15)} [...]</p> : <p>{i.title} </p>}
            <AiOutlineEdit
              onClick={() => {
                localStorage.setItem('id', i.id)
                localStorage.setItem('title', i.title)
                localStorage.setItem('emphasis', i.emphasis)
                localStorage.setItem('description', i.description)
                localStorage.setItem('image', i.image)
                localStorage.setItem('firstParagraph', i.firstParagraph)



                nav('/edit')
              }}
              className='light' style={{ cursor: 'pointer' }} /> <div className='light' onClick={() => handleDelete(i.id)}>X</div></span>
        })}
      </>}
      <div><Button onClick={() => nav('/actions')} style={{ marginTop: '.5rem' }} text='BACK' /></div>

    </S.Container >
  </>
  )
}

export default List