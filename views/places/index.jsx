const React = require('react')
const Def = require('../default')

function placesIndex (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className='col-sm-6'>
                <h2>{place.name}</h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} />
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                    {placesFormatted}
                </div>
                <div>
                Thai Food Photo by <a href="https://unsplash.com/@grimnoire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">emy</a> on <a href="https://unsplash.com/s/photos/thai-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> <br/>
                Cat Cafe Photo by <a href="https://unsplash.com/@ricardol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ricardo L</a> on <a href="https://unsplash.com/s/photos/coffee-cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

app.use(express.urlencoded({ extended: true }))

module.exports = placesIndex