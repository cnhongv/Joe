'use strict';!function(){function f(){W=h.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,H=h.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function g(){j.clearRect(0,0,W,H);var C,D,E=[A].concat(q);q.forEach(function(F){F.x+=F.xa,F.y+=F.ya,F.xa*=F.x>W||0>F.x?-1:1,F.ya*=F.y>H||0>F.y?-1:1,j.fillRect(F.x-0.5,F.y-0.5,1,1);for(var G=0;G<E.length;G++)C=E[G],F!==C&&null!==C.x&&null!==C.y&&(x_diff=F.x-C.x,y_diff=F.y-C.y,distance=x_diff*x_diff+y_diff*y_diff,distance<C.max&&(C===A&&distance>C.max/2&&(F.x-=0.03*x_diff,F.y-=0.03*y_diff),D=(C.max-distance)/C.max,j.beginPath(),j.lineWidth=D/2,j.strokeStyle='rgba('+k.color+','+(D+0.2)+')',j.moveTo(F.x,F.y),j.lineTo(C.x,C.y),j.stroke()));E.splice(E.indexOf(F),1)}),B(g)}var h=document.createElement('canvas'),j=h.getContext('2d'),k=function(){var C=document.getElementsByTagName('script'),D=C.length,E=C[D-1];return{length:D,z:-520,opacity:E.getAttribute('opacity')||0.5,color:E.getAttribute('color')||'0,0,0',count:E.getAttribute('count')||99}}();h.id='c_n'+k.length,h.style.cssText='position:fixed;top:0;left:0;z-index:'+k.z+';opacity:'+k.opacity,document.getElementsByTagName('body')[0].appendChild(h),f(),window.onresize=f;for(var p=Math.random,q=[],C=0;C<k.count;C++){var s=p()*W,v=p()*H,w=2*p()-1,z=2*p()-1;q.push({x:s,y:v,xa:w,ya:z,max:6e3})}var A={x:null,y:null,max:2e4};window.onmousemove=function(C){C=C||window.event,A.x=C.clientX,A.y=C.clientY},window.onmouseout=function(){A.x=null,A.y=null};var B=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(C){window.setTimeout(C,1e3/45)};setTimeout(function(){g()},100)}();