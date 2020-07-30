import React from 'react'; 

function ButtonLink(props) {
    //props => { className: "o que alguém passar, href: "/". Objeto" }
    console.log(props);
    return (
        <a href={props.href} className={props.className}>
            Novo vídeo
       </a>
     );
    }
    
    
    export default ButtonLink; 