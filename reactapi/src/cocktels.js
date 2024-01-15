const cocktels = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(respuesta => respuesta.json())
    .then(datos => datos.drinks);

export default function RetrieveData() {
    const cocktelsToShow = cocktels.map(cocktel =>
        <div key={cocktel.idDrink} className='Cocktel'>
            <h1>{cocktel.strDrink}</h1>
            <img src={cocktel.strDrinkThumb} alt="Cocktel" className={cocktel.strCategory === 'Cocktail' ? 'coolImage' : 'uncoolImage'}></img>
            <p>Category: {cocktel.strCategory}</p>
        </div>
    );

    return (
        <div>
            {cocktelsToShow}
        </div>
    );
}