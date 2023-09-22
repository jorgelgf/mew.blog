import React from 'react'
import { Route, Routes } from "react-router-dom";
import { styled } from 'styled-components';
import { Exit } from '../components';
import { List, Actions, Register, Home, Edit } from './';

const Layout = ({ children }) => {

  return (<>
    <Container>{children}</Container>
  </>)

}

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /> </Layout>} />
      <Route path="*" element={<Layout><Home /> </Layout>} />

      <Route path="/list" element={<Layout><Exit title='EXIT' /><List /> </Layout>} />
      <Route path="/actions" element={<Layout><Exit /><Actions /> </Layout>} />
      <Route path="/register" element={<Layout><Exit /><Register /> </Layout>} />
      <Route path="/edit" element={<Layout><Exit /><Edit /> </Layout>} />

    </Routes>
  )
}

export default Routs;

const Container = styled.div`
width:100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-image: url("https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80");
background-size:cover;
background-repeat: no-repeat;

background-position: center;


`

