let data = JSON.parse(localStorage.getItem("adsData")) || []

function addData(){

let row = {

date: document.getElementById("date").value,
account: document.getElementById("account").value,
offer: document.getElementById("offer").value,
impressions: Number(document.getElementById("impressions").value),
clicks: Number(document.getElementById("clicks").value),
cost: Number(document.getElementById("cost").value),
amazonClicks: Number(document.getElementById("amazonClicks").value),
orders: Number(document.getElementById("orders").value),
commission: Number(document.getElementById("commission").value)

}

data.push(row)

localStorage.setItem("adsData", JSON.stringify(data))

render()

}

function render(){

let tbody = document.getElementById("tableBody")

tbody.innerHTML = ""

data.forEach(d=>{

let cpc = (d.cost / d.clicks).toFixed(2)

let epc = (d.commission / d.clicks).toFixed(2)

let profit = (d.commission - d.cost).toFixed(2)

let status = "KILL"
let className = "kill"

if(epc > cpc){

status = "WINNER"
className = "win"

}else if(Math.abs(epc-cpc) < 0.05){

status = "BREAKEVEN"
className = "break"

}

let row = `

<tr>

<td>${d.date}</td>

<td>${d.account}</td>

<td>${d.offer}</td>

<td>${d.clicks}</td>

<td>${d.cost}</td>

<td>${d.orders}</td>

<td>${d.commission}</td>

<td>${cpc}</td>

<td>${epc}</td>

<td>${profit}</td>

<td class="${className}">${status}</td>

</tr>

`

tbody.innerHTML += row

})

}

render()
