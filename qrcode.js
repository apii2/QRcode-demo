const qrcode =require("qrcode");
let data ={
    name:"apeskhsya",
    college:"st lawrence college",
    address :"kathmandu"
}
let stringdata = JSON. stringify(data)
qrcode.toString (stringdata,{type:"terminal"})