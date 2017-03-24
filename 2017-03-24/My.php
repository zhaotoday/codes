<?php
namespace My;

include_once './MyFather.php';
include_once './HomeWork.php';

use Home\Work as HomeWork;

const NAME = 'myself. <br>';

class Me
{
  public static function who()
  {
    echo 'I am myself. <br>';
  }
}

Father\Me::who();
echo Father\NAME;
HomeWork\Me::who();
Me::who();