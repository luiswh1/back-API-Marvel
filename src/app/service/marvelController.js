import axios from 'axios';

class MarvelController {
    constructor() {
        this.urlBase =  `https://gateway.marvel.com/v1/public/characters?apikey=4ff772b71991717c8573759b953eedde&hash=22440e3aba8e1547b5a51ebb3243aa05&ts=1611155409`;
        this.registrosPorPagina = 100;
    }

    // http://localhost:3000/personagens?pagina=1
    index = (req, res) => {
        const { pagina } = req.query;

        let offset = 0;

        if (pagina && pagina > 1) {
            offset = ((pagina - 1) * this.registrosPorPagina) + 1;
        }

        const url = this.urlBase + `&limit=${this.registrosPorPagina}&offset=${offset}`;

        axios.get(url).then(resposta => {
            return res.json(resposta.data.data);
        });
    }

    // localhost:3000/personagens/1111200
    show = (req, res) => {
        const { id } = req.params;

        const hqs = [];

        /// requsicao para a API da marvel com o id;
        const personagem =       {
            id: 1010697,
            name: "Virginia Dare",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: {
                path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                extension: "jpg"
            },
            comics: {
                items: [],
            }
        };

        // percorrer o personagem.comics pra buscar todos os HQ's
        personagem.comics.items.forEach((hq) => {
            const url = hq.resourceURI;

            //axios.get(url).then(resposta => {
            //    hqs.push(resposta.data.data.results)
            //});            
        });

        hqs.push({
            id: 148,
            digitalId: 6312,
            title: "1602 (2003) #4",
            issueNumber: 4,
        });

        hqs.push({
            id: 149,
            digitalId: 63122,
            title: "16034 (2009) #4",
            issueNumber: 4,
        });

        res.json({ personagem, hqs });
    }
}

export default new MarvelController();