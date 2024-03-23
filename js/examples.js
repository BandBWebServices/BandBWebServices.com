let examplesArray = [
    {
        "name":"Retail Store",
        "image":"/images/examples/retail.png",
        "link":"https://pectolprints.netlify.app/",
    },
    {
        "name":"Restaurant",
        "image":"/images/examples/webnotfound.jpg",
        "link":"/html/examples/restaurant.html",
    },
    {
        "name":"Handy Man Shop",
        "image":"/images/examples/webnotfound.jpg",
        "link":"/html/tier1.html",
    },
    {
        "name":"Car Dealership",
        "image":"/images/examples/webnotfound.jpg",
        "link":"/html/examples/dealership.html",
    },
    {
        "name":"Custom Website",
        "image":"/images/examples/webnotfound.jpg",
        "link":"/html/examples/custom.html",
    },
];

let containerDiv = document.getElementById("container");


    examplesArray.forEach((Name) => {

    let webDiv = document.createElement("div");
    let alink =  document.createElement("a");
    let namep = document.createElement("p");
    let img = document.createElement("img");

    

    namep.textContent = Name.name;
    alink.setAttribute("href", Name.link);
    alink.setAttribute("target", "_blank");
    img.setAttribute("src", Name.image);

    alink.className = "alink1";
    webDiv.className = "webDiv";
    namep.className = "namep";
    img.className = "examplesimages";


    containerDiv.appendChild(alink);
    alink.appendChild(webDiv);
    webDiv.appendChild(namep);
    webDiv.appendChild(img);

    


    });
