import './style.css'
import pokebola from '../../assets/pokebalsOpen.png'
import WeightIcon from '../../assets/weight.svg'
import HeightIcon from '../../assets/height.svg'
import BannerPokeball from '../../assets/bannerpoke.svg'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPokemonsFullDetails } from '../../service/getApi'


export function Card() {

    const [pokemonDetail, setPokemonDetail] = useState([])

    const { id } = useParams()

    useEffect(() => {
        async function fetchPokemonsDetails() {
            try {
                const response = await getPokemonsFullDetails(id)
                setPokemonDetail(response)
            } catch (error) {
                console.error('Erro ao buscar detalhes do pokemon', error)
            }
        }
        fetchPokemonsDetails()
    }, [])

    return (
        <section className="container-details">
            <div className="card-pokemon">
                <img src={BannerPokeball} alt="banner pokeball" />
                <div className="pokemon-title">
                    <div>
                        <Link to={'/'}>
                            <FiArrowLeft size={24} />
                        </Link>
                        <p>{pokemonDetail.name}</p>
                    </div>
                    <span>#0{pokemonDetail.id}</span>
                </div>

                <div className="pokemon-image">
                    <img src={pokemonDetail.sprites?.other['official-artwork'].front_default} alt="" />
                </div>

                <div className="pokemon-type">
                    {
                        pokemonDetail.types && pokemonDetail.types.map((types, index) => {
                            return (
                                <span key={index}>{types.type.name}</span>
                            )
                        })
                    }
                </div>

                <div className="pokemon-about">
                    <h3>Sobre</h3>
                    <div className="about-list">
                        <div>
                            <div>
                                <img src={WeightIcon} alt="Icone de peso" />
                                <span>{pokemonDetail.weight} Kg</span>
                            </div>
                            <p>Peso</p>
                        </div>
                        <div>
                            <div>
                                <img src={HeightIcon} alt="Icone de altura" />
                                <span> {pokemonDetail.height} Cm</span>
                            </div>
                            <p>Altura</p>
                        </div>
                    </div>
                </div>

                <div className="pokemon-moves">
                    <h3>Principais Movimentos</h3>
                    <div>
                        {
                            pokemonDetail.moves && pokemonDetail.moves.slice(0, 3).map((moves, index) => {
                                return (
                                    <span key={index}>{moves.move.name}</span>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="pokemon-area">
                    <h3>Status</h3>
                    <div>
                        <div>
                            <p>Xp</p>
                            <span>{pokemonDetail.base_experience}</span>
                        </div>
                        {pokemonDetail.stats?.slice(0, 2).map((item, index) => (
                            <div key={index}>
                                <p>{item.stat.name}</p>
                                <span>{item.base_stat}</span>
                            </div>
                        ))}
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

                <div className="pokemon-habilitys">
                    {pokemonDetail.abilities && pokemonDetail.abilities.slice(0,3).map((aby, index) => (
                        <div className="pokemon-ability" key={index}>
                            <p className="name-ability">{aby.ability.name}</p>
                            <span className="description-ability">{aby.ability.description_ability}</span>
                        </div>
                    ))
                    }
                </div>
            </div>

        </section>
    )
}