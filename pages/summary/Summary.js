

export default {
    head() {
        return {
            title: "Summary Page"
        };
    },
    data() {
        var calcSummaries = [
            {price : '267', action : 'SELL', ammount: '4'},
            {price : '253', action : 'BUY', ammount: '4'},
        ]
        var summary = 0
        return {
            summary: summary,
            calcSummaries: calcSummaries
        }
    },
    created(){
        if(localStorage.getItem('calcForm')){
            this.calcSummaries = JSON.parse(localStorage.getItem('calcForm'))
        }
        for(var i = 0; i < this.calcSummaries.length; i++){
            if(this.calcSummaries[i].action.toLowerCase() == 'buy'){
                this.summary -= (this.calcSummaries[i].price * this.calcSummaries[i].ammount)
            } else {
                this.summary += (this.calcSummaries[i].price * this.calcSummaries[i].ammount)
            }
        }
    },
    methods : {
        back(){
            this.$router.replace('/form');
        }
    },
}