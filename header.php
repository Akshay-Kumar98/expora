<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expora</title>
    <link rel="icon" href="images/favicon.png" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="assets/animate.css">
    <link rel="stylesheet" href="assets/slick-theme.css" />
    <link rel="stylesheet" href="assets/slick.css" />
    <link rel="stylesheet" href="assets/magnific-popup.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0-beta.1/css/select2.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
</head>

<body style="background-image:url(images/body-bg.png);">

    <header class="header">
        <div class="container">
            <nav class="nav-bar d-flex align-items-center">
                <div class="logo">
                    <a href="index.php"><img src="images/logo.svg" alt="logo" class="img-fluid"></a>
                </div>
                <div class="menu">
                    <ul>
                        <li class="active"><a href="index.php">Home</a></li>
                        <li><a href="#">Services</a>
                        <ul class="sub-menu">
                            <li><a href="#">Global Sales</a></li>
                            <li><a href="#">Global Sourcing</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Partners</a></li>
                        <li><a href="#">About Us</a>
                        <ul class="sub-menu">
                            <li><a href="#">Who We Are</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div class="menu-btn-flex d-flex">

                    <div class="menu-call-btn d-flex custom-btn align-items-center">
                        <div
                            class="menu-btn-icon d-flex justify-content-center align-items-center flex-shrink-0 rounded-circle">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </div>

                        <div class="menu-btn-text">
                        <a href="tel:0344325370">03 4432 5370</a>
                        </div>
                    </div>

                    <div class="menu-btn custom-btn">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#home-popup">Get A Quote</a>
                    </div>

                </div>
            </nav>
        </div>
    </header>

    <!-- header ends -->

    <div class="modal fade home-popup" id="home-popup" tabindex="-1" aria-labelledby="homepopupLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Book An Appointment</h2>
        <button type="button" class="popup-close" data-bs-dismiss="modal" aria-label="Close">
        <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="modal-body">
      <div class="popup-form">
                            <input type="text" name="popup-text" id="popup-text" placeholder="Enter Name"
                                class="popup-input">
                            <input type="email" name="popup-mail" id="popup-mail" placeholder="E-mail Address"
                                class="popup-input">
                            <input type="tel" name="popup-phone" id="popup-phone" placeholder="Phone Number"
                                class="popup-input">
                            <select class="js-example-basic-single popup-select-box">
                                <option value="Select Services">--Select Services--</option>
                                <option value="Residential Solar">Residential Solar</option>
                                <option value="Commercial Solar">Commercial Solar</option>
                                <option value="Solar Batteries">Solar Batteries</option>
                                <option value="Electric Solar">Electric Solar</option>
                            </select>
                            <textarea name="popup-address" id="popup-address" placeholder="Your Address"
                                class="popup-address"></textarea>
                            <textarea name="popup-message" id="popup-message" placeholder="Your Message..."
                                class="popup-area"></textarea>
                            <input type="submit" value="Send Message" class="popup-submit">
                        </div>
      </div>
      
    </div>
  </div>
</div>
