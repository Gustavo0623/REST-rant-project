const React = require('react')
const Def = require ('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div className='container'>
                    <img src="/css/images/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg" alt="healthy salad bowl"/>
                    <div>
                        Photo By <a href="https://unsplash.com/@edgarraw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edgar Castrejon</a> on <a href="https://unsplash.com/s/photos/food-free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home