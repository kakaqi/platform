<?php
/**
 * Created by PhpStorm.
 * User: anchen
 * Date: 2017/2/5
 * Time: 17:57
 * Desc 玩家控制器
 */
namespace App\Http\Controllers\Admin\V1;

use Illuminate\Http\Request;
use App\Models\Player;
use App\Models\Agent;
use App\Models\CashRecord;
use App\Models\PlayerOrder;
use Carbon\Carbon;

class PlayerController extends BaseController
{
    public function __construct()
    {
    }

    /**
     * @api {get} /player 玩家管理列表
     * @apiDescription 玩家管理列表
     * @apiGroup account
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {Number} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {String} user_name 用户名，玩家在第三方平台账号
     * @apiParam {Number} uid 用户id
     * @apiParam {String} start_add_time 注册开始时间 2017-01-20 15:07:07
     * @apiParam {String} end_add_time 注册结束时间 2017-01-20 15:07:07
     * @apiParam {String} account_state 状态 账号状态,1为正常,2为暂停使用,3为停用,4为逻辑删除
     * @apiParam {Number} page 当前页
     * @apiParam {Number} page_num 每页条数
     * @ apiSampleRequest http://app-loc.dev/api/player
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
         {
            "code": 0,
            "text": "操作成功",
            "result": {
            "total": 1,
            "per_page": 10,
            "current_page": 1,
            "last_page": 1,
            "next_page_url": null,
            "prev_page_url": null,
            "from": 1,
            "to": 1,
            "data": [
                {
                    "uid": 1,
                    "user_name": "csj_play",
                    "username_md": "csj_play_3",
                    "alias": "我来也",
                    "hall_id": 1,
                    "agent_id": 0,
                    "add_date": "2017-01-20 15:07:03",
                    "account_state": 1
                }
            ]
            }
        }
     */
    public function index(Request $request){

        $user_name = $request->input('user_name');
        $uid = $request->input('uid');
        $start_add_time = $request->input('start_add_time');
        $end_add_time = $request->input('end_add_time');
        $account_state = $request->input('account_state');
        $page_num = $request->input('page_num',10);

        $db = Player::select('uid','user_name','username_md','alias','hall_id','agent_id','add_date','account_state');

        if(isset($user_name) && !empty($user_name)) {
            $db->where('user_name',$user_name);
        }

        if(isset($uid) && !empty($uid)) {
            $db->where('uid',$uid);
        }
        if(isset($start_add_time) && !empty($start_add_time)) {
            $db->where('add_date', '>=', $start_add_time);
        }
        if(isset($end_add_time) && !empty($end_add_time)) {
            $db->where('add_date', '<', $end_add_time);
        }
        if(isset($account_state) && $account_state !== '') {
            $db->where('account_state',$account_state);
        }

        $player = $db->paginate($page_num);

        return $this->response->array([
            'code' => 0,
            'text' =>trans('agent.success'),
            'result' => $player,
        ]);
    }

    /**
     * @api {post} /player 添加（编辑）玩家
     * @apiDescription 添加（编辑）玩家
     * @apiGroup account
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {Number} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {String} username_md 玩家在平台的账号
     * @apiParam {Number} user_id 玩家id（编辑时带参数）
     * @apiParam {String} alias 玩家昵称
     * @apiParam {String} password_md 密码
     * @apiParam {String} password_md_confirmation 确认密码
     * @apiParam {Number} agent_id 直属代理id
     * @apiParam {String} language 语言
     * @apiParam {Number} account_state 账号状态,1为正常,2为暂停使用,3为停用,4为逻辑删除
     * @ apiSampleRequest http://app-loc.dev/api/player
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
            {
                "code": 0,
                "text": "保存成功",
                "result": ""
            }
     */
    public function store(Request $request)
    {

        $user_id = $request->input('user_id');
        if(isset($user_id) && !empty($user_id)) {
            //update
            $user = Player::where('uid', $user_id)->first();

            if (!$user) {
                return $this->response->array([
                    'code' => 400,
                    'text' => trans('agent.user_not_exist'),
                    'result' => '',
                ]);
            }
        }
        $validator = \Validator::make($request->input(), [
            'username_md' => 'required_without:user_id|unique:lb_user,username_md,'.$request->input('user_id').',uid',
            'password_md' => 'required_without:user_id|min:6|confirmed',
            'password_md_confirmation' => 'required_without:user_id|min:6',
            'agent_id' => 'required',
            'language' => 'required',
            'account_state' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->response->array([
                'code'=>400,
                'text'=>$validator->errors(),
                'result'=>'',
            ]);
        }

        $attributes = $request->except('token','locale','password_md_confirmation','user_id');
        $attributes['password_md'] &&  $attributes['password_md'] = app('hash')->make($attributes['password_md']);

        if(isset($user_id) && !empty($user_id)){

            $agent_id = $user->agent_id;
            //更新代理商
            if($agent_id != $attributes['agent_id']){
                $agent = Agent::where('id', $attributes['agent_id'])->first();
                if($hall_id = $agent->parent_id){

                    $hall = Agent::where('id', $hall_id)->first();
                    $attributes['hall_id'] = $hall->id;
                    $attributes['hall_name'] = $hall->user_name;
                }

                $attributes['agent_id'] = $agent->id;
                $attributes['agent_name'] = $agent->user_name;
            }
            $attributes['password_md'] &&  $attributes['password_md'] = app('hash')->make($attributes['password_md'].$user->salt);
            $user = $user->where('uid',$user_id)->update($attributes);
            if(!$user){
                return $this->response->array([
                    'code' => 400,
                    'text' => trans('agent.save_fails'),
                    'result' => '',
                ]);
            }
            //更新玩家数
            if($agent_id != $attributes['agent_id']){
                Agent::where('id',$agent_id)->decrement('sub_user');
                Agent::where('id',$attributes['agent_id'])->increment('sub_user');
            }

            return $this->response->array([
                'code' => 0,
                'text' =>trans('agent.save_success'),
                'result' => '',
            ]);
        } else {
            //create
            $attributes['add_ip'] = $request->ip();
            //代理商
            if($aid = $attributes['agent_id']) {

                $agent = Agent::where('id', $aid)->first();
                if($hall_id = $agent->parent_id){

                    $hall = Agent::where('id', $hall_id)->first();
                    $attributes['hall_id'] = $hall->id;
                    $attributes['hall_name'] = $hall->user_name;
                }

                $attributes['agent_id'] = $agent->id;
                $attributes['agent_name'] = $agent->user_name;
            }
            $attributes['salt'] = randomkeys(20);
            $attributes['password_md'] = app('hash')->make($attributes['password_md'].$attributes['salt']);
            $user = Player::create($attributes);

            if(!$user->id){
                return $this->response->array([
                    'code' => 400,
                    'text' =>trans('agent.add_fails'),
                    'result' => '',
                ]);
            }

            Agent::where('id',$aid)->increment('sub_user');

            return $this->response->array([
                'code' => 0,
                'text' =>trans('agent.success'),
                'result' => '',
            ]);
        }
    }

    /**
     * @api {post} /player/{user_id} 编辑玩家时获取数据
     * @apiDescription 编辑玩家时获取数据
     * @apiGroup account
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {Number} token 认证token
     * @apiParam {String} locale 语言
     * @ apiSampleRequest http://app-loc.dev/api/player/191
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
          {
            "code": 0,
            "text": "操作成功",
            "result": {
            "data": {
            "uid": 191,
            "user_name": "",
            "username_md": "111111",
            "password_mb_c": null,
            "password_mb_s": "",
            "alias": "人生玩家",
            "add_date": "2017-02-06 07:17:08",
            "create_time": "0000-00-00 00:00:00",
            "last_time": "0000-00-00 00:00:00",
            "add_ip": "127.0.0.1",
            "ip_info": "0.0.0.0",
            "on_line": "N",
            "account_state": 1,
            "hall_id": 1,
            "agent_id": 2,
            "hall_name": "csj",
            "agent_name": "c112",
            "mapping": null,
            "profit_share_platform": null,
            "profit_share_agent": "0",
            "profit_share_hall": "0",
            "money": null,
            "token_id": null,
            "is_test": 0,
            "language": "zh-cn"
            }
            }
        }
     */
    public function show(Request $request, $user_id)
    {
        $player = Player::where('uid',$user_id)->first();
        if($player){
            $player = $player->toArray();
        }
        return $this->response->array([
            'code' => 0,
            'text' =>trans('agent.success'),
            'result' => [
                'data' => $player,
            ],
        ]);
    }

    /**
     * @api {post} /player/{user_id}/password 修改玩家密码
     * @apiDescription 修改玩家密码
     * @apiGroup account
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {Number} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {String} password_md 密码
     * @apiParam {String} password_md_confirmation 确认密码
     * @ apiSampleRequest http://app-loc.dev/api/player/191/password
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
        {
        "code": 0,
        "text": "保存成功",
        "result": ""
        }
     */
    public function password(Request $request, $user_id)
    {
        $validator = \Validator::make($request->input(), [
            'password_md' => 'required|min:6|confirmed',
            'password_md_confirmation' => 'required|min:6',
        ]);
        if ($validator->fails()) {
            return $this->response->array([
                'code'=>400,
                'text'=>$validator->errors(),
                'result'=>'',
            ]);
        }

        $user = Player::where(['uid'=>$user_id])->first();
        if( ! $user ) {
            return $this->response->array([
                'code'=>400,
                'text'=>trans('agent.user_not_exist'),
                'result'=>'',
            ]);
        }

        if( ! $salt = $user->salt ) {
            $salt = randomkeys(20);
            Player::where(['uid'=>$user_id])->update(['salt'=>$salt]);
        }

//        $re = app('hash')->check('111111', '$2y$10$h6J5jKbl/Poc/FgHJ6wsjOnAB88dVZ6yVH1Zk/H/nE6I1/tWnBdBO');
        $password = app('hash')->make($request->input('password_md').$salt);

        $re = Player::where(['uid'=>$user_id])->update(['password_md'=>$password]);

        if($re){
            return $this->response->array([
                'code'=>0,
                'text'=>trans('agent.save_success'),
                'result'=>'',
            ]);
        } else {
            return $this->response->array([
                'code'=>400,
                'text'=>trans('agent.save_fails'),
                'result'=>'',
            ]);
        }
    }

    /**
     * @api {get} /player/{user_id}/balance 查询玩家余额
     * @apiDescription 查询玩家余额
     * @apiGroup account
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {Number} token 认证token
     * @apiParam {String} locale 语言
     * @ apiSampleRequest http://app-loc.dev/api/player/191/balance
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
        {
            "code": 0,
            "text": "操作成功",
            "result": {
                "balance": {
                    "uid": 191,
                    "money": "2000.00",
                    "username_md": "111111",
                    "add_date": "2017-02-06 15:17:08",
                    "last_update_time": "2017-02-07 13:59:45"
                }
            }
        }
     */
    public function balance(Request $request, $user_id)
    {
        $user = Player::select('uid','money','username_md','add_date','last_update_time')->where('uid',$user_id)->first();

        if($user) {

            $user->where('uid',$user_id)->update(['last_update_time' =>  Carbon::now()]);

            return $this->response->array([
                'code'=>0,
                'text'=>trans('agent.success'),
                'result'=>[
                    'balance' =>$user,
                ],
            ]);

        } else {
            return $this->response->array([
                'code'=>400,
                'text'=>trans('agent.fails'),
                'result'=>'',
            ]);
        }
    }

    /**
     * @api {post} /player/{user_id}balance 玩家余额扣取（充值）
     * @apiDescription 查询玩家余额
     * @apiGroup account
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {Number} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {Number} money 金额
     * @apiParam {Number} status 加减状态，3是加，4是减
     * @ apiSampleRequest http://app-loc.dev/api/player/191/balance
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
         {
            "code": 0,
            "text": "操作成功",
            "result": ""
        }
     * @apiErrorExample {json} Error-Response:
     *     HTTP/1.1 200 OK
        {
        "code": 400,
        "text": {
        "status": [
        "status 不能为空。"
        ]
        },
        "result": ""
        }
     */
    public function balanceHandle(Request $request, $user_id)
    {
        /*$re = CashRecord::where('uid',191)->first()->toArray();
        dd($re);*/
//        dd($this->auth->user()->user_name);
        $validator = \Validator::make($request->input(), [
            'money' => 'required|numeric',
            'status' => 'required|in:3,4',
        ]);
        if ($validator->fails()) {
            return $this->response->array([
                'code'=>400,
                'text'=>$validator->errors(),
                'result'=>'',
            ]);
        }

        $user = Player::where('uid',$user_id)->first();
        if(!$user) {
            return $this->response->array([
                'code'=>400,
                'text'=> trans('agent.user_not_exist'),
                'result'=>'',
            ]);
        }

        $status = $request->input('status');
        $money = $request->input('money');
        //充值金额
        if(3 == $status) {

            $re = $user->where('uid',$user_id)->increment('money', $money);
        }
        //扣取金额
        if(4 == $status) {

            if( ($user->money - $money) < 0) {
                return $this->response->array([
                    'code'=>400,
                    'text'=> trans('agent.insufficient_balance'),
                    'result'=>'',
                ]);
            }
            $re = $user->where('uid',$user_id)->decrement('money', $money);
        }

        if($re) {
            //重新获取
//            $user = Player::select('uid','money')->where('uid',$user_id)->first();
            //记录现金表
            $cashRecord = new CashRecord;

            $ordernum = createOrderSn();
            $cashRecord->order_sn = $ordernum;
            $cashRecord->uid = $user->uid;
            $cashRecord->user_name = $user->user_name;//玩家在第三方平台账号
            $cashRecord->type = 4;
            $cashRecord->amount = $money;
            $cashRecord->status = $status;
            $cashRecord->user_money = $user->money - $money;
            $cashRecord->desc = $status == 3 ? '用户余额充值' : '用户余额扣取';
            $cashRecord->admin_user = $this->auth->user()->user_name;
            $cashRecord->admin_user_id = $this->auth->user()->id;
            $cashRecord->add_time = Carbon::now()->toDateTimeString();
            $cashRecord->pkey = '';
            $cashRecord->save();

            return $this->response->array([
                'code'=>0,
                'text'=> trans('agent.success'),
                'result'=>'',
            ]);
        }
    }


    /**
     * @api {get} /player/order 查询玩家下注 （注单查询）
     * @apiDescription 查询玩家下注 （注单查询）
     * @apiGroup account
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {Number} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {Number} user_id 用户id
     * @apiParam {String} id 订单号（id）
     * @apiParam {String} user_name 用户名
     * @apiParam {String} game_hall_id 游戏厅ID（注单查询接口使用）
     * @apiParam {String} game_id 游戏id （注单查询接口使用）
     * @apiParam {String} game_round_id 局ID （注单查询接口使用）
     * @apiParam {String} status 状态 （注单查询接口使用）
     * @apiParam {String} game_round_id 局ID （注单查询接口使用）
     * @apiParam {String} start_add_time 下注开始时间
     * @apiParam {Number} end_add_time 下注结束时间
     * @apiParam {Number} page_num 每页条数
     * @apiParam {Number} page 当前页
     * @ apiSampleRequest http://app-loc.dev/api/player/order
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
            {
                "code": 0,
                "text": "操作成功",
                "result": {
                    "total": 1,
                    "per_page": 10,
                    "current_page": 1,
                    "last_page": 1,
                    "next_page_url": null,
                    "prev_page_url": null,
                    "from": 1,
                    "to": 1,
                    "data": [
                        {
                            "_id": "589ac8a981636827140079dc",
                            "user_id": 191,
                            "user_name": "chensj",
                            "bet_type": 4,
                            "bet_money": 400,
                            "hall_id": 1,
                            "hall_name": "csj",
                            "agent_id": 9,
                            "agent_name": "anchen2",
                            "game_round_id": 4,
                            "cat_id": 1,
                            "cat_name": "视频百家乐",
                            "payout_win": 300,
                            "is_cancel": 0,
                            "calculated": 0,
                            "encry": "",
                            "odds": 1.5,
                            "server_id": 1,
                            "server_name": 1,
                            "game_id": 88,
                            "game_name": "龙虎百家乐",
                            "game_hall_id": 1,
                            "game_hall_name": "旗舰厅",
                            "status": 1,
                            "add_time": "2017-02-08 15:28:41",
                            "ip_info": "127.0.0.1",
                            "ip_area": "shenzhen"
                        }
                    ]
                }
            }
     */
    public function order(Request $request)
    {
        /*$playerOrder = new PlayerOrder;
        $playerOrder->user_id = 191;
        $playerOrder->user_name = 'chensj';
        $playerOrder->bet_type = 4;
        $playerOrder->bet_money = 400;
        $playerOrder->hall_id = 1;
        $playerOrder->hall_name = 'csj';
        $playerOrder->agent_id = 9;
        $playerOrder->agent_name = 'anchen2';
        $playerOrder->game_round_id = 4;
        $playerOrder->cat_id = 1;
        $playerOrder->cat_name = '视频百家乐';
        $playerOrder->payout_win = 300;
        $playerOrder->is_cancel = 0;
        $playerOrder->calculated = 0;
        $playerOrder->encry = '';
        $playerOrder->odds = 1.5;
        $playerOrder->server_id = 1;
        $playerOrder->server_name = 1;
        $playerOrder->game_id = 88;
        $playerOrder->game_name = '龙虎百家乐';
        $playerOrder->game_hall_id = 1;
        $playerOrder->game_hall_name = '旗舰厅';
        $playerOrder->status = 1;
//        $playerOrder->add_time = Carbon::now()->toDateTimeString();

//        $start = new \MongoDate(strtotime("2010-01-15 00:00:00"));->toDateTime()
        //php添加mongodb时间类型
        $start = new \MongoDB\BSON\UTCDateTime(time().'000');

        $playerOrder->add_time = $start;
        $playerOrder->ip_info = '127.0.0.1';
        $playerOrder->ip_area = 'shenzhen';
        $playerOrder->save();
        die;*/

        $user_name = $request->input('user_name');
        $user_id = $request->input('user_id');
        $_id = $request->input('id');
//        $start_add_time = $request->input('start_add_time');
        $start_add_time = date("Y-m-d H:i:s",strtotime($request->input('start_add_time')." +8 hour"));
//        $end_add_time = $request->input('end_add_time');
        $end_add_time = date("Y-m-d H:i:s",strtotime($request->input('end_add_time')." +8 hour"));
        $page_num = $request->input('page_num',10);

        $playerOrder = PlayerOrder::select('*', 'add_time->toDateTime()');

        if(isset($user_name)) {
            $playerOrder->where('user_name',$user_name);
        }

        if(isset($_id)) {
            $playerOrder->where('_id',$_id);
        }

        if(isset($user_id)) {

            $playerOrder->where('user_id',(int)$user_id);
        }

        if(isset($start_add_time)) {
            $playerOrder->where('add_time', '>=', new \DateTime($start_add_time));
        }

        if(isset($end_add_time)) {
            $playerOrder->where('add_time', '<', new \DateTime($end_add_time));
        }

        $re = $playerOrder->paginate($page_num);

        //此次由于mongodb保存的时间类型是isodate，返回一个对象，转时间日期时，需要转格式
        foreach ($re as $v){
            $v->add_time = $v->add_time->__tostring();
            $v->add_time = date('Y-m-d H:i:s',$v->add_time/1000);
        }
        return $this->response->array([
            'code'=>0,
            'text'=> trans('agent.success'),
            'result'=>$re,
        ]);
    }
}