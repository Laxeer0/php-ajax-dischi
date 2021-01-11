<?php
    require_once('db.php');

    foreach($db['response'] as $key => $value){
        echo "<img src='".$value['poster']."' style='width: 300px; height: 300px;'>";
    }

?>