<?php include 'header.php'; ?>
<div class="grid-product-list grid-we-do m-0 p-0 product-list-holder product-wrap">
    <section class="product-section" data-section-name="trampoline-parks">
        <div class="grid-we-do-item p-0">
            <div class="grid-we-do-img-wrap grid-wrap-black">
                <a href="#">
                    <div class="grid--img" style="background-image:url('images/products/product-1.jpg');"></div>

                    <div class="product-content">
                        <h2>Trampoline Parks</h2>
                        <div class="gap-30"></div>
                        <button class="btn btn-primary">Learn More</button>
                    </div>
                </a>

            </div>
        </div>
    </section>
    <section class="product-section" data-section-name="ninja-course">
        <div class="grid-we-do-item p-0">
            <div class="grid-we-do-img-wrap grid-wrap-black">
                <a href="#">
                    <div class="grid--img" style="background-image:url('images/products/product-2.jpg');"></div>

                    <div class="product-content">
                        <h2>Ninja Course</h2>
                        <div class="gap-30"></div>
                        <button class="btn btn-primary">Learn More</button>
                    </div>
                </a>

            </div>
        </div>
    </section>
    <section class="product-section" data-section-name="sky-park">
        <div class="grid-we-do-item p-0">
            <div class="grid-we-do-img-wrap grid-wrap-black">
                <a href="#">
                    <div class="grid--img" style="background-image:url('images/products/product-3.jpg');"></div>

                    <div class="product-content">
                        <h2>Sky Park</h2>
                        <div class="gap-30"></div>
                        <button href="#" class="btn btn-primary">Learn More</button>
                    </div>
                </a>

            </div>
        </div>
    </section>
</div>

<section class="warning-section product-section" data-section-name="warning">
    <div class="section-warning" style="background-image: url('images/bg-warning.jpg');">
        <div class="container">
            <div class="col-md-5">
                <h3 class="warning-title">Warning<img src="images/warning-icon.png"></h3>
            </div>
            <div class="col-md-7">
                <div class="content">
                    <div class="description">
                        <p>Landing on the head or neck can cause serious injury, paralysis,
                            or death, even when landing in the middle of the bed.
                            Use trampoline only with mature, knowledgeable supervision.  </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php include 'footer.php'; ?>

</section>

<script>
    $(".product-section").css({"height":$(window).height()});
    $.scrollify({
        section:".product-section"
    });
</script>
