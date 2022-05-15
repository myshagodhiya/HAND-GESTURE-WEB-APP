<html>
  <head>
    <title>Emotion To Emoji</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

    <script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.26/webcam.js"></script>

    <link rel="stylesheet" type="text/css" href="style.css">
  </head>

  <body>
  <div class="container">
  
    <center>


      <h3 class="btn btn-primary heading">HAND GESTURES WEB APP
      <br>
      <span>&#129304;</span>
      <span>&#128077;</span>
      <span>&#9994;</span>
      <span>&#128079;</span>
      <span>&#128400;</span>
      <span>&#128070;</span>
      <span>&#128078;</span>
      <span>&#128406;</span>
      <span>&#128075;</span>
      <span>&#9995;</span>
      <br>
      </h3>

      <p style="font-size: 22px;">Take your selfie of a gesture to know it's meaning</p>
     <h4>Model is trained on the following hand gestures</h4>
     <h4 class="btn btn-primary"> 🤟 | ✌ | 🖖 | 👌 | 👍 | 👎</h4>
      </p>

      <div class="col-md-4 col-sm-12 col-xs-12">
          <label>Webcam View - </label>
        <div id="camera"></div>
        <br><br>
        <button onclick="take_snapshot();" class="btn btn-primary">Capture Image</button>
</div>
<div class="col-md-4 col-sm-12 col-xs-12">
  <label>Prediction  -  </label>
  <p class="gesture_name" id="result_gesture_name"></p>
  <p class="gesture" id="update_gesture"></p>

</div>

      <div class="col-md-4 col-sm-12 col-xs-12">
          <label>Snapshot - </label>
        <div id="result"></div>
        <br><br>
        <button onclick="check();" class="btn btn-primary">Predict Gesture</button>
      

      </div>

    </center>

  </div>

<script src="main.js"></script>

  </body>
</html>
