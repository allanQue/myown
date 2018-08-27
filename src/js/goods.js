
 document.addEventListener('DOMContentLoaded',()=>{

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var goodsdata = JSON.parse(xhr.responseText);
            // console.log(goodslist);
           
            var shouji = function(){
                var shoujilist = goodsdata.slice(5,10);
                console.log(shoujilist);


                var shoujihuilist =document.getElementsByClassName('shoujihui')[0];

                var ul = document.createElement('ul');
                shoujilist.forEach(function(item,idx){

                    var li = document.createElement('li');

                    liList(li,item);
                    // li.appendChild(btnAdd);
                    ul.appendChild(li);
            });

            shoujihuilist.appendChild(ul);


            // 点击商品时，进入商品详情页
            // 进入商品详情页前，把当前商品的信息保存到cookie

            // 利用事件委托把事件绑定到goodsList
            shoujihuilist.onclick = function(e){
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
            shouji();


            // 电脑办公
            var diannao = function(){
            var diannaolist = goodsdata.slice(0,5);


            var diannaobanlist =document.getElementsByClassName('diannaoban')[0];
            var ul = document.createElement('ul');
            diannaolist.forEach(function(item,idx){
            var li = document.createElement('li');
            
            liList(li,item);
            // li.appendChild(btnAdd);

            
            

            ul.appendChild(li);
        });

        diannaobanlist.appendChild(ul);


        // 点击商品时，进入商品详情页
        // 进入商品详情页前，把当前商品的信息保存到cookie

        // 利用事件委托把事件绑定到goodsList
        diannaobanlist.onclick = function(e){
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
            diannao();
            

            var shuma = function(){
            var shumalist = goodsdata.slice(10,15);


            var shumashijielist =document.getElementsByClassName('shumashijie')[0];
            var ul = document.createElement('ul');
            shumalist.forEach(function(item,idx){
            var li = document.createElement('li');
            
            liList(li,item);
            // li.appendChild(btnAdd);

            
            

            ul.appendChild(li);
        });

        shumashijielist.appendChild(ul);


        // 点击商品时，进入商品详情页
        // 进入商品详情页前，把当前商品的信息保存到cookie

        // 利用事件委托把事件绑定到goodsList
        shumashijielist.onclick = function(e){
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
            shuma();



            // 优惠免费试用
            var mianfei = function(){
            var mianfeilist = goodsdata.slice(12,15);


            var mianfeiShilist =document.getElementsByClassName('mianfei')[0];
            var ul = document.createElement('ul');
            mianfeilist.forEach(function(item,idx){
            var li = document.createElement('li');
            
            liList(li,item);
            // li.appendChild(btnAdd);

            
            

            ul.appendChild(li);
        });

        mianfeiShilist.appendChild(ul);


        // 点击商品时，进入商品详情页
        // 进入商品详情页前，把当前商品的信息保存到cookie

        // 利用事件委托把事件绑定到goodsList
       mianfeiShilist.onclick = function(e){
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
            mianfei();


            // 限时抢购
            var xianshi = function(){
            var xianshilist = goodsdata.slice(12,15);


            var xianshiqianglist =document.getElementsByClassName('xianshiqiang')[0];
            var ul = document.createElement('ul');
            xianshilist.forEach(function(item,idx){
            var li = document.createElement('li');
            
            liList(li,item);
            // li.appendChild(btnAdd);

            
            

            ul.appendChild(li);
        });

        xianshiqianglist.appendChild(ul);


        // 点击商品时，进入商品详情页
        // 进入商品详情页前，把当前商品的信息保存到cookie

        // 利用事件委托把事件绑定到goodsList
       xianshiqianglist.onclick = function(e){
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
            xianshi();


            // 友机 派手机
            var youjishouji = function(){
            var youjishoujilist = goodsdata.slice(28,39);


            var youji_shoujilist =document.getElementsByClassName('youjishouji')[0];
            var ul = document.createElement('ul');
            youjishoujilist.forEach(function(item,idx){
            var li = document.createElement('li');
            
            liList(li,item);
            // li.appendChild(btnAdd);

            
            

            ul.appendChild(li);
        });

        youji_shoujilist.appendChild(ul);


        // 点击商品时，进入商品详情页
        // 进入商品详情页前，把当前商品的信息保存到cookie

        // 利用事件委托把事件绑定到goodsList
       youji_shoujilist.onclick = function(e){
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
            youjishouji();



             // 友机 派手机配件
            var shoujipeijian = function(){
            var shoujipeijianlist = goodsdata.slice(28,39);


            var shouji_peijianlist =document.getElementsByClassName('shoujipeijian')[0];
            var ul = document.createElement('ul');
            shoujipeijianlist.forEach(function(item,idx){
            var li = document.createElement('li');
            
            liList(li,item);
            // li.appendChild(btnAdd);

            
            

            ul.appendChild(li);
        });

        shouji_peijianlist.appendChild(ul);


        // 点击商品时，进入商品详情页
        // 进入商品详情页前，把当前商品的信息保存到cookie

        // 利用事件委托把事件绑定到goodsList
       shouji_peijianlist.onclick = function(e){
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
            shoujipeijian();


             // 友机派 电脑办公
            var diannaobangong = function(){
            var diannaobangonglist = goodsdata.slice(28,39);


            var diannao_bangonglist =document.getElementsByClassName('diannaobangong')[0];
            var ul = document.createElement('ul');
            diannaobangonglist.forEach(function(item,idx){
            var li = document.createElement('li');
            
            liList(li,item);
            // li.appendChild(btnAdd);

            
            

            ul.appendChild(li);
        });

        diannao_bangonglist.appendChild(ul);


        // 点击商品时，进入商品详情页
        // 进入商品详情页前，把当前商品的信息保存到cookie

        // 利用事件委托把事件绑定到goodsList
        diannao_bangonglist.onclick = function(e){
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
            diannaobangong();


            // 友机派 时尚影音
            var shishangyingyin = function(){
            var shishangyingyinlist = goodsdata.slice(28,39);


            var shishang_yingyinlist =document.getElementsByClassName('shishangyingyin')[0];
            var ul = document.createElement('ul');
            shishangyingyinlist.forEach(function(item,idx){
            var li = document.createElement('li');
            
            liList(li,item);
            // li.appendChild(btnAdd);

            
            

            ul.appendChild(li);
        });

        shishang_yingyinlist.appendChild(ul);


        // 点击商品时，进入商品详情页
        // 进入商品详情页前，把当前商品的信息保存到cookie

        // 利用事件委托把事件绑定到goodsList
        shishang_yingyinlist.onclick = function(e){
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
            shishangyingyin();


            // 友机派 时尚影音
            var zhinengjiaju = function(){
            var zhinengjiajulist = goodsdata.slice(28,39);


            var zhineng_jiajulist =document.getElementsByClassName('zhinengjiaju')[0];
            var ul = document.createElement('ul');
            zhinengjiajulist.forEach(function(item,idx){
            var li = document.createElement('li');
            
            liList(li,item);
            // li.appendChild(btnAdd);

            
            

            ul.appendChild(li);
        });

        zhineng_jiajulist.appendChild(ul);


        // 点击商品时，进入商品详情页
        // 进入商品详情页前，把当前商品的信息保存到cookie

        // 利用事件委托把事件绑定到goodsList
        zhineng_jiajulist.onclick = function(e){
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
            zhinengjiaju();



            // 友机派 智能穿戴
            var zhinengchuandai = function(){
            var zhinengchuandailist = goodsdata.slice(28,39);


            var zhineng_chuandailist =document.getElementsByClassName('zhinengchuandai')[0];
            var ul = document.createElement('ul');
            zhinengchuandailist.forEach(function(item,idx){
            var li = document.createElement('li');
            
            liList(li,item);
            // li.appendChild(btnAdd);

            
            

            ul.appendChild(li);
        });

        zhineng_chuandailist.appendChild(ul);


        // 点击商品时，进入商品详情页
        // 进入商品详情页前，把当前商品的信息保存到cookie

        // 利用事件委托把事件绑定到goodsList
        zhineng_chuandailist.onclick = function(e){
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
            zhinengchuandai();



            // 友机派 更多好货
            var moregoods = function(){
            var moregoodslist = goodsdata.slice(40,50);


            var moreBgoodlist =document.getElementsByClassName('moreBgood')[0];
            var ul = document.createElement('ul');
            moregoodslist.forEach(function(item,idx){
            var li = document.createElement('li');
            
            liList(li,item);
            // li.appendChild(btnAdd);

            
            

            ul.appendChild(li);
        });

        moreBgoodlist.appendChild(ul);


        // 点击商品时，进入商品详情页
        // 进入商品详情页前，把当前商品的信息保存到cookie

        // 利用事件委托把事件绑定到goodsList
        moreBgoodlist.onclick = function(e){
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
            moregoods();


        }
    }
    xhr.open('get','../api/goods.php',true);
    xhr.send();

    
        
    






























});