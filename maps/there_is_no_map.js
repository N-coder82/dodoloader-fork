var map={title:"There Is No Map",song:"env2",maker:"AnimeFan",spawn:[0,0.5,0],init:function(){a.p([8.70028,-6.20972,-130.05972],[0,0,0],[21.06,3.68,11.28],"1586e1",0,0,0.6,true,false);a.p([8.70035,-6.20965,-145.83965],[0,0,0],[21.06,3.68,11.28],"1586e1",0,0,0.6,true,false);a.p([36.77042,-6.20958,-162.40958],[0,0,0],[21.06,3.68,11.28],"1586e1",0,0,0.6,true,false);a.p([8.260489999999999,-6.01951,-301.08951],[0,0,0],[3.44,2,23.54],"666.0",0,0,0.6,true,false);a.p([0,0,-102.15],[0,0,0],[93.16,17.88,3.92],"01080d",0,0,0.6,false,false);a.p([11.820070000000001,-6.209930000000001,-173.99992999999998],[0,0,0],[21.06,3.68,11.28],"1586e1",0,0,0.6,true,false);a.p([0.00014000000000000001,-0.15986,-39.95986],[0,0,0],[3.5,0.32,123.2],"2.0",0,0,0.6,false,false);a.y([8.28021,-4.16979,-349.89979],[0,-1.56,0],[4.54,61.2,4.54],"3.0",0,0,0.6,true,1);a.s([16.86028,-4.31972,-194.18972000000002],7.6,"4.0",0,0,0.6,true);a.s([7.120349999999999,-3.7596499999999997,-194.99965],7.6,"4.0",0,0,0.6,true);a.s([1.02042,-4.40958,-195.56957999999997],7.38,"4.0",0,0,0.6,true);a.s([12.74049,-3.85951,-194.94951],7.6,"4.0",0,0,0.6,true);a.p([8.26,-6.02,-349.74],[0,0,0],[3.44,2,60.82],"666.0",0,0,0.6,false,false);a.p([8.70007,-6.209930000000001,-196.88993],[0,0,0],[21.06,3.68,21.16],"666.0",0,0,0.6,false,false);a.e([8.120420000000001,-5.5595799999999995,-223.45958]);a.p([7.6104899999999995,-5.94951,-218.91951],[0,0,0],[4.12,2,28.5],"666.0",0,0,0.6,false,false);a.c([0.00014000000000000001,-3.9898599999999997,-194.10986],true);a.c([16.95021,-3.9897899999999997,-193.60979],true);a.c([7.5202800000000005,-3.9897199999999997,-193.97972000000001],true);a.y([6.56035,-3.5096499999999997,-113.44965],[-0.13,-1.63,-0.36],[3.26,26.16,3.26],"666.0",0,0,0.6,false,1);a.c([9.28042,-4.67958,-330.16958],true);a.c([9.28049,-4.579510000000001,-340.78951],true);a.c([7.57,-4.760000000000001,-337.92],true);a.c([8.78007,-4.679930000000001,-344.68993],true);a.c([7.30014,-4.679860000000001,-349.92985999999996],true);a.c([8.99021,-4.679790000000001,-357.05979],true);a.c([7.18028,-4.69972,-229.03972000000002],true);a.c([7.18035,-4.549650000000001,-236.43965],true);a.c([8.41042,-4.54958,-236.43957999999998],true);a.c([5.75049,-4.549510000000001,-242.61951000000002],true);a.c([8.82,-4.550000000000001,-242.62],true);a.c([7.68007,-4.549930000000001,-249.00993],true);a.c([5.75014,-4.549860000000001,-253.20986000000002],true);a.c([15.57021,-3.9897899999999997,-193.60979],true);a.c([7.29028,-4.54972,-258.21972],true);a.c([7.29035,-4.549650000000001,-262.25965],true);a.c([9.09042,-4.54958,-262.25957999999997],true);a.c([5.73049,-3.9895100000000006,-193.60951],true);a.c([12.41,-3.9899999999999998,-193.61],true);a.e([8.90007,-5.6399300000000006,-377.56993]);},post:function(){a.u('P4');a.u('E0');a.u('P9');cc.set_monkey("speed",default_speed*0.6);cc.set_monkey("jumpHeight",1.1);cc.set_monkey("jumpSpeed",0.0);cc.set_monkey("steer",0.03);cc.refresh();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-5.009860000000001){a.msg_set("Just go to the menu because there is no map. ");this.section_id+=1}
break;case 1:if(PZ<-20.78986){a.msg_del();this.section_id+=1}
break;case 2:if(PZ<-26.75965){a.msg_set("What? I told you there is no map. ");this.section_id+=1}
break;case 3:if(PZ<-41.31965){a.msg_del();this.section_id+=1}
break;case 4:if(PZ<-50.509719999999994){a.msg_set("Stop! ");this.section_id+=1}
break;case 5:if(PZ<-64.84971999999999){a.msg_del();this.section_id+=1}
break;case 6:if(PZ<-72.00979){a.msg_set("Ok you want a map? Then i'll give you one! ");this.section_id+=1}
break;case 7:if(PZ<-86.68979){a.msg_del();this.section_id+=1}
break;case 8:if(PZ<-95.90986){this.section_id+=1}
break;case 9:a.mov('P4','y',1.5);if(PZ<-104.98986000000001){this.section_id+=1}
break;case 10:if(PZ<-114.93992999999999){light.groundColor=new BABYLON.Color3.FromHexString("#f35c10");speed=default_speed*0.845;light.diffuse=new BABYLON.Color3.FromHexString("#f63006");scene.ambientColor=new BABYLON.Color3.FromHexString("#03f2df");scene.clearColor=new BABYLON.Color3.FromHexString("#270b06");this.section_id+=1}
break;case 11:if(PZ<-180.83992999999998){light.groundColor=cc.get("light.groundColor",null);speed=cc.get("speed",null);light.diffuse=cc.get("light.diffuse",null);scene.ambientColor=cc.get("scene.ambientColor",null);scene.clearColor=cc.get("scene.clearColor",null);this.section_id+=1}
break;case 12:if(PZ<-208.82978999999997){speed=default_speed*1.0;this.section_id+=1}
break;case 13:a.mov('E0','y',-3.0);a.mov('P9','z',-1.0);if(PZ<-274.36978999999997){speed=cc.get("speed",null);this.section_id+=1}
break;case 14:if(PZ<-287.34993000000003){speed=default_speed*1.0;this.section_id+=1}
break;case 15:if(PZ<-393.62993){speed=cc.get("speed",null);this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('P0',[8.70028,-6.20972,-130.05972],[0,0,0],[21.06,3.68,11.28]);a.re('P1',[8.70035,-6.20965,-145.83965],[0,0,0],[21.06,3.68,11.28]);a.re('P2',[36.77042,-6.20958,-162.40958],[0,0,0],[21.06,3.68,11.28]);a.re('P3',[8.260489999999999,-6.01951,-301.08951],[0,0,0],[3.44,2,23.54]);a.re('P4',[0,0,-102.15],[0,0,0],[93.16,17.88,3.92]);a.re('P5',[11.820070000000001,-6.209930000000001,-173.99992999999998],[0,0,0],[21.06,3.68,11.28]);a.re('P6',[0.00014000000000000001,-0.15986,-39.95986],[0,0,0],[3.5,0.32,123.2]);a.re('Y0',[8.28021,-4.16979,-349.89979],[0,-1.56,0],[4.54,61.2,4.54]);a.re('S0',[16.86028,-4.31972,-194.18972000000002],[0,0,0],[7.6,7.6,7.6]);a.re('S1',[7.120349999999999,-3.7596499999999997,-194.99965],[0,0,0],[7.6,7.6,7.6]);a.re('S2',[1.02042,-4.40958,-195.56957999999997],[0,0,0],[7.38,7.38,7.38]);a.re('S3',[12.74049,-3.85951,-194.94951],[0,0,0],[7.6,7.6,7.6]);a.re('P7',[8.26,-6.02,-349.74],[0,0,0],[3.44,2,60.82]);a.re('P8',[8.70007,-6.209930000000001,-196.88993],[0,0,0],[21.06,3.68,21.16]);a.re('E0',[8.120420000000001,-5.5595799999999995,-223.45958],[0,0,0],[1,1,1]);a.re('P9',[7.6104899999999995,-5.94951,-218.91951],[0,0,0],[4.12,2,28.5]);a.re('C0',[0.00014000000000000001,-3.9898599999999997,-194.10986],[0,0,0],[2,2,2]);a.re('C1',[16.95021,-3.9897899999999997,-193.60979],[0,0,0],[2,2,2]);a.re('C2',[7.5202800000000005,-3.9897199999999997,-193.97972000000001],[0,0,0],[2,2,2]);a.re('Y1',[6.56035,-3.5096499999999997,-113.44965],[-0.13,-1.63,-0.36],[3.26,26.16,3.26]);a.re('C3',[9.28042,-4.67958,-330.16958],[0,0,0],[2,2,2]);a.re('C4',[9.28049,-4.579510000000001,-340.78951],[0,0,0],[2,2,2]);a.re('C5',[7.57,-4.760000000000001,-337.92],[0,0,0],[2,2,2]);a.re('C6',[8.78007,-4.679930000000001,-344.68993],[0,0,0],[2,2,2]);a.re('C7',[7.30014,-4.679860000000001,-349.92985999999996],[0,0,0],[2,2,2]);a.re('C8',[8.99021,-4.679790000000001,-357.05979],[0,0,0],[2,2,2]);a.re('C9',[7.18028,-4.69972,-229.03972000000002],[0,0,0],[2,2,2]);a.re('C10',[7.18035,-4.549650000000001,-236.43965],[0,0,0],[2,2,2]);a.re('C11',[8.41042,-4.54958,-236.43957999999998],[0,0,0],[2,2,2]);a.re('C12',[5.75049,-4.549510000000001,-242.61951000000002],[0,0,0],[2,2,2]);a.re('C13',[8.82,-4.550000000000001,-242.62],[0,0,0],[2,2,2]);a.re('C14',[7.68007,-4.549930000000001,-249.00993],[0,0,0],[2,2,2]);a.re('C15',[5.75014,-4.549860000000001,-253.20986000000002],[0,0,0],[2,2,2]);a.re('C16',[15.57021,-3.9897899999999997,-193.60979],[0,0,0],[2,2,2]);a.re('C17',[7.29028,-4.54972,-258.21972],[0,0,0],[2,2,2]);a.re('C18',[7.29035,-4.549650000000001,-262.25965],[0,0,0],[2,2,2]);a.re('C19',[9.09042,-4.54958,-262.25957999999997],[0,0,0],[2,2,2]);a.re('C20',[5.73049,-3.9895100000000006,-193.60951],[0,0,0],[2,2,2]);a.re('C21',[12.41,-3.9899999999999998,-193.61],[0,0,0],[2,2,2]);a.re('E1',[8.90007,-5.6399300000000006,-377.56993],[0,0,0],[1,1,1]);},physics_update:function(){},render_update:function(){}}