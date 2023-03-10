
// ------------------------------Haier --------------------------
const haierArray = [
    {
        title : "Thunder Inverter",
        desc: "HSU-18HPM/012SDC(W)-T3",
        img: "images/haier/im1.jpg",
        price: "89,999",
        feature1: "T3 Ultra Big Ourdoor",
        feature2: " Wide Voltage With Hyper PCB",
        id: 1
            
    },
    {
        title : "Yunding Inverter",
        desc: "HPU-24HYD/012DC(G)",
        img: "images/haier/im3.jpg",
        price: "99,999",
        feature1: "Air Purification With Super IFD Filters",
        feature2: " Double Air Vent",
        id: 2
        
    },

    {
        title : "Duzin Inverter",
        desc: "HPU-24HDZ/012DC(G)",
        img: "images/haier/im2.jpg",
        price: "129,000",
        feature1: " Vertical Air Flow",
        feature2: " WIFI Control, Smart Inverter",
        id: 3
  },
    {
        title : "Thunder Inverter",
        desc: "HSU-18HPM/012SDC(W)-T3",
        img: "images/haier/im4.jpg",
        price: "95,700",
        feature1: "T3 tropicalized inverter",
        feature2: "Auto Clean Sterilization System",
        id: 4
  },
    {
        title : "Puri Inverter",
        desc: "HSU-18HJ/012USDC(S)",
        img: "images/haier/im5.jpg",
        price: "110,700",
        feature1: " Air Purification",
        feature2: " Super IFD Filter",
        id: 5
  },
    {
        title : "UV Inverter",
        desc: "HSU-18HJUV/022WUSDC(G)",
        img: "images/haier/im6.jpg",
        price: "130,700",
        feature1: " UVC Sterilization",
        feature2: " Anti Corrosion 100% Copper",
        id: 6
  },
    
]


let haier = document.getElementById('haier')



let haierData = ''

haierArray.forEach(e => {
    haierData += `
    <div class="col-lg-4 col-md-6 d-flex justify-content-center orient my-4">
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
                                <div class="modal-content d-flex justify-content-center">
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
                                                <h6 class="priceDetails my-3"><b>PKR:</b> <span class="price">${e.price}</span></h6>
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

    haier.innerHTML = haierData
});






