import React from 'react'
type MyProp = {
    data: {
        id: number
        title: string
        price: number
        rating: number
        images: string[]
    }[]
}
const Ratings=(num:number)=>{
    let arr=[<i className="bi bi-star"></i>,<i className="bi bi-star"></i>,<i className="bi bi-star"></i>,<i className="bi bi-star"></i>,<i className="bi bi-star"></i>]
    let index:number=0;
    for(let i=num;i>=1;i--){
        arr[index]=<i className="bi bi-star-fill"></i>
        console.log((i))
    if(i>1&&i<2&&!((i-1)<0.5)){
        arr[index+1]=<i className="bi bi-star-half"></i>
    }
    index++;
    }
  
    return arr
}
const MyComponent = ({ data }: MyProp) => {
    console.log(data)
    return (
        <div className='container'>
                    {
                        data.map(x => {
                            return <div className='d-flex justify-content-around col-12 border my-4 py-3 bg-success text-white'>
                                <div className="d-flex flex-column col-4" >
                                    <div id={`demo${x.id}`} className="carousel slide pic" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            {
                                                x.images.map((y, j) => <button type="button" data-bs-target={`#demo${x.id}`} data-bs-slide-to={j} className={`${(j == 0) ? 'active' : ''}`}></button>)
                                            }
                                        </div>
                                        <div className="carousel-inner">
                                            {
                                                x.images.map((y, j) => <div className={`carousel-item ${(j == 0) ? 'active' : ''}`}>
                                                    <img className="d-block image" src={y} alt="Los Angeles" style={{ width: '100%' }} />

                                                </div>)
                                            }
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target={`#demo${x.id}`} data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target={`#demo${x.id}`} data-bs-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex flex-column col-6" >

    <p>Title: <span>{x.title}</span></p>
    <p>Price: <span>{x.price}</span></p>
    <p>rating: <span>{Ratings(x.rating).map(x=>x)}</span></p>
    <button className="btn btn-warning col-4">BUY</button>

                                </div>
                            </div>
                        })
                    }
     

        </div>
    )
}

export default MyComponent