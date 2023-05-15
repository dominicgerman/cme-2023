<?php get_header(); ?>

<section>
    <div class="h-[600px] w-full relative">
        <button class='h-12 w-12 rounded-full absolute top-1/2 left-16 -translate-y-1/2'>
            <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="translate-x-4">
                <path d="M11.5 19.5L3.48522 13.3068C1.95826 12.1268 1.92633 9.83301 3.41985 8.61103L11.5 2" stroke="#FFF" stroke-opacity="1" stroke-width="3" stroke-linecap="round" />
            </svg>
        </button>

        <!-- Loop over child pages of season and render the below div -->
        <div class="h-[600px] w-full bg-cover bg-center" style="background-image: linear-gradient(rgba(27, 33, 52, 0.5), rgba(27, 33, 52, 0.5)), url('http:<?php echo get_the_post_thumbnail_url(); ?>')">
        </div>

        <button class="h-12 w-12 rounded-full absolute top-1/2 right-16 -translate-y-1/2">
            <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="translate-x-5">
                <path d="M1.5 2L9.51478 8.19324C11.0417 9.37316 11.0737 11.667 9.58015 12.889L1.5 19.5" stroke="#FFF" stroke-opacity="1" stroke-width="3" stroke-linecap="round" />
            </svg>
        </button>
        <div class="flex gap-2 absolute bottom-6 left-1/2 -translate-x-1/2">
            <div class="h-3 w-3 border-white rounded-full border-2 bg-darkGray"></div>
            <div class="h-3 w-3 border-white rounded-full border-2 bg-white "></div>
            <div class="h-3 w-3 border-white rounded-full border-2 bg-white "></div>
            <div class="h-3 w-3 border-white rounded-full border-2 bg-white "></div>
        </div>
    </div>
</section>
</main>

<?php



get_footer();
