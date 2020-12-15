export default {
    head() {
        return {
            title: "Calculator Page"
        };
    },
    state: {
        errors: []
    },
    data() {
        const saldo = 15;
        var calcForms = [
            {price : '', action : '', ammount: '', errors: ''},
            {price : '', action : '', ammount: '', errors: ''}
        ]
        return {
            saldo: saldo,
            calcForms: calcForms,
        }
    },
    computed: {
        getErrors(){
            return this.errors
        }
    },
    methods : {
        addRow(){
            if(this.calcForms.length < this.saldo){
                 this.calcForms.push(
                    {price : '', action : '', ammount: ''}
                )
            }
        },
        removeRow(index){
            console.log('removeRow', index)
            if(this.calcForms.length > 1) {
                this.calcForms.splice(index, 1)
            }
        },
        doCalc(){
            localStorage.setItem('calcForm', JSON.stringify(this.calcForms))
            this.$router.replace('/summary');
        }
    },
}