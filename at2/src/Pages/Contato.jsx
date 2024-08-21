import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contato() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        if(nome === '' || email === '' || mensagem === '') {
            alert("Preencha todos os campos!");
            return;
        }

        const templateParams = {
            from_name: nome,
            message: mensagem,
            email: email

            
        }
        emailjs.send("servGmail", "template_ks79emi", templateParams,"HFJe80RY-VgG2vPsf")

        .then((response) => {
            console.log('Enviado com sucesso', response.status, response.text);
            setNome('');
            setEmail('');
            setMensagem('');
        }, (error) => {
            console.log('Erro ao enviar', error);
        })
    }

    return ( 
        <div className="flex justify-center m-5">
            <form className="flex flex-col w-2/4 text-white" onSubmit={sendEmail}>
                <label htmlFor="nome">Nome:</label>
                <input 
                    className="mb-4 p-2 dark:text-black shadow-md rounded-md text-black hover:text" 
                    type="text" 
                    name="Nome" 
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
                <label htmlFor="email">E-mail:</label>
                <input 
                    className="mb-4 p-2 dark:text-black shadow-md rounded-md text-black" 
                    type="text" 
                    name="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email" />
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea 
                    name="Mensagem" 
                    id="mensagem"
                    value={mensagem}
                    className="dark:text-black p-2 rounded-md shadow-md text-black"
                    onChange={(e) => setMensagem(e.target.value)}
                    />
                <div className="text-center">
                <button 
                    className="mt-5 shadow-md text-center border py-2 px-10 dark:bg-white text-rose-600 hover:font-bold hover:px-12 transition-all" 
                    value="Enviar"
                    type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Contato;