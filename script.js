const app = Vue.createApp({
    data(){
        return{
            EmailList : ''
        }
    },
    methods:{
        getRandomEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(EmailList=> this.EmailList.push(EmailList))
        }
    }
})

app.mount('.root')