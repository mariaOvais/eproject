const orientArray = [
    {
        title : "1 Ton ORBIT DC Inverter",
        desc: "Orbit is a monster from the Planet Series. With Catechin filters, instant cooling & heating are features of the air conditioner.",
        img: "images/orient/im1.png",
        price: "109,800",
        feature1: "Japanese PCB Kit",
        feature2: "For All Weathers Heat & Cool",
        id: 1
            
    },
    {
        title : "1 Ton SUPREME DC Inverter",
        desc: "Need an air conditioner that cools quicker, faster and wider than ever before? Orient presents the all-new Supreme Heat and Cool DC Inverter AC ",
        img: "images/orient/im2.png",
        price: "110,800",
        feature1: "Japanese PCB Kit",
        feature2: "For All Weathers Heat & Cool",
        id: 2
        
    },

    {
        title : "1 Ton Ultron CLASSIC eComfort Smart Edition DC Inverter",
        desc: "The Ultron Classic 1-ton Smart Edition takes smartness to a whole new level! It has a built-in energy system which allows you to experience efficiency like never before.",
        img: "images/orient/im4.png",
        price: "129,000",
        feature1: "T3 tropicalized inverter",
        feature2: "Auto Clean Sterilization System",
        id: 4
  },
    {
        title : "1 Ton Ultron EVA eComfort Metallic Gold DC Inverter",
        desc: "Orient T3 IoT DC Inverter EVA Series Air-conditioners are equipped with T3 Tropicalized Inverter technology to ensure best cooling performance even at an ambient temperature of 60 degree celsius",
        img: "images/orient/im5.png",
        price: "130,700",
        feature1: "T3 tropicalized inverter",
        feature2: "Auto Clean Sterilization System",
        id: 5
  },
    {
        title : "1 Ton Ultron EVA eComfort Metallic Silver DC Inverter",
        desc: "Orient T3 IoT DC Inverter EVA Series Air-conditioners are equipped with T3 Tropicalized Inverter technology to ensure best cooling performance even at an ambient temperature of 60 degree celsius",
        img: "images/orient/im6.png",
        price: "130,700",
        feature1: "T3 tropicalized inverter",
        feature2: "Auto Clean Sterilization System",
        id: 6
  },
    {
        title : "1 Ton Ultron EVA eComfort Metallic White DC Inverter",
        desc: "Orient T3 IoT DC Inverter EVA Series Air-conditioners are equipped with T3 Tropicalized Inverter technology to ensure best cooling performance even at an ambient temperature of 60 degree celsius.",
        img: "images/orient/im7.png",
        price: "130,700",
        feature1: "T3 tropicalized inverter",
        feature2: "Auto Clean Sterilization System",
        id: 7
  },
    {
        title : "1 Ton Ultron KING eComfort Silk White DC Inverter",
        desc: "Orient T3 IoT DC Inverter King Series Air-conditioners are equipped with T3 Tropicalized Inverter technology to ensure best cooling performance even at an ambient temperature of 60 degree celsius.",
        img: "images/orient/im8.png",
        price: "117,699",
        feature1: "T3 tropicalized inverter",
        feature2: "Auto Clean Sterilization System",
        id: 8
  },
    {
        title : "1 Ton Ultron MEGA eComfort DC Inverter",
        desc: "Beautifully sleek white design of Mega air conditioner is accompanied by smart features at the most affordable price. ",
        img: "images/orient/im9.png",
        price: "129,000",
        feature1: "T3 tropicalized inverter",
        feature2: "Auto Clean Sterilization System",
        id: 9
  },
    {
        title : "1 Ton Ultron ROYAL eComfort DC Inverter",
        desc: "With the biggest indoor unit and 4D air throw operation, Ultron Royal is the best option when it comes to faster and efficient cooling. ",
        img: "images/orient/im10.png",
        price: "129,000",
        feature1: "T3 tropicalized inverter",
        feature2: "Auto Clean Sterilization System",
        id: 10
  },
    {
        title : "1 Ton Ultron SUPER eComfort Mirror Black DC Inverter",
        desc: "Ultron Super Mirror 1 Ton Ac has the beautiful black mirror panel with the biggest indoor unit and the decent black color. ",
        img: "images/orient/im11.png",
        price: "140,999",
        feature1: "T3 tropicalized inverter",
        feature2: "Auto Clean Sterilization System",
        id: 11
  }

]




let orient = document.getElementById('orient')



let orientData = ''

orientArray.forEach(e => {
    orientData += `
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

    orient.innerHTML = orientData
});
