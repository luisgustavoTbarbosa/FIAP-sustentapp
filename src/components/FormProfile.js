import React from  'react';
import { Formik, Form, Field } from 'formik';

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
            <Formik
                initialValues={{
                    cep: '',
                    rua: '',
                    numero: '',
                    bairro: '',
                    cidade: '',
                    uf: ''
                }}
            >
                {() => (
                    <Form className="form-endereco">
                        <div>
                            <label htmlFor="cep" className="title-label">CEP</label>
                            <Field id="cep" name="cep" type="text" onBlur={searchCep} />
                        </div>
                        <div>
                            <label htmlFor="rua" className="title-label">Rua</label>
                            <Field id="rua" name="rua" type="text" />
                        </div>
                        <div>
                            <label htmlFor="numero" className="title-label">Número</label>
                            <Field id="numero" name="numero" type="text" />
                        </div>
                        <div>
                            <label htmlFor="bairro" className="title-label">Bairro</label>
                            <Field id="bairro" name="bairro" type="text" />
                        </div>
                        <div>
                            <label htmlFor="cidade" className="title-label">Cidade</label>
                            <Field id="cidade" name="cidade" type="text" />
                        </div>
                        <div>
                            <label htmlFor="uf" className="title-label">Estado</label>
                            <Field id="uf" name="uf" type="text" />
                        </div>
                        <button type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}