import React, { useState } from 'react';
import './styles.css';

import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudentName] = useState();


  return (
    <div className='container'>
      <h1>Nome: {studentName}</h1>
      <input 
        type="type" 
        placeholder="Digite o nome..." 
        onChange={e => setStudentName(e.target.value)}
        />
      
      <button type="button">Adicionar</button>

      <Card name="Aron" time ="10:55:20" />
    </div>
  )
}