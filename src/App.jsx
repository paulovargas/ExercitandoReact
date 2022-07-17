import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParemtro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#09 - Contador " color="#424242">
          <Contador numeroInicial={10} />
        </Card>

        <Card titulo="#08 - Componente Controlado (Input) " color="#E45F56">
          <Input />
        </Card>
        <Card titulo="#07 - Rendenização Condicional" color="#982395">
          <ParOuImpar numero={21} />
          <UsuarioInfo usuario={{ nome: "Fernando" }} />
          {/*  <UsuarioInfo usuario={{ email: "email@email.com" }} /> */}
        </Card>
        <Card titulo="#06 - Repetição - Produtos" color="#3A9AD9">
          <TabelaProdutos />
        </Card>
        <Card titulo="#05 - Repetição" color="#FF4C65">
          <ListaAlunos />
        </Card>
        <Card titulo="#04 - Componente com filhos" color="#00C8F8">
          <Familia sobrenome="Azul" />
        </Card>
        <Card titulo="#03 - Desafio Aleatório" color="#080">
          <Aleatorio min={10} max={60} />
        </Card>
        <Card titulo="#02 - Com Parâmetro" color="#008">
          <ComParemtro
            titulo="Segundo Componente"
            subtitulo="Muito legal!"
          ></ComParemtro>
        </Card>
        <Card titulo="#01 - Primeiro Componente" color="#800">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
}
