
 document.addEventListener('DOMContentLoaded',()=>{

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var goodslistdata = JSON.parse(xhr.responseText);
            // console.log(goodslist);
           
            var goodslist = function(){
                var goodslistlist = goodslistdata.slice(29,30);
                // console.log(shoujilist);


                var Goods_list =document.getElementsByClassName('Goodslist')[0];

                var ul = document.createElement('ul');

                goodslistlist.forEach(function(item,idx){



                    for(var i=0;i<24;i++)
                    {
                        var li = document.createElement('li');
                        liList(li,item);
                        ul.appendChild(li);

                    }
                    //
                    // li.appendChild(btnAdd);
                    
            });

            Goods_list.appendChild(ul);


            // 点击商品时，进入商品详情页
            // 进入商品详情页前，把当前商品的信息保存到cookie

            // 利用事件委托把事件绑定到goodsList
            Goods_list.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;

                if(target.tagName.toLowerCase() === 'img'){
                    var currentGUID = target.parentElement.parentElement.getAttribute('data-guid');

                    // 根据guid获取整个商品的信息
                    var currentGoods = list.filter(function(item){
                        return item.guid === currentGUID;
                    })[0];

                    // 把当前商品写入cookie
                    var now = new Date();
                    now.setDate(now.getDate()+3);
                    document.cookie = 'currentGoods=' + JSON.stringify(currentGoods) + ';expires=' + now;
                    }
                }
            }
           goodslist();


           // 浏览了还购买了
           var goodsguess1 = function(){
                var goodsguess1list = goodslistdata.slice(29,30);
                // console.log(shoujilist);


                var goodsguess1_list =document.getElementsByClassName('goodsguess1')[0];

                var ul = document.createElement('ul');

                goodsguess1list.forEach(function(item,idx){



                    for(var i=0;i<6;i++)
                    {
                        var li = document.createElement('li');
                        liList(li,item);
                        ul.appendChild(li);

                    }
                    //
                    // li.appendChild(btnAdd);
                    
            });

            goodsguess1_list.appendChild(ul);


            // 点击商品时，进入商品详情页
            // 进入商品详情页前，把当前商品的信息保存到cookie

            // 利用事件委托把事件绑定到goodsList
            goodsguess1_list.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;

                if(target.tagName.toLowerCase() === 'img'){
                    var currentGUID = target.parentElement.parentElement.getAttribute('data-guid');

                    // 根据guid获取整个商品的信息
                    var currentGoods = list.filter(function(item){
                        return item.guid === currentGUID;
                    })[0];

                    // 把当前商品写入cookie
                    var now = new Date();
                    now.setDate(now.getDate()+3);
                    document.cookie = 'currentGoods=' + JSON.stringify(currentGoods) + ';expires=' + now;
                    }
                }
            }
           goodsguess1();





           // 浏览了还购买了   *2
           var goodsguess2 = function(){
                var goodsguess2list = goodslistdata.slice(29,30);
                // console.log(shoujilist);


                var goodsguess2_list =document.getElementsByClassName('goodsguess2')[0];

                var ul = document.createElement('ul');

                goodsguess2list.forEach(function(item,idx){



                    for(var i=0;i<6;i++)
                    {
                        var li = document.createElement('li');
                        liList(li,item);
                        ul.appendChild(li);

                    }
                    //
                    // li.appendChild(btnAdd);
                    
            });

            goodsguess2_list.appendChild(ul);


            // 点击商品时，进入商品详情页
            // 进入商品详情页前，把当前商品的信息保存到cookie

            // 利用事件委托把事件绑定到goodsList
            goodsguess2_list.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;

                if(target.tagName.toLowerCase() === 'img'){
                    var currentGUID = target.parentElement.parentElement.getAttribute('data-guid');

                    // 根据guid获取整个商品的信息
                    var currentGoods = list.filter(function(item){
                        return item.guid === currentGUID;
                    })[0];

                    // 把当前商品写入cookie
                    var now = new Date();
                    now.setDate(now.getDate()+3);
                    document.cookie = 'currentGoods=' + JSON.stringify(currentGoods) + ';expires=' + now;
                    }
                }
            }
           goodsguess2();



           // 最新商品
           var goodsguess3 = function(){
                var goodsguess3list = goodslistdata.slice(29,30);
                // console.log(shoujilist);


                var goodsguess3_list =document.getElementsByClassName('goodsguess3')[0];

                var ul = document.createElement('ul');

                goodsguess3list.forEach(function(item,idx){



                    for(var i=0;i<6;i++)
                    {
                        var li = document.createElement('li');
                        liList(li,item);
                        ul.appendChild(li);

                    }
                    //
                    // li.appendChild(btnAdd);
                    
            });

            goodsguess3_list.appendChild(ul);


            // 点击商品时，进入商品详情页
            // 进入商品详情页前，把当前商品的信息保存到cookie

            // 利用事件委托把事件绑定到goodsList
            goodsguess3_list.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;

                if(target.tagName.toLowerCase() === 'img'){
                    var currentGUID = target.parentElement.parentElement.getAttribute('data-guid');

                    // 根据guid获取整个商品的信息
                    var currentGoods = list.filter(function(item){
                        return item.guid === currentGUID;
                    })[0];

                    // 把当前商品写入cookie
                    var now = new Date();
                    now.setDate(now.getDate()+3);
                    document.cookie = 'currentGoods=' + JSON.stringify(currentGoods) + ';expires=' + now;
                    }
                }
            }
           goodsguess3();

  


        }
    }
    xhr.open('get','../api/goods.php',true);
    xhr.send();

    
        
    






























});