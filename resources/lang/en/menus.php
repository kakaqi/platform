<?php
/**
 * Created by PhpStorm.
 * User: liangxz@szljfkl.com
 * Date: 2017/2/13
 * Time: 10:58
 * 后台菜单接口提示语
 */
return [
    'success'   => 'Success',
    'fails'     => 'Operation failed',
    'menu_not_exist'    => 'The menu does not exist',
    'empty_list'    => ' Database list is empty',
    'data_error'    => 'Error in data',

    /*****************数据验提示********************/
    'parent_id' => [
        'required'  => 'Subordinate to the parent menu can not be empty',
    ],
    'class'     => [
        'required'  => 'The menu type cannot be empty',
        'integer'   => 'Menu type field type only for integer types',
        'max'       => 'The menu type is only 0-9',
    ],
    'title_cn'  => [
        'required'   => 'A menu in Chinese name cannot be empty',
        'max'        => 'The menu name in Chinese biggest can type 45 characters',
    ],
    'title_en'  => [
        'required'   => 'Menu English name cannot be empty',
        'max'        => 'The menu name in English only largest type 45 characters',
    ],
    'icon'      => [
        'required'      => 'Menu icon cannot be empty',
    ],
    'link_url'   => [
        'required'     => 'Menu links cannot be empty',
        'max'           => 'Menu links biggest can enter 255 characters',
    ],
    'sort'      => [
        'required'     => 'Sort menu can\'t be empty',
        'integer'       => 'Menu sort can only enter an integer type',
    ],
    'state'     => [
        'required'      => 'Please select a menu is displayed',
        'integer'       => 'Menu status value type errors',
        'max'           => 'Menu status value error',
    ]

];