let catph = document.getElementById("photocat")
let headare = document.getElementById("headerphoto")
let headaretext = document.getElementById("headtext")
let arab = document.getElementById("arabie")
let eng= document.getElementById("english")
let b1= document.getElementById("btn1")
let b2= document.getElementById("btn2")
let b3= document.getElementById("btn3")
let b4= document.getElementById("btn4")
let b5= document.getElementById("btn5")
let f= document.getElementById("footear")



b1.addEventListener("click", function () {
    headare.src='https://i.imgur.com/PTgQlim.png'
})
b2.addEventListener("click", function () {
    headare.src='https://i.imgur.com/iOeUBV7.png'
})

b3.addEventListener("click", function () {
    headare.src='https://i.imgur.com/xSIK4M8.png'
})

b4.addEventListener("click", function () {
    headare.src='https://i.imgur.com/Zygu7I3.png'
})
b5.addEventListener("click", function () {
    headare.src='https://i.imgur.com/Mplj1YR.png'
})

arab.addEventListener("click", function () {
    headaretext.innerText="اختر ساعتك المفضلة"
    b1.innerText="برتقالي"
    b2.innerText="أسود"
    b3.innerText="وردي غامق"
    b4.innerText="وردي فاتح"
    b5.innerText="أزرق محيطي"
    f.innerText="جميع الحقوق محفوظة لساعتكم. الشروط والأحكام. @ 2023 watch.com "
    
})

eng.addEventListener("click", function () {
    headaretext.innerText="Choose Your Watch"
    b1.innerText="Orange"
    b2.innerText="Black"
    b3.innerText="Dark Pink"
    b4.innerText="Light Pink"
    b5.innerText="Dark Blue"
    f.innerText="© 2023 © Watch. All rights reserved.Terms of Use ∙Privacy Policy Watch.com"
    
})


window.onload = function showTime() {
    let wa = document.getElementById("watche")
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session = "PM"
    if (h> 12) {
        h =h-12;
        ;
    }
    if (h == 0) {
        h=12;
        session="AM"
    }
    h= (h<10) ? "0" + h: h; 
    m= (m<10) ? "0" + m: m; 
    s= (s<10) ? "0" + s: s; 
    wa.innerHTML=  h + ":"+ m +":"+s+" "+session
    setTimeout(showTime,500)
}
