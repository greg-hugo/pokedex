import { cleanup, render, screen, waitFor, fireEvent } from '@testing-library/react';
import { fetchPokemonDetail } from '@/utils/fetch';
import Page from '../page';

jest.mock('@/utils/fetch.ts', () => ({
  fetchPokemonDetail: jest.fn()
}));

afterEach(cleanup);

describe("Testing Pokemon Detail Page", () => {
    beforeEach(() => {
        (fetchPokemonDetail as jest.Mock).mockResolvedValue({
            id: 6,
            abilities: [
                {
                    ability: {name: "blaze"}
                },
                {
                    ability: {name: "solar-power"}
                }
            ],
            evolution_chain: [
                {
                    id: 4,
                    name: "charmander",
                    sprites: {
                        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                    },
                    types: [
                        {
                            type: {name: "fire"}
                        }
                    ]
                },
                {
                    id: 5,
                    name: "charmeleon",
                    sprites: {
                        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
                    },
                    types: [
                        {
                            type: {name: "fire"}
                        }
                    ]
                }
            ],
            height: 17,
            weight: 905,
            name: "charizard",
            species: {
                name: "charizard"
            },
            moves: [
                {
                    move: {name: "mega-punch"}
                },
                {
                    move: {name: "flamethrower"}
                }
            ],
            stats: [
                {
                    base_stat: 70,
                    stat: {name: 'hp'}
                },
                {
                    base_stat: 70,
                    stat: {name: 'attack'}
                },
                {
                    base_stat: 70,
                    stat: {name: 'defense'}
                },
                {
                    base_stat: 70,
                    stat: {name: 'special-attack'}
                },
                {
                    base_stat: 70,
                    stat: {name: 'special-defense'}
                },
                {
                    base_stat: 70,
                    stat: {name: 'speed'}
                },
            ],
            types: [
                {
                    type: {name: 'fire'}
                },
                {
                    type: {name: 'flying'}
                }
            ],
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
            },
        });
    });

    it('renders the page with the correct name and types', async () => {
        render(<Page params={{ id: 6 }} />);
        await waitFor(() => {
            expect(screen.getByTestId("detail-page")).toBeInTheDocument();

            const pokemonName = screen.getByRole("heading", {
                level: 1,
                name: "charizard"
            });
            expect(pokemonName).toBeInTheDocument();

            const pokemonTypes = screen.getAllByTestId('pokemon-type-pill');
            expect(pokemonTypes).toHaveLength(2);
        });
    });

    it("renders the correct background color", async () => {
        render(<Page params={{ id: 6 }} />);
        await waitFor(() => {
            const detailPage = screen.getByTestId("detail-page")
            expect(detailPage).toBeInTheDocument();

            expect(detailPage).toHaveStyle(`backgroundColor: #EE8130`); //fire type first
        });
    })

    it('renders DetailNavbar correctly', async () => {
        render(<Page params={{ id: 6 }} />);
        const detailNavbar = screen.getByTestId('detail-navbar');
        expect(detailNavbar).toBeInTheDocument();
    });

    it('renders the correct amount of NavbarButton', () => {
        render(<Page params={{ id: 6 }} />);
        const navbarButtons = screen.getAllByTestId("navbar-button");
        expect(navbarButtons.length).toBe(4);
    });

    it('renders the AboutInfo component by default', async () => {
        render(<Page params={{ id: 6 }} />);
        const aboutInfo = screen.getByTestId('about-info');
        expect(aboutInfo).toBeInTheDocument();
    });

    it('changes to StatsInfo when "Base Stats" is clicked', async () => {
        render(<Page params={{ id: 6 }} />);
        const statsInfoButton = screen.getByText("Base Stats");
        fireEvent.click(statsInfoButton);

        await waitFor(() => {
            expect(screen.getByTestId("stats-info")).toBeInTheDocument();
        });
    })

    it('changes to EvolutionChain when "Evolutions" is clicked', async () => {
        render(<Page params={{ id: 6 }} />);
        const evolutionButton = screen.getByText("Evolution");
        fireEvent.click(evolutionButton);

        await waitFor(() => {
            expect(screen.getByTestId("evolution-chain")).toBeInTheDocument();
        });
    });

    it('changes to MoveInfo when "Moves" is clicked', async () => {
        render(<Page params={{ id: 6 }} />);
        const moveButton = screen.getByText("Moves");
        fireEvent.click(moveButton);

        await waitFor(() => {
            expect(screen.getByTestId("move-info")).toBeInTheDocument();
        });
    });

    it('changes back to AboutInfo when "About" is clicked', async () => {
        render(<Page params={{ id: 6 }} />);
        const moveButton = screen.getByText("Moves");
        fireEvent.click(moveButton);
        await waitFor(() => {
            expect(screen.getByTestId("move-info")).toBeInTheDocument();
        });

        const aboutButton = screen.getByText("About");
        fireEvent.click(aboutButton);
        await waitFor(() => {
            expect(screen.getByTestId("about-info")).toBeInTheDocument();
        });
    });
});