import React from 'react'
import './WhatGPT3.css';
import Feature from '../../components/feature/Feature'
function WhatGPT3() {
  return (
    <div className="main">
      <div className="whatgpt3 section_margin" id='wgpt3'>
        <div className="whatgpt3_features">
          <Feature title='What is GPT-3' text='Generative Pre-trained Transformer 3 is an autoregressive language model that uses deep learning to produce human-like text. It is the third-generation language prediction model in the GPT-n series created by OpenAI, a San Francisco-based artificial intelligence research laboratory.' />
        </div>
        <div className="whatgpt3_heading">
          <h1 className="gradient__text">The possibilities are beyond your imagination.</h1>
          <p>Expore the Library</p>
        </div>

        <div className="whatgpt3_containers">
          <Feature title="Chatbots" text="Simulate human-like conversations using Natural Language Processing (NLP)." />
          <Feature title="Knowledgebase" text="GPT-3's deep learning neural network is a model with over 175 billion machine learning parameters. To put things into scale, the largest trained language model before GPT-3 was Microsoft's Turing NLG model, which had 10 billion parameters." />
          <Feature title="Education" text="Artificial Intelligence (AI) has the potential to address some of the biggest challenges in education today, innovate teaching and learning practices, and ultimately accelerate the progress." />

        </div>
      </div>
    </div>
  )
}

export default WhatGPT3
