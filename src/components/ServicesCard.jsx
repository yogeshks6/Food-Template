export const ServicesCard = () => {
    const jasondata = [
        {
            "prroduct_img": 'images/salad.png',
            "product_name": "Catering",
            "description": "Delight your guests with our flavors and  presentation"
        },
        {
            "prroduct_img": 'images/watch.png',
            "product_name": "Fast delivery",
            "description": "We deliver your order promptly to your door"
        },
        {
            "prroduct_img": 'images/cart.png',
            "product_name": "Online Ordering",
            "description": "Explore menu & order with ease using our Online Ordering "
        },
        {
            "prroduct_img": 'images/gift.png',
            "product_name": "Gift Cards",
            "description": "Give the gift of exceptional dining with Foodi Gift Cards"
        },


    ]
    return (
        <>
            {jasondata.map((currElem) => {
                return (
                    <div className="col-12 col-lg-6 col-md-6 text-center services-card py-4">
                        <img src={currElem.prroduct_img} alt="" />
                        <h5 className="mt-3">{currElem.product_name}</h5>
                        <p className="mx-auto mt-3 text-dark w-50">{currElem.description}</p>
                    </div>)
            })}

        </>
    )
}