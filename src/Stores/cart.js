import { defineStore } from "pinia";

export const useCartStore =defineStore({
    id:'cartStore',
    state: ()=>({
        count:0
    }),
    actions:{
        incrementCount(){
            this.count++
        },
        decrementCount(){
            this.count--
        }
    },
    getters:{
        oddorEven: (state)=>{
            if(state.count %2==0) return 'even'
            return 'odd'
        }
    }
})