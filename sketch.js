function setup(){
    createCanvas(1000, 1000, WEBGL);
}

function draw(){
    background(255, 0 , 200);
      // Enable orbiting with the mouse.
      let options = {
        disableTouchActions: false,
        freeRotation: true
      };

      orbitControl(10, 10, 10, options);
        // Draw the sphere.
        
        box();


}




