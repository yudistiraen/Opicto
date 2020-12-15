import {mapState, mapMutations} from 'vuex';

export default {
    created() {
        if(localStorage.getItem('calcForm')){
            this.updateForm(JSON.parse(localStorage.getItem('calcForm')))
        }
    },
    computed : {
        ...mapState({
            calcForms: state => state.calcForms,
            saldo: state => state.saldo,
        })
    },
    methods : {
        ...mapMutations({
            addFormRow: "addFormRow",
            removeFormRow: "removeFormRow",
            onChangePrice: "onChangePrice",
            onChangeAmmount: "onChangeAmmount",
            onchangeAction: "onchangeAction",
            updateForm: "updateForm",
            onChangeSaldo: "onChangeSaldo"

        }),
        addNewRow(){
            if(this.calcForms.length < this.saldo){
                this.addFormRow()
            }
        },
        removeRow(index){
            this.removeFormRow(index)
        },
        changePrice(event, index){
            const payload = {
                value: event.target.value,
                index: index
            }
            this.onChangePrice(payload)
        },
        changeAmmount(event, index){
            const payload = {
                value: event.target.value,
                index: index
            }
            this.onChangeAmmount(payload)
        },
        changeSaldo(event){
            this.onChangeSaldo(event.target.value)
        },
        doCalc(){
            localStorage.setItem('calcForm', JSON.stringify(this.calcForms))
            this.$router.replace('/summary');
        },
        changeAction(event, index) {
            var result = this.calcForms.find(obj => {
                return obj.action === "buy"
            })
            if(result != undefined){
                const payload = {
                    value: event.target.value,
                    index: index
                }
                this.onchangeAction(payload)
            }
            
        }
    },
    head() {
        return {
            title: "Calculator Page"
        };
    }
}