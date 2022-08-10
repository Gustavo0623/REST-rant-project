const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oh No! We cannot find this page!</p>
                <div className="container">
                    <img src="/css/images/jamie-matocinos-WAYY2WoGb8w-unsplash.jpg" alt="Sign saying, 'DIET = Did I Eat That?"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@jamievalmat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jamie Matociños</a> on <a href="https://unsplash.com/s/photos/funny-free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404

