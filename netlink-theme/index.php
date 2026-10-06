<?php get_header(); ?>
<div class="container" style="padding:64px 24px;min-height:50vh">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <article <?php post_class(); ?>>
    <h1 class="section-title"><?php the_title(); ?></h1>
    <div class="entry-content"><?php the_content(); ?></div>
  </article>
<?php endwhile; else : ?>
  <h1 class="section-title">موردی یافت نشد</h1>
<?php endif; ?>
</div>
<?php get_footer(); ?>
