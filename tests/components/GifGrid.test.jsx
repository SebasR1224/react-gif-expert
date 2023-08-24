import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('pruebas en GifGrid', () => {
    const category = 'One Punch'
    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
     })

     test('Debe de mostrar items cuando de cargan las imágenes useFetch', () => {
        const gifs = [
            {
                id: 'ABC-123',
                title: 'Saitama',
                url: 'http://localhost/saitama.jpg'
            },
            {
                id: 'DEF-123',
                title: 'Naruto',
                url: 'http://localhost/naruto.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2 )
     })
 })