const { createApp } = Vue


const app = createApp({

    data() {
        return {
            contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    isSelected: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    isSelected: false,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    isSelected: false,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    isSelected: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    isSelected: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    isSelected: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    isSelected: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    isSelected: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            randomPhrase: [
                'Ok!',
                'Ciao',
                'Come stai?',
                'Ricordati di fare la spesa',
                'Tutto bene',
            ],

            newContactName: '',
            newContactImage: '',
            viewPopUp: false,
            viewSplash: false,
            currentId: 0,
            isVisible: false,
            searchContacts: '',
            typedMessage: '',
            currentMessage: '',
            isTyped: false,
            showChatMenu: false,
            showUserMenu: false,
        }
    },

    methods: {

        selectedContact(id) {
            this.currentId = this.contacts.findIndex(object => {
                return object.id === id;
            });

            this.isVisible = true;

            this.typedMessage = '';
            this.showChatMenu = false;
        },

        removeChatDisplay() {
            this.isVisible = false;
        },


        sendNewMessage() {
            let now = luxon.DateTime.now();
            now = now.setLocale('en-US').toLocaleString(luxon.DateTime.TIME_24_SIMPLE);

            const newTypedMessage = {

                date: now,
                message: this.typedMessage,
                status: 'sent'

            }

            if (this.typedMessage != '') {
                this.contacts[this.currentId].messages.push(newTypedMessage);

                this.$nextTick(() => {
                    const lastMsg = this.$refs.msg[this.$refs.msg.length - 1];
                    lastMsg.scrollIntoView();
                }, 500)

                setTimeout(() => {
                    const newRecivedMessage = { ...newTypedMessage };
                    newRecivedMessage.message = this.randomMessage();
                    newRecivedMessage.status = 'received';
                    this.contacts[this.currentId].messages.push(newRecivedMessage);

                    this.$nextTick(() => {
                        const lastMsg = this.$refs.msg[this.$refs.msg.length - 1];
                        lastMsg.scrollIntoView();
                    }, 1200)

                }, 1000)
            }

            this.typedMessage = '';
        },


        randomMessage() {
            randomNumber = Math.floor(Math.random() * 5);
            return this.randomPhrase[randomNumber];
        },


        messageFilter(obj) {
            const mess = obj.messages.filter((mex) => {
                return mex.status === 'received';
            })
            if (mess.length > 0) {
                return mess[mess.length - 1];
            } else {
                return mess;
            }

        },


        showMessageMenu(i) {

            if (this.currentMessage !== i) {
                this.currentMessage = i;
            } else {
                this.currentMessage = '';
            }

        },


        deleteMessage(i) {
            this.contacts[this.currentId].messages.splice(i, 1);
            this.currentMessage = '';
        },



        menuChatToggle() {
            if (!this.showChatMenu) {
                this.showChatMenu = true;
            } else {
                this.showChatMenu = false;
            }
        },


        menuUserToggle() {

            if (!this.showUserMenu) {
                this.showUserMenu = true;
            } else {
                this.showUserMenu = false;
            }

        },


        deleteChat() {
            this.contacts[this.currentId].messages = [];
            this.showChatMenu = false;
        },



        showPopUp() {

            if (!this.viewPopUp) {
                this.viewPopUp = true;
            }

            this.showUserMenu = false;

        },


        addContact() {

            const addNewContact = {

                id: this.contacts.length + 1,
                name: this.newContactName,
                avatar: this.newContactImage,
                visible: true,
                isSelected: false,
                messages: [

                ]
            }

            if (this.newContactName !== '' && this.newContactImage !== '') {
                this.contacts.push(addNewContact);

                this.newContactName = '';
                this.newContactImage = '';

                this.viewPopUp = false;
            }



        },



    },


    computed: {

        contactsFilter() {

            return this.contacts.filter((contact) => {

                return contact.name.toLowerCase().includes(this.searchContacts.trim().toLowerCase());

            })

        },


        changeIconSend() {
            const messageLength = this.typedMessage.length;
            if (messageLength > 0) {
                return true;
            } else {
                return false;
            }

        },

    },



    mounted() {
        setTimeout(() => {
            this.viewSplash = true;
        }, 300)
        setTimeout(() => {
            this.viewSplash = false;
        }, 2500)
    },

})


app.mount('#app')