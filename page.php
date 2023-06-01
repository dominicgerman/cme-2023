<?php

get_header();

while (have_posts()) {
    the_post();
?>
    <div class="max-w-[1080px] mx-6 lg:mx-auto my-12 lg:my-32">
        <div id="page-content" class="my-9 [&_.wp-block-button]:my-6 [&_.wp-block-button_a]:no-underline [&_p]:text-lg [&_p]:mb-9 [&_figure]:m-auto [&_.wp-block-gallery.has-nested-images_figure.wp-block-image_figcaption]:text-2xl [&_.wp-block-columns]:mb-24 [&_a]:link-underline [&_iframe]:m-auto">
            <?php the_content() ?>
        </div>
    </div>
<? }

get_footer();
