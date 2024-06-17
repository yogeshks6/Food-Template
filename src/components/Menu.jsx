export const Menu = () => {
    const jasondata = [
        {
            "prroduct_img_gap": 'images/menu-img-rate.png',
            "product_price": "$12",
            "product_head": "Chicken",
            "product_name": "Finger Chicken",
        },
        {
            "prroduct_img_gap": 'images/menu-img-rate.png',
            "product_price": "$13",
            "product_name": "Chicken Grilled",
        },
        {
            "prroduct_img_gap": 'images/menu-img-rate.png',
            "product_price": "$11",
            "product_name": "Chicken Prame",
        },
        {
            "prroduct_img_gap": 'images/menu-img-rate.png',
            "product_price": "$8",
            "product_name": "Chicken Wrap",
        },
        {
            "prroduct_img_gap": 'images/menu-img-rate.png',
            "product_price": "$14",
            "product_name": "Chicken Marsala",
        },
        {
            "prroduct_img_gap": 'images/menu-img-rate.png',
            "product_price": "$12",
            "product_name": "Chicken Chilli",
        },




    ]
    return (
        <>

            <div className="menu d-flex align-items-center">
                <div className="col-12 col-lg-6 col-md-6 text-center ">
                    <img src="images/menu-img-1.png" className="m   5 " alt="" />
                </div>
                <div>
                    {jasondata.map((currElem) => {
                        return (


                            <div className="col-12 col-lg-6 col-md-6">
                                <h1 className="mb-4 menu-h1 ms-2">{currElem.product_head}</h1>
                                <p className="d-flex justify-content-between gap-5">
                                    <h4 className="w-100">{currElem.product_name}</h4>
                                    <img src={currElem.prroduct_img_gap} className=" " alt="" />
                                    <h4 className="">{currElem.product_price}</h4>
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="menu d-flex align-items-center">
                <div>
                    <h1 className="mb-4 menu-h1 ms-5">Breakfast</h1>
                    <p className="d-flex gap-5">
                        <h4 className="ms-5">Finger Chicken</h4>
                        <img src="images/menu-img-rate.png" className="me-5 ms-5" alt="" />
                        <h4 className="ms-4 me-5">$12</h4>
                    </p>
                    <p className="d-flex gap-5">
                        <h4 className="ms-5">Finger Chicken</h4>
                        <img src="images/menu-img-rate.png" className="me-5 ms-5" alt="" />
                        <h4 className="ms-4 me-5">$12</h4>
                    </p>
                    <p className="d-flex gap-5">
                        <h4 className="ms-5">Finger Chicken</h4>
                        <img src="images/menu-img-rate.png" className="me-5 ms-5" alt="" />
                        <h4 className="ms-4 me-5">$12</h4>
                    </p>
                    <p className="d-flex gap-5">
                        <h4 className="ms-5">Finger Chicken</h4>
                        <img src="images/menu-img-rate.png" className="me-5 ms-5" alt="" />
                        <h4 className="ms-4 me-5">$12</h4>
                    </p>
                    <p className="d-flex gap-5">
                        <h4 className="ms-5">Finger Chicken</h4>
                        <img src="images/menu-img-rate.png" className="me-5 ms-5" alt="" />
                        <h4 className="ms-4 me-5">$12</h4>
                    </p>
                    <p className="d-flex gap-5">
                        <h4 className="ms-5">Finger Chicken</h4>
                        <img src="images/menu-img-rate.png" className="me-5 ms-5" alt="" />
                        <h4 className="ms-4 me-5">$12</h4>
                    </p>

                </div>
                <div className="me-5">
                    <img src="images/menu-img-2.png" className="ms-5 " alt="" />
                </div>
            </div>
        </>
    )
}
