var map={title:"Dodo Launch",song:"env2",maker:"catfishpie",spawn:[0,0.5,0],init:function(){a.p([0.00007000000000000001,-10.02993,-85.80993000000001],[0,0,0],[5,2.12,5],"4.0",1.0,0,0.6,false,false);a.y([16.950139999999998,0.00014000000000000001,-44.05986],[0,0,0],[7.28,81.28,7.28],"6b34eb",0,0,0.6,false,1);a.y([-26.659789999999997,0.00021,-101.76979],[0,0,0],[7.28,81.28,7.28],"6b34eb",0,0,0.6,false,1);a.y([-22.289720000000003,0.00028000000000000003,-231.29972],[0,0,0],[7.28,81.28,7.28],"6b34eb",0,0,0.6,false,1);a.y([-42.809650000000005,0.00035000000000000005,-298.62965],[0,0,0],[7.28,81.28,7.28],"6b34eb",0,0,0.6,false,1);a.y([20.680419999999998,0.00042,-360.82957999999996],[0,0,0],[7.28,81.28,7.28],"6b34eb",0,0,0.6,false,1);a.y([-47.28951,0.00049,-437.13951000000003],[0,0,0],[7.28,81.28,7.28],"6b34eb",0,0,0.6,false,1);a.y([5.29,0,-535.25],[0,0,0],[7.28,81.28,7.28],"6b34eb",0,0,0.6,false,1);a.y([-51.77993000000001,0.00007000000000000001,-560.89993],[0,0,0],[7.28,81.28,7.28],"6b34eb",0,0,0.6,false,1);a.p([-12.45986,-18.909860000000002,-497.51986],[0,0,0.54],[4,2.12,24.24],"1.0",0,0,0.6,false,false);a.p([0.00021,-5.73979,-119.37979],[0,0,0],[4,2.12,24.24],"2.0",0,0,0.6,false,false);a.p([3.3202800000000003,-5.49972,-129.60972],[0,0,0.57],[4,2.12,24.24],"2.0",0,0,0.6,false,false);a.p([15.12035,-15.47965,-238.11965],[0,3.76,0],[4.6,2.12,24.24],"2.0",0,0,0.6,false,false);a.p([15.12042,-15.47958,-229.68957999999998],[0,0,0],[4.6,2.12,24.24],"2.0",0,0,0.6,false,false);a.p([-6.03951,-15.59951,-424.70951],[0,0,-0.54],[4,2.12,24.24],"2.0",0,0,0.6,false,false);a.p([0,-2.56,-6.57],[0,0,0],[4,2.12,113.26],"2.0",0,0,0.6,false,false);a.p([-2.5099299999999998,-16.309929999999998,-410.23993],[0,0,0],[4,2.12,24.24],"2.0",0,0,0.6,false,false);a.p([-15.29986,-19.50986,-538.4598599999999],[0,0,0],[4,2.12,31.8],"4.0",0,0,0.6,false,false);a.y([41.84028,0.00028000000000000003,-192.18972000000002],[0,0,0],[7.28,81.28,7.28],"6b34eb",0,0,0.6,false,1);a.y([-13.949649999999998,0.00035000000000000005,-585.26965],[0,0,0],[7.28,81.28,7.28],"6b34eb",0,0,0.6,false,1);a.p([-8.47958,-17.139580000000002,-371.96958],[-0.24,0.25,0],[4,2.12,24.24],"1",0,0,0.6,false,false);a.p([8.04049,-15.47951,-283.23951],[0,0.25,0],[4,2.12,24.24],"1",0,0,0.6,false,false);a.p([14.6,-14.1,-170.18],[0,0,0],[5.68,2.12,35.14],"1",0,0,0.6,false,false);a.p([8.020069999999999,-11.63993,-203.00993],[0,0,-1.12],[4,2.12,24.24],"1",0,0,0.6,false,false);a.p([10.17014,-13.329860000000002,-190.22986],[0,0,-0.56],[4,2.12,24.24],"1",0,0,0.6,false,false);a.p([-16.12979,-19.50979,-473.68979],[0,0,0],[4.88,2.12,48.88],"1",0,0,0.6,false,false);a.p([-9.84972,-16.57972,-509.37972],[0,0,1.08],[4,2.12,24.24],"1",0,0,0.6,false,false);a.p([3.2403500000000003,-15.47965,-327.86965],[0.52,0.25,0],[4,2.12,24.24],"1",0,0,0.6,false,false);a.e([-15.29958,-17.909580000000002,-550.77958]);},post:function(){cc.set_monkey("speed",0.2);cc.set_monkey("steer",0.03);cc.refresh();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-0.0997899999999845){speed=default_speed*3.0;steer=default_steer*1.1;scene.clearColor=new BABYLON.Color3.FromHexString("#630073");this.section_id+=1}
break;case 1:if(PZ<-542.47979){speed=cc.get("speed",null);steer=cc.get("steer",null);scene.clearColor=cc.get("scene.clearColor",null);this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('P0',[0.00007000000000000001,-10.02993,-85.80993000000001],[0,0,0],[5,2.12,5]);a.re('Y0',[16.950139999999998,0.00014000000000000001,-44.05986],[0,0,0],[7.28,81.28,7.28]);a.re('Y1',[-26.659789999999997,0.00021,-101.76979],[0,0,0],[7.28,81.28,7.28]);a.re('Y2',[-22.289720000000003,0.00028000000000000003,-231.29972],[0,0,0],[7.28,81.28,7.28]);a.re('Y3',[-42.809650000000005,0.00035000000000000005,-298.62965],[0,0,0],[7.28,81.28,7.28]);a.re('Y4',[20.680419999999998,0.00042,-360.82957999999996],[0,0,0],[7.28,81.28,7.28]);a.re('Y5',[-47.28951,0.00049,-437.13951000000003],[0,0,0],[7.28,81.28,7.28]);a.re('Y6',[5.29,0,-535.25],[0,0,0],[7.28,81.28,7.28]);a.re('Y7',[-51.77993000000001,0.00007000000000000001,-560.89993],[0,0,0],[7.28,81.28,7.28]);a.re('P1',[-12.45986,-18.909860000000002,-497.51986],[0,0,0.54],[4,2.12,24.24]);a.re('P2',[0.00021,-5.73979,-119.37979],[0,0,0],[4,2.12,24.24]);a.re('P3',[3.3202800000000003,-5.49972,-129.60972],[0,0,0.57],[4,2.12,24.24]);a.re('P4',[15.12035,-15.47965,-238.11965],[0,3.76,0],[4.6,2.12,24.24]);a.re('P5',[15.12042,-15.47958,-229.68957999999998],[0,0,0],[4.6,2.12,24.24]);a.re('P6',[-6.03951,-15.59951,-424.70951],[0,0,-0.54],[4,2.12,24.24]);a.re('P7',[0,-2.56,-6.57],[0,0,0],[4,2.12,113.26]);a.re('P8',[-2.5099299999999998,-16.309929999999998,-410.23993],[0,0,0],[4,2.12,24.24]);a.re('P9',[-15.29986,-19.50986,-538.4598599999999],[0,0,0],[4,2.12,31.8]);a.re('Y8',[41.84028,0.00028000000000000003,-192.18972000000002],[0,0,0],[7.28,81.28,7.28]);a.re('Y9',[-13.949649999999998,0.00035000000000000005,-585.26965],[0,0,0],[7.28,81.28,7.28]);a.re('P10',[-8.47958,-17.139580000000002,-371.96958],[-0.24,0.25,0],[4,2.12,24.24]);a.re('P11',[8.04049,-15.47951,-283.23951],[0,0.25,0],[4,2.12,24.24]);a.re('P12',[14.6,-14.1,-170.18],[0,0,0],[5.68,2.12,35.14]);a.re('P13',[8.020069999999999,-11.63993,-203.00993],[0,0,-1.12],[4,2.12,24.24]);a.re('P14',[10.17014,-13.329860000000002,-190.22986],[0,0,-0.56],[4,2.12,24.24]);a.re('P15',[-16.12979,-19.50979,-473.68979],[0,0,0],[4.88,2.12,48.88]);a.re('P16',[-9.84972,-16.57972,-509.37972],[0,0,1.08],[4,2.12,24.24]);a.re('P17',[3.2403500000000003,-15.47965,-327.86965],[0.52,0.25,0],[4,2.12,24.24]);a.re('E0',[-15.29958,-17.909580000000002,-550.77958],[0,0,0],[1,1,1]);},physics_update:function(){},render_update:function(){}}