export const state = () => ({
    saldo: 15,
    calcForms : [
        {price : '', action : '', ammount: ''},
        {price : '', action : '', ammount: ''},
    ]
})

export const mutations = {
    addFormRow(state){
        let newRow = {
            price : '', action : '', ammount: ''
        }
        
        state.calcForms.push(newRow)
    },
    removeFormRow(state, index){
        state.calcForms.splice(index, 1)
    },
    onChangePrice(state, payload){
        state.calcForms[payload.index].price = payload.value
    },
    onChangeAmmount(state, payload){
        state.calcForms[payload.index].ammount = payload.value
    },
    onchangeAction(state, payload){
        state.calcForms[payload.index].action = payload.value
    },
    updateForm(state, payload){
        state.calcForms = payload
    },
    onChangeSaldo(state, payload){
        state.saldo = payload
    }
}