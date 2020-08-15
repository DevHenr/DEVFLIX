/* eslint-disable import/no-named-as-default-member*/
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable spaced-comment */

import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      
      if (respostaDoServidor.ok) {
         const resposta = await respostaDoServidor.json();
         return resposta;
     }

  throw new Error('Não foi possível pegar os dados :[');
  });
}

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then(async (respostaDoServidor) => {

  if (respostaDoServidor.ok) {
   const resposta = await respostaDoServidor.json();
   return resposta;
  }

  throw new Error('Não foi possível pegar os dados :[');
    });
}

export default {
  getAllWithVideos,
  getAll,
};