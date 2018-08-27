 // document.addEventListener('DOMContentLoaded',()=>{
    function liList(li,item){
        // console.log(li);
        li.setAttribute('data-guid',item.id);

        var link = document.createElement('a');
        link.href = 'html/goodsdetails.html';

        var img = document.createElement('img');
        img.src = '../img/js_img/' + item.imgurl;

        // 把图片插入a标签
        link.appendChild(img);

        // 标题
        var h4 = document.createElement('h4');
        h4.innerHTML = item.title;

        // 价格
        var price =document.createElement('p');
        price.className = 'price';
        price.innerText = '￥' + item.price;

        // var btnAdd = document.createElement('button');
        // btnAdd.className = 'add2cart';
        // btnAdd.innerText = '加入购物车';

        // 组合
        
        li.appendChild(h4);
        li.appendChild(price);
        li.appendChild(link);
    }
    
// });