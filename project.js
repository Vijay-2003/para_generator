/*para generator code*/
const input = document.getElementById("no");
const a = document.querySelector(".a");

/*random word generator code*/
const generate = (paragraph) => {
    let lett = "";
    const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i < paragraph; ++i)
        {
            const random = (Math.random() * 25).toFixed(0);
            lett += text[random]; 
        }
    
    return lett;
};


const getpara = () => {
    let no = Number(input.value);
    const para = document.createElement("p");
    
    /*random word generator code*/
    let data = "";
    
    for(let i = 0; i < no; ++i)
        {
            const randomnumber = (Math.random() * 25).toFixed(0);
            data += generate(randomnumber);
            data += " ";
        }
    para.innerText = data;
    
    para.setAttribute("class", "paras");
    a.append(para);
};