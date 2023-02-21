//let variable: type | type = value   ~~ Allows us to combine certain elements

let viewerCount: number | string = 100 // Let's say you're not sure if this will be a number or a string SO this var can be a number OR a string

viewerCount = "100"

//In Arrays

const viewerIDs: (string | number )[] = ["sal", "sally", "salmantha", "salonathon", 1234, "4325"]


//Variable Locking:

let viewerReviews: "Amazing" | "Good" | "Ok" //Variable can only hold the value(s) that you choose for it

viewerReviews = "Good"

//viewerReviews = "Whatever"  <-- This doesn't work