import React from 'react';
import '../components/styles/Main.css';

export default function Home() {
    const userConfig = {
        name: 'Luís Gustavo',
        imageProfile: 'https://i.imgur.com/eDaagpn.jpg'
    }

    return (
        <div className="container">
            <header>
                <div className="primary-information">
                    <p className="name-user">Olá, {userConfig.name}</p>
                    <span className="current-date">Quarta-feira, 30 de abril - 2022</span>
                </div>
                <div className="image-user-container">
                    <img className="image-user" src={userConfig.imageProfile} alt="Imagem de perfil do usuário" />
                </div>
            </header>
        </div>
    )
}