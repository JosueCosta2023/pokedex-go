import React from "react"
import WeightIcon from '../../assets/weight.svg'
import HeightIcon from '../../assets/height.svg'
import PokemonImg from '../../assets/pokemon.svg'
import BannerPokeball from '../../assets/bannerpoke.svg'
import './style.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from "react-router-dom"

export function Detail() {
    return (
       
        <section className="container-details">
            <div className="card-pokemon">
                <img src={BannerPokeball} alt="banner pokeball" />
                <div className="pokemon-title">
                    <div>
                        <Link to={'/'}>
                            <FiArrowLeft size={32} />
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
                        <span>Movimento 1</span>
                        <span>Movimento 3</span>
                        <span>Movimento 3</span>
                    </div>
                </div>

                <div className="pokemon-area">
                    <h3>Onde encontra-lo?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus, explicabo facilis ex delectus eaque tempora reiciendis. Natus quis ut placeat, explicabo quae cumque tenetur libero labore mollitia earum consectetur!</p>
                </div>
            </div>

            <div className="card-pokemon">
                <img src={BannerPokeball} alt="banner pokeball" />
            </div>
        </section>
    )
}