const app = Vue.createApp({
    data(){
        return{
            EmailList : [
                
            ]
            
        }
    },
    methods:{
        getRandomEmail(){
            for(i=0 ; i < 10 ; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => this.EmailList.push(result.data.response))
            }
          
    },
    },

    created(){
        this.getRandomEmail();
    },
})

app.mount('.root')