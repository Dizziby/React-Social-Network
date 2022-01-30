const store = {
    _state: {
        contactsList: [
            {name: 'Bucky Bames', email: 'wintersolder@gmail.com'},
            {name: 'Sarah Lorender', email: 'barnes@gmail.com'},
            {name: 'Jason Borne', email: 'jasonb@gmail.com'},
            {name: 'Cameron Diaz', email: 'jasonb@gmail.com'}
        ],
        wallDate: {
            postDate: [
                {
                    name: 'Janice Griffith',
                    date: 'June,2 2018 19:PM',
                    text: 'World\'s most beautiful car in Curabitur #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website'
                },
                {
                    name: 'Janice Griffith',
                    date: 'June,2 2018 19:PM',
                    text: 'Curabitur world\'s most beautiful car in #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website'
                },
                {
                    name: 'Janice Griffith',
                    date: 'June,2 2018 19:PM',
                    text: 'Lonely Cat Enjoying in Summer Curabitur #mypage ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,'
                }
            ],
            newPostText: 'write something'
        }
    },

    getState() {
        return this._state;
    },

    rerenderEntireTree() {
        console.log("");
    },

    addPost() {
        let newPost = {
            name: 'Janice Griffith',
            date: 'June,2 2018 19:PM',
            text: this._state.wallDate.newPostText
        };
        this._state.wallDate.postDate.push(newPost);
        this._state.wallDate.newPostText = "";
        this.rerenderEntireTree(this._state);
    },

    updateNewPostText(newText) {
        this._state.wallDate.newPostText = newText;
        this.rerenderEntireTree(this._state);
    },


    subscribe (observer) {
        this.rerenderEntireTree = observer;
    },
};

export default store;