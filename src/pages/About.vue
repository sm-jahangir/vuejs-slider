<template lang="">
    <div class="container">
        <h1>This is About Page </h1>
        <hr />
        <carousel :autoplay="true" :nav="false" :dots="false" :responsive="{0:{items:1},600:{items:1}}">
            <template slot="prev"><span class="prev cursor-pointer">prev</span></template>
                <div class="box bg-warning p-4 mx-1 rounded fw-bolder">
                    <img src="https://via.placeholder.com/350x150" class="img-fluid" alt="">
                    <p>Your Content 1  </p>
                </div>
                <div class="box bg-warning p-4 mx-1 rounded fw-bolder">
                    <img src="https://via.placeholder.com/350x150" class="img-fluid" alt="">
                    <p>Your Content 2  </p>
                </div>
                <div class="box bg-warning p-4 mx-1 rounded fw-bolder">
                    <img src="https://via.placeholder.com/350x150" class="img-fluid" alt="">
                    <p>Your Content 3  </p>
                </div>
                <div class="box bg-warning p-4 mx-1 rounded fw-bolder">
                    <img src="https://via.placeholder.com/350x150" class="img-fluid" alt="">
                    <p>Your Content 4  </p>
                </div>
                <div class="box bg-warning p-4 mx-1 rounded fw-bolder">
                    <img src="https://via.placeholder.com/350x150" class="img-fluid" alt="">
                    <p>Your Content 5  </p>
                </div>
                <div class="box bg-warning p-4 mx-1 rounded fw-bolder">
                    <img src="https://via.placeholder.com/350x150" class="img-fluid" alt="">
                    <p>Your Content 6  </p>
                </div>
            <template slot="next"><span class="next cursor-pointer">next</span></template>
        </carousel>
    </div>
</template>
<script>

import carousel from 'vue-owl-carousel'

export default {
    components: { carousel },
}

</script>


<style lang="css">
    .cursor-pointer {
        cursor: pointer;
    }
</style>