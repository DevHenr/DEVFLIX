/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
/* eslint-disable indent */

import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo );
  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=KEgRxx7D9Bc&feature=youtu.be',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
    .getAll()
    .then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  console.log(categorias);
  
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
 // alert('Video cadastrado com sucesso!');


      const categoriaEscolhida = categorias.find((categoria) => {
        return categoria.titulo === values.categoria;
      });

      videosRepository.create({
        titulos: values.titulo,
        url: values.url,
        categoriaId: categoriaEscolhida.id,
      })
        .then(() => {
          console.log('Cadastrou com sucesso!')
          history.push('/')
        });
      }}>
         <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

          <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

          <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
       />

    <Button type="submit">
      Cadastrar
    </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastra Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
