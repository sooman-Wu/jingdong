$(function(){
	var bian=$(".bian");
	// console.log(bian.length)
	var hidden=$(".hidden");
    var kong=$(".none");

	// console.log(kong.length)
	for(var j=0;j<bian.length;j++){
		    bian[j].index=j;
		    bian[j].onmouseover=function(){
          for(var i=0;i<hidden.length;i++){
         hidden[i].style.display="none";
        kong[i].style.display="none";
    }
         hidden[this.index].style.display="block";
          kong[this.index].style.display="block";
			   }
          bian[j].onmouseout=function(){
            hidden[this.index].style.display="none";
             kong[this.index].style.display="none";
          }
      	}


// banner页
     var box=$(".banner")[0];
   
     var imgs=$("img",box);
   
     var yuan=$(".circle");
  
     var left=$(".banner-zuo")[0];

     var right=$(".banner-you")[0];
     var n=0;
     var next=0;
     var flag=true;
     // console.log(right)
     var tt=setInterval(move,2000);
     function move(){
     	next=n+1;
     	if(next>=imgs.length){
     		next=0;
     	}
     	for(var i=0;i<yuan.length;i++){
     		yuan[i].style.background="#666";
            imgs[i].style.opacity=0;
     	}
     	yuan[next].style.background="#B61B1F";
     	imgs[n].style.opacity=1;
     	animate(imgs[n],{opacity:0},800);
     	animate(imgs[next],{opacity:1},800);
        n=next;
     }
      function move1(){
     	next=n-1;
     	if(next<0){
     		next=imgs.length-1;
     	}
     	for(var i=0;i<yuan.length;i++){
     		yuan[i].style.background="#666";
            imgs[i].style.opacity=0;
     	}
     	yuan[next].style.background="#B61B1F";
     	imgs[n].style.opacity=1;
     	animate(imgs[n],{opacity:0},800);
     	animate(imgs[next],{opacity:1},800);
        n=next;
     }
      box.onmouseover=function(){    
            clearInterval(tt);
            left.style.opacity=1;
            right.style.opacity=1;
    }
    box.onmouseout=function(){
             tt=window.setInterval(move,2000);
              left.style.opacity=0;
            right.style.opacity=0;
    }
     for (var i = 0; i < yuan.length; i++) {
     	yuan[i].index=i;
     
     yuan[i].onmouseover=function(){
     	if(!flag){
     		return;
     	}
     	flag=false;
     	for(var i=0;i<yuan.length;i++){
     		yuan[i].style.background="#666";
            imgs[i].style.opacity=0;
     	}
     	yuan[this.index].style.background="#B61B1F";
     	imgs[next].style.opacity=1;
     	animate(imgs[this.index],{opacity:1},800);
     	animate(imgs[next],{opacity:0},300,function(){
     		flag=true;
     	});
        n=this.index;
     }
     }
     left.onclick=function(){           
            move1();
    }
    right.onclick=function(){
            move();
    }
// banner左侧选项卡
   var bannerli=$(".bannerli");
   // console.log(bannerli.length)
    var bannerla=$(".bannerla");
    // console.log(bannerla.length)
    for(var j=0;j<bannerli.length;j++){
		    bannerli[j].index=j;
		    bannerli[j].onmouseover=function(){
          for(var i=0;i<bannerla.length;i++){
         bannerla[i].style.display="none";
    }
         bannerla[this.index].style.display="block";
		 }
          bannerli[j].onmouseout=function(){
            bannerla[this.index].style.display="none";
          }
      	}


// 浏览页的轮播
        var look=$(".lookr-box")[0];
        // console.log(look);
        var lookzuo=$(".look-zuo")[0];
        var lookyou=$(".look-you")[0];
        var lunbox=$(".look-right");
        // console.log(lunbox)
        // var lookrbox=$(".lookr-box")[0];

        // console.log(lookzuo)
        var width=parseInt(getStyle(lunbox[0],"width"));
        // console.log(width) 
        
        var kai=true;
        // var t=setInterval(dong,2000);

        function dong(){
            if(!kai){
            return;
        }
        kai=false;
          
        var lif=getFirst(look);
        animate(look,{left:-width},500,function(){
            look.appendChild(lif);
            look.style.left=0;
            kai=true;
        })
        
            
        }
        function dong1(){
             if(!kai){
            return;
        }
        kai=false;
         var lif=getFirst(look);
         var lil=getLast(look);
        insertBefore(lil,lif); 
           look.style.left=-width+"px";
           
           animate(look,{left:0},500,function(){
            kai=true;
           });
          
     }
     look.onmouseover=function(){    
            
            lookzuo.style.opacity=1;
            lookyou.style.opacity=1;
    }

        look.onmouseout=function(){
            
              lookzuo.style.opacity=0;
            lookyou.style.opacity=0;
    }
      
       lookzuo.onclick=function(){           
            dong1();
    }
        lookyou.onclick=function(){
            dong();
    }

      // 换一批

      var huan=$(".huan")[0];
      var likebox=$(".like-box");
        // console.log(likebox.length);
        var nn=0;
        var next1=0;
        huan.onclick=function(){
            next1=nn+1;
            if(next1>=likebox.length){
                next1=0;
            }
         likebox[nn].style.display="none";
         likebox[next1].style.display="block";
         nn=next1;
      }
         
    // 一层的轮播

   var box1=$(".f1-middlex")[0];
      // console.log(box1)
     var imgs1=$("img",box1);
    // console.log(imgs1.length)
     var yuan1=$(".circle1");
      // console.log(yuan1.length)
     var left1=$(".f1-middlex-zuo")[0];
     var width11=parseInt(getStyle(imgs1[0],"width"));
     // console.log(width11);
     var right1=$(".f1-middlex-you")[0];
     var c=0;
     var d=0;
     // var flag=true;
     // console.log(right)
     var ttt=setInterval(move11,2000);
     function move11(){
        d=c+1;
        if(d>=imgs1.length){
            d=0;
        }
        for(var i=0;i<yuan1.length;i++){
            yuan1[i].style.background="#666";
            // imgs1[i].style.opacity=0;
        }
        yuan1[d].style.background="#B61B1F";
        imgs1[d].style.left=width+"px";
        animate(imgs1[c],{left:-width},500);
        animate(imgs1[d],{left:0},500);
        c=d;
     }

      function move22(){
        d=c-1;
        if(d<0){
            d=imgs1.length-1;
        }
        for(var i=0;i<yuan1.length;i++){
            yuan1[i].style.background="#666";
            // imgs1[i].style.opacity=0;
        }
        yuan1[d].style.background="#B61B1F";
        imgs1[d].style.left=-width+"px";
        animate(imgs1[c],{left:width},500);
        animate(imgs1[d],{left:0},500);
        c=d;
     }
      box1.onmouseover=function(){    
            clearInterval(ttt);
            left1.style.opacity=1;
            right1.style.opacity=1;
    }
    box1.onmouseout=function(){
             ttt=window.setInterval(move11,2000);
              left1.style.opacity=0;
            right1.style.opacity=0;
    }
     for (var i = 0; i < yuan1.length; i++) {
        yuan1[i].index=i;
     
     yuan1[i].onmouseover=function(){
         if(this.index==c){
             return;
        }else if(this.index>c){
           for(var i=0;i<yuan1.length;i++){
            yuan1[i].style.background="#666";
            // imgs1[i].style.opacity=1;
        }
        yuan1[this.index].style.background="#B61B1F";
        imgs1[this.index].style.left=width+"px";
        animate(imgs1[c],{left:-width},500);
        animate(imgs1[this.index],{left:0},500);
        c=this.index;
     }else if(this.index<c){
                for(var i=0;i<imgs1.length;i++){
                       yuan1[i].style.background="#ccc";
                    }
        yuan1[this.index].style.background="red";
        imgs1[this.index].style.left=-width+"px";
        animate(imgs1[c],{left:width},500);
        animate(imgs1[this.index],{left:0},500);
        c=this.index;
    }
}
     left1.onclick=function(){           
            move22();
    }
    right1.onclick=function(){
            move11();
    }
}
// 一层选项卡
var f=$(".f");
   // console.log(f.length)
   var f1box=$(".f1-right-box");
  
   for(var j=0;j<f.length;j++){
    f[j].index=j;
    f[j].onmouseover=function(){
      for(var i=0;i<f1box.length;i++){
        f1box[i].style.display="none";
        f[i].style.border="none";
   
    }
    f1box[this.index].style.display="block";
    f[this.index].style.borderTop="3px solid #C81623";
    f[this.index].style.borderLeft="1px solid #C81623";
    f[this.index].style.borderRight="1px solid #C81623";
    f[this.index].style.borderBottom="2px solid #fff";
    f[this.index].style.zIndex="99";
   }
}


// 二层轮播

    // function lunbo2(obj){
        var imgs3=$(".gehu-lun");
        // console.log(imgs3.length)
        var box4=$(".gehu-middle")[0];
        var left2=$(".node-left")[0];
        var right2=$(".node-right")[0];
        var dian2=$(".cir");
        var r=0;      
        var t=0;    
        var width2=parseInt(getStyle(imgs3[0],"width"));//获取图片的宽度 

        var t2=setInterval(moveg,2000);
        function moveg(){
            t=r+1;
            if(t>=imgs3.length){   //      
                t=0;
            }   
            for(var i=0;i<imgs3.length;i++){
                dian2[i].style.background="#3e3e3e";
            }
            dian2[t].style.background="#C81623";
            imgs3[t].style.left=width2+"px";      //保持后一张图片一直在width位置。
            animate(imgs3[r],{left:-width2},500);   //当前图片位置为0；动画时向左移动一个width
            animate(imgs3[t],{left:0},500);      //后一张图片得移动到当前图片的位置 为0；
            r=t;
        }
        function moveg1(){            //右点击图片移动的方向时----从左到右
            t=r-1;
            if(t<0){          
                t=imgs3.length-1;
            }
            for(var i=0;i<imgs3.length;i++){
                dian2[i].style.background="#3e3e3e";
            }
            dian2[t].style.background="#C81623";
            imgs3[t].style.left=-width2+"px";      //保持后一张图片一直在width位置。
            animate(imgs3[r],{left:width2},500);   //当前图片位置为0；动画时向左移动一个width
            animate(imgs3[t],{left:0},500);      //后一张图片得移动到当前图片的位置 为0；
            r=t;
            // n=this.index;
        }
        box4.onmouseover=function(){     //鼠标效果
                clearInterval(t2);
        }
        box4.onmouseout=function(){
                 t2=setInterval(moveg,2000);
        }
        // 左右点击
        left2.onclick=function(){        //右点击事件         
                moveg1();
        }
        right2.onclick=function(){
                moveg();
        }
        //小圆的选项卡操作
        for(var i=0;i<dian2.length;i++){    //对选项卡进行标识。给它添加一个属性 
                dian2[i].index=i;
                dian2[i].onmouseover=function(){     //通过点击事件进行操作
                    if(this.index==r){
                        return;
                    }else if(this.index>r){                 //方向从左到右
                        for(var i=0;i<imgs3.length;i++){
                           dian2[i].style.background="#000";
                        }
                        dian2[this.index].style.background="red";
                        imgs3[this.index].style.left=width2+"px";      //保持后一张图片一直在width位置。
                        animate(imgs3[r],{left:-width2},500);   //当前图片位置为0；动画时向左移动一个width
                        animate(imgs3[this.index],{left:0},500);
                        r=this.index;
                    }else if(this.index<r){                     //方向从右到左
                        for(var i=0;i<imgs3.length;i++){
                           dian2[i].style.background="#000";
                        }
                        dian2[this.index].style.background="red";
                        imgs3[this.index].style.left=-width2+"px";      //保持后一张图片一直在width位置。
                        animate(imgs3[r],{left:width2},500);   //当前图片位置为0；动画时向左移动一个width
                        animate(imgs3[this.index],{left:0},500);
                        r=this.index;

                    }
                }
        } 



   // 二层选项卡
   var f2=$(".f2");
   var f2box=$(".f2-la");
   for(var j=0;j<f2.length;j++){
    // f2[j].style.border="none";
     f2[j].index=j;
     f2[j].onmouseover=function(){
      for(var i=0;i<f2box.length;i++){
        f2box[i].style.display="none";
     }
     for (var i =0;i<f2.length; i++) {
         f2[i].style.border="none";
     };
    f2box[this.index].style.display="block";
    f2[this.index].style.borderTop="3px solid #C81623";
    f2[this.index].style.borderLeft="1px solid #C81623";
    f2[this.index].style.borderRight="1px solid #C81623";
    f2[this.index].style.borderBottom="3px solid #fff";
    f2[this.index].style.zIndex="99";
   }
}
// 三层轮播

var sjbox=$(".shoujibox-middle-top")[0];
bo(sjbox);
function bo(obj){


 var imgsj=$("img",obj);
// console.log(imgsj[0].width)
 var yuan3=$(".circle3",obj);

 var lefts=$(".f3-middlex-zuo",obj)[0];
 var widthsj=parseInt(getStyle(imgsj[0],"width"));
   
 var rights=$(".f3-middlex-you",obj)[0];
 var cc=0;
 var dd=0;

 var aaa=setInterval(moveaa,2000);
 function moveaa(){
    dd=cc+1;
    if(dd>=imgsj.length){
        dd=0;
    }
    for(var i=0;i<yuan3.length;i++){
        yuan3[i].style.background="#666";

    }
    yuan3[dd].style.background="#B61B1F";
    imgsj[dd].style.left=widthsj+"px";
    animate(imgsj[cc],{left:-widthsj},500);
    animate(imgsj[dd],{left:0},500);
    cc=dd;
}

function movebb(){
    dd=cc-1;
    if(dd<0){
        dd=imgsj.length-1;
    }
    for(var i=0;i<yuan3.length;i++){
        yuan3[i].style.background="#666";

    }
    yuan3[dd].style.background="#B61B1F";
    imgsj[dd].style.left=-widthsj+"px";
    animate(imgsj[cc],{left:widthsj},500);
    animate(imgsj[dd],{left:0},500);
    cc=dd;
}
obj.onmouseover=function(){    
    clearInterval(aaa);
    lefts.style.opacity=1;
    rights.style.opacity=1;
}
obj.onmouseout=function(){
 aaa=window.setInterval(movebb,2000);
 lefts.style.opacity=0;
 rights.style.opacity=0;
}
for (var i = 0; i < yuan3.length; i++) {
    yuan3[i].index=i;

    yuan3[i].onmouseover=function(){
     if(this.index==cc){
         return;
     }else if(this.index>cc){
       for(var i=0;i<yuan3.length;i++){
        yuan3[i].style.background="#666";

    }
    yuan3[this.index].style.background="#B61B1F";
    imgsj[this.index].style.left=widthsj+"px";
    animate(imgsj[cc],{left:-widthsj},500);
    animate(imgsj[this.index],{left:0},500);
    cc=this.index;
}else if(this.index<cc){
    for(var i=0;i<yuan3.length;i++){
       yuan3[i].style.background="#666";
   }
   yuan3[this.index].style.background="#B61B1F";
   imgsj[this.index].style.left=-widthsj+"px";
   animate(imgsj[cc],{left:widthsj},500);
   animate(imgsj[this.index],{left:0},500);
   cc=this.index;
}
}
lefts.onclick=function(){           
    movebb();
}
rights.onclick=function(){
    moveaa();
}
}
}

 // 三层选项卡

 var f3=$(".f3");
 var f3box=$(".f3-xia");
    for(var j=0;j<f3.length;j++){
            f3[j].index=j;
            f3[j].onmouseover=function(){
          for(var i=0;i<f3box.length;i++){
           f3box[i].style.display="none";
        }
        for (var i = 0; i < f3.length; i++) {
            f3[i].style.border="none"
        };
    f3box[this.index].style.display="block";
    f3[this.index].style.borderTop="3px solid #C81623";
    f3[this.index].style.borderLeft="1px solid #C81623";
    f3[this.index].style.borderRight="1px solid #C81623";
    f3[this.index].style.borderBottom="2px solid #fff";
    f3[this.index].style.zIndex=99;

         }
        }

// 四层轮播 
var dianqi=$(".dianqibox-middle")[0];
  bo(dianqi);
// 四层选项卡

var f4=$(".f4");
var f4box=$(".f4-xia");
for(var j=0;j<f4.length;j++){
    f4[j].index=j;
    f4[j].onmouseover=function(){
      for(var i=0;i<f4box.length;i++){
        f4box[i].style.display="none";
        f4[i].style.border="none";
    }
    f4box[this.index].style.display="block";
    f4[this.index].style.borderTop="3px solid #C81623";
    f4[this.index].style.borderLeft="1px solid #C81623";
    f4[this.index].style.borderRight="1px solid #C81623";
    f4[this.index].style.borderBottom="2px solid #fff";
    f4[this.index].style.zIndex="99";
}
}




 
// 五层轮播
var computer=$(".computer5")[0];
  bo(computer);
// 五层选项卡

  var f5=$(".f5");
 var f5box=$(".f5-xia");
  var dzi=$(".dzi");
    for(var j=0;j<f5.length;j++){
            f5[j].index=j;
            f5[j].onmouseover=function(){
          for(var i=0;i<f5box.length;i++){
        f5box[i].style.display="none";
        f5[i].style.border="none";
    }
         f5box[this.index].style.display="block";
         f5[this.index].style.borderTop="3px solid #C81623";
       f5[this.index].style.borderLeft="1px solid #C81623";
       f5[this.index].style.borderRight="1px solid #C81623";
       f5[this.index].style.borderBottom="2px solid #fff";
       f5[this.index].style.zIndex="99";
         }
        }


// 六层轮播
function lunbo1(obj){
        var imgt=$(".yun-r2",obj);
        var boxt=obj;
        var leftt=$(".node-left",obj)[0];
        var rightt=$(".node-right",obj)[0];
        var diant=$(".cir",obj);
        var nt=0;       //定义当前图片的初始值
        var nextt=0;    //定义下一张图片的初始值
        var widtht=parseInt(getStyle(imgt[0],"width"));//获取图片的宽度 
        var tt6=setInterval(movet,2000);
        function movet(){
            nextt=nt+1;
            if(nextt>=imgt.length){   //      
                nextt=0;
            }   
            for(var i=0;i<imgt.length;i++){
                diant[i].style.background="#3e3e3e";
            }
            diant[nextt].style.background="#C81623";
            imgt[nextt].style.left=widtht+"px";      //保持后一张图片一直在width位置。
            animate(imgt[nt],{left:-widtht},500);   //当前图片位置为0；动画时向左移动一个width
            animate(imgt[nextt],{left:0},500);      //后一张图片得移动到当前图片的位置 为0；
            nt=nextt;
        }
        function movet1(){            //右点击图片移动的方向时----从左到右
            nextt=nt-1;
            if(nextt<0){          
                nextt=imgt.length-1;
            }
            for(var i=0;i<imgt.length;i++){
                diant[i].style.background="#3e3e3e";
            }
            diant[nextt].style.background="#C81623";
            imgt[nextt].style.left=-widtht+"px";      //保持后一张图片一直在width位置。
            animate(imgt[nt],{left:widtht},500);   //当前图片位置为0；动画时向左移动一个width
            animate(imgt[nextt],{left:0},500);      //后一张图片得移动到当前图片的位置 为0；
            nt=nextt;
            // n=this.index;
        }
        boxt.onmouseover=function(){     //鼠标效果
                clearInterval(tt6);
        }
        boxt.onmouseout=function(){
                 tt6=setInterval(movet,2000);
        }
        // 左右点击
        leftt.onclick=function(){        //右点击事件         
                movet1();
        }
        rightt.onclick=function(){
                movet();
        }
        //小圆的选项卡操作
        for(var i=0;i<diant.length;i++){    //对选项卡进行标识。给它添加一个属性 
                diant[i].index=i;
                diant[i].onmouseover=function(){     //通过点击事件进行操作
                    if(this.index==nt){
                        return;
                    }else if(this.index>nt){                 //方向从左到右
                        for(var i=0;i<imgt.length;i++){
                           diant[i].style.background="#000";
                        }
                        diant[this.index].style.background="red";
                        imgt[this.index].style.left=widtht+"px";      //保持后一张图片一直在width位置。
                        animate(imgt[nt],{left:-widtht},500);   //当前图片位置为0；动画时向左移动一个width
                        animate(imgt[this.index],{left:0},500);
                        nt=this.index;
                    }else if(this.index<nt){                     //方向从右到左
                        for(var i=0;i<imgt.length;i++){
                           diant[i].style.background="#000";
                        }
                        diant[this.index].style.background="red";
                        imgt[this.index].style.left=-widtht+"px";      //保持后一张图片一直在width位置。
                        animate(imgt[nt],{left:widtht},500);   //当前图片位置为0；动画时向左移动一个width
                        animate(imgt[this.index],{left:0},500);
                        nt=this.index;

                    }
                }
        } 
    }
    var box6=$(".yun-r2-1");
    for(var i=0;i<box6.length;i++){
         lunbo1(box6[i]);
  }

  



 function xuan(obj1,obj2){
        var tab1=$(".f6",obj1);   //获取页面中的选项卡和图片元素
        var main1=$(".beauty-main",obj2);
        for(var i=0;i<tab1.length;i++){    //对选项卡进行标识。给它添加一个属性 
              tab1[i].index=i;
              tab1[i].onmouseover=function(){     //通过点击事件进行操作
              for(var j=0;j<main1.length;j++){
                   main1[j].style.display="none"; 
                   tab1[j].style.border="none"   //调整所有图片的显示方式 让所有图片不展示。
              }
            main1[this.index].style.display="inline";
           tab1[this.index].style.borderTop="3px solid #C81623";
       tab1[this.index].style.borderLeft="1px solid #C81623";
       tab1[this.index].style.borderRight="1px solid #C81623";
       tab1[this.index].style.borderBottom="2px solid #fff";
      tab1[this.index].style.zIndex="99";
              //让当前以行元素的方式展示
         }
        }
   }
   var right3=$(".yundong-right");
   var content=$(".yun-right");
    for(var i=0;i<right3.length;i++){
        xuan(right3[i],content[i]);
  } 


// 十层轮播
var book=$(".shoujibox-middle-top")[3];
  bo(book);

  // 十一层轮播
  function lunbo2(obj){
        var imgm=$(".life-img",obj);
        var boxm=obj;
        var leftm=$(".box-left",obj)[0];
        var rightm=$(".box-right",obj)[0];
        var dianm=$(".play-circle",obj);
        var nm=0;       //定义当前图片的初始值
        var nextm=0;    //定义下一张图片的初始值
        var widthm=parseInt(getStyle(imgm[0],"width"));//获取图片的宽度 
        var tm=setInterval(movem,2000);
        function movem(){
            nextm=nm+1;
            if(nextm>=imgm.length){   //      
                nextm=0;
            }   
            for(var i=0;i<imgm.length;i++){
                dianm[i].style.background="#3e3e3e";
            }
            dianm[nextm].style.background="#C81623";
            imgm[nextm].style.left=widthm+"px";      //保持后一张图片一直在width位置。
            animate(imgm[nm],{left:-widthm},500);   //当前图片位置为0；动画时向左移动一个width
            animate(imgm[nextm],{left:0},500);      //后一张图片得移动到当前图片的位置 为0；
            nm=nextm;
        }
        function movem1(){            //右点击图片移动的方向时----从左到右
            nextm=nm-1;
            if(nextm<0){          
                nextm=imgm.length-1;
            }
            for(var i=0;i<imgm.length;i++){
                dianm[i].style.background="#3e3e3e";
            }
            dianm[nextm].style.background="#C81623";
            imgm[nextm].style.left=-widthm+"px";      //保持后一张图片一直在width位置。
            animate(imgm[nm],{left:widthm},500);   //当前图片位置为0；动画时向左移动一个width
            animate(imgm[nextm],{left:0},500);      //后一张图片得移动到当前图片的位置 为0；
            nm=nextm;
            // n=this.index;
        }
        boxm.onmouseover=function(){     //鼠标效果
                clearInterval(tm);
                 // leftm.style.opacity=1;
                 // rightm.style.opacity=1;
        }
        boxm.onmouseout=function(){
                 tm=setInterval(movem,2000);
                 //  leftm.style.opacity=0;
                 // rightm.style.opacity=0;
        }
        // 左右点击
        leftm.onclick=function(){        //右点击事件         
                movem1();
        }
        rightm.onclick=function(){
                movem();
        }
        //小圆的选项卡操作
        for(var i=0;i<dianm.length;i++){    //对选项卡进行标识。给它添加一个属性 
                dianm[i].index=i;
                dianm[i].onmouseover=function(){     //通过点击事件进行操作
                    if(this.index==nm){
                        return;
                    }else if(this.index>nm){                 //方向从左到右
                        for(var i=0;i<imgm.length;i++){
                           dianm[i].style.background="#000";
                        }
                        dianm[this.index].style.background="red";
                        imgm[this.index].style.left=widthm+"px";      //保持后一张图片一直在width位置。
                        animate(imgm[nm],{left:-widthm},500);   //当前图片位置为0；动画时向左移动一个width
                        animate(imgm[this.index],{left:0},500);
                        nm=this.index;
                    }else if(this.index<nm){                     //方向从右到左
                        for(var i=0;i<imgm.length;i++){
                           dianm[i].style.background="#000";
                        }
                        dianm[this.index].style.background="red";
                        imgm[this.index].style.left=-widthm+"px";      //保持后一张图片一直在width位置。
                        animate(imgm[nm],{left:widthm},500);   //当前图片位置为0；动画时向左移动一个width
                        animate(imgm[this.index],{left:0},500);
                        nm=this.index;

                    }
                }
        } 
    }
    var boxm=$(".life-middle-top");
    for(var i=0;i<boxm.length;i++){
         lunbo2(boxm[i]);
  }

  // 热门晒单
    var day=$(".day-box-right")[0];

    var shai=$(".daybox2");

    var hg=parseInt(getStyle(shai[0],"height"));//获取图片的宽度 
    var sd=setInterval(movesd,2000);
    var a=0;
    var b=0;
    function movesd(){
        b=a+1;
        if(b>=shai.length){
            b=0;
        }
      shai[b].style.top=-hg+"px";
      shai[a].style.top=0;
      animate(shai[a],{top:hg},500);   //当前图片位置为0；动画时向左移动一个width
      animate(shai[b],{top:0},500);      //后一张图片得移动到当前图片的位置 为0；
            a=b;
        }
    day.onmouseover=function(){     //鼠标效果
                clearInterval(sd);
                
        }
   day.onmouseout=function(){
                 sd=setInterval(movesd,2000);
    }


    // 按需加载

    var lou=$(".lou")[0];
    var fx=$(".floor");
    var num=$(".num");
    var sign=true;
    var ww=document.documentElement.clientWidth;
    var hh=document.documentElement.clientHeight;
        
        // // 获取放小框的box的高度
        // var bh=lou.offsetHeight;
        
        // // 计算box定位的高度
        // box.style.top=(hh-bh)/2+"px";
        // // 循环取得每一个小框并且给他加一个标识
        for(var i=0;i<num.length;i++){
            num[i].index=i;
          
            // lis[i].style.color="blue";
            // 给小框加点击效果
            num[i].onclick=function(){
                sign=false;
               // 查看浏览器是否能用document.body来获取滚动条的高度？不能则用document.documentElement;
              var obj=document.body.scrollTop?document.body:document.documentElement;
              // 定义top为点击的楼层距离body的距离
              var top=fx[this.index].offsetTop;
              // 让滚动条高度变化当前楼层距离body的距离的高度即top
              animate(obj,{scrollTop:top},300,function(){sign=true});
              for (var i = 0; i < num.length; i++) {
                   num[i].innerHTML=(i+1)+"F";
                   num[i].classList.remove("active");
              };
              num[this.index].style.fontSize= 12 + "px";
              num[this.index].classList.add("active");
              var aa=num[this.index].getAttribute("aa");
              num[this.index].innerHTML=aa;
          }
        }

        for(var i=0;i<num.length;i++){
        num[i].index=i;
       num[i].onmouseover=function(){
        for(var j=0;j<num.length;j++){
                 num[j].style.color="#625351";
                 num[j].style.background="transparent";
                 num[j].innerHTML=j+1+"F";
            }
             num[this.index].style.background="#C81623";
             num[this.index].style.color="#FFF";
             var aa=num[this.index].getAttribute("aa");
             num[this.index].innerHTML=aa;

      }
    }  
        // 添加滚动事件，让小框随着楼层的移动进行换色
        window.onscroll=function(){
            if(!sign){
              return;
            }
            // 定义开关来控制box的当前楼层颜色的出现和消失
            var flag=true;
            var flag1=true;
            var obj=document.body.scrollTop?document.body:document.documentElement;
            // 循环取得每一层楼
            for(var i=0;i<fx.length;i++){
                // 当滚动条移动的距离大于楼层到body的距离减去浏览器的距离时,（即滚动条变大
                // body出去的多，元素就会显露出来
                if(obj.scrollTop>=fx[i].offsetTop-hh+200){
                    // 当元素显露出来的时候让每个小框的颜色进行变化
                    for(var j=0;j<num.length;j++){
               // lis[j].index=j;
                  num[j].style.background=" transparent";
                  num[j].style.color=" #666";
                  num[j].innerHTML=j+1+"F";
              }
              
               // num[i].style.background="#C81623";
               num[i].style.color=" #C81623";
               var aa=num[i].getAttribute("aa");
               num[i].innerHTML=aa;
                }
            }
             // 实现小框的出现和消失
             
             // 当滚动条的高度大于第一层楼到body的高度减去浏览器的高度时即一层显出来的时候
             // 让小框出现
           if(obj.scrollTop>=fx[0].offsetTop-hh+200){
           
            if(flag){
                flag=false;
                animate(lou,{opacity:1},300,function(){flag1=true})
            }

            }else{
                if(flag1){
                    flag1=false;
                    animate(lou,{opacity:0},300,function(){flag=true})
                }
            }
         }

         // 购物车的隐藏
         var shop=$(".search-right")[0];
        var sla=$(".gouwuche")[0];
        shop.onmouseover=function(){
            sla.style.display="block";
        }
        shop.onmouseout=function(){
            sla.style.display="none";
        }

        // 右侧固定栏
        var tabb=$(".tab");
        // console.log(tabb)
    for(var i=0;i<tabb.length;i++){
        var taba=$('.tab-zi',tabb[i])[0];
        // console.log(taba)
        gula(tabb[i],taba);        
    }
    function gula(car,carD){
        car.onmouseover=function(){
        animate(carD,{left:-75},200,Tween.Quad.easeIn)
        }
        car.onmouseout=function(){
            animate(carD,{left:0},200,Tween. Bounce.easeInOut)
        }
    }
    var fang=document.querySelector('#fang');
    var htu=document.querySelector('.htu');
    fang.onclick=function(){
     htu.style.display="none";
 }
})