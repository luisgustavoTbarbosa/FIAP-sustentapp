import React from  'react';

export default function FormProfile() {
    function searchCep() {
        const cep = document.querySelector('#cep').value;
        const rua = document.querySelector('#rua');
        const bairro = document.querySelector('#bairro');
        const cidade = document.querySelector('#cidade');
        const uf = document.querySelector('#uf');

        if(cep) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
                console.log(data)
                rua.value = data.logradouro;
                bairro.value = data.bairro;
                cidade.value = data.localidade;
                uf.value = data.uf;
            });
        }
    }

    return (
        <div className="container-data">
            <form className="form-endereco">
                <label>
                    <div className="title-label">CEP</div>
                    <input type="text" id="cep" onBlur={searchCep}/>
                </label>
                <label>
                    <div className="title-label">Rua</div>
                    <input type="text" id="rua"/>
                </label>
                <label>
                    <div className="title-label">Número</div>
                    <input type="text" id="numero"/>
                </label>
                <label>
                    <div className="title-label">Bairro</div>
                    <input type="text" id="bairro"/>
                </label>
                <label>
                    <div className="title-label">Cidade</div>
                    <input type="text" id="cidade"/>
                </label>
                <label>
                    <div className="title-label">Estado</div>
                    <input type="text" id="uf"/>
                </label>
                    <button type="submit">Enviar</button>
            </form>
        </div>
    )
}