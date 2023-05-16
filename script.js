const app = Vue.createApp({
    data(){
        return{
            EmailList : [

            ]
        }
    },
    methods:{
        getRandomEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) => this.EmailList.push(result.data.response))
        }
    },

    created(){
        this.getRandomEmail();
    },
})

app.mount('.root')