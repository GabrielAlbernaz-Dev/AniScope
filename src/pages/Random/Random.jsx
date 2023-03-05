import React, { useState } from 'react'
import { RANDOM_IMAGE } from '../../api';
import AnimalPicture from '../../components/AnimalPicture/AnimalPicture';
import Select from '../../components/Form/Select';
import GenerateButton from '../../components/GenerateButton/GenerateButton';
import ImageButton from '../../components/ImageButton/ImageButton';
import Loading from '../../components/Loading/Loading';
import SubTitle from '../../components/Title/SubTitle';
import Title from '../../components/Title/Title';
import MainSection from '../../components/MainSection/MainSection';
import useFetch from '../../hooks/useFetch';
import styles from './Random.module.css';
import notsupported from '../../assets/notsupported.png';

const Random = () => {
  const optionsSelect = [
    {id:'dog',text:'Dog'},
    {id:'fox',text:'Fox'}
  ];

  const [optionValue,setOptionValue] = useState('');
  const [picture,setPicture] = useState('https://via.placeholder.com/300.png');
  const {request,loading,error} = useFetch();
  const {url,src} = optionValue ? RANDOM_IMAGE(optionValue) :  {};

  async function handlePicture() {
    const {response,data} = await request(url);
    if(response.ok) {
        if(!data[src].includes('mp4')) {
            setPicture(data[src]);
        } else {
            setPicture(notsupported);
        }
    }
  }

  function downloadFile(e) {
    e.preventDefault();
    const {currentTarget} = e;
    fetch(currentTarget.href)
      .then(response => {
        response.arrayBuffer().then((buffer) => {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          const extension = currentTarget.href.trim().slice(-3);
          link.href = url;
          link.setAttribute('download', `image.${extension}`)
          document.body.appendChild(link);
          link.click();
          link.remove();
        });
      })
      .catch(err => {
        console.log(err);
      });
    }
  
  return (
    <MainSection>
      <div className={styles.randomContainer}>
        <div className={styles.left}>
            {loading ? (<div className="loading-center"><Loading/></div>) : (<AnimalPicture src={picture} alt={''}/>)}
            <div className={styles.imageButtonsContainer} style={{display:loading ? 'none' : ''}}>
                <ImageButton link={picture} onClick={downloadFile} text="Download Image" background="var(--red)" color="var(--white)"/>
                <ImageButton link={picture} text="View Image" background="var(--blue)" color="var(--white)"/>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.textContainer}>
              <SubTitle text="Wow, there are so many incredible animal images out there to discover" />
              <Title text="Choose an Image Option" />
            </div>
            <Select options={optionsSelect} value={optionValue} onChange={({currentTarget}) => setOptionValue(currentTarget.value)} />
            {optionValue && <GenerateButton onClick={handlePicture} text="Generate"/>}
        </div>
      </div>
    </MainSection>
  )
}

export default Random