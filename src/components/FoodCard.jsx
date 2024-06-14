export const FoodCard = () => {
    return (
        <>
            <div className="col-12 col-lg-12 col-sm-12 m-5">
                <div className="card-food rounded-5  pb-2">
                    <div className="card-food-heart float-end p-3">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <img src="images/card-1.png" className=" card-food-img pt-4" alt="" />
                    <div className="ps-4">
                        <h2>Fattoush salad</h2>
                        <p>Description of the item</p>
                        <p><span><i class="fa-solid fa-dollar-sign"></i>24.00</span> <span>4.9</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}