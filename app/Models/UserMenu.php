<?php

namespace App\Models;
/*平台用户权限表*/
use Illuminate\Auth\Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;

class UserMenu extends BaseModel implements AuthenticatableContract, JWTSubject
{
    // 用户验证attempt
    use  Authenticatable;
//    public $timestamps = false; //关闭创建时间、更新时间
    protected $table = 'user_menus';

    // jwt 需要实现的方法
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    // jwt 需要实现的方法
    public function getJWTCustomClaims()
    {
        return [];
    }


}
