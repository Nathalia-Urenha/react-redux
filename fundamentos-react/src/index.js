import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';


ReactDOM.render(
    <div>
        <Primeiro />
        <ComParametro 
            titulo="Situação do aluno" 
            nota={10} 
            aluno="Nathália" 
        />
        <ComParametro 
            titulo="Situação do aluno" 
            nota={9} 
            aluno="Igor" 
        />
    </div>,
    document.getElementById('root')
)