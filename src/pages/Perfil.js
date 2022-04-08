import '../components/styles/Perfil.css';
import { Link } from 'react-router-dom';

export default function Perfil() {
    const userConfig = {
        name: 'Luís Gustavo',
        imageProfile: 'https://i.imgur.com/eDaagpn.jpg'
    }

    function itemSelectActive(e) {
        const selectItems = document.querySelectorAll('.select-item');

        selectItems.forEach((item) => {
            item.classList.remove('active')

            if(item === e.target) {
                item.classList.add('active')
            }
        })
    }

    return (
        <div className="container">
            <header className="header">
                <div className="container-title-page">
                    <div className="return">
                        <Link className="link-router" to="/">
                            <svg width="90%" height="90%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6364 16.7592C14.073 16.3998 14.1236 15.7685 13.7493 15.3492L8.08254 9L13.7493 2.65081C14.1236 2.23148 14.073 1.60018 13.6364 1.24076C13.1997 0.881339 12.5424 0.929902 12.1681 1.34923L6.50136 7.69842C5.83288 8.4474 5.83288 9.5526 6.50136 10.3016L12.1681 16.6508C12.5424 17.0701 13.1997 17.1187 13.6364 16.7592Z" fill="#061941"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="title-page">Perfil</div>
                </div>
                <div className="sub-info">
                    <div className="container-user-profile">
                        <img className="user-profile" src={userConfig.imageProfile} alt="Imagem de perfil do usuário" />
                    </div>
                    <p className="user-name">{userConfig.name}</p>
                    <div className="container-select">
                        <div className="select-item about active" onClick={itemSelectActive}>Sobre</div>
                        <div className="select-item data" onClick={itemSelectActive}>Dados</div>
                    </div>
                </div>
            </header>
        </div>
    )
}