<?php get_header(); ?>

<section>
	<div class="h-[350px] md:h-[500px] lg:h-[42vw] relative">
		<div id="render-react-slider"></div>
	</div>

	<div class="flex flex-col items-center justify-center text-white h-60 lg:h-80 bg-cover bg-center [&_.form-div]:mailchimp-form [&_h4]:m-0 [&_h4]:text-3xl [&_.email-input]:mailchimp-input [&_.submit-button]:mailchimp-submit" style="background-image: linear-gradient(rgba(27, 33, 52, 0.5), rgba(27, 33, 52, 0.5)), url(<?php echo get_theme_file_uri('/images/sky.jpg') ?>);">
		<?php echo do_shortcode('[mc4wp_form id=176]') ?>
	</div>
</section>
</main>

<?php



get_footer();
