import Vue from "vue";
import flickity from 'vue-flickity';

new Vue({
    el: "#reviews",
    components: {
        flickity
    },

    data () {
        return {
            flickityOptions: {
                prevNextButtons: false,
                pageDots: false,
                groupCells: 2

            }
        }
    },

    methods: {
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        }
    }
});