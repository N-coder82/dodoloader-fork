var map={title:"Bounce",song:"env2",maker:"uPilot",spawn:[0,0.5,0],init:function(){a.p([0.00007000000000000001,-1.02993,-44.44993],[0,0,0],[5.98,2,13.94],"2483ff,0.4",0,0,0.6,false,false);a.p([0.00014000000000000001,-1.02986,-80.07986],[0,0,0],[5.98,2,13.94],"2483ff,0.4",0,0,0.6,false,false);a.p([40.14021,-2.1097900000000003,-232.17979],[0.08,0,0],[5.98,2,13.94],"2483ff,0.4",0,0,0.6,false,false);a.p([17.09028,-1.02972,-145.97972],[-0.49,0,0],[5.98,2,13.94],"2483ff,0.4",0,0,0.6,false,false);a.p([32.35035,-2.1096500000000002,-181.86965],[-0.49,0,0],[5.98,2,13.94],"2483ff,0.4",0,0,0.6,false,false);a.p([39.71042,-2.10958,-205.63958],[-0.12,0,0],[5.98,2,13.94],"2483ff,0.4",0,0,0.6,false,false);a.p([10.91049,31.68049,-363.69951000000003],[0.28,0,0],[9.78,2,19.04],"2483ff,0.4",0,0,0.6,false,false);a.p([6.32,27.39,-378.54],[0.32,0,0],[11.1,2,10.04],"0.0",1.5,0,0.6,false,false);a.p([40.64007,-4.39993,-217.90992999999997],[0,0,0],[5.98,2,7.94],"0.0",1.5,0,0.6,false,false);a.p([1.21014,27.390140000000002,-389.20986],[0.32,0,0],[52.5,2,12.76],"-1.0",0,0,0.6,false,false);a.p([-1.01979,39.15021,-394.98978999999997],[0.28,-1.55,0.05],[49.12,2.5,33.38],"-1.0",0,0,0.6,false,false);a.p([17.84028,-17.96972,-337.42972000000003],[0.22,0,0],[11.54,2,19.18],"0.0",1.0,0,0.6,false,false);a.p([26.860349999999997,-4.399649999999999,-169.66965],[-0.39,0,0],[5.98,2,7.94],"0.0",1.0,0,0.6,false,false);a.p([-0.04958,-4.39958,-57.65958],[0,0,0],[5.98,2,7.94],"0.0",2.0,0,0.6,false,false);a.p([3.05049,-4.39951,-105.23951],[-0.22,0,0],[5.98,2,7.94],"0.0",2.0,0,0.6,false,false);a.p([34.8,-4.4,-259.08],[0.21,0,0],[5.98,2,7.94],"0.0",6.0,0,0.6,false,false);a.p([0.00007000000000000001,-1.02993,-16.51993],[0,0,0],[5.98,2,13.94],"2483ff,0.4",0,0,0.6,false,false);a.p([0.00014000000000000001,-1.02986,-2.5298599999999998],[0,0,0],[5.98,2,13.94],"6.0",0,0,0.6,false,false);a.p([0.00021,-1.02979,-30.459789999999998],[0,0,0],[5.98,2,13.94],"6.0",0,0,0.6,false,false);a.p([1.00028,-1.02972,-93.45972],[-0.15,0,0],[5.98,2,13.94],"6.0",0,0,0.6,false,false);a.p([11.990350000000001,-1.02965,-133.74965],[-0.31,0,0],[5.98,2,13.94],"6.0",0,0,0.6,false,false);a.p([38.010419999999996,-2.07958,-245.71957999999998],[0.22,0,0],[5.98,2,13.94],"6.0",0,0,0.6,false,false);a.p([27.42049,63.72049,-296.63951000000003],[0.22,0,0],[11.54,2,19.18],"6.0",0,0,0.6,false,false);a.p([37.01,-2.08,-192.98],[-0.31,0,0],[5.98,2,13.94],"6.0",0,0,0.6,false,false);a.p([23.22007,63.72006999999999,-315.23992999999996],[0.22,0,0],[9.78,2,19.04],"2483ff,0.4",0,0,0.6,false,false);a.p([15.490139999999998,31.660140000000002,-345.86985999999996],[0.22,0,0],[9.78,2,19.04],"6.0",0,0,0.6,false,false);a.p([22.500210000000003,-1.02979,-158.04979],[-0.34,0,0],[5.98,2,13.94],"6.0",0,0,0.6,false,false);a.e([3.6004899999999997,33.57049,-386.58951]);a.e([9.29,33.57,-387.66]);a.e([-1.57993,33.57007,-385.17993]);a.e([-0.65986,28.99014,-391.71986]);a.e([0.87021,33.57021,-386.19979]);a.e([6.49028,33.57028,-387.10972000000004]);},post:function(){cc.set_monkey("speed",default_speed*1.4);cc.set_monkey("steer",default_steer*2.0);cc.set_monkey("camera.maxZ",10000.0);cc.refresh();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-326.21964999999994){speed=default_speed*0.2;this.section_id+=1}
break;case 1:if(PZ<-338.53965){speed=cc.get("speed",null);this.section_id+=1}
break;case 2:if(PZ<-386.67972){speed=default_speed*0.1;steer=default_steer*2.0;this.section_id+=1}
break;case 3:if(PZ<-412.01972){speed=cc.get("speed",null);steer=cc.get("steer",null);this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('P0',[0.00007000000000000001,-1.02993,-44.44993],[0,0,0],[5.98,2,13.94]);a.re('P1',[0.00014000000000000001,-1.02986,-80.07986],[0,0,0],[5.98,2,13.94]);a.re('P2',[40.14021,-2.1097900000000003,-232.17979],[0.08,0,0],[5.98,2,13.94]);a.re('P3',[17.09028,-1.02972,-145.97972],[-0.49,0,0],[5.98,2,13.94]);a.re('P4',[32.35035,-2.1096500000000002,-181.86965],[-0.49,0,0],[5.98,2,13.94]);a.re('P5',[39.71042,-2.10958,-205.63958],[-0.12,0,0],[5.98,2,13.94]);a.re('P6',[10.91049,31.68049,-363.69951000000003],[0.28,0,0],[9.78,2,19.04]);a.re('P7',[6.32,27.39,-378.54],[0.32,0,0],[11.1,2,10.04]);a.re('P8',[40.64007,-4.39993,-217.90992999999997],[0,0,0],[5.98,2,7.94]);a.re('P9',[1.21014,27.390140000000002,-389.20986],[0.32,0,0],[52.5,2,12.76]);a.re('P10',[-1.01979,39.15021,-394.98978999999997],[0.28,-1.55,0.05],[49.12,2.5,33.38]);a.re('P11',[17.84028,-17.96972,-337.42972000000003],[0.22,0,0],[11.54,2,19.18]);a.re('P12',[26.860349999999997,-4.399649999999999,-169.66965],[-0.39,0,0],[5.98,2,7.94]);a.re('P13',[-0.04958,-4.39958,-57.65958],[0,0,0],[5.98,2,7.94]);a.re('P14',[3.05049,-4.39951,-105.23951],[-0.22,0,0],[5.98,2,7.94]);a.re('P15',[34.8,-4.4,-259.08],[0.21,0,0],[5.98,2,7.94]);a.re('P16',[0.00007000000000000001,-1.02993,-16.51993],[0,0,0],[5.98,2,13.94]);a.re('P17',[0.00014000000000000001,-1.02986,-2.5298599999999998],[0,0,0],[5.98,2,13.94]);a.re('P18',[0.00021,-1.02979,-30.459789999999998],[0,0,0],[5.98,2,13.94]);a.re('P19',[1.00028,-1.02972,-93.45972],[-0.15,0,0],[5.98,2,13.94]);a.re('P20',[11.990350000000001,-1.02965,-133.74965],[-0.31,0,0],[5.98,2,13.94]);a.re('P21',[38.010419999999996,-2.07958,-245.71957999999998],[0.22,0,0],[5.98,2,13.94]);a.re('P22',[27.42049,63.72049,-296.63951000000003],[0.22,0,0],[11.54,2,19.18]);a.re('P23',[37.01,-2.08,-192.98],[-0.31,0,0],[5.98,2,13.94]);a.re('P24',[23.22007,63.72006999999999,-315.23992999999996],[0.22,0,0],[9.78,2,19.04]);a.re('P25',[15.490139999999998,31.660140000000002,-345.86985999999996],[0.22,0,0],[9.78,2,19.04]);a.re('P26',[22.500210000000003,-1.02979,-158.04979],[-0.34,0,0],[5.98,2,13.94]);a.re('E0',[3.6004899999999997,33.57049,-386.58951],[0,0,0],[1,1,1]);a.re('E1',[9.29,33.57,-387.66],[0,0,0],[1,1,1]);a.re('E2',[-1.57993,33.57007,-385.17993],[0,0,0],[1,1,1]);a.re('E3',[-0.65986,28.99014,-391.71986],[0,0,0],[1,1,1]);a.re('E4',[0.87021,33.57021,-386.19979],[0,0,0],[1,1,1]);a.re('E5',[6.49028,33.57028,-387.10972000000004],[0,0,0],[1,1,1]);},physics_update:function(){},render_update:function(){}}