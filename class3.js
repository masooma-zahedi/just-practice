function _(id){
    return document.getElementById(id)
}

// let item = [{img :"<img src='/img/bridge.jpg'  >",content : '<span>Product1: </span>', cost :'<span>$65</span>' },
//              {img :"<img src='/img/city1.jpg'  >",content : '<span>Product2: </span>', cost :'<span>$65</span>'},
//              {img :"<img src='/img/dishes1.jpg'  >",content : '<span>Product3: </span>', cost :'<span>$25</span>'},
//              {img :"<img src='/img/cumulus-cloud.jpeg'  >",content : '<span>Product4: </span>', cost :'<span>$215</span>'},
//              {img :"<img src='/img/image5.jpg'  >",content : '<span>Product5: </span>', cost :'<span>$15</span>'}]


//  _('img1').addEventListener('click',function(){
//     let x = item[0].img;
//     let y = item[0].content;
//     let z = item[0].cost;
//     let o =x + y + z;
//     document.getElementById('cart1').innerHTML += o + '<br/>';
    
// });

// _('img2').addEventListener('click',function(){
//     let x = item[1].img;
//     let y = item[1].content;
//     let z = item[1].cost;
//     let o =x + y + z;
//     document.getElementById('cart1').innerHTML += o + '<br/>';
// });

// _('img3').addEventListener('click',function(){
//     let x = item[2].img;
//     let y = item[2].content;
//     let z = item[2].cost;
//     let o =x + y + z;
//     document.getElementById('cart1').innerHTML += o + '<br/>';
// });

// _('img4').addEventListener('click',function(){
//     let x = item[3].img;
//     let y = item[3].content;
//     let z = item[3].cost;
//     let o =x + y + z;
//     document.getElementById('cart1').innerHTML += o + '<br/>';
// });

// _('img5').addEventListener('click',function(){
    
//     let x = item[4].img;
//     let y = item[4].content;
//     let z = item[4].cost;
//     let o =x + y + z;
//     document.getElementById('cart1').innerHTML += o + '<br/>';
// });

// // ================

// let text = '';
// for(let i = 0; i < item.length; ++i){
//     text += item[i].img + item[i].content + item[i].cost;
//     _('cort1').innerHTML = text;
// }

// =================== new Date() ==============================
// let d = new Date();
// _('date1').innerHTML = d;

// let days = ['sunday','mon', 'thus', 'wen', 'thur', 'fri', 'sat'];
// let month = ['jun', 'fev', 'murch', 'Apr', 'may', 'jun', 'jul', 'Agu', 'Sep', 'Oct', 'Nov', "Dec" ];

// _('date2').innerHTML = days[d.getDay()] +" "+ d.getDate() + " "+ month[d.getMonth()]+ ' '+ d.getFullYear()+ ' === '+ d.toLocaleTimeString(); 


// let op ="";
// op += days[d.getDay()]+ ' ';
// op += d.getDate()+ ' ';
// op += month[d.getMonth()]+ ' ';
// op += d.getFullYear()+ ' === ';;
// op += d.toLocaleTimeString();

// _('date3').innerHTML = op;

// ================== Speed Your Computer===============
var start = new Date();

for( let i = 0; i < 100000; i++){
    var doSomeThing = i*i*i;
}
var end = new Date();

// alert ('loop took: ' + (end - start)+ ' ms');

// ================== new Date()========================

// var myDate = new Date('nov 23,2020,15:50:20');
// _("date4").innerHTML = myDate.toLocaleString();

// ========================== Move Timer =================
// function mymove(){
//     var x = new Date().toLocaleString();
//     _('date5').innerHTML =x;
// }
//  setInterval(mymove,1000);

//  ============================== Move Timer =============
// function time(){
//     let y = new Date().toLocaleString();
//     _('date6').innerHTML = y;
//      setTimeout(time, 1000);
// }
// time();

// ============================
// let newday = 7;
// function mtime(){
// let day2 = new Date(Date.now() + ( newday*24*60*60*1000)).toLocaleString();;
// _("date7").innerHTML = 'This is after 7 days : '+ day2;
// }
// setInterval(mtime,1000)

// ======================== Math ()=====================
function myRandom(){
    let imageR = ['nature1.jpg', 'nature2.jpg', 'nature3.jpg', 'nature4.jpg', 'nature5.jpg', 'house1.jpg', 'house2.jpg', 'girl1.jpg'];
    let b = Math.floor(Math.random()*imageR.length);
    _("date8").innerHTML = '<img src=\"img/'+imageR[b]+'\">'+'<div id=\"num\">'+(b+1)+'</div>';
    setTimeout(myRandom,2000)
}
myRandom();
// instead of setTimeout you can use:
// setInterval(myRandom,2000);

// ==================== Random Color======================
function changeColor(){
    _('colorR').style.backgroundColor = ranColor();
}
setInterval(changeColor,1000);





