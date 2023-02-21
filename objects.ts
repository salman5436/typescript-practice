//object: {name: type, name: type}

//Simple Object
function createViewer(viewerInfo: {
    viewerName: String;
    viewerEmail: String;
    firstTimeViewer: Boolean; 
})  {
    console.log(`Welcome to the stream, ${viewerInfo.viewerName}`)
    //console.log(`Your favorite streamer is: ${viewerInfo.viewerFavStreamer}`)
}

createViewer({ viewerName: "Salman", viewerEmail: 'sal@sal.com', firstTimeViewer: true })