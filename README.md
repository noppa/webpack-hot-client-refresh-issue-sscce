This repo serves as a reproducible example of issue [webpack-hot-client/61](https://github.com/webpack-contrib/webpack-hot-client/issues/61) and
the fix for it. The examples load different versions of the package to show
how the build is affected.

To test the issue in version 3 of the package, run `./run.sh v3` and open
*localhost:8080*.  
To test [the proposed fix](https://github.com/noppa/webpack-hot-client/commit/91cac08bcd92dc107b54e40f6b8f1d9b62aa49b2), run `./run.sh v3 fixed` instead.

To test the issue in version 4 of the package, run `./run.sh v4` and open
*localhost:8080*.  
To test [the proposed fix](https://github.com/noppa/webpack-hot-client/commit/c4e37db3251c0277a764e33c75dbd9a5042f246d), run `./run.sh v4 fixed` instead.

Note that in both "fixed case" examples the actual dependency in package.json
points to a special branch that contains a "prepare" script in addition to
the actual bugfix. This is just to make the git-based npm installation work
nicely, it doesn't affect the actual fix.