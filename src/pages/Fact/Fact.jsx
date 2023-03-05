import React, { useState } from 'react'
import Select from '../../components/Form/Select'
import styles from './Fact.module.css';
import SubTitle from '../../components/Title/SubTitle'
import Title from '../../components/Title/Title'
import FactQuote from '../../components/Fact/FactQuote'
import useFetch from '../../hooks/useFetch';
import { RANDOM_QUOTE } from '../../api';
import Loading from '../../components/Loading/Loading';
import GenerateButton from '../../components/GenerateButton/GenerateButton';

const Fact = () => { 
  const optionsSelect = [
    {id:'dog',text:'Dog'},
    {id:'cat',text:'Cat'},
  ];
  const [optionValue,setOptionValue] = useState('');
  const [quote,setQuote] = useState('Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore');
  const {request,loading,error} = useFetch();
  const {url,options} = RANDOM_QUOTE(optionValue);

  async function handleQuote() {
    const {response,data} = await request(url,options);
    if(response.ok) setQuote(data.text);
  }

  return (
   <section className="animeTransition">
    <div className={styles.textContainer}>
        <SubTitle text="Discover an interesting fact about the animal of your choice, or just read ours and pretend you came up with it - we won't tell anyone!"/>
        <Title text="Choose your option"/>
    </div>
    <Select options={optionsSelect} value={optionValue} onChange={({currentTarget}) => setOptionValue(currentTarget.value)} />
    {loading ? (<div className="loading-center"><Loading/></div>) : <FactQuote text={quote}/>}
    {optionValue && <GenerateButton onClick={handleQuote} text="Generate"/>}
   </section>
  )
}

export default Fact