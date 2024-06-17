var map = {
    title: "Play Fort",
    song: "env2",
    maker: "awehero",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([-0.99958, 0.01042, -104.49958], [0, 0, 0], [4, 0.5, 8], "00ff00", 0, 0, 0.0, true, false, false, false);
        a.p([-8.99951, 0.01049, -6.99951], [0, 0, 0], [4, 0.5, 12], "00ff00", 0, 0, 0.6, true, false, false, false);
        a.p([9, 0.01, -7], [0, 0, 0], [4, 0.5, 12], "00ff00", 0, 0, 0.6, true, false, false, false);
        a.p([-19.55993, 0.82007, -108.99993], [0, 0, -0.14], [12, 0.5, 17], "00ffff", 0, 0, 0.0, false, false, false, false);
        a.p([-13.99986, 0.25014, -108.99986], [0, 0, -0.02], [24, 0.5, 17], "00ffff", 0, 0, 0.0, false, false, false, false);
        a.p([17.00021, 0.01021, -108.99979], [0, 0, 0], [15, 0.5, 17], "00ffff", 0, 0, 0.0, false, false, false, false);
        a.p([13.50028, 0.88028, -104.49972], [0, 0, -0.23], [8, 0.5, 8], "00ffff", 0, 0, 0.0, false, false, false, false);
        a.p([21.00035, 0.82035, -108.99965], [0, 0, 0.21], [8, 0.5, 17], "00ffff", 0, 0, 0.0, false, false, false, false);
        a.p([0.00042, 0.50042, -87.99958], [0, -0.08, 0], [13, 0.5, 14], "00ffff", 0, 0, 0.0, false, false, false, false);
        a.p([0.00049, 0.95049, -74.68951], [0, -0.52, 0], [13, 7, 15], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([8.25, 1, -22], [0, 0, 0], [9, 2, 1], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([13.61007, 1.00007, -24.29993], [0.44, 0, 0], [1, 2, 6], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([11.20014, 1.00014, -25.94986], [-1.13, 0, 0], [1, 2, 4], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([4.25021, 1.00021, -26.99979], [0, 0, 0], [1, 2, 10], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([-15.49972, 2.75028, -43.49972], [0.62, 0, 0], [12, 2, 1], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([-6.99965, 1.00035, -81.99965], [0, 0, 0], [1, 2, 24], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([-8.91958, 2.75042, -46.88958], [0, 0, 0], [4, 2, 1], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([-11.99951, 1.25049, -99.99951], [0, 0, 0], [26, 2.5, 1], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([17, 1.25, -100], [0, 0, 0], [16, 2.5, 1], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([1.00007, 1.25007, -108.99993], [0, 0, 0], [30, 2.5, 1], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([7.00014, 1.00014, -81.99986], [0, 0, 0], [1, 2, 24], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([9.50021, 1.25021, -104.49979], [0, 0, 0], [1, 2.5, 10], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([-13.99972, 1.25028, -117.99972], [0, 0, 0], [22, 2.5, 1], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([15.00035, 1.25035, -117.99965], [0, 0, 0], [20, 2.5, 1], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([-11.76958, 4.94042, -103.07958], [-0.37, -0.23, 0], [2, 0.5, 16], "13b41a,0.2", 0, 0, 0.0, false, false, false, false);
        a.p([17.00049, 3.50049, -94.21951], [0.31, 0, 0], [0.8, 1, 16], "13b41a,0.25", 0, 0, 0.6, false, false, false, false);
        a.p([15, 7.5, -73], [0, 0, 0], [2, 0.5, 6], "13b41a,0.5", 0, 0, 0.6, false, false, false, false);
        a.p([20.00007, 2.00007, -84.99993], [0, 0, 0], [4, 4, 4], "13b41a", 0, 0, 0.6, false, false, false, false);
        a.p([-23.74986, 2.15014, -48.79986], [0, 0.54, 0], [2, 2, 4], "13b41a", 0, 0, 0.6, false, false, false, false);
        a.p([13.50021, 1.00021, -39.99979], [0, 0, 0], [23, 2, 1], "13b41a", 0, 0, 0.6, false, false, false, false);
        a.p([-0.74972, 0.30028, -47.74972], [0, 0, -0.49], [4, 2, 4.5], "13b41a", 0, 0, 0.6, false, false, false, false);
        a.p([9.25035, 1.00035, -44.99965], [0, 0, 0], [23, 2, 1], "13b41a", 0, 0, 0.6, false, false, false, false);
        a.p([0.00042, 3.00042, 0.00042], [0, 0, 0], [40, 6, 0.5], "2d3dff", 0, 0, 0.6, false, true, false, false);
        a.p([4.73049, 8.07049, -43.51951], [-0.26, 0, 0.26], [20, 0.3, 1.6], "2d3dff,0.25", 0, 0, 0.0, false, false, false, false);
        a.p([-20, 7, -7], [0, 0, 0], [0.5, 14, 14], "2d3dff", 0, 0, 0.0, false, false, false, false);
        a.p([-19.99993, 0.00007, 0.25007], [0, 0, 0], [10, 0.5, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([-12.99986, 10.00014, -13.99986], [0, 0, 0], [2, 8, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([10.50021, 3.00021, 0.00021], [0, 0, 0], [19, 6, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([-12.24972, 3.00028, -6.99972], [0, 0, 0], [0.5, 6, 14], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([-18.99965, 10.00035, -13.99965], [0, 0, 0], [2, 8, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([-10.99958, 3.00042, -13.99958], [0, 0, 0], [18, 6, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([0.00049, 7.00049, -13.99951], [0, 0, 0], [24, 2, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([20, 7, -7], [0, 0, 0], [0.5, 14, 14], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([-15.99993, 10.00007, 0.00007], [0, 0, 0], [8, 8, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([-15.99986, 13.00014, -13.99986], [0, 0, 0], [8, 2, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([11.00021, 3.00021, -13.99979], [0, 0, 0], [18, 6, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([-10.49972, 3.00028, 0.00028], [0, 0, 0], [19, 6, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([-15.99965, 6.00035, -6.99965], [0, 0, 0], [8, 0.5, 14.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([16.00042, 10.00042, 0.00042], [0, 0, 0], [8, 8, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([16.00049, 13.00049, -13.99951], [0, 0, 0], [8, 2, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([12.25, 3, -7], [0, 0, 0], [0.5, 6, 14], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([13.00007, 10.00007, -13.99993], [0, 0, 0], [2, 8, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([16.00014, 6.00014, -6.99986], [0, 0, 0], [8, 0.5, 14.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([12.50021, 1.00021, -93.49979], [0, 0, 0], [12, 2, 1], "13b41a", 0, 0, 0.0, false, false, false, false);
        a.p([16.00028, 0.00028, -78.99972], [0, 0, 0], [4, 0.6, 4], "a200ff", 1.0, 0, 0.6, false, false, false, false);
        a.p([25.00035, 7.00035, -64.99965], [0, 0, 0], [0.5, 14, 130], "b233ff", 0, 0, 0.0, false, false, false, false);
        a.p([-24.99958, 7.00042, -64.99958], [0, 0, 0], [0.5, 14, 130], "b233ff", 0, 0, 0.0, false, false, false, false);
        a.p([-19.99951, 5.00049, -26.74951], [0, 0, 0], [0.5, 10, 26.5], "b233ff", 0, 0, 0.0, false, false, false, false);
        a.p([22.5, 7, 0], [0, 0, 0], [5, 14, 0.5], "b233ff", 0, 0, 0.0, false, false, false, false);
        a.p([-22.49993, 8.00007, 0.00007], [0, 0, 0], [5, 12, 0.5], "b233ff", 0, 0, 0.0, false, false, false, false);
        a.p([-22.49986, 6.50014, -17.49986], [0, -0.09, 0], [5, 0.5, 12.5], "b233ff", 0, 0, 50.0, false, false, false, false);
        a.p([4.50021, 3.75021, -51.99979], [0, 0, 0], [20, 0.5, 4], "b233ff", 0, 0, 0.6, true, false, false, false);
        a.p([6.75028, 0.62028, -30.49972], [0, 0.61, 0], [4, 6, 10.5], "b233ff", 0, 0, 0.6, false, false, false, false);
        a.p([-22.49965, 4.50035, -31.96965], [0, -0.12, 0], [5, 0.5, 16], "b233ff", 0, 0, 0.6, false, false, false, false);
        a.p([-22.49958, 2.70042, -39.67958], [0, 0, 0], [5, 2, 0.5], "b233ff", 0, 0, 0.6, false, false, false, false);
        a.p([24.00049, 6.00049, -51.99951], [0, 0, 0], [2.5, 4.2, 4], "b233ff", 0, 0, 0.6, false, false, false, false);
        a.p([7.89, 5.5, -42.21], [-0.74, 0, 0], [0.8, 1, 4], "b233ff", 0, 0, 0.6, false, false, false, false);
        a.p([-22.49993, 2.96007, -6.35993], [0, 0.79, 0], [5, 0.5, 14], "b233ff", 0, 0, 0.6, false, false, false, false);
        a.p([0.00014, 5.75014, -61.99986], [0, 0, 0], [50, 4, 16], "b233ff", 0, 0, 0.6, false, false, false, false);
        a.p([6.75021, 5.50021, -38.99979], [0, 0, 0], [1, 1, 4], "b233ff", 0, 0, 0.6, false, false, false, false);
        a.p([6.75028, 3.00028, -34.99972], [0, 0, 0], [4, 6, 4], "b233ff", 0, 0, 0.6, false, false, false, false);
        a.p([0.00035, 2.00035, -59.99965], [0, 0, 0], [50, 4, 20], "b233ff", 0, 0, 0.6, false, false, false, false);
        a.p([8.70042, 5.50042, -44.73958], [0.35, 0, 0], [0.6, 1, 3], "b233ff", 0, 0, 0.6, false, false, false, false);
        a.p([-13.49951, 1.00049, -44.99951], [0, 0, 0], [23, 2, 11], "b233ff", 0, 0, 0.6, false, false, false, false);
        a.p([0, 0, -65], [0, 0, 0], [50, 0.5, 130], "d2b48c", 0, 0, 0.6, false, false, false, false);
        a.p([-14.99993, 3.50007, -92.99993], [0, 0, 0], [6, 7, 6], "13b41a", 0, 0, 0.6, false, false, false, false);
        a.p([19.87014, 4.13014, -51.99986], [0, 0, 0.52], [9, 4, 4], "b233ff", 0, 0, 0.6, false, false, false, false);
        a.p([-4.69979, 1.00021, -32.17979], [0, 0, 0], [2, 2, 2], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([-4.75972, 1.00028, -23.69972], [0, 0, 0], [2, 2, 2], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([2.14035, 1.00035, -24.86965], [0, 0, 0], [2, 2, 2], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([-1.07958, 1.00042, -28.31958], [0, 0, 0], [2, 2, 2], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([0.97049, 1.00049, -35.16951], [0, 0, 0], [2, 2, 2], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([5, 1, -45], [0, 0, 0], [1, 1.98, 5], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([10.00007, 1.00007, -41.00993], [0, 0, 0], [1, 1.98, 3], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([15.00014, 1.00014, -44.99986], [0, 0, 0], [1, 1.98, 5], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([24.31021, 1.00021, -44.99979], [0, 0, 0], [1, 1.98, 10], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([10.00028, 1.00028, -49.48972], [0, 0, 0], [1, 1.98, 3], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([-12.99965, 4.75035, -52.99965], [0, 0, 0], [1, 2, 2], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([-6.99958, 4.75042, -51.00958], [0, 0, 0], [1, 2, 2], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([-0.99951, 4.75049, -52.00951], [0, 0, 0], [1, 2, 4], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([7, 4.75, -52.01], [0, 0, 0], [1, 2, 4], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([7.00007, 5.75007, -52.99993], [0, 0, 0], [1, 4, 2], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([14.00014, 4.75014, -52.00986], [0, 0, 0], [1, 2, 4], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([14.00021, 5.75021, -51.00979], [0, 0, 0], [1, 4, 2], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([17.02028, 9.05028, -39.58972], [-0.52, 0, -0.49], [8, 0.3, 2], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([20.98035, 7.50035, -37.74965], [0, 0, 0], [4, 0.3, 4], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([20.95042, 8.75042, -29.74958], [0, 0, 0.7], [4, 0.3, 4], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([18.40049, 7.50049, -25.74951], [0, 0, 0.35], [4, 0.3, 4], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([16, 7.25, -21.75], [0, 0, 0], [4, 0.3, 4], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([16.00007, 6.60007, -16.99993], [0, 0.26, 0], [4, 0.3, 6], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([-13.83986, 2.25014, -38.73986], [0, 0, 0], [2, 0.3, 4], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([-11.85979, 3.25021, -35.29979], [0, 0, 0], [2, 0.3, 2], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([-9.98972, 4.25028, -32.15972], [0, 0, 0], [2, 0.3, 4], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([-12.35965, 5.25035, -28.94965], [0, 0, 0], [2, 0.3, 2], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([-14.70958, 6.25042, -26.79958], [0, 0, 0], [2, 0.3, 2], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([-15.99951, 7.25049, -22.86951], [0, 0, 0], [4, 0.3, 6], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([-16, 6.6, -17], [0, 0.26, 0], [4, 0.3, 6], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([-14.99993, 6.75007, -79.99993], [0, 0, 0], [2, 0.5, 20], "ffff00", 0, 0, 0.6, false, false, false, false);
        a.p([-14.99986, 6.75014, -79.99986], [0, 0, 0], [0.5, 2, 20], "ffff00", 0, 0, 0.6, false, false, false, false);
        a.p([19.00021, 10.00021, -13.99979], [0, 0, 0], [2, 8, 0.5], "2d3dff", 0, 0, 0.6, false, false, false, false);
        a.p([17.99028, 8.75028, -33.74972], [0, 0, -0.75], [4, 0.3, 4], "ffd96b", 0, 0, 0.6, false, false, false, false);
        a.p([-22.97965, 1.00035, -108.99965], [0.09, 0, 0], [2, 2, 17], "-1.0", 0.5, 0, 0.0, false, false, false, false);
        a.p([7.00042, 4.50042, -81.99958], [0, 0, 0], [1, 9, 24], "-1.0", 0, 0, 0.0, false, false, false, false);
        a.p([-6.99951, 4.50049, -81.99951], [0, 0, 0], [1, 9, 24], "-1.0", 0, 0, 0.0, false, false, false, false);
        a.p([0.16, 5, -118], [0, 0, 0], [50, 6, 1], "-1.0", 0, 0, 0.0, false, false, false, false);
        a.p([0.00007, 1.00007, -129.99993], [0, 0, 0], [50, 2, 0.5], "b233ff", 0, 0, 0.0, false, false, false, false);
        a.p([4.00014, 7.00014, -48.38986], [0, 0, 0], [23, 4, 0.2], "-1.0", 0, 0, 0.0, false, false, false, false);
        a.p([0.00021, 0.00021, 1.00021], [0, 0, 0], [2, 0.5, 2], "-1.0", 0, 0, 0.6, false, false, false, false);
        a.p([0.09028, 1.00028, -20.12972], [0, 0, 0], [2, 2, 2], "ff0000", 0, 0, 0.6, false, false, true, false);
        a.p([0.00035, 0.75035, -1.15965], [0, 0, 0], [4, 0.5, 4], "-1.0", 0, 0, 0.6, false, false, false, false);
        a.e([0.00042, 0.00042, -124.99958]);
    },
    post: function() {
        a.u('P107');
        a.u('P108');
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#87ceeb"));
        cc.set_monkey("jumpSpeed", 0.25);
        cc.set_monkey("speed", default_speed * 0.5);
        cc.set_monkey("cameraDownAngle", 30.0 * Math.PI / 180);
        cc.set_monkey("steer", default_steer * 1.5);
        cc.set_monkey("light.specular", new BABYLON.Color3.FromHexString("#00000a"));
        cc.set_monkey("radius", 2.25);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
        case 0:
            if (PZ < 0.0003500000000000725) {
                a.js(0.25);
                this.section_id += 1
            }
            break;
        case 1:
            if (PZ < -13.999649999999999) {
                a.js(null);
                this.section_id += 1
            }
            break;
        case 2:
            if (PZ < -35.05979) {
                a.jh(0.25);
                this.section_id += 1
            }
            break;
        case 3:
            if (PZ < -41.05979) {
                a.jh(null);
                this.section_id += 1
            }
            break;
        case 4:
            if (PZ < -48.99972) {
                a.jh(0.55);
                a.js(0.25);
                this.section_id += 1
            }
            break;
        case 5:
            if (PZ < -54.99972) {
                a.jh(null);
                a.js(null);
                this.section_id += 1
            }
            break;
        case 6:
            if (PZ < -54.99986) {
                steer = default_steer * 1.5;
                a.jh(0.0);
                a.js(3.0);
                this.section_id += 1
            }
            break;
        case 7:
            a.rot('P107', 'z', -1.0);
            a.rot('P108', 'z', 1.0);
            if (PZ < -124.99986) {
                steer = cc.get("steer", null);
                a.jh(null);
                a.js(null);
                this.section_id += 1
            }
            break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [-0.99958, 0.01042, -104.49958], [0, 0, 0], [4, 0.5, 8]);
        a.re('P1', [-8.99951, 0.01049, -6.99951], [0, 0, 0], [4, 0.5, 12]);
        a.re('P2', [9, 0.01, -7], [0, 0, 0], [4, 0.5, 12]);
        a.re('P3', [-19.55993, 0.82007, -108.99993], [0, 0, -0.14], [12, 0.5, 17]);
        a.re('P4', [-13.99986, 0.25014, -108.99986], [0, 0, -0.02], [24, 0.5, 17]);
        a.re('P5', [17.00021, 0.01021, -108.99979], [0, 0, 0], [15, 0.5, 17]);
        a.re('P6', [13.50028, 0.88028, -104.49972], [0, 0, -0.23], [8, 0.5, 8]);
        a.re('P7', [21.00035, 0.82035, -108.99965], [0, 0, 0.21], [8, 0.5, 17]);
        a.re('P8', [0.00042, 0.50042, -87.99958], [0, -0.08, 0], [13, 0.5, 14]);
        a.re('P9', [0.00049, 0.95049, -74.68951], [0, -0.52, 0], [13, 7, 15]);
        a.re('P10', [8.25, 1, -22], [0, 0, 0], [9, 2, 1]);
        a.re('P11', [13.61007, 1.00007, -24.29993], [0.44, 0, 0], [1, 2, 6]);
        a.re('P12', [11.20014, 1.00014, -25.94986], [-1.13, 0, 0], [1, 2, 4]);
        a.re('P13', [4.25021, 1.00021, -26.99979], [0, 0, 0], [1, 2, 10]);
        a.re('P14', [-15.49972, 2.75028, -43.49972], [0.62, 0, 0], [12, 2, 1]);
        a.re('P15', [-6.99965, 1.00035, -81.99965], [0, 0, 0], [1, 2, 24]);
        a.re('P16', [-8.91958, 2.75042, -46.88958], [0, 0, 0], [4, 2, 1]);
        a.re('P17', [-11.99951, 1.25049, -99.99951], [0, 0, 0], [26, 2.5, 1]);
        a.re('P18', [17, 1.25, -100], [0, 0, 0], [16, 2.5, 1]);
        a.re('P19', [1.00007, 1.25007, -108.99993], [0, 0, 0], [30, 2.5, 1]);
        a.re('P20', [7.00014, 1.00014, -81.99986], [0, 0, 0], [1, 2, 24]);
        a.re('P21', [9.50021, 1.25021, -104.49979], [0, 0, 0], [1, 2.5, 10]);
        a.re('P22', [-13.99972, 1.25028, -117.99972], [0, 0, 0], [22, 2.5, 1]);
        a.re('P23', [15.00035, 1.25035, -117.99965], [0, 0, 0], [20, 2.5, 1]);
        a.re('P24', [-11.76958, 4.94042, -103.07958], [-0.37, -0.23, 0], [2, 0.5, 16]);
        a.re('P25', [17.00049, 3.50049, -94.21951], [0.31, 0, 0], [0.8, 1, 16]);
        a.re('P26', [15, 7.5, -73], [0, 0, 0], [2, 0.5, 6]);
        a.re('P27', [20.00007, 2.00007, -84.99993], [0, 0, 0], [4, 4, 4]);
        a.re('P28', [-23.74986, 2.15014, -48.79986], [0, 0.54, 0], [2, 2, 4]);
        a.re('P29', [13.50021, 1.00021, -39.99979], [0, 0, 0], [23, 2, 1]);
        a.re('P30', [-0.74972, 0.30028, -47.74972], [0, 0, -0.49], [4, 2, 4.5]);
        a.re('P31', [9.25035, 1.00035, -44.99965], [0, 0, 0], [23, 2, 1]);
        a.re('P32', [0.00042, 3.00042, 0.00042], [0, 0, 0], [40, 6, 0.5]);
        a.re('P33', [4.73049, 8.07049, -43.51951], [-0.26, 0, 0.26], [20, 0.3, 1.6]);
        a.re('P34', [-20, 7, -7], [0, 0, 0], [0.5, 14, 14]);
        a.re('P35', [-19.99993, 0.00007, 0.25007], [0, 0, 0], [10, 0.5, 0.5]);
        a.re('P36', [-12.99986, 10.00014, -13.99986], [0, 0, 0], [2, 8, 0.5]);
        a.re('P37', [10.50021, 3.00021, 0.00021], [0, 0, 0], [19, 6, 0.5]);
        a.re('P38', [-12.24972, 3.00028, -6.99972], [0, 0, 0], [0.5, 6, 14]);
        a.re('P39', [-18.99965, 10.00035, -13.99965], [0, 0, 0], [2, 8, 0.5]);
        a.re('P40', [-10.99958, 3.00042, -13.99958], [0, 0, 0], [18, 6, 0.5]);
        a.re('P41', [0.00049, 7.00049, -13.99951], [0, 0, 0], [24, 2, 0.5]);
        a.re('P42', [20, 7, -7], [0, 0, 0], [0.5, 14, 14]);
        a.re('P43', [-15.99993, 10.00007, 0.00007], [0, 0, 0], [8, 8, 0.5]);
        a.re('P44', [-15.99986, 13.00014, -13.99986], [0, 0, 0], [8, 2, 0.5]);
        a.re('P45', [11.00021, 3.00021, -13.99979], [0, 0, 0], [18, 6, 0.5]);
        a.re('P46', [-10.49972, 3.00028, 0.00028], [0, 0, 0], [19, 6, 0.5]);
        a.re('P47', [-15.99965, 6.00035, -6.99965], [0, 0, 0], [8, 0.5, 14.5]);
        a.re('P48', [16.00042, 10.00042, 0.00042], [0, 0, 0], [8, 8, 0.5]);
        a.re('P49', [16.00049, 13.00049, -13.99951], [0, 0, 0], [8, 2, 0.5]);
        a.re('P50', [12.25, 3, -7], [0, 0, 0], [0.5, 6, 14]);
        a.re('P51', [13.00007, 10.00007, -13.99993], [0, 0, 0], [2, 8, 0.5]);
        a.re('P52', [16.00014, 6.00014, -6.99986], [0, 0, 0], [8, 0.5, 14.5]);
        a.re('P53', [12.50021, 1.00021, -93.49979], [0, 0, 0], [12, 2, 1]);
        a.re('P54', [16.00028, 0.00028, -78.99972], [0, 0, 0], [4, 0.6, 4]);
        a.re('P55', [25.00035, 7.00035, -64.99965], [0, 0, 0], [0.5, 14, 130]);
        a.re('P56', [-24.99958, 7.00042, -64.99958], [0, 0, 0], [0.5, 14, 130]);
        a.re('P57', [-19.99951, 5.00049, -26.74951], [0, 0, 0], [0.5, 10, 26.5]);
        a.re('P58', [22.5, 7, 0], [0, 0, 0], [5, 14, 0.5]);
        a.re('P59', [-22.49993, 8.00007, 0.00007], [0, 0, 0], [5, 12, 0.5]);
        a.re('P60', [-22.49986, 6.50014, -17.49986], [0, -0.09, 0], [5, 0.5, 12.5]);
        a.re('P61', [4.50021, 3.75021, -51.99979], [0, 0, 0], [20, 0.5, 4]);
        a.re('P62', [6.75028, 0.62028, -30.49972], [0, 0.61, 0], [4, 6, 10.5]);
        a.re('P63', [-22.49965, 4.50035, -31.96965], [0, -0.12, 0], [5, 0.5, 16]);
        a.re('P64', [-22.49958, 2.70042, -39.67958], [0, 0, 0], [5, 2, 0.5]);
        a.re('P65', [24.00049, 6.00049, -51.99951], [0, 0, 0], [2.5, 4.2, 4]);
        a.re('P66', [7.89, 5.5, -42.21], [-0.74, 0, 0], [0.8, 1, 4]);
        a.re('P67', [-22.49993, 2.96007, -6.35993], [0, 0.79, 0], [5, 0.5, 14]);
        a.re('P68', [0.00014, 5.75014, -61.99986], [0, 0, 0], [50, 4, 16]);
        a.re('P69', [6.75021, 5.50021, -38.99979], [0, 0, 0], [1, 1, 4]);
        a.re('P70', [6.75028, 3.00028, -34.99972], [0, 0, 0], [4, 6, 4]);
        a.re('P71', [0.00035, 2.00035, -59.99965], [0, 0, 0], [50, 4, 20]);
        a.re('P72', [8.70042, 5.50042, -44.73958], [0.35, 0, 0], [0.6, 1, 3]);
        a.re('P73', [-13.49951, 1.00049, -44.99951], [0, 0, 0], [23, 2, 11]);
        a.re('P74', [0, 0, -65], [0, 0, 0], [50, 0.5, 130]);
        a.re('P75', [-14.99993, 3.50007, -92.99993], [0, 0, 0], [6, 7, 6]);
        a.re('P76', [19.87014, 4.13014, -51.99986], [0, 0, 0.52], [9, 4, 4]);
        a.re('P77', [-4.69979, 1.00021, -32.17979], [0, 0, 0], [2, 2, 2]);
        a.re('P78', [-4.75972, 1.00028, -23.69972], [0, 0, 0], [2, 2, 2]);
        a.re('P79', [2.14035, 1.00035, -24.86965], [0, 0, 0], [2, 2, 2]);
        a.re('P80', [-1.07958, 1.00042, -28.31958], [0, 0, 0], [2, 2, 2]);
        a.re('P81', [0.97049, 1.00049, -35.16951], [0, 0, 0], [2, 2, 2]);
        a.re('P82', [5, 1, -45], [0, 0, 0], [1, 1.98, 5]);
        a.re('P83', [10.00007, 1.00007, -41.00993], [0, 0, 0], [1, 1.98, 3]);
        a.re('P84', [15.00014, 1.00014, -44.99986], [0, 0, 0], [1, 1.98, 5]);
        a.re('P85', [24.31021, 1.00021, -44.99979], [0, 0, 0], [1, 1.98, 10]);
        a.re('P86', [10.00028, 1.00028, -49.48972], [0, 0, 0], [1, 1.98, 3]);
        a.re('P87', [-12.99965, 4.75035, -52.99965], [0, 0, 0], [1, 2, 2]);
        a.re('P88', [-6.99958, 4.75042, -51.00958], [0, 0, 0], [1, 2, 2]);
        a.re('P89', [-0.99951, 4.75049, -52.00951], [0, 0, 0], [1, 2, 4]);
        a.re('P90', [7, 4.75, -52.01], [0, 0, 0], [1, 2, 4]);
        a.re('P91', [7.00007, 5.75007, -52.99993], [0, 0, 0], [1, 4, 2]);
        a.re('P92', [14.00014, 4.75014, -52.00986], [0, 0, 0], [1, 2, 4]);
        a.re('P93', [14.00021, 5.75021, -51.00979], [0, 0, 0], [1, 4, 2]);
        a.re('P94', [17.02028, 9.05028, -39.58972], [-0.52, 0, -0.49], [8, 0.3, 2]);
        a.re('P95', [20.98035, 7.50035, -37.74965], [0, 0, 0], [4, 0.3, 4]);
        a.re('P96', [20.95042, 8.75042, -29.74958], [0, 0, 0.7], [4, 0.3, 4]);
        a.re('P97', [18.40049, 7.50049, -25.74951], [0, 0, 0.35], [4, 0.3, 4]);
        a.re('P98', [16, 7.25, -21.75], [0, 0, 0], [4, 0.3, 4]);
        a.re('P99', [16.00007, 6.60007, -16.99993], [0, 0.26, 0], [4, 0.3, 6]);
        a.re('P100', [-13.83986, 2.25014, -38.73986], [0, 0, 0], [2, 0.3, 4]);
        a.re('P101', [-11.85979, 3.25021, -35.29979], [0, 0, 0], [2, 0.3, 2]);
        a.re('P102', [-9.98972, 4.25028, -32.15972], [0, 0, 0], [2, 0.3, 4]);
        a.re('P103', [-12.35965, 5.25035, -28.94965], [0, 0, 0], [2, 0.3, 2]);
        a.re('P104', [-14.70958, 6.25042, -26.79958], [0, 0, 0], [2, 0.3, 2]);
        a.re('P105', [-15.99951, 7.25049, -22.86951], [0, 0, 0], [4, 0.3, 6]);
        a.re('P106', [-16, 6.6, -17], [0, 0.26, 0], [4, 0.3, 6]);
        a.re('P107', [-14.99993, 6.75007, -79.99993], [0, 0, 0], [2, 0.5, 20]);
        a.re('P108', [-14.99986, 6.75014, -79.99986], [0, 0, 0], [0.5, 2, 20]);
        a.re('P109', [19.00021, 10.00021, -13.99979], [0, 0, 0], [2, 8, 0.5]);
        a.re('P110', [17.99028, 8.75028, -33.74972], [0, 0, -0.75], [4, 0.3, 4]);
        a.re('P111', [-22.97965, 1.00035, -108.99965], [0.09, 0, 0], [2, 2, 17]);
        a.re('P112', [7.00042, 4.50042, -81.99958], [0, 0, 0], [1, 9, 24]);
        a.re('P113', [-6.99951, 4.50049, -81.99951], [0, 0, 0], [1, 9, 24]);
        a.re('P114', [0.16, 5, -118], [0, 0, 0], [50, 6, 1]);
        a.re('P115', [0.00007, 1.00007, -129.99993], [0, 0, 0], [50, 2, 0.5]);
        a.re('P116', [4.00014, 7.00014, -48.38986], [0, 0, 0], [23, 4, 0.2]);
        a.re('P117', [0.00021, 0.00021, 1.00021], [0, 0, 0], [2, 0.5, 2]);
        a.re('P118', [0.09028, 1.00028, -20.12972], [0, 0, 0], [2, 2, 2]);
        a.re('P119', [0.00035, 0.75035, -1.15965], [0, 0, 0], [4, 0.5, 4]);
        a.re('E0', [0.00042, 0.00042, -124.99958], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}