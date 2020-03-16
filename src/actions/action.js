
export const ADD_ITMES='ADD_ITMES'
export const ADD =(a)=>{
    return {
        type:ADD_ITMES,
       a
    }
}

export const DELETE_ITMES='DELETE_ITMES'
export const DELETE =(payload)=>{
    return{
        type :DELETE_ITMES,
        payload
    }
}
export const COMPLITE_ITMES='COMPLITE_ITMES'
export const COMPLITE =(payload)=>{
    return{
        type :COMPLITE_ITMES,
        payload
    }
}
export const btedit_ITMES='btedit_ITMES'
export const btedit =(payload)=>{
    return{
        type :btedit_ITMES,
        payload
    }
}
export const EDIT_ITMES='EDIT_ITMES'
export const EDIT =(payload)=>{
    return{
        type :EDIT_ITMES,
        payload
    }
}