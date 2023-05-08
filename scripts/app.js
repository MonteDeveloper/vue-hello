const { createApp } = Vue

createApp({
    data() {
        return {
            cssClass: {
                absoluteBotCenter: "position-absolute bottom-0 start-50 translate-middle-x",
                absoluteCenter: "position-absolute top-50 start-50 translate-middle"
            },
            card: {
                title: "IMAGE GENERATOR",
                description: "Immagine generata di dimensioni: ",
                image: {
                    width: "500",
                    height: "500",
                    startPath: "https://picsum.photos/"
                }
            }
        }
    },
    methods: {
        //metodi
    }
}).mount('#app')