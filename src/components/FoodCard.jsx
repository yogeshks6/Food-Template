export const FoodCard = () => {
    const jasondata = [
        {
            "prroduct_img": 'images/card-1.png',
            "price": 24.00,
            "rating": 4.9,
            "product_name": "Fattoush salad",
            "description": "Description of the item"
        },

    ]
    return (
        <>
            {jasondata.map((currElem) => {
                return (
                    <div className="col-12 col-lg-12 col-sm-12 m-5">
                        <div className="card-food rounded-5  pb-2">
                            <div className="card-food-heart float-end p-3 px-4">
                                <i className="fa-regular fa-heart" id="white"></i>
                        </div>
                        <img src={currElem.prroduct_img} className=" card-food-img pt-2 pb-2" alt="" />
                        <div className="ps-4">
                            <h2>{currElem.product_name}</h2>
                            <p>{currElem.description}</p>
                            <p className="d-flex justify-content-between">
                                <span><i className="fa-solid fa-dollar-sign"></i>{currElem.price}</span>
                                <span className="pe-4"><i className="fa-solid fa-star"></i>{currElem.rating}</span>
                            </p>
                        </div>
                    </div>
                    </div >)
})}

        </>
    )
}

