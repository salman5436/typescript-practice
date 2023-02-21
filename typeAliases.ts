// type TypeName = {
//     variable: type
//     variable: type,
//     variable: type
// }

//Important for typescrypt! Allows us to make our own types!

type Viewer = {
    viewerName: string;
    email: string;
    viewCount: number;
    isSubscribed: boolean
}

function createNewViewer(viewer: Viewer) {

}

//Extending Aliases:
// This will inherit all of the types of the Viewer and extend that to something more

type superFan = Viewer & {
    isSuperFan: boolean; 
}