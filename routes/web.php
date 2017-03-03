<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
 */

$app->get('/', function () use ($app) {
    //    http://app2.dev/?locale=zh-CN
//    new \MongoDB\Driver\Manager();
//    echo trans('auth.incorrect');
    return $app->version();
});
$app->get('test',[
    'uses' =>'TestController@index'
]);



$api = app('Dingo\Api\Routing\Router');

// admin_v1 version API
// choose version add this in header    Accept:application/vnd.lumen.admin_v1+json
$api->version('v0.1.0', ['namespace' => 'App\Http\Controllers\Admin\V1'], function ($api) {

    //图片上传
    $api->post('upload',[
        'as' => 'file.upload',
        'uses' =>'UploadController@index',
    ]);

    //删除文件
    $api->delete('file', [
        'as' => 'file.delete',
        'uses' => 'UploadController@delete',
    ]);

    // Captcha 验证码
    $api->post('captcha', [
        'as' => 'captcha.index',
        'uses' => 'CaptchaController@index',
    ]);

    // 语言列表
    $api->post('language', [
        'as' => 'auth.language',
        'uses' => 'AuthController@language',
    ]);

    // Auth login 登录认证
    $api->post('authorization', [
        'as' => 'auth.login',
        'uses' => 'AuthController@login',
    ]);
    // register
    $api->post('users', [
        'as' => 'users.store',
        'uses' => 'AuthController@register',
    ]);

    // AUTH
    // refresh jwt token
    $api->post('auth/token/new', [
        'as' => 'auth.token.new',
        'uses' => 'AuthController@refreshToken',
    ]);

    // need authentication
    $api->group(['middleware' => 'auth:admin'], function ($api) {



        //账号管理
        //厅主（代理商）
        $api->get('agents/{grade_id}', [
            'as' => 'agents.index',
            'uses' => 'AgentController@index',
        ]);

        //游戏种类
        $api->get('hall/games', [
            'as' => 'hall.games',
            'uses' => 'GameHallController@games',
        ]);

        //添加 （编辑）厅主（代理商）
        $api->post('agents', [
            'as' => 'agents.store',
            'uses' => 'AgentController@store',
        ]);

        //编辑 厅主（代理商）获取数据
        $api->post('agents/{agent_id}', [
            'as' => 'agents.Show',
            'uses' => 'AgentController@agentShow',
        ]);

        //厅主（代理商）修改密码
        $api->post('agents/{agent_id}/password', [
            'as' => 'agents.password',
            'uses' => 'AgentController@password',
        ]);

        //玩家管理列表
        $api->get('player',[
            'as' => 'player.index',
            'uses' => 'PlayerController@index',
        ]);

        //添加（编辑）玩家
        $api->post('player', [
            'as' => 'player.store',
            'uses' => 'PlayerController@store',
        ]);

        //编辑玩家时获取数据
        $api->post('player/{user_id}', [
            'as' => 'player.show',
            'uses' => 'PlayerController@show',
        ]);

        //修改玩家密码
        $api->post('player/{user_id}/password', [
            'as' => 'player.password',
            'uses' => 'PlayerController@password',
        ]);

        //查询玩家余额
        $api->get('player/{user_id}/balance', [
            'as' => 'player.balance',
            'uses' => 'PlayerController@balance',
        ]);

        //玩家余额扣取（充值）
        $api->post('player/{user_id}/balance',[
            'as' => 'player.balance.handle',
            'uses' => 'PlayerController@balanceHandle'
        ]);

        //查询玩家下注 （注单查询）
        $api->get('player/order',[
            'as' => 'player.order',
            'uses' => 'PlayerController@order'
        ]);

        //游戏列表
        $api->get('game', [
            'as' => 'game.index',
            'uses' => 'GameController@index',
        ]);

        //添加游戏
        $api->post('game', [
            'as' => 'game.store',
            'uses' => 'GameController@store',
        ]);

        //编辑游戏
        $api->put('game/{id}', [
            'as' => 'game.update',
            'uses' => 'GameController@update',
        ]);

        //编辑游戏时获取数据
        $api->post('game/{id}', [
            'as' => 'game.show',
            'uses' => 'GameController@show',
        ]);

        //删除游戏
        $api->delete('game/{id}', [
            'as' => 'game.delete',
            'uses' => 'GameController@delete',
        ]);

        //游戏分类
        $api->get('game/cat', [
            'as' => 'game.cat',
            'uses' => 'GameController@cat',
        ]);

        //游戏厅限额查询
        $api->get('hall/quota', [
            'as' => 'hall.quota',
            'uses' => 'HallQuotaController@index',
        ]);

        //游戏厅限额添加
        $api->post('hall/quota', [
            'as' => 'hall.store',
            'uses' => 'HallQuotaController@store',
        ]);



        /*++++++++++++++++++++++后台系统菜单相关Begin++++++++++++++++++++++++++++++*/
        //获取后台系统菜单列表
        $api->get('menus',[
            'as'    => 'menus.index',
            'uses'  => 'MenusController@index',
        ]);

        //编辑后台系统菜单获取数据
        $api->post('menus/{id}',[
            'as'    => 'menus.show',
            'uses'  => 'MenusController@show',
        ]);

        //添加后台菜单操作
        $api->post('menus',[
            'as'    => 'menus.store',
            'uses'  => 'MenusController@store',
        ]);

        //修改后台系统菜单提交
        $api->patch('menus/{id}',[
            'as'    => 'menus.update',
            'uses'  => 'MenusController@update'
        ]);

        //删除后台单个菜单
        $api->delete('menus/{id}',[
            'as'    => 'menus.destroy',
            'uses'  => 'MenusController@destroy'
        ]);

        /*++++++++++++++++++++++后台系统菜单相关End++++++++++++++++++++++++++++++*/

        /*++++++++++++++++++++++后台系统角色管理相关Begin+++++++++++++++++++++++++++++*/

        //后台角色列表
        $api->get('role',[
            'as'    => 'role.index',
            'uses' => 'RoleController@index'
        ]);

        //后台新增角色操作
        $api->post('role',[
            'as'        => 'role.store',
            'uses'      => 'RoleController@store'
        ]);

        //编辑角色权限时获取权限列表
        $api->post('role/showMenus/{id}',[
            'as'        => 'role.showMenus',
            'uses'      => 'RoleController@showMenus'
        ]);

        //编辑修改角色权限菜单
        $api->patch('role/updateRole/{id}',[
            'as'        => 'role.updateRole',
            'uses'      => 'RoleController@updateRole'
        ]);

        //删除角色分组信息
        $api->delete('role/deleteGroup/{id}',[
            'as'        => 'role.deleteGroup',
            'uses'      => 'RoleController@deleteGroup'
        ]);

        //子账户列表
        $api->get('role/accountList',[
            'as'    => 'role.accountList',
            'uses'  => 'RoleController@accountList'
        ]);

        //新增子帐号操作
        $api->post('role/addAccount',[
            'as'        => 'role.addAccount',
            'uses'      => 'RoleController@addAccount'
        ]);

        //子帐号状态修改操作，删除、停用
        $api->patch('role/accountState/{id}',[
            'as'        => 'role.accountState',
            'uses'      => 'RoleController@accountState'
        ]);

        //编辑子账户权限时获取菜单信息
        $api->post('role/showSubMenus/{id}',[
            'as'    => 'role.getAccountInfo',
            'uses'  => 'RoleController@getAccountInfo'
        ]);

        //保存修改子账户权限菜单信息
        $api->patch('role/updateAccount/{id}',[
            'as'        => 'role.updateAccount',
            'uses'      => 'RoleController@updateAccount'
        ]);

        //子账户修改密码操作
        $api->patch('role/editPwd/{id}',[
            'as'        => 'role.accountEditPwd',
            'uses'     => 'RoleController@accountEditPwd'
        ]);
        /*++++++++++++++++++++++后台系统角色管理相关End+++++++++++++++++++++++++++++*/
        //游戏厅限额保存
        $api->put('hall/quota/{id}', [
            'as' => 'hall.update',
            'uses' => 'HallQuotaController@update',
        ]);

        //快捷设定限额（添加）
        $api->post('hall/quota/shortcut', [
            'as' => 'hall.shortcutStore',
            'uses' => 'HallQuotaController@shortcutStore',
        ]);

        //快捷设定限额（保存）
        $api->put('hall/quota/shortcut/{id}', [
            'as' => 'hall.shortcutUpdate',
            'uses' => 'HallQuotaController@shortcutUpdate',
        ]);

        /**
         * 报表统计start
         */

        //查询游戏&导出excel或cvs
        $api->get('game/chart', [
            'as' => 'game.chart',
            'uses' => 'GameController@chart',
        ]);

        /**
         * 报表统计end
         */

    });

});
