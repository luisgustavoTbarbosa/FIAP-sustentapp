import React, {Component} from 'react';
import './styles/Main.css';

const userConfig = {
    name: 'Luís Gustavo',
    imageProfile: 'https://i.imgur.com/eDaagpn.jpg'
}

export default class Main extends Component {
    render() {
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
}