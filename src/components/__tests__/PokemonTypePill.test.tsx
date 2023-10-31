import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PokemonTypePill from '../PokemonTypePill'

afterEach(cleanup);

describe("Testing PokemonTypePill", () => {
    it("renders correctly", () => {
        render(<PokemonTypePill type={"Fighting"} />)

        const heading = screen.getByRole("heading", {
            level: 5,
            name: "Fighting"
        });

        expect(heading).toBeInTheDocument();
    });

    it("contains the given type", () => {
        const { rerender } = render(<PokemonTypePill type={"Fighting"} />)
        let heading = screen.getByRole("heading", {
            level: 5,
            name: "Fighting"
        });
        expect(heading).toBeInTheDocument();

        rerender(<PokemonTypePill type={"Ghost"} />);
        heading = screen.getByRole("heading", {
            level: 5,
            name: "Ghost"
        });
        expect(heading).toBeInTheDocument();
    });
});