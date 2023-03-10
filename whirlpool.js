const productArray = [
    {
        title : "5500 BTU PORTABLE AIR CONDITIONER",
        desc: " The Whirlpool portable air conditioner allows for flexible placement within your home. ",
      
        img: "images/whirlpool/portable 1.jpg",   
         price:  '$499.99',
        feature1: "6-ft. LCDI power cord with 3-prong grounded plug uses 115V electrical outlet",
        feature2: "Cool, Dehumidify and Fan Only modes",
        id: 1
            
    },
    {
        title : "6500 BTU PORTABLE AIR CONDITIONER",
        desc: "The Whirlpool portable air conditioner allows for flexible placement within your home.  ",
     
        img: "images/whirlpool/portable 2.jpg",
        price: '$529.99 ',
        feature1: "6-ft. LCDI power cord with 3-prong grounded plug uses 115V electrical outlet",
        feature2: "Cool, Dehumidify and Fan Only modes",
        id: 2
        
    },
    {
        title : "8000 BTU PORTABLE AIR CONDITIONER",
        desc: "The Whirlpool portable air conditioner allows for flexible placement within your home.  ",
     
        img: "images/whirlpool/portable3.jpg",
        price:  '$579.99',
        feature1: "6-ft. LCDI power cord with 3-prong grounded plug uses 115V electrical outlet",
        feature2: "Cool, Dehumidify and Fan Only modes",
        id: 3
        
    },
    {
        title : "ENERGY STAR® 10,000 BTU 115V WINDOW-MOUNTED AIR CONDITIONER WITH REMOTE CONTROL - WHAW101BW",
        desc: "  Easy to install and operate, the Whirlpool 10,000 BTU window-mounted air conditioner quickly cools and dehumidifies a room up to 450 square feet.",
     
        img: "images/whirlpool/window ac1.jpg",
        price: '$849.99',
        feature1: "Energy Star® compliant: 12.1 EER",
        feature1: "Indoor Unit Color",
        feature2: "3 cooling speeds plus Auto option for cooling flexibilit",
        id: 4
  },
  {
    title : "5,000 BTU 115V WINDOW-MOUNTED AIR CONDITIONER WITH MECHANICAL CONTROLS",
    desc: " Easy to install and operate, the Whirlpool 10,000 BTU window-mounted air conditioner quickly cools and dehumidifies a room up to 450 square feet. ",

    img: "images/whirlpool/window ac2.jpg",
    price: '$199.99',
    feature1: "Energy Star® compliant: 12.1 EER",
    feature2: "3 cooling speeds plus Auto option for cooling flexibility",
    id: 5
},
{
    title : "5,000 BTU 115V WINDOW-MOUNTED AIR CONDITIONER WITH MECHANICAL CONTROLS",
    desc: " Easy to install and operate, the Whirlpool 10,000 BTU window-mounted air conditioner quickly cools and dehumidifies a room up to 450 square feet. ",
 
    img: "images/whirlpool/window ac3.jpg",
    price: '$719.99',
    feature1: "Energy Star® compliant: 12.1 EER",
    feature2: "3 cooling speeds plus Auto option for cooling flexibility",
    id: 6
}
,
{
    title : "ENERGY STAR 6,000 BTU 115V WINDOW-MOUNTED AIR CONDITIONER WITH REMOTE CONTROL",
    desc: " Easy to install and operate, the Whirlpool 10,000 BTU window-mounted air conditioner quickly cools and dehumidifies a room up to 450 square feet. ",

    img: "images/whirlpool/window ac4.jpg",
    price: '$349.99',
    feature1: "Energy Star® compliant: 12.1 EER",
    feature2: "3 cooling speeds plus Auto option for cooling flexibility",
    id: 7
}
]




let products = document.getElementById('products')


let productData = ''

productArray.forEach(e => {
    productData += `
    <div class="col-lg-4 col-md-6 d-flex justify-content-center orient my-3">
                <div class="card" style="width: 25rem;">
                <img src="${e.img}" class="card-img-top my-3"
                alt="..." height="150px">
                    <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <p class="card-text">${e.desc}</p>

                        <a href="#" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModal${e.id}">Details</a>
                        <!-- Modal Start -->
                        <!-- Button trigger modal -->
                       
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal${e.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-lg-7">
                                                <img src="${e.img}" class="card-img-top"
                                                alt="..." >
                                            </div>
                                            <div class="col-lg-5 my-5">
                                                <h5 class="card-title">${e.title}</h5>
                                                <h6 class="priceDetails">PKR: <span class="price">${e.price}</span></h6>
                                                <p class="card-text">${e.desc}</p>
                                                    <h5 class="features">Features:</h5>
                                                        
                                                    
                                                    <ul>
                                                        <li>${e.feature1}</li>
                                                        <li>${e.feature2}</li>
                                                        
                                                    </ul>
                                            </div>
                                        </div>



                                    </div>
                                    <div class="modal-footer">
                                        
                                        <button type="button" class="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal  End-->

                    </div>
                </div>
            </div>
            
    
    
    `

    products.innerHTML = productData
});