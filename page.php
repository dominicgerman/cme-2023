<?php

get_header();

while (have_posts()) {
    the_post();
?>


    <div class="[&_h1 &_h3]:text-lightBlue">
        <h1>
            <?php the_title() ?>
        </h1>
        <?php the_content() ?>
    </div>
<? }

get_footer();
