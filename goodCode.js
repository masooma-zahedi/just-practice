function _(id) {
    return document.querySelector(id);
}

//  =============== Random Code ===============
function getRan(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min)
}
//=================
function ranColor(){
    return '#'+ Math.random().toString(16).substr(-6);
}
// ===========================
function _all(targ){
    return document.querySelectorAll(targ)
}
