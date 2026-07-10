<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name         = strip_tags(trim($_POST['name'] ?? ''));
    $email        = strip_tags(trim($_POST['email'] ?? ''));
    $phone        = strip_tags(trim($_POST['phone'] ?? ''));
    $roomType     = strip_tags(trim($_POST['room_type'] ?? 'Not specified'));
    $checkInDate  = strip_tags(trim($_POST['check_in_date'] ?? ''));
    $checkOutDate = strip_tags(trim($_POST['check_out_date'] ?? ''));
    $numAdults    = strip_tags(trim($_POST['number_adults'] ?? '1'));
    $numChildren  = strip_tags(trim($_POST['number_children'] ?? '0'));
    $message      = strip_tags(trim($_POST['message'] ?? ''));

    $to      = 'reservations@soserviewhotelapartments.com';
    $subject = 'New Reservation Request from ' . $name;

    $body  = "RESERVATION REQUEST\n";
    $body .= "===================\n\n";
    $body .= "Name:           $name\n";
    $body .= "Email:          $email\n";
    $body .= "Phone:          $phone\n";
    $body .= "Room Type:      $roomType\n";
    $body .= "Check-in Date:  $checkInDate\n";
    $body .= "Check-out Date: $checkOutDate\n";
    $body .= "Adults:         $numAdults\n";
    $body .= "Children:       $numChildren\n";
    if (!empty($message)) {
        $body .= "Message:        $message\n";
    }

    // From must be a verified email on YOUR domain — this is what hosts require
    $headers  = "From: reservations@soserviewhotelapartments.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        header('Location: Reservations.html?success=1');
        exit;
    } else {
        // Log actual error for debugging
        error_log('mail() failed for reservation from: ' . $name . ' | ' . $email);
        header('Location: Reservations.html?error=1');
        exit;
    }
}

header('Location: Reservations.html');
exit;
?>
