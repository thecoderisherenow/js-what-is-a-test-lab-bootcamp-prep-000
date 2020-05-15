<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: blue;
        color: orange; 
        font-family: Monospace;
        font-weight: bold;
        float: 12pt
      }
       
    </style>
    <title>JavaScript Tests</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="node_modules/mocha/mocha.css" />
  </head>
  <body>
    <div id="mocha"></div>
    <script src="node_modules/mocha/mocha.js"></script>
    <script src="node_modules/expect/umd/expect.min.js"></script>
    <script>mocha.setup('bdd');</script>
    <script src="index.js"></script>
    <script src="test/index-test.js"></script>
    <script>
      mocha.run();
    </script>
  </body>
</html>
