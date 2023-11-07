const { createApp } = Vue;

createApp({
    data(){
        return {
            mails: []
        }
    },
    methods: {
        
    },
    mounted() {
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=> {
                 console.log(resp.data);
                 this.mails.push(resp.data.response);
               })
        }
    },
}).mount('#app')