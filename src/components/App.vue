<style lang="sass">
    @import ../sass/app

    #home
        +flex(row, n, center, center)
        position: absolute
        height: 100%
        width: 100%
        color: darken($color3, 20%)
        +dont-select

        > .amora
            position: absolute
            bottom: $pixel-proportion * 4
            right: $pixel-proportion * 4
            height: $pixel-proportion * 8
            width: $pixel-proportion * 16

        > .name
            position: absolute
            z-index: 9
            text-align: center
            font-size: 60px
            line-height: 50px

        > .drinks
            +flex(row, w, center, center)
            height: $pixel-proportion * 75
            width: $pixel-proportion * 73.5

            > .drink,
            > .big
                position: absolute
                background-color: $white
                border-radius: 50%
                +transition(.2s)

            > .drink
                z-index: 8
                height: $pixel-proportion * 16
                width: $pixel-proportion * 16
                border-style: solid
                border-width: 0
                border-color: $white
                font-size: 30px
                text-align: center
                line-height: 25px
                +flex(row, n, center, center)
                +cursor-pointer

                &:hover
                    transform: scale(1.8)
                    border-style: solid
                    border-width: 1px

            > .mini
                font-size: 23px
                line-height: 19px

            > .big
                z-index: 5
                height: $pixel-proportion * 32
                width: $pixel-proportion * 32
                +animation(spin, 20024ms, linear, 0, infinite, normal, running)

                &::before
                    height: $pixel-proportion * 40
                    width: $pixel-proportion * 40
                    border: 1px solid #ffffff
                    border-radius: 50%
                    content: ''
                    position: absolute
                    top: $pixel-proportion * -4
                    left: $pixel-proportion * -4

                &::after
                    height: $pixel-proportion * 4
                    width: $pixel-proportion * 4
                    border-radius: 50%
                    background-color: #ffffff
                    content: ''
                    position: absolute
                    top: 0
                    left: 0

            .top
                top: $pixel-proportion * -3

            .bottom
                bottom: $pixel-proportion * -3

            .left
                left: $pixel-proportion * -4

            .right
                right: $pixel-proportion * -4

            .margin
                margin: $pixel-proportion * 10

            .disable
                display: none !important

            .color1:hover,
            .color2:hover,
            .color3:hover,
            .color4:hover
                border-width: $pixel-proportion * 2
                color: $white

            .color1:hover
                border-color: $color1
                box-shadow: 0 0 20px $color1
                background-color: darken($color1, 30%)

            .color2:hover
                border-color: $color2
                box-shadow: 0 0 20px $color2
                background-color: darken($color2, 20%)

            .color3:hover
                border-color: $color4
                box-shadow: 0 0 20px $color4
                background-color: darken($color4, 20%)

            .color4:hover
                border-color: $color5
                box-shadow: 0 0 20px $color5
                background-color: darken($color5, 60%)


    @keyframes spin
        from
            transform: rotate(0deg)
        to
            transform: rotate(360deg)
</style>

<template lang="pug">
    #home
        .amora
            img(src="static/img/logo.svg")

        .name
            | lunar
            br
            | drink

        .drinks
            .drink.top.left.margin.color1.disable
                | cuba
                br
                | libre
            .drink.top.color2(@click="myDrink('maitai')")
                | mai
                br
                | tai
            .drink.top.right.margin.color3.disable
                | cuba
                br
                | libre
            .drink.left.color4(@click="myDrink('hifi')")
                | hi
                br
                | fI

            .big

            .drink.right.color1(@click="myDrink('cubalibre')")
                | cuba
                br
                | libre
            .drink.bottom.left.margin.color2.disable
                | mai
                br
                | tai
            .drink.bottom.color3.mini(@click="myDrink('moskvasvobodno')")
                | moskva
                br
                | svobodno
            .drink.bottom.right.margin.color4.disable
                | mai
                br
                | tai
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex'
    import { makeDrink } from '../axios/drinks'

    export default {
        props: [],
        data: () => ({}),
        created: function () {},
        mounted: function () {},
        updated: function () {},
        destroyed: function () {},
        components: {},
        computed: {
            ...mapGetters([]),
            ...mapState({})
        },
        methods: {
            ...mapMutations([]),
            myDrink (drink) {
                if (drink) {
                    console.log('making drink', drink)
                    makeDrink(drink)
                    .then(data => console.log(data))
                } else {

                }
            }
        },
        filters: {},
        watch: {}
    }
</script>
