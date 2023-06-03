

function  Card({src, children} : any) {

    return (
        <>
        <div className="card" style={{width: "18rem"}}>
            {src && <img src={src} className="card-img-top" alt="..."></img>}
            <div className="card-body">
                {children}
            </div>
        </div>
        </>
    )
}

export default Card