var map={title:"basic training",song:"env2",maker:"Rocky707",spawn:[0,0.5,0],init:function(){a.p([6.48,-0.23986000000000002,-69.29],[0,0,0],[3.2,0.24,26.02],2.0,0,0,0.6,false);a.y([-0.19,-9.909790000000001,-86.3],[0,-1.57,0],[11.04,8.74,11.04],3.0,0,0,0.6);a.p([0,-0.23965,-27.77],[0,0,0],[3.2,0.24,57.98],2.0,0,0,0.6,false);a.p([0,6.2,-120.73],[0,0,0],[3.2,0.24,57.98],2.0,0,0,0.6,false);a.c([0,0.25021,-32.23],true);a.s([0,-4.83972,-43.63],10.78,1,0,0,0.6);a.e([0,7.30035,-138.51]);},post:function(){a.u('P0');a.u('Y0');cc.set_monkey("speed",default_speed*0.25);cc.refresh();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-1.08){speed=default_speed*0.25;a.msg_set("Hello and welcome to basic training! ");this.section_id+=1}
break;case 1:if(PZ<-11.84){speed=cc.get("speed",null);a.msg_del();this.section_id+=1}
break;case 2:if(PZ<-11.900000000000002){a.msg_set("This will show you some basic tricks ");this.section_id+=1}
break;case 3:if(PZ<-22.66){a.msg_del();this.section_id+=1}
break;case 4:if(PZ<-22.76){speed=default_speed*0.25;a.msg_set("First off, cones will kill you. ");this.section_id+=1}
break;case 5:if(PZ<-33.52){speed=cc.get("speed",null);a.msg_del();this.section_id+=1}
break;case 6:if(PZ<-33.69){a.msg_set("When you see spheres, expect inconsistency ");this.section_id+=1}
break;case 7:if(PZ<-44.45){a.msg_del();this.section_id+=1}
break;case 8:if(PZ<-51.790000000000006){a.msg_set("Platforms can also move ");this.section_id+=1}
break;case 9:a.mov('P0','x',-0.25);if(PZ<-58.61){a.msg_del();this.section_id+=1}
break;case 10:if(PZ<-78.01){a.msg_set("Cylinders are slippery! ");this.section_id+=1}
break;case 11:a.mov('Y0','y',0.25);if(PZ<-91.17){a.msg_del();this.section_id+=1}
break;case 12:if(PZ<-94.2){a.msg_set("Go into the green block to win! ");this.section_id+=1}
break;case 13:if(PZ<-107.36){a.msg_del();this.section_id+=1}
break;case 14:if(PZ<-107.71000000000001){a.msg_set("Thats the end of Basic Training! ");this.section_id+=1}
break;case 15:if(PZ<-120.87){a.msg_del();this.section_id+=1}
break;case 16:if(PZ<-121.10000000000001){a.msg_set("Come back next time for advanced training! ");this.section_id+=1}
break;case 17:if(PZ<-134.26000000000002){a.msg_del();this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('P0',[6.48,-0.23986000000000002,-69.29],[0,0,0],[3.2,0.24,26.02]);a.re('Y0',[-0.19,-9.909790000000001,-86.3],[0,-1.57,0],[11.04,8.74,11.04]);a.re('P1',[0,-0.23965,-27.77],[0,0,0],[3.2,0.24,57.98]);a.re('P2',[0,6.2,-120.73],[0,0,0],[3.2,0.24,57.98]);a.re('C0',[0,0.25021,-32.23],[0,0,0],[2,2,2]);a.re('S0',[0,-4.83972,-43.63],[0,0,0],[10.78,10.78,10.78]);a.re('E0',[0,7.30035,-138.51],[0,0,0],[1,1,1]);},physics_update:function(){},render_update:function(){}}