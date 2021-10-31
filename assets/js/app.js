const app = new Vue({
    el: "#root",
    data: {
        items: ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'],
        titles: ['Svezia', 'Svizzera', 'Gran Bretagna', 'Germania', 'Paradise'],
        texts: ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.', 'Lorem ipsum', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,', 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'],
        activeItem: 0
    },
    methods: {
        nextElement() {
            if (this.activeItem == this.items.length - 1) {
                this.activeItem = 0
                console.log(activeItem);
            } else {
                this.activeItem = this.activeItem + 1
            }
        },
        prevElement() {
            if (this.activeItem == 0) {
                this.activeItem = this.items.length - 1
            } else {
                this.activeItem = this.activeItem - 1
            }
        }
    }
});