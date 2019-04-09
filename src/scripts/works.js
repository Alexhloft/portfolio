import Vue from 'vue';

const overview = {
    template: "#works-overview",
    components: {
        btns,
        thumbs
    }, 
    props: {
        works: Array,
        currentWork: Object,
        currentIndex: Number,
        clickSlide: Number
    }
};

const thumbs = {
    template: "#works-thumbs",
    props: {
        works: Array,
        currentWork: Object
    }
};

const btns = {
    template: "#works-btns"
};

const descr = {
    template: "#works-desc",
    components: {
        tools
    },
    props: {
        currentWork: Object
    },
    computed: {
        tools() {
            return this.currentWork.tools.split(',')  
        }
    }
};

const tools = {
    template: "#works-tools",
    props: {
        tools: Array
    }
};


new Vue({
    template: '#works-info',
    el: '#works-component',
    components: {
        overview, 
        descr
    }, 
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    }, 
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    }, 
    watch: {
        currentIndex(val) {
            this.makeInfiniteLoopForCurrIndex(val);
        }
    }, 
    methods: {
        makeInfiniteLoopForCurrIndex(val) {
            const worksAmount = this.works.length - 1;
            if (val > worksAmount) this.currentIndex = 0;
            if (val < 0) this.currentIndex = worksAmount;
        }, 
        makeArrWithReqImg(data) {
            return data.map(item => {
                const reqImg = require(`../images/content/works/${item.img}`);
                item.img = reqImg;
                return item;
            })
        }, 
        handelSlide(dir) {
            if (dir === "next") {
                this.currentIndex--;
            } else if (dir === "prev") {
                this.currentIndex++;
            }
        },
        changeSlide(id) {
            this.currentIndex = id - 1;
        }

    }, 
    created() {
        const data = require('../data/works.json');
        this.works = this.makeArrWithReqImg(data);
    }
});