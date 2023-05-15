<?php

get_header();

while (have_posts()) {
    the_post();
?>


    <div class="">
        <?php echo get_the_ID() ?>
        <?php the_content() ?>
    </div>
<? }

get_footer();
