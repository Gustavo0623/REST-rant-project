const React = require('react')
const Def = require('../default')

function show (data) {
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
                                Located in {data.place.city}, {data.place.state}.
                                <br/>
                                Founded in the year {data.place.founded}
                            </p>
                        </div>
                    </div>
                </div>
                <img src= {data.place.pic} alt="Restaurant display picture" className='img-fluid rounded'/>
            </div>
            <div className="card container-fluid comments">
                <h2 className="card-title com-title">Comments</h2>
                <hr/>
                <p className="card-text comment">No Comments Yet!</p>
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
