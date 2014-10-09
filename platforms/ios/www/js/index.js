    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for PhoneGap to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // PhoneGap is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      //console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';
      //smallImage.style.background = 'red';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      //console.log(smallImage);
      smallImage.src = imageData;   
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    }

    function locateMe(){

            document.addEventListener("deviceready", loaded, false);
             
            function loaded() {
                navigator.geolocation.getCurrentPosition(success, error);
            }
             
            function success(position) {
                var element = document.getElementById('geolocation');
                element.innerHTML = 'Latitude: ' + position.coords.latitude     + '<br />' +
                'Longitude: '           + position.coords.longitude             + '<br />' +
                'Altitude: '            + position.coords.altitude              + '<br />' +
                'Accuracy: '            + position.coords.accuracy              + '<br />' +
                'Altitude Accuracy: '   + position.coords.altitudeAccuracy      + '<br />' +
                'Timestamp: '           + new Date(position.timestamp)          + '<br />';
            }
             
            function error(error) {
                alert(error.message);
            }
    }

    function home(){
      alert('homebutton pressed');

    }
    function refreshArrow(){
      alert('refreshArrow pressed');
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }