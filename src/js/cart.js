// hot Items 推荐的商品
var goods = document.querySelector('.goods');
var btn = document.querySelector('.shoping_btn');



// 声明一个变量，用于存放所有添加的商品信息
var goodslist = Cookie.get('goodslist');

if (goodslist === ''){
    goodslist = []
}else if(typeof goods === 'string'){
    goodslist = JSON.parse(goodslist);
    //goodslist必须为json字符串
}

// 利用事件委托实现添加到购物车的效果
goods.onclick = function(e){
console.log(goods);
        

    //Event对象兼容
    e = e || window.event;

    // 事件源对象兼容
    var target = e.target || e.srcElement;

    // 判断是否点击了添加购物车按钮
    
    if(target.parentNode.className === 'shoping_btn'){


        // 获取当前li
        var currentLi = target.parentNode.parentNode;
        var guid = currentLi.getAttribute('data-guid');

            // 判断当前商品是否已经添加过
            // * 已添加：找出这个商品，数量+1
            // * 未添加：创建对象，商量为1，写入数组
        var currentGoods = goodslist.filter(function(g){
            return g.guid === guid;

        });
        if(currentGoods.length > 0){
            //存在
            currentGoods[0].qty++;
        }else{
            //不存在,添加商品     获取商品信息
            //goods保持外观，存入cookie中；json字符串
            var goods = {
                guid:guid,
                imgurl:currentLi.children[0].children[0].src,
                name:currentLi.children[1].children[0].innerText,
                price_p:currentLi.children[1].children[1].children[1].innerText,
                price_p:currentLi.children[1].children[1].children[1].innerText,
                qty:1
            }
            goodslist.push(goods);

        }
        Cookie.set('goodslist',JSON.stringify(goodslist));

    }

}
// 以上为  hot Items 推荐的商品



// 购物车carlist的商品
var carList = document.querySelector('.cart_goodslist');
var SubPrice = document.querySelector('#subPrice');
var goodslist = Cookie.get('goodslist');//'[{}]',''

if(goodslist.length<=0){

            goodslist = [];

        }else{
            goodslist = JSON.parse(goodslist);
        }

 render();
 
function render(){


    // 根据数据生成html结构
    var ul = document.createElement('ul');

    // 计算总价
    //goodstotal是单个商品的总价  total是全部商品的总价
    var goodstotal = 0;
    var total = 0;

    ul.innerHTML = goodslist.map(function(goods){
                // 计算总价
       total += goods.price_p * goods.qty;


        return '<li data-guid="'+goods.guid+'">' + 
                '<img src="'+goods.imgurl+'" id="mypic"/>' +
                '<div id="car_list_1">'+               
                '<h4>'+goods.name+'</h4>' + 
                '<p>ID:#24234</p>' +
                '<p>Size:Default</p></div>' +
                '<div id="car_list_2">'+ goods.qty +'</div>'+
                '<div id="car_list_3"><p class="price_p">'+goods.price_p+'</p></div>' + 
                '<div id="car_list_4"><p class="price_t">'+goods.price_p * goods.qty +'</p></div>' + 
                '<div id="car_list_5"><span class="btn-close">&times;</span></div>'
                '</li>';
            }).join('\n');

            // 把ul写入页面#carList
            carList.innerHTML = '';
            carList.appendChild(ul);


            // 写入总价
            SubPrice.innerHTML = total.toFixed(2);
        }


// 删除购物车单个商品
// * 找出删除的商品 -> 从数组中移除 -> 重写cookie -> 渲染页面
    

carList.onclick = function(e){

    e = e || window.event;

    var target = e.target || e.srcElement;

    // 判断是否点击了按钮
    if(target.className === 'btn-close'){
     // 获取当前li
        var currentLi = target.parentNode.parentNode;


         // 获取当前商品的guid
        var guid = currentLi.getAttribute('data-guid');
// 找出数组中对应商品并移除
        for(var i=0;i<goodslist.length;i++){
            if(goodslist[i].guid === guid){
                goodslist.splice(i,1);
                break;
                }
            }

        // 重写cookie
        Cookie.set('goodslist',JSON.stringify(goodslist));

// 重新渲染页面
        render();
            }
        }