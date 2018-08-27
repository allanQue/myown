 document.addEventListener('DOMContentLoaded',()=>{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var goodsdata = JSON.parse(xhr.responseText);
            console.log(goodsdata);
        }
    }
    xhr.open('get','../api/goods.php',true);
    xhr.send();
});