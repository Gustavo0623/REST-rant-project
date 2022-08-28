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
                <div className="border col-sm-4 comments no-wrap">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`} id = "comment-delete">
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
            <div className="buttons container-fluid">
                <a href={`/places/${data.id}/edit`} className="btn btn-warning w-25">Edit</a>  
                <form method="POST" action={`/places/${data.id}?_method=DELETE`} className="btn btn-danger"> 
                    <button type="submit" className='delete'>Delete</button>
                </form>
            </div>
            <h2 className="card-title com-title">Comments</h2>
            <div className="card container-fluid comments">
                {comments}
            </div>
            <hr/>
            <div className="container-fluid">
                <h3>RANT! or RAVE!</h3>
                <form action={`/places/${data.place.id}/comment`} method="POST" className="comment-form">
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <label htmlFor="content">Content</label>
                            <textarea id="content" name="content" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="author">Author</label>
                            <input id="author" name="author" className="form-control" />
                        </div>
                        <div className="form-group col-sm-4">
                            <div className="range">
                                <p className='min-max'>1</p>
                                <label htmlFor="stars">Star Rating</label>
                                <p className="min-max">5</p>
                            </div>
                            <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="rant">Rant?</label>
                            <input type="checkbox" id="rant" name="rant" />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Add Comment" />
                </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
