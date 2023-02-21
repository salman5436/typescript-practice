// interface interfaceName {
//     variable: type,
//     variable: type,
//     variable: type
// }

//differences between types and interface: 
  // - You can open interfaces
  // -  


export interface Viewer {
    viewerName: string;
    email?: string;
    viewCount: number;
    isSubscribed: boolean;
}

const recentViewer: Viewer = {
    viewerName: "sal",
    email: "sal@sal.sal",
    viewCount: 3000,
    isSubscribed: true,
    isSuperFan: true
}

//Before this line was added, line 24 was giving errors -- big difference between interface & types (interface is open)
export interface Viewer {
    isSuperFan: boolean
}