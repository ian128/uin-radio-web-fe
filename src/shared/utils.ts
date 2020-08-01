export const month=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export function convertDate(date: any){
    if(date){
        let d = new Date(date)
        return d.getDate()+' '+ month[d.getMonth()]+' '+d.getFullYear()
    }else return null
}

export function convertDateSlash(date: any){
    if(date){
    let d = new Date(date)
    return d.getDate()+'/'+ (d.getMonth()+1)+'/'+d.getFullYear()
    }else return null
}

