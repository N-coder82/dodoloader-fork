var map={title:"Alley",song:"env2",maker:"skilledandkilled",spawn:[0,0.5,0],init:function(){a.e([0,-6.449940000000001,-280]);a.p([7,0.00006,-47.29],[0,0,0],[8.46,28.08,100],1,69420.0);a.p([7,0.00012,-241.54],[0,0,0],[8.46,28.08,100],1,69420.0);a.p([-7,0.00018,-143.29],[0,0,0],[8.46,28.08,100],1,69420.0);a.p([-7,0.00024,-47.29],[0,0,0],[8.46,28.08,100],1,69420.0);a.p([0.28,-8.7997,-45.04],[0,0,0],[130.68,2,10],3.0,0);a.p([0.28,-7.3,-36.87],[0,0,0],[130.68,0.2,6],1,0);a.p([0.28,-7.429880000000001,-77.19],[0,0,0],[130.68,0.2,36],3.0,0);a.p([0.28,-7.42976,-118.25],[0,0,0],[130.68,0.2,36],1,0);a.p([0.28,-7.43,-201.34],[0,0,0],[130.68,0.2,36],1,0);a.p([0.28,-7.429880000000001,-270.66],[0,0,0],[130.68,0.2,36],1,0);a.p([0.28,-7.42976,-159.81],[0,0,0],[130.68,0.2,36],3.0,0);a.p([0.28,-7.43,-235.78],[0,0,0],[130.68,0.2,30],3.0,0);a.p([0,-7.999880000000001,-36.87],[0,0,0],[81.28,2,6],2.0,0);a.p([0,-7.99982,-179.92],[0,0,0],[81.28,2,290.66],2.0,0);a.p([0,-7.99976,-16.15],[0,0,0],[81.28,2,40],2.0,0);a.c([1.67,-6.529700000000001,-31.78],true);a.c([-1.91,-6.53,-18.47],true);a.c([-1.91,-6.529940000000001,-49.92],true);a.c([1.52,-6.529880000000001,-64.17],true);a.c([1.52,-6.52982,-89.13],true);a.c([-1.02,-6.5297600000000005,-118.17],true);a.c([0.81,-6.529700000000001,-147.21],true);a.c([-1.39,-6.53,-177.77],true);a.c([0.81,-6.529940000000001,-177.77],true);a.c([0.81,-6.529880000000001,-202.7],true);a.c([-1.18,-6.52982,-247.88],true);a.c([-0.72,-6.5297600000000005,-18.47],true);a.c([0.5,-6.529700000000001,-31.78],true);a.c([1.85,-6.53,-49.92],true);a.c([-1.56,-6.529940000000001,-64.17],true);a.c([0.4,-6.529880000000001,-89.13],true);a.c([-0.79,-6.52982,-89.13],true);a.c([-0.02,-6.5297600000000005,-147.21],true);a.c([0.05,-6.529700000000001,-118.17],true);a.c([-0.35,-6.53,-177.77],true);a.c([0.15,-6.529940000000001,-202.7],true);a.c([-0.99,-6.529880000000001,-202.7],true);a.c([2.3,-6.52982,-247.88],true);a.p([7,0.00024,-144.6],[0,0,0],[8.46,28.08,100],1,69420.0);a.p([-7,0.0003,-240.87],[0,0,0],[8.46,28.08,100],1,69420.0);a.p([7,0,-285.53],[-1.57,0,0],[8.46,28.08,100],1,0);},post:function(){a.m('P4').unfreezeWorldMatrix();a.m('P5').unfreezeWorldMatrix();a.m('P6').unfreezeWorldMatrix();a.m('P7').unfreezeWorldMatrix();a.m('P8').unfreezeWorldMatrix();a.m('P9').unfreezeWorldMatrix();a.m('P10').unfreezeWorldMatrix();a.m('P11').unfreezeWorldMatrix();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-28.739999999999995){this.section_id+=1}
break;case 1:a.mov('P4','y',0.05);a.mov('P5','y',0.05);if(PZ<-55.5){this.section_id+=1}
break;case 2:if(PZ<-59.72){this.section_id+=1}
break;case 3:a.mov('P6','y',0.015);if(PZ<-95.72){this.section_id+=1}
break;case 4:if(PZ<-100.25){this.section_id+=1}
break;case 5:a.mov('P7','y',0.015);if(PZ<-136.25){this.section_id+=1}
break;case 6:if(PZ<-141.81){this.section_id+=1}
break;case 7:a.mov('P10','y',0.015);if(PZ<-177.81){this.section_id+=1}
break;case 8:if(PZ<-181.23){this.section_id+=1}
break;case 9:a.mov('P8','y',0.015);if(PZ<-217.23){this.section_id+=1}
break;case 10:if(PZ<-221.83){this.section_id+=1}
break;case 11:a.mov('P11','y',0.015);if(PZ<-251.83){this.section_id+=1}
break;case 12:if(PZ<-254.76999999999998){this.section_id+=1}
break;case 13:a.mov('P9','y',0.015);if(PZ<-290.77){this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('P0',[7,0.00006,-47.29],[0,0,0],[8.46,28.08,100]);a.re('P1',[7,0.00012,-241.54],[0,0,0],[8.46,28.08,100]);a.re('P2',[-7,0.00018,-143.29],[0,0,0],[8.46,28.08,100]);a.re('P3',[-7,0.00024,-47.29],[0,0,0],[8.46,28.08,100]);a.re('P4',[0.28,-8.7997,-45.04],[0,0,0],[130.68,2,10]);a.re('P5',[0.28,-7.3,-36.87],[0,0,0],[130.68,0.2,6]);a.re('P6',[0.28,-7.429880000000001,-77.19],[0,0,0],[130.68,0.2,36]);a.re('P7',[0.28,-7.42976,-118.25],[0,0,0],[130.68,0.2,36]);a.re('P8',[0.28,-7.43,-201.34],[0,0,0],[130.68,0.2,36]);a.re('P9',[0.28,-7.429880000000001,-270.66],[0,0,0],[130.68,0.2,36]);a.re('P10',[0.28,-7.42976,-159.81],[0,0,0],[130.68,0.2,36]);a.re('P11',[0.28,-7.43,-235.78],[0,0,0],[130.68,0.2,30]);a.re('P12',[0,-7.999880000000001,-36.87],[0,0,0],[81.28,2,6]);a.re('P13',[0,-7.99982,-179.92],[0,0,0],[81.28,2,290.66]);a.re('P14',[0,-7.99976,-16.15],[0,0,0],[81.28,2,40]);a.re('C0',[1.67,-6.529700000000001,-31.78],[0,0,0],[2,2,2]);a.re('C1',[-1.91,-6.53,-18.47],[0,0,0],[2,2,2]);a.re('C2',[-1.91,-6.529940000000001,-49.92],[0,0,0],[2,2,2]);a.re('C3',[1.52,-6.529880000000001,-64.17],[0,0,0],[2,2,2]);a.re('C4',[1.52,-6.52982,-89.13],[0,0,0],[2,2,2]);a.re('C5',[-1.02,-6.5297600000000005,-118.17],[0,0,0],[2,2,2]);a.re('C6',[0.81,-6.529700000000001,-147.21],[0,0,0],[2,2,2]);a.re('C7',[-1.39,-6.53,-177.77],[0,0,0],[2,2,2]);a.re('C8',[0.81,-6.529940000000001,-177.77],[0,0,0],[2,2,2]);a.re('C9',[0.81,-6.529880000000001,-202.7],[0,0,0],[2,2,2]);a.re('C10',[-1.18,-6.52982,-247.88],[0,0,0],[2,2,2]);a.re('C11',[-0.72,-6.5297600000000005,-18.47],[0,0,0],[2,2,2]);a.re('C12',[0.5,-6.529700000000001,-31.78],[0,0,0],[2,2,2]);a.re('C13',[1.85,-6.53,-49.92],[0,0,0],[2,2,2]);a.re('C14',[-1.56,-6.529940000000001,-64.17],[0,0,0],[2,2,2]);a.re('C15',[0.4,-6.529880000000001,-89.13],[0,0,0],[2,2,2]);a.re('C16',[-0.79,-6.52982,-89.13],[0,0,0],[2,2,2]);a.re('C17',[-0.02,-6.5297600000000005,-147.21],[0,0,0],[2,2,2]);a.re('C18',[0.05,-6.529700000000001,-118.17],[0,0,0],[2,2,2]);a.re('C19',[-0.35,-6.53,-177.77],[0,0,0],[2,2,2]);a.re('C20',[0.15,-6.529940000000001,-202.7],[0,0,0],[2,2,2]);a.re('C21',[-0.99,-6.529880000000001,-202.7],[0,0,0],[2,2,2]);a.re('C22',[2.3,-6.52982,-247.88],[0,0,0],[2,2,2]);a.re('P15',[7,0.00024,-144.6],[0,0,0],[8.46,28.08,100]);a.re('P16',[-7,0.0003,-240.87],[0,0,0],[8.46,28.08,100]);a.re('P17',[7,0,-285.53],[-1.57,0,0],[8.46,28.08,100]);},physics_update:function(){},render_update:function(){}}