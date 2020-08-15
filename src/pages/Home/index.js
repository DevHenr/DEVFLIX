/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable spaced-comment */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable semi */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */

import React, { useEffect, useState } from 'react';
import BannerMain from '../../componentes/BannerMain'; 
import Carousel from '../../componentes/Carousel';
import PageDefault from '../../componentes/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

    useEffect(() => {
      // http://localhost:8080/categorias?_embed=videos
     categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
      <BannerMain
           videoTitle={dadosIniciais[0].videos[0].titulo}
           url={dadosIniciais[0].videos[0].url}
        // videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
           videoDescription={"A surdez e mudez são ambas deficiências que dominam o mundo, com base nisso desenvolvemos um projeto que promete auxiliar na inclusão desse grupo de pessoas, o CLS LIBRAS. Ficou curioso? Então dá uma olhada: "}
        />
        <Carousel
          ignoreFirstVideo
          category={dadosIniciais[0]}
        />
            </div>
        );
      }

      return (
        <Carousel
        key={categoria.id}
        category={categoria}
        />
      );
      })} 

     {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
       // videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
       videoDescription={"A surdez e mudez são ambas deficiências que dominam o mundo, com base nisso desenvolvemos um projeto que promete auxiliar na inclusão desse grupo de pessoas, o CLS LIBRAS. Ficou curioso? Então dá uma olhada: "}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> 
     */}     
    </PageDefault>
  );
}

export default Home;
