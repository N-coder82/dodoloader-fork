var map={title:"Hop Hop",song:"env2",maker:"AnimeFan",spawn:[0,0.5,0],init:function(){a.p([-2.72993,16.57007,-102.68993],[0,0,0],[11.38,0.32,20],"1",0.1,0,0.6,false,false);a.p([3.95014,17.610139999999998,-119.23986000000001],[0,0,0],[2,0.32,20],"3.0",0.2,0,0.6,false,false);a.p([-3.2397899999999997,13.07021,-87.49978999999999],[0,0,0],[2,0.32,20],"1",0.2,0,0.6,false,false);a.p([0.28028,17.42028,-105.34971999999999],[-0.65,0,0],[1.78,0.32,12.52],"1",0.2,0,0.6,false,false);a.p([2.58035,6.48035,-27.96965],[0,0,0],[2,0.32,20],"1",0.4,0,0.6,false,false);a.p([-0.10958,16.08042,-165.64958],[0,0,-0.74],[2,0.32,20],"d2de06",0.5,0,0.6,false,false);a.p([2.25049,16.08049,-165.64951000000002],[0,0,-2.33],[2,0.32,20],"d2de06",0.5,0,0.6,false,false);a.p([3.95,16.08,-128.87],[0,0,0],[2,0.32,20],"fdfffc",0.5,0,0.6,true,false);a.p([3.95007,16.08007,-130.34993],[0,0,0],[2,0.32,16.66],"fdfffc",0.5,0,0.6,true,false);a.p([3.95014,16.08014,-129.00986],[0,0,0],[2,0.32,12.36],"fdfffc",0.5,0,0.6,true,false);a.p([3.95021,16.08021,-131.75978999999998],[0,0,0],[2,0.32,12.36],"fdfffc",0.5,0,0.6,true,false);a.p([3.9502800000000002,16.080280000000002,-134.38972],[0,0,0],[2,0.32,12.36],"fdfffc",0.5,0,0.6,true,false);a.p([3.9503500000000003,16.08035,-136.46965],[0,0,0],[2,0.32,12.36],"fdfffc",0.5,0,0.6,true,false);a.p([3.95042,16.08042,-137.55958],[0,0,0],[2,0.32,12.36],"fdfffc",0.5,0,0.6,true,false);a.p([9.91049,16.08049,-135.68950999999998],[0,0,0],[2,0.32,20],"fdfffc",0.5,0,0.6,false,false);a.p([1.07,11.67,-176.05],[0,0,0],[2,0.32,20],"fdfffc",0.5,0,0.6,false,false);a.p([0.00007000000000000001,3.63007,-11.929929999999999],[0,0.6,0],[5.26,0.32,20],"d2de06,0.3",1.04,0,0.6,false,false);a.p([0.00014000000000000001,-0.15986,3.45014],[0,0,0],[2,0.32,20],"1",1.04,0,0.6,false,false);a.p([-2.57979,6.48021,-27.999789999999997],[0,0,0],[2,0.32,20],"1",1.1,0,0.6,false,false);a.p([-1.57972,4.62028,-58.29972],[0.17,0,0],[2,0.32,20],"1",1.1,0,0.6,false,false);a.p([-3.0096499999999997,4.62035,-66.80965],[0.17,0,0],[2.02,0.3,3.8],"1",1.1,0,0.6,false,false);a.p([-3.2095800000000003,4.620419999999999,-69.36958],[-0.15,0,0],[2,0.3,1.8],"1",1.1,0,0.6,false,false);a.p([-3.23951,4.5304899999999995,-79.77951],[0,0,0],[2,0.32,20],"1",1.1,0,0.6,false,false);a.p([1.07,16.08,-152.45],[0,0,0],[2,0.32,20],"fdfffc",1.5,0,0.6,false,false);a.e([1.19021,9.00021,-176.52979]);a.e([1.19028,9.00028,-177.50972000000002]);a.e([1.19035,9.00035,-181.20965]);a.e([1.19042,9.00042,-183.15957999999998]);a.e([1.19049,9.00049,-166.58951000000002]);a.e([1.19,9,-171.8]);a.e([1.19007,9.00007,-170.49992999999998]);a.e([1.19014,9.00014,-173.39986000000002]);a.e([1.19021,9.00021,-168.44979]);a.p([0.86042,7.38042,-58.54958],[0,0,0],[4.68,0.32,20],"2.0",0,0,0.6,false,false);a.e([1.19,9,-179.02]);a.e([1.19007,9.00007,-175.00993]);},post:function(){a.u('P0');a.u('P4');a.u('P14');a.u('E0');a.u('E1');a.u('E2');a.u('E3');a.u('E4');a.u('E5');a.u('E6');a.u('E7');a.u('E8');a.u('P24');a.u('E10');cc.set_monkey("speed",default_speed*0.7);cc.set_monkey("jumpHeight",1.1);cc.set_monkey("jumpSpeed",0.0);cc.set_monkey("camera.fov mul2",1.34);cc.set_monkey("steer",0.03);cc.refresh();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-30.179859999999998){this.section_id+=1}
break;case 1:a.mov('P4','z',-1.0);a.rot('P24','z',1.2);if(PZ<-77.03986){this.section_id+=1}
break;case 2:if(PZ<-78.46993){steer=default_steer*1.2;speed=default_speed*0.4;a.g(null,-1.2,null);this.section_id+=1}
break;case 3:if(PZ<-125.32992999999999){steer=cc.get("steer",null);speed=cc.get("speed",null);a.g(null,null,null);this.section_id+=1}
break;case 4:if(PZ<-126.54965){a.jh(1.1);a.js(0.0);this.section_id+=1}
break;case 5:a.mov('P14','x',-0.3);if(PZ<-146.02965){a.jh(null);a.js(null);this.section_id+=1}
break;case 6:if(PZ<-167.05972000000003){this.section_id+=1}
break;case 7:a.mov('E0','y',-1.2);a.mov('E1','y',-1.2);a.mov('E2','y',-1.2);a.mov('E3','y',-1.2);a.mov('E4','y',1.2);a.mov('E5','y',1.2);a.mov('E6','y',1.2);a.mov('E7','y',1.2);a.mov('E8','y',1.2);a.mov('E10','y',-1.2);if(PZ<-196.95972){this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('P0',[-2.72993,16.57007,-102.68993],[0,0,0],[11.38,0.32,20]);a.re('P1',[3.95014,17.610139999999998,-119.23986000000001],[0,0,0],[2,0.32,20]);a.re('P2',[-3.2397899999999997,13.07021,-87.49978999999999],[0,0,0],[2,0.32,20]);a.re('P3',[0.28028,17.42028,-105.34971999999999],[-0.65,0,0],[1.78,0.32,12.52]);a.re('P4',[2.58035,6.48035,-27.96965],[0,0,0],[2,0.32,20]);a.re('P5',[-0.10958,16.08042,-165.64958],[0,0,-0.74],[2,0.32,20]);a.re('P6',[2.25049,16.08049,-165.64951000000002],[0,0,-2.33],[2,0.32,20]);a.re('P7',[3.95,16.08,-128.87],[0,0,0],[2,0.32,20]);a.re('P8',[3.95007,16.08007,-130.34993],[0,0,0],[2,0.32,16.66]);a.re('P9',[3.95014,16.08014,-129.00986],[0,0,0],[2,0.32,12.36]);a.re('P10',[3.95021,16.08021,-131.75978999999998],[0,0,0],[2,0.32,12.36]);a.re('P11',[3.9502800000000002,16.080280000000002,-134.38972],[0,0,0],[2,0.32,12.36]);a.re('P12',[3.9503500000000003,16.08035,-136.46965],[0,0,0],[2,0.32,12.36]);a.re('P13',[3.95042,16.08042,-137.55958],[0,0,0],[2,0.32,12.36]);a.re('P14',[9.91049,16.08049,-135.68950999999998],[0,0,0],[2,0.32,20]);a.re('P15',[1.07,11.67,-176.05],[0,0,0],[2,0.32,20]);a.re('P16',[0.00007000000000000001,3.63007,-11.929929999999999],[0,0.6,0],[5.26,0.32,20]);a.re('P17',[0.00014000000000000001,-0.15986,3.45014],[0,0,0],[2,0.32,20]);a.re('P18',[-2.57979,6.48021,-27.999789999999997],[0,0,0],[2,0.32,20]);a.re('P19',[-1.57972,4.62028,-58.29972],[0.17,0,0],[2,0.32,20]);a.re('P20',[-3.0096499999999997,4.62035,-66.80965],[0.17,0,0],[2.02,0.3,3.8]);a.re('P21',[-3.2095800000000003,4.620419999999999,-69.36958],[-0.15,0,0],[2,0.3,1.8]);a.re('P22',[-3.23951,4.5304899999999995,-79.77951],[0,0,0],[2,0.32,20]);a.re('P23',[1.07,16.08,-152.45],[0,0,0],[2,0.32,20]);a.re('E0',[1.19021,9.00021,-176.52979],[0,0,0],[1,1,1]);a.re('E1',[1.19028,9.00028,-177.50972000000002],[0,0,0],[1,1,1]);a.re('E2',[1.19035,9.00035,-181.20965],[0,0,0],[1,1,1]);a.re('E3',[1.19042,9.00042,-183.15957999999998],[0,0,0],[1,1,1]);a.re('E4',[1.19049,9.00049,-166.58951000000002],[0,0,0],[1,1,1]);a.re('E5',[1.19,9,-171.8],[0,0,0],[1,1,1]);a.re('E6',[1.19007,9.00007,-170.49992999999998],[0,0,0],[1,1,1]);a.re('E7',[1.19014,9.00014,-173.39986000000002],[0,0,0],[1,1,1]);a.re('E8',[1.19021,9.00021,-168.44979],[0,0,0],[1,1,1]);a.re('P24',[0.86042,7.38042,-58.54958],[0,0,0],[4.68,0.32,20]);a.re('E9',[1.19,9,-179.02],[0,0,0],[1,1,1]);a.re('E10',[1.19007,9.00007,-175.00993],[0,0,0],[1,1,1]);},physics_update:function(){},render_update:function(){}}