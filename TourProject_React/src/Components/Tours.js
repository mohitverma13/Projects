import Card from "./Card";


function  Tours({tours,removeTour}){
    return(
        <div className="container">

        <div >
            <h2 className="title">Plan With Sparrow</h2>
        </div>
        <div className="cards">
        {
            tours.map((tour)=>{
                return <Card  key={tour.id} {...tour} removeTour={removeTour}></Card>
                /* key ={tour.id } is used whhile mapping to prevent this  Warning: Each child in a list should have a unique "key" prop "agar koi unique id nhi hai to index pass karenge*/  
            })
        }
        </div>
    </div>
    )

}
export default Tours;