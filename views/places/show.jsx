const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive card-text comment">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border col-sm-4">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                        <input type="submit" className="btn btn-danger" value="Delete Comment" />
                    </form>
              </div>
            )
        })
    }
    return (
        <Def>
          <main>
            <div className='container-fluid card-holder'>
                <div className='card w-50'>
                    <div className="card-body">
                        <h1 className='card-title'>{data.place.name}</h1>
                        <div className="rating">
                            <h2 className='card-title'>Rating</h2>
                            <p className='card-text'>No Ratings Yet!</p>
                        </div>
                        <div className="about">
                            <h2 className='card-title'>About</h2>
                            <p className='card-text'>
                                We proudly serve {data.place.cuisines}
                                <br/> 
                                {data.place.showEstablished()}
                            </p>
                        </div>
                    </div>
                </div>
                <img src= {data.place.pic} alt="Restaurant display picture" className='img-fluid rounded'/>
            </div>
            <div className="card container-fluid comments">
                <h2 className="card-title com-title">Comments</h2>
                <hr/>
                {comments}
            </div>
            
            <div className="buttons container-fluid">
                <a href={`/places/${data.id}/edit`} className="btn btn-warning w-25">Edit</a>  
                <form method="POST" action={`/places/${data.id}?_method=DELETE`} className="btn btn-danger"> 
                    <button type="submit" className='delete'>Delete</button>
                </form>
            </div>
            
          </main>
        </Def>
    )
}

module.exports = show
