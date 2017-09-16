<?php
mysql_connect('ip','sqluser','pass') or die('Ошибка подключения к базе данных');
mysql_select_db($conf['mysql_database']) or die('Ошибка подключения к базе данных');
$otvet = mysql_query('SELECT * FROM `articles` ORDER BY `date` DESC LIMIT '. 4);
echo '';
$amount = 0;
while($row = mysql_fetch_assoc($otvet)){

    if ($amount == 0){
        echo "
        <div class=\"container_5\">
            <div class=\"half_3\">
                <div class=\"bigimg\"></div>
                <div>
                    <h2 class=\"zgl\">Новые гантели</h2>
                    <div><p class=\"bigtext\"> odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim</p><a>Читать дальше...</a></div>
                    <p class=\"dateb\">Дата публикации: 21 августа 2023г</p>

                </div>
            </div>";

    }
    else{
    $amount = $amount +1;
    echo "<div class=\"half_4\">
                <div class=\"item{$amount}\">
                    <div class=\"item_img{$amount}\" style='background-image: url({$row['srcimg']})'></div>
                    <div class=\"item_text{$amount} item_text\">
                            <h2 class ='zglmin{$amount}'>{$row['title']}}}</h2>
                            <p class=\"text{$amount}\">{$row['text']}}</p>
                            <p class=\"date{$amount}\">{$row['date']}}</p>
                    </div>
            </div>";
        }
}

//<!-- <?php include_once 'print.php' ?> !-->