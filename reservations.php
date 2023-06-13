<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $checkInDate = $_POST['check_in_date'];
    $checkOutDate = $_POST['check_out_date'];
    $numAdults = $_POST['number_adults'];
    $numChildren = $_POST['number_children'];

    $to = 'reservations@soserviewhotelapartments.com';
    $subject = 'Reservation Request';
    $message = "Name: $name\n\n";
    $message .= "Email: $email\n\n";
    $message .= "Phone Number: $phone\n\n";
    $message .= "Check-in Date: $checkInDate\n\n";
    $message .= "Check-out Date: $checkOutDate\n\n";
    $message .= "Adults: $numAdults\n\n";
    $message .= "Children: $numChildren\n\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        // Redirect to home page
        echo '<script>window.location.href = "index.html";</script>';
        exit;
    } else {
        echo '<p>Oops! An error occurred while sending the reservation request. Please try again later.</p>';
    }
}
?>
