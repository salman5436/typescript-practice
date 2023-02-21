//function name(parameter: type) {
//  return something
//}

function addViewers(viewers: number) {
    return viewers * 2
}

addViewers(2) // 4

//Bad Example
function checkViewers(viewers: string) {
    return viewers.length
}
//length() method doesnt work in typescript because it's not an actual function -- correct method is .length


//Return Type of a FUnction: This is saying that the return has to be number as well
function addCheckViewers(viewers: number):number {
    return viewers * 2
}
addCheckViewers(2) // 4, if you try "2" -- you will get error


//functions with multiple parameters:
function viewProfile(userName: string, email: string, firstTime:boolean) {
    return userName + email + firstTime
}

viewProfile("salman", "sexysal@wow.com",  true)
