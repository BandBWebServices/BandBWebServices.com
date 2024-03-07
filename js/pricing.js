let examplesArray = [
    {
        "name":"$99.99",
        "price":"Tier 1",
        "text1":"1-2",
        "text2":"No",
        "text3":"",
        "text4":"",
    },
    {
        "name":"$199.99",
        "price":"Tier 2",
        "text1":"3-6",
        "text2":"Yes",
        "text3":"",
        "text4":"",
    },
    {
        "name":"$399.99",
        "price":"Tier 3",
        "text1":"6+",
        "text2":"Yes",
        "text3":"",
        "text4":"",
    },
];

let containerDiv = document.getElementById("container");


    examplesArray.forEach((Name) => {

    let webDiv = document.createElement("div");
    let alink =  document.createElement("h2");
    let namep = document.createElement("h2");
    let BR = document.createElement("br");
    let text1 = document.createElement("p");
    let text2 = document.createElement("p");
    let text3 = document.createElement("p");
    let text4 = document.createElement("p");

    

    namep.textContent = Name.name;
    alink.textContent = Name.price;
    text1.textContent = "Web pages: " + Name.text1;
    text2.textContent = "Contact Form: " + Name.text2;
    text3.textContent = "Something: " + Name.text3;
    text4.textContent = "Something: " + Name.text4;

    alink.className = "pricep";
    webDiv.className = "webDivprice";
    namep.className = "namep";


    containerDiv.appendChild(webDiv);
    webDiv.appendChild(alink);
    webDiv.appendChild(namep);
    webDiv.appendChild(BR);
    webDiv.appendChild(text1);
    webDiv.appendChild(text2);
    webDiv.appendChild(text3);
    webDiv.appendChild(text4);

    


    });
