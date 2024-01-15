const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdowns select");

const btn=document.querySelector("#btn")

const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");



// for (code in countryList){
//     console.log(code,countryList[code])
// }

for(select of dropdowns){
    for (currCode in countryList){
        let newOptions=document.createElement("option");
        newOptions.innerText=currCode;
        newOptions.value=currCode;

        if(select.name==="from" && currCode==="USD"){
            newOptions.selected="selected"
        }
        if(select.name==="to" && currCode==="INR"){
            newOptions.selected="selected"
        }
        select.append(newOptions);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag=(element)=>{
    // console.log(element)
    let currCode=element.value;
    // console.log(currCode)

    let countryCode=countryList[currCode];
    // console.log(countryCode)

    let newImgSrc = `https://flagsapi.com/${countryCode}/flat/64.png`

    let img=element.parentElement.querySelector("img")

    img.src=newImgSrc;
}

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    updateExchangeRate();
})

const updateExchangeRate= async()=>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    // console.log(amtVal)

    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }
    // console.log(fromCurr.value,toCurr.value)
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()]

    let finalAmount = amount.value * rate;

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    console.log(rate)
}

window.addEventListener("load", () => {
    updateExchangeRate();
})