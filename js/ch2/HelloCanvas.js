/**
 * Created by kyawthan on 9/26/14.
 */


function main(){
    var canvas = document.getElementById("webgl");

    var gl = getWebGLContext(canvas);
    if(!gl){
        console.log("Failed to rendering context for WebGl");
        return;
    }

    gl.clear(0.0, 0.0, 0.0 , 0.1);
    gl.clear(gl.COLOR_BUFFER_BIT);
}