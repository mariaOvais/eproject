const productArray = [
    {
        title : "Chrome 1.5 Ton Matt Grey Inverter Split AC",
        desc: "Need an air conditioner that cools quicker, faster and wider than ever before? Orient presents the all-new Supreme Heat and Cool DC Inverter AC ",
      
        img: "images/dawlance/image (1).png",
        price:  ' 160,727.00',
        feature1: "Indoor Unit Color",
        feature2: "Gold Fin",
        id: 1
            
    },
    {
        title : "Enercon 1 Ton Inverter Split AC",
        desc: "Need an air conditioner that cools quicker, faster and wider than ever before? Orient presents the all-new Supreme Heat and Cool DC Inverter AC ",
     
        img: "images/dawlance/image (2).png",
        price: '107,465.00 ',
        feature1: "Indoor Unit Color",
        feature2: "Gold Fin",
        id: 2
        
    },
    {
        title : "Elegance 2 Ton Inverter Split AC",
        desc: "Need an air conditioner that cools quicker, faster and wider than ever before? Orient presents the all-new Supreme Heat and Cool DC Inverter AC ",
     
        img: "images/dawlance/image (3).png",
        price:  '195,886.00',
        feature1: "Indoor Unit Color",
        feature2: "Gold Fin",
        id: 3
        
    },
    {
        title : "Powercon 1.5 Ton Inverter Split AC",
        desc: "Need an air conditioner that cools quicker, faster and wider than ever before? Orient presents the all-new Supreme Heat and Cool DC Inverter AC ",
     
        img: "images/dawlance/image (4).png",
        price: '124,552.00',
        feature1: "Indoor Unit Color",
        feature1: "Indoor Unit Color",
        feature2: "Gold Fin",
        id: 4
  },
  {
    title : "Chrome 1.5 Ton Matt Grey Inverter Split AC",
    desc: "Need an air conditioner that cools quicker, faster and wider than ever before? Orient presents the all-new Supreme Heat and Cool DC Inverter AC ",

    img: "images/dawlance/image (5).png",
    price: '135,610.00',
    feature1: "Indoor Unit Color",
    feature2: "Gold Fin",
    id: 5
},
{
    title : "Avante 1.5 Ton Classic Maroon Inverter Split AC",
    desc: "Need an air conditioner that cools quicker, faster and wider than ever before? Orient presents the all-new Supreme Heat and Cool DC Inverter AC ",
 
    img: "images/dawlance/image (6).png",
    price: '140,625.00',
    feature1: "Indoor Unit Color",
    feature2: "Gold Fin",
    id: 6
}
,
{
    title : "Chrome Pro 1.5 Ton Inverter Split AC",
    desc: "Need an air conditioner that cools quicker, faster and wider than ever before? Orient presents the all-new Supreme Heat and Cool DC Inverter AC ",

    img: "images/dawlance/image (7).png",
    price: '140,625.00',
    feature1: "Indoor Unit Color",
    feature2: "Gold Fin",
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