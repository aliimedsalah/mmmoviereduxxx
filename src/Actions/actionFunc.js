import {EDIT_MOVIE , DELET_MOVIE , ADD_MOVIE, DESCRIPTION_BTN} from "./actionConst"

export function edit (payload){
return {type:EDIT_MOVIE , payload
}
}

export const delet = id =>({
    type:DELET_MOVIE , id
    
    })

 