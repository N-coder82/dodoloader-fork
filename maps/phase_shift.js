var map={title:"Phase shift",song:"env2",maker:"skilledandkilled",spawn:[0,0.5,0],init:function(){a.e([0.29,-2.00982,-222.3]);a.p([-0.41,-2.49994,-160.07],[0,0,0],[6.1,1.98,7.16],1,10000.0);a.p([0.58,-2.49988,-178.03],[0,0,0],[6,1.98,7.16],1,10000.0);a.p([10.2,-2.09982,-73.87],[0,0,0],[5.2,1,7.16],1,100000.0);a.p([10,-2.09976,-108.26],[0,0,0],[6,1,7.16],1,100000.0);a.p([9.7,-2.0997,-37.89],[0,0,0],[6,1,5.6],1,100000.0);a.p([10,-2.1,-27.07],[0,0,0],[6,1,5.6],1,100000.0);a.p([-10,-2.09994,-66.5],[0,0,0],[6,1,7.16],1,100000.0);a.p([-20,-2.09988,-85.65],[0,0,0],[6,1,7.16],1,100000.0);a.p([-10,-2.09982,-54.97],[0,0,0],[6,1,9.98],1,100000.0);a.p([-10,-2.09976,-32.52],[0,0,0],[6,1,5.6],1,100000.0);a.p([0,-3,-85.39],[0,0,0],[7,1,282.9],2.0,0);a.p([-0.41,-2.49994,-139.93],[0,0,0],[6,1.98,7.16],1,10000.0);a.p([-0.76,-2.49988,-203.52],[0,0,0],[6,1.98,7.16],1,10000.0);},post:function(){a.m('P2').unfreezeWorldMatrix();a.m('P3').unfreezeWorldMatrix();a.m('P4').unfreezeWorldMatrix();a.m('P5').unfreezeWorldMatrix();a.m('P6').unfreezeWorldMatrix();a.m('P7').unfreezeWorldMatrix();a.m('P8').unfreezeWorldMatrix();a.m('P9').unfreezeWorldMatrix();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-2.960000000000008){this.section_id+=1}
break;case 1:a.mov('P2','x',-0.1);a.mov('P3','x',-0.1);a.mov('P4','x',-0.25);a.mov('P5','x',-0.5);a.mov('P6','x',0.1);a.mov('P7','x',0.2);a.mov('P8','x',0.3);a.mov('P9','x',0.7);if(PZ<-246.9){this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('P0',[-0.41,-2.49994,-160.07],[0,0,0],[6.1,1.98,7.16]);a.re('P1',[0.58,-2.49988,-178.03],[0,0,0],[6,1.98,7.16]);a.re('P2',[10.2,-2.09982,-73.87],[0,0,0],[5.2,1,7.16]);a.re('P3',[10,-2.09976,-108.26],[0,0,0],[6,1,7.16]);a.re('P4',[9.7,-2.0997,-37.89],[0,0,0],[6,1,5.6]);a.re('P5',[10,-2.1,-27.07],[0,0,0],[6,1,5.6]);a.re('P6',[-10,-2.09994,-66.5],[0,0,0],[6,1,7.16]);a.re('P7',[-20,-2.09988,-85.65],[0,0,0],[6,1,7.16]);a.re('P8',[-10,-2.09982,-54.97],[0,0,0],[6,1,9.98]);a.re('P9',[-10,-2.09976,-32.52],[0,0,0],[6,1,5.6]);a.re('P10',[0,-3,-85.39],[0,0,0],[7,1,282.9]);a.re('P11',[-0.41,-2.49994,-139.93],[0,0,0],[6,1.98,7.16]);a.re('P12',[-0.76,-2.49988,-203.52],[0,0,0],[6,1.98,7.16]);},physics_update:function(){},render_update:function(){}}