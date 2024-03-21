let examplesArray = [
    {
        "name":"$49.99",
        "price":"Tier 1",
        "text1":"1-2",
        "text2":"No",
        "text3":"No",
        "text4":"0",
    },
    {
        "name":"$99.99",
        "price":"Tier 2",
        "text1":"3-6",
        "text2":"Yes",
        "text3":"Yes",
        "text4":"2",
    },
    {
        "name":"$149.99",
        "price":"Tier 3",
        "text1":"6+",
        "text2":"Yes",
        "text3":"Yes",
        "text4":"5",
    },
    {
        "name":"Free Quote",
        "price":"Custom",
        "text1":"Custom",
        "text2":"Yes",
        "text3":"Yes",
        "text4":"Custom",
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
    text3.textContent = "API Integration: " + Name.text3;
    text4.textContent = "Revisions: " + Name.text4;

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
