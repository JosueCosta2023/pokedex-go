import './style.css'
import pokebola from '../../assets/pokebalsOpen.png'
import WeightIcon from '../../assets/weight.svg'
import HeightIcon from '../../assets/height.svg'
import BannerPokeball from '../../assets/bannerpoke.svg'
import PokemonImg from '../../assets/pokemon.svg'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function Card() {
    return (
        <section className="container-details">
            <div className="card-pokemon">
                <img src={BannerPokeball} alt="banner pokeball" />
                <div className="pokemon-title">
                    <div>
                        <Link to={'/'}>
                            <FiArrowLeft size={24} />
                        </Link>
                        <p>Bulbasaur</p>
                    </div>
                    <span>#001</span>
                </div>

                <div className="pokemon-image">
                    <img src={PokemonImg} alt="" />
                </div>

                <div className="pokemon-type">
                    <span>Poison</span>
                    <span>Grass</span>
                </div>

                <div className="pokemon-about">
                    <h3>Sobre</h3>
                    <div className="about-list">
                        <div>
                            <div>
                                <img src={WeightIcon} alt="Icone de peso" />
                                <span> 6.9 Kg</span>
                            </div>
                            <p>Peso</p>
                        </div>
                        <div>
                            <div>
                                <img src={HeightIcon} alt="Icone de altura" />
                                <span> 0.7 Cm</span>
                            </div>
                            <p>Altura</p>
                        </div>
                    </div>
                </div>

                <div className="pokemon-moves">
                    <h3>Movimentos Principais</h3>
                    <div>
                        <span>Razor Leaf</span>
                        <span>Solar Beam</span>
                        <span>Sludge Bomb</span>
                    </div>
                </div>

                <div className="pokemon-area">
                    <h3>Status</h3>
                    <div>
                        <div>
                            <p>Xp</p>
                            <span>64</span>
                        </div>
                        <div>
                            <p>Atack</p>
                            <span>49</span>
                        </div>
                        <div>
                            <p>Hp</p>
                            <span>45</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-pokemon">
                <img src={BannerPokeball} alt="banner pokeball" />
                <div className="pokemon-title">
                    <h3>habilidades</h3>
                </div>

                <div className="pokemon-image">
                    <img src={pokebola} alt="" />
                </div>

                <div className="pokemon-about">
                    <h3>Pricipais Habilidades</h3>
                </div>

                <div className="pokemon-hability">
                    <div className="pokemon-question">
                        <p className="question">Overgrow</p>
                        <span className="response">Esta é a habilidade padrão do Bulbasaur. Quando os Pontos de Vida (HP) do Bulbasaur estão abaixo de um terço do máximo, os ataques do tipo Grama que ele usa aumentam em poder.</span>
                    </div>
                    <div className="pokemon-question">
                        <p className="question">Chlorophyll</p>

                        <span className="response">Esta é uma habilidade oculta que o Bulbasaur pode ter. Quando estiver ensolarado durante a batalha, a Velocidade do Bulbasaur aumenta.</span>
                    </div>
                    <div className="pokemon-question">
                        <p className="question">Thick Fat</p>

                        <span className="response">Essa é uma habilidade oculta para Bulbasaur e suas evoluções. Reduz o dano causado por golpes do tipo Fogo e Gelo. Isso torna Bulbasaur e suas evoluções muito mais resistentes a Pokémon que usam esses tipos de ataques, aumentando sua versatilidade defensiva.</span>
                    </div>
                </div>
            </div>

        </section>
    )
}