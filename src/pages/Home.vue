<template lang="">
    <div class="container">
        <h1>This is Home Page </h1>
        <hr />
        <div>
            <h2>Our Clients Says</h2>
            <hr class="w-25 client__says"/>
        </div>

        <carousel>
        <slide>
            <div class="text-center me-3 rounded" style="background-image: url(https://via.placeholder.com/350x150)">
                <h2 class="pt-3">Slide 1 Content </h2>
                <p class="px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si mala non sunt, iacet omnis ratio Peripateticorum.</p>
                <a name="" id="" class="btn btn-primary mb-4" href="#" role="button">Submit Now</a>
            </div>
        </slide>
        <slide>
            <div class="text-center me-3 rounded" style="background-image: url(https://via.placeholder.com/350x150)">
                <h2 class="pt-3">Slide 1 Content </h2>
                <p class="px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si mala non sunt, iacet omnis ratio Peripateticorum.</p>
                <a name="" id="" class="btn btn-primary mb-4" href="#" role="button">Submit Now</a>
            </div>
        </slide>
        <slide>
            <div class="text-center me-3 rounded" style="background-image: url(https://via.placeholder.com/350x150)">
                <h2 class="pt-3">Slide 1 Content </h2>
                <p class="px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si mala non sunt, iacet omnis ratio Peripateticorum.</p>
                <a name="" id="" class="btn btn-primary mb-4" href="#" role="button">Submit Now</a>
            </div>
        </slide>
        <slide>
            <div class="text-center me-3 rounded" style="background-image: url(https://via.placeholder.com/350x150)">
                <h2 class="pt-3">Slide 1 Content </h2>
                <p class="px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si mala non sunt, iacet omnis ratio Peripateticorum.</p>
                <a name="" id="" class="btn btn-primary mb-4" href="#" role="button">Submit Now</a>
            </div>
        </slide>
        <slide>
            <div class="text-center me-3 rounded" style="background-image: url(https://via.placeholder.com/350x150)">
                <h2 class="pt-3">Slide 1 Content </h2>
                <p class="px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si mala non sunt, iacet omnis ratio Peripateticorum.</p>
                <a name="" id="" class="btn btn-primary mb-4" href="#" role="button">Submit Now</a>
            </div>
        </slide>
        </carousel>
    </div>
</template>
<script>
// Locally Register This Plugins
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide
    }
    
}
</script>
<style lang="css" scoped>
    .client__says {
        height: 2px;
    }
</style>