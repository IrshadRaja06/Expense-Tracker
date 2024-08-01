function Add(){ 
    let namee = document.getElementById("name").value; 
    let amount = document.getElementById("amount").value; 
    let option = document.getElementById("type").value; 
    let date = document.getElementById("date").value; 
    let a= document.getElementsByTagName("table")[0] 
    let add = document.createElement("tr") 
    let namerow = document.createElement("td") 
    namerow.innerHTML=namee 
    let amountrow = document.createElement("td") 
    amountrow.innerHTML=amount 
    let optionrow = document.createElement("td") 
    optionrow.innerHTML=option 
    let daterow = document.createElement("td") 
    daterow.innerHTML=date 
    let button =document.createElement("td") 
    button.innerHTML ="<button>Edit</button><button onclick='Delete(event)'>delete</button>" 
    add.append(namerow) 
    add.append(amountrow) 
    add.append(optionrow) 
    add.append(daterow) 
    add.append(button) 
    a.append(add); 
    Sum(Number(amount)); 
}  
 
function Delete(event){ 
    event.target.parentNode.parentNode.remove();  
} 
 
let sum=0; 
function Sum(num){ 
    let p = document.getElementById("p") 
    sum=sum+num; 
    p.innerHTML=sum; 
}
