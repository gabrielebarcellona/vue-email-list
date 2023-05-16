const app = Vue.createApp({
    data(){
        return{
            EmailList : ''
        }
    },
    methods:{
        getRandomEmail(response){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => this.EmailList.push(EmailList)= response.data.response)
        }
    }
})

app.mount('.root')