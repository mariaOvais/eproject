
// ------------------------------Haier --------------------------
const greeArray = [
    {
        title : " Tower Air Cooler",
        desc: " KS-04X61Dg",
        img: "images/gree/image1.png",
        price: "109,800",
        feature1: "Big Evaporation Volume",
        feature2: "Long Air Supply Distance",
        id: 1
            
    },
    {
        title : "G-tech",
        desc: "G - Tech, with 5 - Level Washing and Water-Electricity Separation, makes your life more comfortable",
        img: "images/gree/image2.png",
        price: "110,800",
        feature1: "5 - Level Washing",
        feature2: "Water-Electricity Separation",
        id: 2
        
    },
    {
        title : "1 Ton Ultron SUPER eComfort Mirror Black DC Inverter",
        desc: "G - Tech, with 5 - Level Washing and Water-Electricity Separation, makes your life more comfortable ",
        img: "images/gree/image3.png",
        price: "140,999",
        feature1: "5 - Level Washing",
        feature2: "Water-Electricity Separation",
        id: 3
  },

    {
        title : "Freair",
        desc: "Freair, with Two-way Air Circulation and Air Quality Monitoring, makes your life more comfortable",
        img: "images/gree/image4.png",
        price: "129,999",
        feature1: "Two-way Air Circulation",
        feature2: "Evaporator Self-cleaning Technology",
        id: 4
  },
    {
        title : "Aoky Gree Window AC",
        desc: "Aoky from Gree will give your a cool and comfortable life.",
        img: "images/gree/image5.png",
        price: "150,700",
        feature1: "Oblique Upward Discharge",
        feature2: "6A Package Design",
        id: 5
  },
    {
        title : "Aolis Gree Protable AC",
        desc: "Gree efficient family product, give you a healthy and comfortable life.",
        img: "images/orient/im6.png",
        price: "130,700",
        feature1: "Concise Intelligent Control Panel",
        feature2: "Auto Clean Sterilization System",
        id: 6
  }
 

]


let gree = document.getElementById('gree')



let greeData = ''

greeArray.forEach(e => {
    greeData += `
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

    gree.innerHTML = greeData
});




