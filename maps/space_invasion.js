var map = {
    title: "Space Invasion",
    song: "env2",
    maker: "catfishpie",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([36.00014, 1.91014, -10.51986], [0.79, 0, 0], [1.22, 0.52, 2.88], "0055ff", 0, 0, 0.6, false, false);
        a.p([37.18021, 1.91021, -10.51979], [-0.79, 0, 0], [1.22, 0.52, 2.88], "0055ff", 0, 0, 0.6, false, false);
        a.p([36.56028, 1.91028, -10.73972], [-1.57, 0, 0], [2.46, 0.4, 2.48], "ff0000", 0, 0, 0.6, false, false);
        a.p([10.42035, 1.91035, -10.51965], [0.52, 0, 0], [0.62, 0.4, 1.48], "0055ff", 0, 0, 0.6, false, false);
        a.p([16.79042, 1.91042, -10.51958], [-0.52, 0, 0], [0.62, 0.4, 1.48], "0055ff", 0, 0, 0.6, false, false);
        a.p([11.60049, 1.91049, -10.51951], [-0.52, 0, 0], [0.62, 0.4, 1.48], "0055ff", 0, 0, 0.6, false, false);
        a.p([15.61, 1.91, -10.52], [0.52, 0, 0], [0.62, 0.4, 1.48], "0055ff", 0, 0, 0.6, false, false);
        a.p([18.39007, 1.91007, -10.51993], [0.52, 0, 0], [0.62, 0.4, 1.48], "0055ff", 0, 0, 0.6, false, false);
        a.p([19.57014, 1.91014, -10.51986], [-0.52, 0, 0], [0.62, 0.4, 1.48], "0055ff", 0, 0, 0.6, false, false);
        a.p([46.30021, 1.91021, -10.51979], [-0.52, 0, 0], [0.62, 0.4, 1.48], "0055ff", 0, 0, 0.6, false, false);
        a.p([45.12028, 1.91028, -10.51972], [0.52, 0, 0], [0.62, 0.4, 1.48], "0055ff", 0, 0, 0.6, false, false);
        a.p([16.20035, 1.91035, -10.43965], [0, 0, 0], [0.98, 0.5, 1.48], "ff0000", 0, 0, 0.6, false, false);
        a.p([11.01042, 1.91042, -10.43958], [0, 0, 0], [0.98, 0.5, 1.48], "ff0000", 0, 0, 0.6, false, false);
        a.p([18.98049, 1.91049, -10.43951], [0, 0, 0], [0.98, 0.5, 1.48], "ff0000", 0, 0, 0.6, false, false);
        a.p([45.71, 1.91, -10.44], [0, 0, 0], [0.98, 0.5, 1.48], "ff0000", 0, 0, 0.6, false, false);
        a.p([-8.98993, 1.91007, -10.51993], [-0.79, 0, 0], [1.22, 0.52, 2.88], "0055ff", 0, 0, 0.6, false, false);
        a.p([-10.16986, 1.91014, -10.51986], [0.79, 0, 0], [1.22, 0.52, 2.88], "0055ff", 0, 0, 0.6, false, false);
        a.p([-9.60979, 1.91021, -10.73979], [-1.57, 0, 0], [2.46, 0.4, 2.48], "ff0000", 0, 0, 0.6, false, false);
        a.p([-0.07972, 0.15028, -22.50972], [-1.57, 0, 0], [1.22, 14.72, 46.6], "00000a", 0, 0, 0.6, false, false);
        a.p([1.31035, 0.15035, -20.83965], [-1.57, 0, 0], [2.46, 0.54, 0.8], "0055ff", 0, 0, 0.6, false, false);
        a.p([-1.34958, 0.15042, -20.83958], [-1.57, 0, 0], [2.46, 0.54, 0.8], "0055ff", 0, 0, 0.6, false, false);
        a.p([-0.07951, 0.15049, -21.30951], [-1.57, 0, 0], [1.22, 0.72, 5.76], "ff0000", 0, 0, 0.6, false, false);
        a.p([-0.62, 0.15, -20.44], [0.79, 0, 0], [1.22, 0.72, 2.88], "ff0000", 0, 0, 0.6, false, false);
        a.p([0.56007, 0.15007, -20.43993], [-0.79, 0, 0], [1.22, 0.72, 2.88], "ff0000", 0, 0, 0.6, false, false);
        a.p([-2.53986, 0.18014, -49.03986], [0.52, 0, 0], [0.62, 0.6, 1.48], "0055ff", 9999.0, 0, 0.6, false, false);
        a.p([-1.36979, 0.18021, -49.03979], [-0.52, 0, 0], [0.62, 0.6, 1.48], "0055ff", 9999.0, 0, 0.6, false, false);
        a.p([1.68028, 0.18028, -52.93972], [-0.52, 0, 0], [0.62, 0.6, 1.48], "0055ff", 9999.0, 0, 0.6, false, false);
        a.p([0.51035, 0.18035, -52.92965], [0.52, 0, 0], [0.62, 0.6, 1.48], "0055ff", 9999.0, 0, 0.6, false, false);
        a.p([0.60042, 0.18042, -41.46958], [-0.52, 0, 0], [0.62, 0.6, 1.48], "0055ff", 9999.0, 0, 0.6, false, false);
        a.p([-0.56951, 0.18049, -41.45951], [0.52, 0, 0], [0.62, 0.6, 1.48], "0055ff", 9999.0, 0, 0.6, false, false);
        a.p([-1.96, 0.18, -48.95], [0, 0, 0], [0.98, 0.76, 1.48], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([1.09007, 0.18007, -52.84993], [0, 0, 0], [0.98, 0.76, 1.48], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.00014, 0.18014, -41.37986], [0, 0, 0], [0.98, 0.76, 1.48], "ff0000", 9999.0, 0, 0.6, false, false);
        a.p([0.51021, 0.10021, -21.57979], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([2.22028, 0.10028, -25.80972], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([-0.78965, 0.10035, -31.15965], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([-2.25958, 0.10042, -39.22958], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([-1.18951, 0.10049, -43.19951], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([-0.01, 0.1, -47.1], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([1.03007, 0.10007, -51.05993], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([2.18014, 0.10014, -55.19986], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([-0.94979, 0.10021, -58.86979], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([-1.54972, 0.10028, -68.44972], [0, 0, 0], [2.4, 0.5, 2.4], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([1.54035, 0.10035, -64.19965], [0, 0, 0], [2.4, 0.5, 2.4], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([0.00042, 0.10042, -72.54958], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([1.10049, 0.10049, -93.47951], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([2.23, 0.1, -109.92], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([-2.22993, 0.10007, -109.91993], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([-1.19986, 0.10014, -114.46986], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([1.20021, 0.10021, -114.46979], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([0.00028, 0.10028, -119.21972], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([-2.22965, 0.10035, -125.21965], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([2.23042, 0.10042, -125.21958], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([1.20049, 0.10049, -129.02951], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.p([-1.2, 0.1, -129.03], [0, 0, 0], [0.98, 0.5, 1.48], "fff200", 9999.0, 0, 0.6, false, false);
        a.e([-0.06993, -0.08993, -138.66993]);
        a.p([0.00014, -0.06986, -2.01986], [0, 0, 0], [44.78, 2.98, 2.24], "00000a,0.0", 0, 0, 0.6, false, false);
        a.p([0.00021, 0.00021, -58.46979], [0, 0, 0], [42.6, 3.22, 94.78], "00000a,1.0", 0, 0, 0.6, false, false);
        a.p([24.00028, 0.00028, 30.59028], [0, 0, 0], [42.6, 3.22, 94.78], "00000a,1.0", 0, 0, 0.6, false, false);
        a.p([-23.99965, 0.00035, 30.59035], [0, 0, 0], [42.6, 3.22, 94.78], "00000a,1.0", 0, 0, 0.6, false, false);
        a.p([-0.06958, -3.73958, 0.03042], [0, 0, 0], [91.62, 2, 308.54], "2f003b", 0, 0, 0.6, false, true);
        a.p([0.00049, -0.26951, -0.47951], [0, 0, 0], [37.06, 0.36, 0.98], "8e00b3", 0, 0, 0.6, false, false);
        a.p([-4.7, 1.51, -4.86], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([-5.19993, 1.51007, -4.85993], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([-5.56986, 1.51014, -4.85986], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([-5.38979, 1.51021, -4.85979], [-0.53, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([-6.14972, 1.51028, -5.10972], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([-6.14965, 1.51035, -4.60965], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([-6.14958, 1.51042, -4.85958], [-0.66, 0, 0], [0.22, 0.8, 0.52], "ffffff", 0, 0, 0.6, false, false);
        a.p([-6.88951, 1.51049, -4.60951], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([-6.89, 1.51, -5.11], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([-6.74993, 1.51007, -4.85993], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([-6.81986, 1.51014, -4.85986], [-1.57, 0, 0], [0.22, 0.8, 0.3], "ffffff", 0, 0, 0.6, false, false);
        a.p([-7.50979, 1.51021, -4.85979], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([-7.61972, 1.51028, -5.04972], [-1.57, 0, 0], [0.34, 0.8, 0.46], "ffffff", 0, 0, 0.6, false, false);
        a.p([-7.66965, 1.51035, -4.78965], [-0.66, 0, 0], [0.22, 0.8, 0.52], "ffffff", 0, 0, 0.6, false, false);
        a.p([-8.33958, 1.51042, -4.85958], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([-8.34951, 1.51049, -5.10951], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([-5.29, 1.51, -3.76], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([-5.43993, 1.51007, -4.00993], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([-5.43986, 1.51014, -3.50986], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([-6.19979, 1.51021, -3.75979], [0, 0, 0], [0.54, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([-6.84972, 1.51028, -3.75972], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([-7.54965, 1.51035, -3.75965], [-0.53, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([-7.72958, 1.51042, -3.75958], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([-7.34951, 1.51049, -3.75951], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([7.29, 1.51, -3.4], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([7.15007, 1.51007, -3.65993], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([7.15014, 1.51014, -3.15986], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([7.89021, 1.51021, -3.40979], [-0.66, 0, 0], [0.22, 0.8, 0.52], "ffffff", 0, 0, 0.6, false, false);
        a.p([7.89028, 1.51028, -3.15972], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([7.89035, 1.51035, -3.65965], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([6.33042, 1.51042, -3.39958], [0, 0, 0], [0.54, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([5.50049, 1.51049, -3.33951], [-0.66, 0, 0], [0.22, 0.8, 0.52], "ffffff", 0, 0, 0.6, false, false);
        a.p([5.55, 1.51, -3.6], [-1.57, 0, 0], [0.34, 0.8, 0.46], "ffffff", 0, 0, 0.6, false, false);
        a.p([5.66007, 1.51007, -3.39993], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([4.85014, 1.51014, -3.40986], [-1.57, 0, 0], [0.22, 0.8, 0.3], "ffffff", 0, 0, 0.6, false, false);
        a.p([4.91021, 1.51021, -3.39979], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([4.77028, 1.51028, -3.65972], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([4.77035, 1.51035, -3.15965], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([7.54042, 1.60042, -2.29958], [0, 0, 0], [0.54, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([6.69049, 1.60049, -2.29951], [0, 0, 0], [0.22, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([6.81, 1.51, -2.54], [-1.57, 0, 0], [0.22, 0.8, 0.36], "ffffff", 0, 0, 0.6, false, false);
        a.p([5.98007, 1.51007, -2.54993], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([5.16014, 1.60014, -2.29986], [0, 0, 0], [0.54, 0.8, 0.7], "ffffff", 0, 0, 0.6, false, false);
        a.p([5.83021, 1.51021, -2.46979], [0, 0, 0], [0.22, 0.8, 0.38], "ffffff", 0, 0, 0.6, false, false);
        a.p([5.98028, 1.51028, -2.04972], [-1.57, 0, 0], [0.22, 0.8, 0.5], "ffffff", 0, 0, 0.6, false, false);
        a.p([5.98035, 1.51035, -2.21965], [-2.22, 0, 0], [0.22, 0.8, 0.48], "ffffff", 0, 0, 0.6, false, false);
    },
    post: function() {
        a.u('P0');
        a.u('P1');
        a.u('P2');
        a.u('P3');
        a.u('P4');
        a.u('P5');
        a.u('P6');
        a.u('P7');
        a.u('P8');
        a.u('P9');
        a.u('P10');
        a.u('P11');
        a.u('P12');
        a.u('P13');
        a.u('P14');
        a.u('P15');
        a.u('P16');
        a.u('P17');
        a.u('P18');
        a.u('P19');
        a.u('P20');
        a.u('P21');
        a.u('P22');
        a.u('P23');
        a.u('P24');
        a.u('P25');
        a.u('P26');
        a.u('P27');
        a.u('P28');
        a.u('P29');
        a.u('P30');
        a.u('P31');
        a.u('P32');
        a.u('P33');
        a.u('P34');
        a.u('P35');
        a.u('P36');
        a.u('P37');
        a.u('P38');
        a.u('P39');
        a.u('P40');
        a.u('P41');
        a.u('P42');
        a.u('P43');
        a.u('P44');
        a.u('P45');
        a.u('P46');
        a.u('P47');
        a.u('P48');
        a.u('P49');
        a.u('P50');
        a.u('P51');
        a.u('P52');
        a.u('P53');
        a.u('P54');
        a.u('E0');
        cc.set_monkey("speed", default_speed * 0.8);
        cc.set_monkey("steer", default_steer * 0.9);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < 0.0000700000000000145) {
                    a.cam_cd(50.0);
                    this.section_id += 1
                }
                break;
            case 1:
                a.mov('P0', 'x', -0.2);
                a.mov('P1', 'x', -0.2);
                a.mov('P2', 'x', -0.2);
                a.mov('P3', 'x', -0.3);
                a.mov('P4', 'x', -0.3);
                a.mov('P5', 'x', -0.3);
                a.mov('P6', 'x', -0.3);
                a.mov('P7', 'x', -0.3);
                a.mov('P8', 'x', -0.3);
                a.mov('P9', 'x', -0.3);
                a.mov('P10', 'x', -0.3);
                a.mov('P11', 'x', -0.3);
                a.mov('P12', 'x', -0.3);
                a.mov('P13', 'x', -0.3);
                a.mov('P14', 'x', -0.3);
                a.mov('P15', 'x', 0.08);
                a.mov('P16', 'x', 0.08);
                a.mov('P17', 'x', 0.08);
                a.mov('P18', 'z', 0.03);
                a.mov('P19', 'z', 0.03);
                a.mov('P20', 'z', 0.03);
                a.mov('P21', 'z', 0.03);
                a.mov('P22', 'z', 0.03);
                a.mov('P23', 'z', 0.03);
                a.mov('P24', 'z', 0.15);
                a.mov('P25', 'z', 0.15);
                a.mov('P26', 'z', 0.15);
                a.mov('P27', 'z', 0.15);
                a.mov('P28', 'z', 0.15);
                a.mov('P29', 'z', 0.15);
                a.mov('P30', 'z', 0.15);
                a.mov('P31', 'z', 0.15);
                a.mov('P32', 'z', 0.15);
                a.mov('P33', 'z', 0.3);
                a.mov('P34', 'z', 0.3);
                a.mov('P35', 'z', 0.3);
                a.mov('P36', 'z', 0.3);
                a.mov('P37', 'z', 0.3);
                a.mov('P38', 'z', 0.3);
                a.mov('P39', 'z', 0.3);
                a.mov('P40', 'z', 0.3);
                a.mov('P41', 'z', 0.3);
                a.mov('P42', 'z', 0.3);
                a.mov('P43', 'z', 0.3);
                a.mov('P44', 'z', 0.3);
                a.mov('P45', 'z', 0.3);
                a.mov('P46', 'z', 0.3);
                a.mov('P47', 'z', 0.3);
                a.mov('P48', 'z', 0.3);
                a.mov('P49', 'z', 0.3);
                a.mov('P50', 'z', 0.3);
                a.mov('P51', 'z', 0.3);
                a.mov('P52', 'z', 0.3);
                a.mov('P53', 'z', 0.3);
                a.mov('P54', 'z', 0.3);
                a.mov('E0', 'z', 0.3);
                if (PZ < -9.999929999999999) {
                    a.cam_cd(null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [36.00014, 1.91014, -10.51986], [0.79, 0, 0], [1.22, 0.52, 2.88]);
        a.re('P1', [37.18021, 1.91021, -10.51979], [-0.79, 0, 0], [1.22, 0.52, 2.88]);
        a.re('P2', [36.56028, 1.91028, -10.73972], [-1.57, 0, 0], [2.46, 0.4, 2.48]);
        a.re('P3', [10.42035, 1.91035, -10.51965], [0.52, 0, 0], [0.62, 0.4, 1.48]);
        a.re('P4', [16.79042, 1.91042, -10.51958], [-0.52, 0, 0], [0.62, 0.4, 1.48]);
        a.re('P5', [11.60049, 1.91049, -10.51951], [-0.52, 0, 0], [0.62, 0.4, 1.48]);
        a.re('P6', [15.61, 1.91, -10.52], [0.52, 0, 0], [0.62, 0.4, 1.48]);
        a.re('P7', [18.39007, 1.91007, -10.51993], [0.52, 0, 0], [0.62, 0.4, 1.48]);
        a.re('P8', [19.57014, 1.91014, -10.51986], [-0.52, 0, 0], [0.62, 0.4, 1.48]);
        a.re('P9', [46.30021, 1.91021, -10.51979], [-0.52, 0, 0], [0.62, 0.4, 1.48]);
        a.re('P10', [45.12028, 1.91028, -10.51972], [0.52, 0, 0], [0.62, 0.4, 1.48]);
        a.re('P11', [16.20035, 1.91035, -10.43965], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P12', [11.01042, 1.91042, -10.43958], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P13', [18.98049, 1.91049, -10.43951], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P14', [45.71, 1.91, -10.44], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P15', [-8.98993, 1.91007, -10.51993], [-0.79, 0, 0], [1.22, 0.52, 2.88]);
        a.re('P16', [-10.16986, 1.91014, -10.51986], [0.79, 0, 0], [1.22, 0.52, 2.88]);
        a.re('P17', [-9.60979, 1.91021, -10.73979], [-1.57, 0, 0], [2.46, 0.4, 2.48]);
        a.re('P18', [-0.07972, 0.15028, -22.50972], [-1.57, 0, 0], [1.22, 14.72, 46.6]);
        a.re('P19', [1.31035, 0.15035, -20.83965], [-1.57, 0, 0], [2.46, 0.54, 0.8]);
        a.re('P20', [-1.34958, 0.15042, -20.83958], [-1.57, 0, 0], [2.46, 0.54, 0.8]);
        a.re('P21', [-0.07951, 0.15049, -21.30951], [-1.57, 0, 0], [1.22, 0.72, 5.76]);
        a.re('P22', [-0.62, 0.15, -20.44], [0.79, 0, 0], [1.22, 0.72, 2.88]);
        a.re('P23', [0.56007, 0.15007, -20.43993], [-0.79, 0, 0], [1.22, 0.72, 2.88]);
        a.re('P24', [-2.53986, 0.18014, -49.03986], [0.52, 0, 0], [0.62, 0.6, 1.48]);
        a.re('P25', [-1.36979, 0.18021, -49.03979], [-0.52, 0, 0], [0.62, 0.6, 1.48]);
        a.re('P26', [1.68028, 0.18028, -52.93972], [-0.52, 0, 0], [0.62, 0.6, 1.48]);
        a.re('P27', [0.51035, 0.18035, -52.92965], [0.52, 0, 0], [0.62, 0.6, 1.48]);
        a.re('P28', [0.60042, 0.18042, -41.46958], [-0.52, 0, 0], [0.62, 0.6, 1.48]);
        a.re('P29', [-0.56951, 0.18049, -41.45951], [0.52, 0, 0], [0.62, 0.6, 1.48]);
        a.re('P30', [-1.96, 0.18, -48.95], [0, 0, 0], [0.98, 0.76, 1.48]);
        a.re('P31', [1.09007, 0.18007, -52.84993], [0, 0, 0], [0.98, 0.76, 1.48]);
        a.re('P32', [0.00014, 0.18014, -41.37986], [0, 0, 0], [0.98, 0.76, 1.48]);
        a.re('P33', [0.51021, 0.10021, -21.57979], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P34', [2.22028, 0.10028, -25.80972], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P35', [-0.78965, 0.10035, -31.15965], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P36', [-2.25958, 0.10042, -39.22958], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P37', [-1.18951, 0.10049, -43.19951], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P38', [-0.01, 0.1, -47.1], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P39', [1.03007, 0.10007, -51.05993], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P40', [2.18014, 0.10014, -55.19986], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P41', [-0.94979, 0.10021, -58.86979], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P42', [-1.54972, 0.10028, -68.44972], [0, 0, 0], [2.4, 0.5, 2.4]);
        a.re('P43', [1.54035, 0.10035, -64.19965], [0, 0, 0], [2.4, 0.5, 2.4]);
        a.re('P44', [0.00042, 0.10042, -72.54958], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P45', [1.10049, 0.10049, -93.47951], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P46', [2.23, 0.1, -109.92], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P47', [-2.22993, 0.10007, -109.91993], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P48', [-1.19986, 0.10014, -114.46986], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P49', [1.20021, 0.10021, -114.46979], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P50', [0.00028, 0.10028, -119.21972], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P51', [-2.22965, 0.10035, -125.21965], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P52', [2.23042, 0.10042, -125.21958], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P53', [1.20049, 0.10049, -129.02951], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('P54', [-1.2, 0.1, -129.03], [0, 0, 0], [0.98, 0.5, 1.48]);
        a.re('E0', [-0.06993, -0.08993, -138.66993], [0, 0, 0], [1, 1, 1]);
        a.re('P55', [0.00014, -0.06986, -2.01986], [0, 0, 0], [44.78, 2.98, 2.24]);
        a.re('P56', [0.00021, 0.00021, -58.46979], [0, 0, 0], [42.6, 3.22, 94.78]);
        a.re('P57', [24.00028, 0.00028, 30.59028], [0, 0, 0], [42.6, 3.22, 94.78]);
        a.re('P58', [-23.99965, 0.00035, 30.59035], [0, 0, 0], [42.6, 3.22, 94.78]);
        a.re('P59', [-0.06958, -3.73958, 0.03042], [0, 0, 0], [91.62, 2, 308.54]);
        a.re('P60', [0.00049, -0.26951, -0.47951], [0, 0, 0], [37.06, 0.36, 0.98]);
        a.re('P61', [-4.7, 1.51, -4.86], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P62', [-5.19993, 1.51007, -4.85993], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P63', [-5.56986, 1.51014, -4.85986], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P64', [-5.38979, 1.51021, -4.85979], [-0.53, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P65', [-6.14972, 1.51028, -5.10972], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P66', [-6.14965, 1.51035, -4.60965], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P67', [-6.14958, 1.51042, -4.85958], [-0.66, 0, 0], [0.22, 0.8, 0.52]);
        a.re('P68', [-6.88951, 1.51049, -4.60951], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P69', [-6.89, 1.51, -5.11], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P70', [-6.74993, 1.51007, -4.85993], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P71', [-6.81986, 1.51014, -4.85986], [-1.57, 0, 0], [0.22, 0.8, 0.3]);
        a.re('P72', [-7.50979, 1.51021, -4.85979], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P73', [-7.61972, 1.51028, -5.04972], [-1.57, 0, 0], [0.34, 0.8, 0.46]);
        a.re('P74', [-7.66965, 1.51035, -4.78965], [-0.66, 0, 0], [0.22, 0.8, 0.52]);
        a.re('P75', [-8.33958, 1.51042, -4.85958], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P76', [-8.34951, 1.51049, -5.10951], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P77', [-5.29, 1.51, -3.76], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P78', [-5.43993, 1.51007, -4.00993], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P79', [-5.43986, 1.51014, -3.50986], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P80', [-6.19979, 1.51021, -3.75979], [0, 0, 0], [0.54, 0.8, 0.7]);
        a.re('P81', [-6.84972, 1.51028, -3.75972], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P82', [-7.54965, 1.51035, -3.75965], [-0.53, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P83', [-7.72958, 1.51042, -3.75958], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P84', [-7.34951, 1.51049, -3.75951], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P85', [7.29, 1.51, -3.4], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P86', [7.15007, 1.51007, -3.65993], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P87', [7.15014, 1.51014, -3.15986], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P88', [7.89021, 1.51021, -3.40979], [-0.66, 0, 0], [0.22, 0.8, 0.52]);
        a.re('P89', [7.89028, 1.51028, -3.15972], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P90', [7.89035, 1.51035, -3.65965], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P91', [6.33042, 1.51042, -3.39958], [0, 0, 0], [0.54, 0.8, 0.7]);
        a.re('P92', [5.50049, 1.51049, -3.33951], [-0.66, 0, 0], [0.22, 0.8, 0.52]);
        a.re('P93', [5.55, 1.51, -3.6], [-1.57, 0, 0], [0.34, 0.8, 0.46]);
        a.re('P94', [5.66007, 1.51007, -3.39993], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P95', [4.85014, 1.51014, -3.40986], [-1.57, 0, 0], [0.22, 0.8, 0.3]);
        a.re('P96', [4.91021, 1.51021, -3.39979], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P97', [4.77028, 1.51028, -3.65972], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P98', [4.77035, 1.51035, -3.15965], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P99', [7.54042, 1.60042, -2.29958], [0, 0, 0], [0.54, 0.8, 0.7]);
        a.re('P100', [6.69049, 1.60049, -2.29951], [0, 0, 0], [0.22, 0.8, 0.7]);
        a.re('P101', [6.81, 1.51, -2.54], [-1.57, 0, 0], [0.22, 0.8, 0.36]);
        a.re('P102', [5.98007, 1.51007, -2.54993], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P103', [5.16014, 1.60014, -2.29986], [0, 0, 0], [0.54, 0.8, 0.7]);
        a.re('P104', [5.83021, 1.51021, -2.46979], [0, 0, 0], [0.22, 0.8, 0.38]);
        a.re('P105', [5.98028, 1.51028, -2.04972], [-1.57, 0, 0], [0.22, 0.8, 0.5]);
        a.re('P106', [5.98035, 1.51035, -2.21965], [-2.22, 0, 0], [0.22, 0.8, 0.48]);
    },
    physics_update: function() {},
    render_update: function() {}
}