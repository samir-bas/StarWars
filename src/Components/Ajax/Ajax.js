import React from "react";
import Axios from "axios";

// import Article from "./article/Article";

class News extends React.Component {
    constructor(props) {
        super(props);
        // Ces états vont nous permettre de gérer les différents temps de la requêtes
        this.state = {
            // Est ce que la réponse du serveur est arrivée ?
            loaded: false,
            // Est ce qu'il y a une erreur dans la réponse ?
            error: false,
            // Données reçues si tout s'est bien passé
            data: null,
            // Les données au format HTML
            articles: null
        }
    }


    // Méthode de cycle de vie appelée après le render (affichage) du composant, idéale pour la requête
    componentDidMount() {
        // On utilise Axios pour effectuer une requête de type get
        // const urlApi = "https://swapi.dev/api/planets/1"
        // const urlApi = "https://swapi.dev/api/planets/?page=1"
        // const urlApi = "https://swapi.dev/api/planets/"
        const urlApi = "https://swapi.dev/api/"

        Axios
        .get(urlApi)
        // Si la requête réussi, une fois que la réponse est arrivée
        .then((response) => {
            // On génère une liste de composants articles sur la base des données reçues
            // On le fait ici pour ne pas avoir de logique au niveau de l'affichage
            let articles = response.data.map((article)=>{
                 return <Article article={article} />
            });
            // On modifie l'état
            // On stock les données brutes (tableau JSON) et la liste de composant Article (rendu html)
            this.setState({
                loaded: true,
                data: response.data,
                articles: articles
            })
            console.log(response.data);

        })
        // Si la requête a échoué et que le serveur a renvoyé une erreur, alors on l'attrape et on la stocke dans l'état
        .catch((error) => {
            this.setState({
                loaded: true,
                error: error
            })
        })
    }

    // Notre affichage est conditionné aux différents états de la requête et de la réponse.
    render() {
        if(this.state.loaded) {
            if(this.state.error) {
                return(
                    <p>Une erreur est survenue :-(. Message : {this.state.error.message}</p>
                );
            }
            return(
                <div>
                <h2>Les derniers articles</h2>
                <h1>{this.state.data["people"]}</h1>
                <h1>{this.state.data[0]}</h1>
                {/* <h1>{this.state.data.results[1].name}</h1> */}
                {/* <h1>{this.state.data.next}</h1> */}
                {/* <h1>{this.state.data.name}</h1>
                <h1>{this.state.data.rotation_period}</h1>  */}
                // <section>
                //     <h2>Les derniers articles</h2>
                //     <div className="row">
                //         {this.state.articles}
                //     </div>
                // </section>                </div>

            );
        }
        return(
            <p>Vos données sont en cours de chargement</p>
        );
    }
}

export default News;