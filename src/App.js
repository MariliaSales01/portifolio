import './App.css';
import Contato from './main/Contato/contato';

import Portfolio from './main/Portfolio/portfolio';
import Main from './main/main';
import Header from './main/menu-bar/header';
import Skill from './main/skill/skill';
import Sobre from './main/sobre/sobre';
import Stack from './tecnologias/stack';

export default function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Stack/>
    <Skill/>
    <Sobre/>
    <Portfolio/>
    <Contato/>
    </>
  );
}


