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
    'sub_account'   => 'The accounts are still under the group, cannot be delete, need to remove the ability after child account relationship',

    /*****************数据验提示********************/
    'group_name' => [
        'required'  => 'Character name cannot be empty',
        'max'       => 'Character name can\'t can only input biggest 45 characters'
    ],
    'roles' => [
        'required'  => 'Role authorization cannot be empty'
    ],

    'user_name' =>[
        'required'  => 'Account name cannot be empty',
        'max'       => 'Account number 3-45 characters in length',
        'min'       => 'Account number 3-45 characters in length',
    ],

    'password'  => [
        'required'  => 'Password cant be empty',
        'max'       => 'Password length of 6 to 20 characters',
        'min'       => 'Password length of 6 to 20 characters',
        'confirmation'  => 'Two password input',
    ],
    'desc'  => [
        'amx'   => 'Note the information cannot be more than 45 characters',
    ],

    'group' => [
        'required'  => 'Please select a role group',
        'integer'   => 'Role of grouped data type to integer'
    ]



];