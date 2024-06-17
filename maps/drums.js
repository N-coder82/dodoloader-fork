var map = {
    title: "Drums",
    song: "env2",
    maker: "ABC123",
    spawn: [0, 0.5, 0],
    init: function() {
        a.y([-0.01972, 0.00028, -0.06972], [0, 0, 0], [22.04, 1.44, 22.04], "26262b", 0, 0, 0.6, false, 1);
        a.y([22.81035, -4.90965, -27.81965], [0, 0, 0], [1.18, 27.68, 1.18], "63636a", 0, 0, 0.6, false, 1);
        a.p([22.93042, -18.49958, -22.35958], [0, 0.24, 0], [0.98, 1.3, 12.2], "63636a", 0, 0, 0.6, false, false);
        a.p([17.12049, -18.49951, -29.97951], [-1.93, 0.24, 0], [1, 1.3, 12.48], "63636a", 0, 0, 0.6, false, false);
        a.p([27.28, -18.5, -31.85], [-3.98, 0.24, 0], [1.02, 1.3, 12.68], "63636a", 0, 0, 0.6, false, false);
        a.p([-16.79993, -18.03993, -21.07993], [-3.98, 0.24, 0], [1.02, 1.3, 12.68], "63636a", 0, 0, 0.6, false, false);
        a.p([-26.95986, -18.03986, -19.20986], [-1.93, 0.24, 0], [1, 1.3, 12.48], "63636a", 0, 0, 0.6, false, false);
        a.p([-21.13979, -18.03979, -11.57979], [0, 0.24, 0], [0.98, 1.3, 12.2], "63636a", 0, 0, 0.6, false, false);
        a.y([-21.12972, -6.62972, -17.09972], [0, 0, 0], [1.52, 26.32, 1.52], "63636a", 0, 0, 0.6, false, 1);
        a.p([17.29035, 8.01035, -35.88965], [1.98, 0, 0], [0.56, 0.84, 4.74], "63636a", 0, 0, 0.6, false, false);
        a.y([-11.40958, 10.82042, -44.98958], [0, 0, 0], [1.52, 8.62, 1.52], "63636a", 0, 0, 0.6, false, 1);
        a.y([-3.39951, 1.03049, -30.64951], [0, 0, 0], [1.52, 11.78, 1.52], "63636a", 0, 0, 0.6, false, 1);
        a.y([8.43, 0.26, -30.65], [0, 0, 0], [1.52, 11.78, 1.52], "63636a", 0, 0, 0.6, false, 1);
        a.y([11.39007, -1.74993, -20.83993], [0, 0, 0], [1.52, 8.04, 1.52], "63636a", 0, 0, 0.6, false, 1);
        a.y([-5.30986, -4.16986, -20.83986], [0, 0, 0], [1.52, 11.78, 1.52], "63636a", 0, 0, 0.6, false, 1);
        a.y([2.20021, -3.51979, -30.64979], [0, 0, -1.57], [2, 12.3, 2], "63636a", 0, 0, 0.6, false, 1);
        a.y([3.55028, -3.51972, -20.95972], [0, 0, -1.57], [2, 16.62, 2], "63636a", 0, 0, 0.6, false, 1);
        a.y([9.59035, 4.73035, -38.00965], [-0.18, 1.59, 0], [1.54, 14.2, 1.54], "63636a", 0, 0, 0.6, false, 1);
        a.y([-7.25958, 5.91042, -38.00958], [0.52, 1.72, 0], [2.04, 17.28, 2.04], "63636a", 0, 0, 0.6, false, 1);
        a.y([2.20049, -3.51951, -25.51951], [-1.57, 0, -1.57], [2, 10.4, 2], "63636a", 0, 0, 0.6, false, 1);
        a.p([6.55, -18.5, -29.36], [-3.98, 0.24, 0], [1.02, 1.3, 12.68], "63636a", 0, 0, 0.6, false, false);
        a.p([-3.60993, -18.49993, -27.47993], [-1.93, 0.24, 0], [1, 1.3, 12.48], "63636a", 0, 0, 0.6, false, false);
        a.p([2.20014, -18.49986, -19.85986], [0, 0.24, 0], [0.98, 1.3, 12.2], "63636a", 0, 0, 0.6, false, false);
        a.y([2.21021, -10.59979, -25.37979], [0, 0, 0], [1.52, 16.06, 1.52], "63636a", 0, 0, 0.6, false, 1);
        a.y([10.54028, 9.30028, -44.86972], [0, 0, 0], [1.52, 8.48, 1.52], "63636a", 0, 0, 0.6, false, 1);
        a.p([16.10035, 7.25035, -35.37965], [1.98, 0.54, 0], [0.56, 0.6, 2.3], "63636a", 0, 0, 0.6, false, false);
        a.p([16.10042, 8.83042, -35.37958], [1.98, -0.52, 0], [0.56, 0.6, 2.3], "63636a", 0, 0, 0.6, false, false);
        a.p([-13.98951, 3.06049, -24.02951], [4.59, 0, 0], [0.56, 0.84, 4.74], "63636a", 0, 0, 0.6, false, false);
        a.p([-12.7, 3.88, -23.86], [4.59, -0.52, 0], [0.56, 0.6, 2.3], "63636a", 0, 0, 0.6, false, false);
        a.p([-12.69993, 2.29007, -23.85993], [4.59, 0.54, 0], [0.56, 0.6, 2.3], "63636a", 0, 0, 0.6, false, false);
        a.p([21.23014, 3.67014, -21.68986], [5.55, 0.54, 0], [0.56, 0.6, 2.3], "63636a", 0, 0, 0.6, false, false);
        a.p([21.23021, 5.26021, -21.68979], [5.55, -0.52, 0], [0.56, 0.6, 2.3], "63636a", 0, 0, 0.6, false, false);
        a.p([20.36028, 4.43028, -20.72972], [5.55, 0, 0], [0.56, 0.84, 4.74], "63636a", 0, 0, 0.6, false, false);
        a.p([-11.89965, 8.21035, -35.49965], [5.85, 2.14, -0.12], [0.56, 0.6, 2.3], "63636a", 0, 0, 0.6, false, false);
        a.p([-12.56958, 8.16042, -34.05958], [5.86, 1.08, -0.12], [0.56, 0.6, 2.3], "63636a", 0, 0, 0.6, false, false);
        a.p([-12.35951, 6.90049, -34.91951], [5.86, 1.61, -0.12], [0.56, 0.84, 4.74], "63636a", 0, 0, 0.6, false, false);
        a.p([3.72, -20.85, -22.22], [0, 0, 0], [78.12, 2, 61.88], "77777e", 99999999999.0, 0, 0.6, false, false);
        a.y([-0.01993, -14.13993, -0.06993], [0, 0, 0], [3.82, 26.4, 3.82], "78788a", 0, 0, 0.6, false, 1);
        a.y([9.77014, 2.46014, -20.47986], [0, 0, 0], [10.98, 1.44, 10.98], "a8a8b3", 0, 0, 0.6, false, 1);
        a.y([9.07021, 6.17021, -28.82979], [0, 0, 0], [9.72, 1.44, 9.72], "a8a8b3", 0, 0, 0.6, false, 1);
        a.y([-3.41972, 6.23028, -31.96972], [0, 0, 0], [9.72, 1.44, 9.72], "a8a8b3", 0, 0, 0.6, false, 1);
        a.y([-6.30965, 1.90035, -20.82965], [0, 0, 0], [9.72, 1.44, 9.72], "a8a8b3", 0, 0, 0.6, false, 1);
        a.y([22.75042, 6.54042, -27.96958], [0, 0, 0], [11.64, 0.48, 11.64], "b39200", 0, 0, 0.6, true, 1);
        a.y([22.75049, 4.55049, -27.96951], [0, 0, 0], [11.64, 0.48, 11.64], "b39200", 0, 0, 0.6, true, 1);
        a.y([-21.06, 2.65, -17.22], [0, 0, 0], [10.52, 1.44, 10.52], "b39200", 0, 0, 0.6, false, 1);
        a.y([-11.32993, 12.80007, -45.17993], [0, 0, 0], [11.02, 1.44, 11.02], "b39200", 0, 0, 0.6, false, 1);
        a.p([22.31014, 5.53014, -29.42986], [-3.06, 0, -0.48], [5.06, 0.28, 1.54], "b39200", 0, 0, 0.6, false, false);
        a.y([10.68021, 11.58021, -45.03979], [0, 0, 0], [11.28, 1.44, 11.28], "b39200", 0, 0, 0.6, false, 1);
        a.y([-10.23972, 7.43028, -38.66972], [-0.13, -0.36, 1.28], [1.24, 13.1, 1.24], "cd9d56", 0, 0, 0.6, false, 1);
        a.y([-10.68965, 7.53035, -37.79965], [-0.13, -0.36, 1.28], [1.24, 13.1, 1.24], "cd9d56", 0, 0, 0.6, false, 1);
        a.s([-15.63958, 9.29042, -38.97958], 2.42, "cd9d56", 0, 0, 0.6, false);
        a.s([-15.17951, 9.19049, -39.83951], 2.42, "cd9d56", 0, 0, 0.6, false);
        a.p([-9.8, 12.81, -45.21], [1.58, 0, 0], [8.26, 1.42, 7.34], "-1.0", 0, 0, 0.6, true, false);
        a.p([-13.97993, 3.06007, -24.01993], [4.59, 0, 0], [0.56, 0.84, 4.74], "-1.0", 0, 0, 0.6, true, false);
        a.p([20.37014, 4.43014, -20.73986], [5.55, 0, 0], [0.56, 0.84, 4.74], "-1.0", 0, 0, 0.6, true, false);
        a.p([-5.92979, 1.95021, -20.62979], [1.58, 0, 0], [8.26, 1.42, 7.34], "-1.0", 0, 0, 0.6, true, false);
        a.p([-5.92972, 1.95028, -20.62972], [0, 0, 0], [9.38, 1.42, 6.46], "-1.0", 0, 0, 0.6, true, false);
        a.p([8.58035, 6.24035, -29.07965], [0, 0, 0], [9.38, 1.42, 6.46], "-1.0", 0, 0, 0.6, true, false);
        a.p([8.58042, 6.24042, -29.07958], [1.58, 0, 0], [8.26, 1.42, 7.34], "-1.0", 0, 0, 0.6, true, false);
        a.p([9.67049, 2.50049, -20.62951], [0, 0, 0], [9.38, 1.42, 6.46], "-1.0", 0, 0, 0.6, true, false);
        a.p([9.67, 2.5, -20.63], [1.58, 0, 0], [8.26, 1.42, 7.34], "-1.0", 0, 0, 0.6, true, false);
        a.p([-3.56993, 6.30007, -32.08993], [0, 0, 0], [9.38, 1.42, 6.46], "-1.0", 0, 0, 0.6, true, false);
        a.p([-3.56986, 6.30014, -32.08986], [1.58, 0, 0], [8.26, 1.42, 7.34], "-1.0", 0, 0, 0.6, true, false);
        a.p([-12.34979, 6.91021, -34.91979], [5.86, 1.61, -0.12], [0.56, 0.84, 4.74], "-1.0", 0, 0, 0.6, true, false);
        a.p([-21.11972, 2.42028, -17.10972], [1.58, 0, 0], [8.56, 2, 6.36], "-1.0", 0, 0, 0.6, true, false);
        a.p([-20.03965, 2.42035, -17.10965], [0, 0, 0], [8.14, 2, 6.68], "-1.0", 0, 0, 0.6, true, false);
        a.p([-21.11958, 2.42042, -17.10958], [0, 0, 0], [8.14, 2, 6.68], "-1.0", 0, 0, 0.6, true, false);
        a.p([-21.11951, 2.42049, -17.10951], [1.58, 0, 0], [8.56, 2, 6.36], "-1.0", 0, 0, 0.6, true, false);
        a.p([17.28, 8.01, -35.89], [1.98, 0, 0], [0.56, 0.84, 4.74], "-1.0", 0, 0, 0.6, true, false);
        a.p([22.62007, 4.65007, -27.85993], [0, 0, 0], [10.3, 0.34, 10.66], "-1.0", 0, 0, 0.6, false, false);
        a.p([22.62014, 6.69014, -25.64986], [0, 0, 0], [5.36, 0.34, 6.56], "-1.0", 0, 0, 0.6, false, false);
        a.p([26.61021, 6.69021, -27.37979], [0, 0, 0], [4.26, 0.34, 8.4], "-1.0", 0, 0, 0.6, false, false);
        a.p([22.62028, 6.69028, -31.96972], [0, 0, 0], [5.36, 0.34, 2.98], "-1.0", 0, 0, 0.6, false, false);
        a.p([22.05035, 6.69035, -29.61965], [0, 0, 0], [3.08, 0.34, 2.98], "-1.0", 0, 0, 0.6, false, false);
        a.p([19.81042, 6.69042, -28.02958], [0, 0, 0], [4.26, 0.34, 8.4], "-1.0", 0, 0, 0.6, true, false);
        a.p([18.16049, 6.64049, -28.02951], [0, 0, -0.14], [2.64, 0.34, 4.36], "-1.0", 0, 0, 0.6, true, false);
        a.e([10.49021, 13.28021, -44.90979]);
    },
    post: function() {
        a.u('Y25');
        a.u('Y26');
        a.u('S0');
        a.u('S1');
        cc.set_monkey("steer", default_steer * 2.0);
        cc.set_monkey("speed", default_speed * 0.3);
        cc.set_monkey("radius", 1.2);
        cc.set_monkey("jumpHeight", 0.75);
        cc.set_monkey("jumpSpeed", 0.7);
        cc.set_monkey("gravity", new BABYLON.Vector3(null, -2.6999999999999997, null));
        cc.set_monkey("player.scaling", new BABYLON.Vector3(0.3, 0.048, 0.3));
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -0.050000000000000044) {
                    speed = default_speed * 0.04;
                    steer = default_steer * 0.0;
                    a.cam_d(6.5);
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -1.81) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.cam_d(null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -1.9799300000000004) {
                    rotation = 60.0 * Math.PI / 180;
                    speed = default_speed * 1.5;
                    steer = default_steer * 0.0;
                    a.g(null, -0.123, null);
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -14.379930000000002) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -24.25993) {
                    a.g(null, -0.7, null);
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -24.51993) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -35.95986) {
                    speed = default_speed * 0.2;
                    this.section_id += 1
                }
                break;
            case 7:
                a.mov('Y25', 'y', 0.1);
                a.mov('Y26', 'y', 0.1);
                a.mov('S0', 'y', 0.1);
                a.mov('S1', 'y', 0.1);
                if (PZ < -39.479859999999995) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -43.029790000000006) {
                    a.js(2.0);
                    a.g(null, 0.5, null);
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -56.48979) {
                    a.js(null);
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('Y0', [-0.01972, 0.00028, -0.06972], [0, 0, 0], [22.04, 1.44, 22.04]);
        a.re('Y1', [22.81035, -4.90965, -27.81965], [0, 0, 0], [1.18, 27.68, 1.18]);
        a.re('P0', [22.93042, -18.49958, -22.35958], [0, 0.24, 0], [0.98, 1.3, 12.2]);
        a.re('P1', [17.12049, -18.49951, -29.97951], [-1.93, 0.24, 0], [1, 1.3, 12.48]);
        a.re('P2', [27.28, -18.5, -31.85], [-3.98, 0.24, 0], [1.02, 1.3, 12.68]);
        a.re('P3', [-16.79993, -18.03993, -21.07993], [-3.98, 0.24, 0], [1.02, 1.3, 12.68]);
        a.re('P4', [-26.95986, -18.03986, -19.20986], [-1.93, 0.24, 0], [1, 1.3, 12.48]);
        a.re('P5', [-21.13979, -18.03979, -11.57979], [0, 0.24, 0], [0.98, 1.3, 12.2]);
        a.re('Y2', [-21.12972, -6.62972, -17.09972], [0, 0, 0], [1.52, 26.32, 1.52]);
        a.re('P6', [17.29035, 8.01035, -35.88965], [1.98, 0, 0], [0.56, 0.84, 4.74]);
        a.re('Y3', [-11.40958, 10.82042, -44.98958], [0, 0, 0], [1.52, 8.62, 1.52]);
        a.re('Y4', [-3.39951, 1.03049, -30.64951], [0, 0, 0], [1.52, 11.78, 1.52]);
        a.re('Y5', [8.43, 0.26, -30.65], [0, 0, 0], [1.52, 11.78, 1.52]);
        a.re('Y6', [11.39007, -1.74993, -20.83993], [0, 0, 0], [1.52, 8.04, 1.52]);
        a.re('Y7', [-5.30986, -4.16986, -20.83986], [0, 0, 0], [1.52, 11.78, 1.52]);
        a.re('Y8', [2.20021, -3.51979, -30.64979], [0, 0, -1.57], [2, 12.3, 2]);
        a.re('Y9', [3.55028, -3.51972, -20.95972], [0, 0, -1.57], [2, 16.62, 2]);
        a.re('Y10', [9.59035, 4.73035, -38.00965], [-0.18, 1.59, 0], [1.54, 14.2, 1.54]);
        a.re('Y11', [-7.25958, 5.91042, -38.00958], [0.52, 1.72, 0], [2.04, 17.28, 2.04]);
        a.re('Y12', [2.20049, -3.51951, -25.51951], [-1.57, 0, -1.57], [2, 10.4, 2]);
        a.re('P7', [6.55, -18.5, -29.36], [-3.98, 0.24, 0], [1.02, 1.3, 12.68]);
        a.re('P8', [-3.60993, -18.49993, -27.47993], [-1.93, 0.24, 0], [1, 1.3, 12.48]);
        a.re('P9', [2.20014, -18.49986, -19.85986], [0, 0.24, 0], [0.98, 1.3, 12.2]);
        a.re('Y13', [2.21021, -10.59979, -25.37979], [0, 0, 0], [1.52, 16.06, 1.52]);
        a.re('Y14', [10.54028, 9.30028, -44.86972], [0, 0, 0], [1.52, 8.48, 1.52]);
        a.re('P10', [16.10035, 7.25035, -35.37965], [1.98, 0.54, 0], [0.56, 0.6, 2.3]);
        a.re('P11', [16.10042, 8.83042, -35.37958], [1.98, -0.52, 0], [0.56, 0.6, 2.3]);
        a.re('P12', [-13.98951, 3.06049, -24.02951], [4.59, 0, 0], [0.56, 0.84, 4.74]);
        a.re('P13', [-12.7, 3.88, -23.86], [4.59, -0.52, 0], [0.56, 0.6, 2.3]);
        a.re('P14', [-12.69993, 2.29007, -23.85993], [4.59, 0.54, 0], [0.56, 0.6, 2.3]);
        a.re('P15', [21.23014, 3.67014, -21.68986], [5.55, 0.54, 0], [0.56, 0.6, 2.3]);
        a.re('P16', [21.23021, 5.26021, -21.68979], [5.55, -0.52, 0], [0.56, 0.6, 2.3]);
        a.re('P17', [20.36028, 4.43028, -20.72972], [5.55, 0, 0], [0.56, 0.84, 4.74]);
        a.re('P18', [-11.89965, 8.21035, -35.49965], [5.85, 2.14, -0.12], [0.56, 0.6, 2.3]);
        a.re('P19', [-12.56958, 8.16042, -34.05958], [5.86, 1.08, -0.12], [0.56, 0.6, 2.3]);
        a.re('P20', [-12.35951, 6.90049, -34.91951], [5.86, 1.61, -0.12], [0.56, 0.84, 4.74]);
        a.re('P21', [3.72, -20.85, -22.22], [0, 0, 0], [78.12, 2, 61.88]);
        a.re('Y15', [-0.01993, -14.13993, -0.06993], [0, 0, 0], [3.82, 26.4, 3.82]);
        a.re('Y16', [9.77014, 2.46014, -20.47986], [0, 0, 0], [10.98, 1.44, 10.98]);
        a.re('Y17', [9.07021, 6.17021, -28.82979], [0, 0, 0], [9.72, 1.44, 9.72]);
        a.re('Y18', [-3.41972, 6.23028, -31.96972], [0, 0, 0], [9.72, 1.44, 9.72]);
        a.re('Y19', [-6.30965, 1.90035, -20.82965], [0, 0, 0], [9.72, 1.44, 9.72]);
        a.re('Y20', [22.75042, 6.54042, -27.96958], [0, 0, 0], [11.64, 0.48, 11.64]);
        a.re('Y21', [22.75049, 4.55049, -27.96951], [0, 0, 0], [11.64, 0.48, 11.64]);
        a.re('Y22', [-21.06, 2.65, -17.22], [0, 0, 0], [10.52, 1.44, 10.52]);
        a.re('Y23', [-11.32993, 12.80007, -45.17993], [0, 0, 0], [11.02, 1.44, 11.02]);
        a.re('P22', [22.31014, 5.53014, -29.42986], [-3.06, 0, -0.48], [5.06, 0.28, 1.54]);
        a.re('Y24', [10.68021, 11.58021, -45.03979], [0, 0, 0], [11.28, 1.44, 11.28]);
        a.re('Y25', [-10.23972, 7.43028, -38.66972], [-0.13, -0.36, 1.28], [1.24, 13.1, 1.24]);
        a.re('Y26', [-10.68965, 7.53035, -37.79965], [-0.13, -0.36, 1.28], [1.24, 13.1, 1.24]);
        a.re('S0', [-15.63958, 9.29042, -38.97958], [0, 0, 0], [2.42, 2.42, 2.42]);
        a.re('S1', [-15.17951, 9.19049, -39.83951], [0, 0, 0], [2.42, 2.42, 2.42]);
        a.re('P23', [-9.8, 12.81, -45.21], [1.58, 0, 0], [8.26, 1.42, 7.34]);
        a.re('P24', [-13.97993, 3.06007, -24.01993], [4.59, 0, 0], [0.56, 0.84, 4.74]);
        a.re('P25', [20.37014, 4.43014, -20.73986], [5.55, 0, 0], [0.56, 0.84, 4.74]);
        a.re('P26', [-5.92979, 1.95021, -20.62979], [1.58, 0, 0], [8.26, 1.42, 7.34]);
        a.re('P27', [-5.92972, 1.95028, -20.62972], [0, 0, 0], [9.38, 1.42, 6.46]);
        a.re('P28', [8.58035, 6.24035, -29.07965], [0, 0, 0], [9.38, 1.42, 6.46]);
        a.re('P29', [8.58042, 6.24042, -29.07958], [1.58, 0, 0], [8.26, 1.42, 7.34]);
        a.re('P30', [9.67049, 2.50049, -20.62951], [0, 0, 0], [9.38, 1.42, 6.46]);
        a.re('P31', [9.67, 2.5, -20.63], [1.58, 0, 0], [8.26, 1.42, 7.34]);
        a.re('P32', [-3.56993, 6.30007, -32.08993], [0, 0, 0], [9.38, 1.42, 6.46]);
        a.re('P33', [-3.56986, 6.30014, -32.08986], [1.58, 0, 0], [8.26, 1.42, 7.34]);
        a.re('P34', [-12.34979, 6.91021, -34.91979], [5.86, 1.61, -0.12], [0.56, 0.84, 4.74]);
        a.re('P35', [-21.11972, 2.42028, -17.10972], [1.58, 0, 0], [8.56, 2, 6.36]);
        a.re('P36', [-20.03965, 2.42035, -17.10965], [0, 0, 0], [8.14, 2, 6.68]);
        a.re('P37', [-21.11958, 2.42042, -17.10958], [0, 0, 0], [8.14, 2, 6.68]);
        a.re('P38', [-21.11951, 2.42049, -17.10951], [1.58, 0, 0], [8.56, 2, 6.36]);
        a.re('P39', [17.28, 8.01, -35.89], [1.98, 0, 0], [0.56, 0.84, 4.74]);
        a.re('P40', [22.62007, 4.65007, -27.85993], [0, 0, 0], [10.3, 0.34, 10.66]);
        a.re('P41', [22.62014, 6.69014, -25.64986], [0, 0, 0], [5.36, 0.34, 6.56]);
        a.re('P42', [26.61021, 6.69021, -27.37979], [0, 0, 0], [4.26, 0.34, 8.4]);
        a.re('P43', [22.62028, 6.69028, -31.96972], [0, 0, 0], [5.36, 0.34, 2.98]);
        a.re('P44', [22.05035, 6.69035, -29.61965], [0, 0, 0], [3.08, 0.34, 2.98]);
        a.re('P45', [19.81042, 6.69042, -28.02958], [0, 0, 0], [4.26, 0.34, 8.4]);
        a.re('P46', [18.16049, 6.64049, -28.02951], [0, 0, -0.14], [2.64, 0.34, 4.36]);
        a.re('E0', [10.49021, 13.28021, -44.90979], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}