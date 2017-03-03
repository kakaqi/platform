<?php

namespace App\Http\Controllers\Admin\V1;

use Illuminate\Http\Request;
use App\Models\Agent;
class AgentController extends BaseController
{
    public function __construct()
    {
//        $this->userRepository = $userRepository;
    }

    /**
     * @api {get} /agents/{grade_id} 厅主（代理商）列表
     * @apiDescription 获取厅主（代理商）列表 grade_id:代理级别，总代（厅主）则为1，2为二级代理
     * @apiGroup account
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {String} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {String} user_name 用户名
     * @apiParam {String} tel 手机号码
     * @apiParam {Number} account_lock 是否锁定,1为永久锁定,0为未锁定,7为锁定7天,30为锁定30天
     * @apiParam {Number} page 当前页
     * @apiParam {Number} page_num 每页条数
     * @apiParam {Number} is_page 是否分页 1：是，0：否 ，默认1
     * @apiSampleRequest http://app-loc.dev/api/agents/1
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
                "code": 0,
                "text": "ok",
                "result": {
                    "total": 2,
                    "per_page": 1,
                    "current_page": 1,
                    "last_page": 2,
                    "next_page_url": "http://app-loc.dev/api/agents/1?page=2",
                    "prev_page_url": null,
                    "from": 1,
                    "to": 1,
                    "data": [
                        {
                        "id": 1,
                        "user_name": "csj",
                        "real_name": "陈松坚",
                        "desc": "厅主",
                        "grade_id": 1,
                        "tel": "15013777164",
                        "account_state": 1,
                        "add_time": "2017-01-20 06:55:32",
                        "update_time": "2017-01-20 07:03:51",
                        "ip_info": "127.0.0.1",
                        "parent_id": 0,
                        "mapping": null,
                        "sub_count": 1,
                        "area": "中国",
                        "tel_pre": "86",
                        "email": "184444444@qq.com",
                        "account_lock": 0,
                        "lock_rank": null,
                        "charge_mode": 1,
                        "charge_fixed": 500,
                        "charge_percentage": 20,
                        "time_zone": "(GMT+08:00) Asia / Beijing",
                        "lang_code": "zh_cn",
                        "sub_user": 0,
                        "lock_reason": "",
                        "account_type": 1,
                        "agent_code": "csj"
                        }
                    ]
                }
            }
     */
    public function index(Request $request,  $grade_id)
    {

        /*$ip = $request->ip();//获取IP地址
        var_dump($ip);die;
        $users = Admin::paginate(1)->toArray();
        var_dump($users);die;
       $re = $this->response->paginator($users, $adminTransformer);*/

        $user_name = $request->input('user_name');
        $tel = $request->input('tel');
        $account_lock = $request->input('account_lock');
        $page_num = $request->input('page_num',10);
        $is_page = $request->input('is_page',1);

        $db = Agent::select('id','user_name','real_name','tel','sub_count','sub_user','add_time','account_lock')->where('grade_id', (int)$grade_id);

        if(isset($user_name) && !empty($user_name)) {
            $db->where('user_name',$user_name);
        }

        if(isset($tel) && !empty($tel)) {
            $db->where('tel',$tel);
        }

        if(isset($account_lock) && $account_lock !== '') {
            $db->where('account_lock',$account_lock);
        }

        if($is_page) {

            $agents = $db->paginate($page_num);
        } else {

            $agents = [
                'data' =>$db->get()
            ];
        }


        return $this->response->array([
            'code' => 0,
            'text' =>trans('agent.success'),
            'result' => $agents,
        ]);

    }

    /**
     * @api {post} /agents 添加 （编辑）厅主（代理商）
     * @apiDescription 添加 （编辑）厅主（代理商）
     * @apiGroup account
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {Number} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {Number} agent_id 代理商id ,编辑时传
     * @apiParam {Number} grade_id 代理级别，总代则为1，2为二级代理
     * @apiParam {Number} parent_id 上级代理ID（添加代理商的时候传）
     * @apiParam {Number} account_type 账号种类,1为正常账号,2为测试账号（添加测试账号的时候传2）
     * @apiParam {String} area 运营地区
     * @apiParam {String} tel_pre 手机国家代码
     * @apiParam {String} tel 手机号
     * @apiParam {String} user_name 登录名
     * @apiParam {String} real_name 用户名
     * @apiParam {String} password 密码
     * @apiParam {String} password_confirmation 确认密码
     * @apiParam {String} account_lock 是否锁定
     * @apiParam {String} lock_rank 锁定对象
     * @apiParam {String} lock_reason 锁定原因
     * @apiParam {json} games 游戏种类 [{"hall_id":1,"games_id":[1,2,3]}]
     * @apiParam {Number} charge_mode 1为固定收费,2为分享报表流水
     * @apiParam {Number} charge_fixed 固定收费百分比,入库记录为整数
     * @apiParam {String} time_zone 时区  Asia/Beijing
     * @apiParam {String} lang_code 语言代码 如简体中文为zh-cn
     * @ apiSampleRequest http://app-loc.dev/api/agents
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
                "code": 0,
                "text": "保存成功",
                "result": ""
            }
     * @apiErrorExample  {json} Error-Response:
     *     HTTP/1.1 200 OK
     *     {
                "code": 0,
                "text": "保存失败",
                "result": ""
            }
     */
    public function store(Request $request)
    {
//        dd(toTimeZone('2017-01-20 14:55:32','Asia/Aden'));
//        $timezones = config('timezones');
        $agent_id = $request->input('agent_id');

        if(isset($agent_id) && !empty($agent_id)) {

            $user = Agent::find($agent_id);

            if (!$user) {
                return $this->response->array([
                    'code' => 400,
                    'text' => trans('agent.agent_not_exist'),
                    'result' => '',
                ]);
            }
        }

        $validator = \Validator::make($request->input(), [
            'area' => 'required',
            'user_name' => 'required_without:agent_id|unique:lb_agent_user,user_name,'.$request->input('agent_id'),
            'password' => 'required_without:agent_id|min:6|confirmed',
            'password_confirmation' => 'required_without:agent_id|min:6',
            'email' => 'required_without:agent_id|email|unique:lb_agent_user,email,'.$request->input('agent_id'),
            'time_zone' => 'required',
            'lang_code' => 'required',
            'grade_id' => 'required|integer|in:1,2',
        ]);


        if ($validator->fails()) {
            return $this->response->array([
                'code'=>400,
                'text'=>$validator->errors(),
                'result'=>'',
            ]);
        }

        $attributes = $request->except('token','password_confirmation','games','agent_id','locale');


        if(isset($agent_id) && !empty($agent_id)){
            //update
            //上级代理ID
            $old_parent_id = $user->parent_id;

            if($attributes['password'] ) {
                $attributes['password'] = app('hash')->make($attributes['password'].$user->salt);
            }

            $user = $user->update($attributes);


            if(!$user){
                return $this->response->array([
                    'code' => 400,
                    'text' => trans('agent.save_fails'),
                    'result' => '',
                ]);
            }
            if(isset($attributes['parent_id']) && $attributes['parent_id'] != $old_parent_id) {
                Agent::where('id',$old_parent_id)->decrement('sub_count');
                Agent::where('id',$attributes['parent_id'])->increment('sub_count');
            }
        } else {
            //create
            $attributes['ip_info'] = $request->ip();
            $attributes['salt'] = randomkeys(20);

            $attributes['password'] = app('hash')->make($attributes['password'].$attributes['salt']);

            $user = Agent::create($attributes);

            if(!$user->id){
                return $this->response->array([
                    'code' => 400,
                    'text' =>trans('agent.add_fails'),
                    'result' => '',
                ]);
            }
            $agent_id = $user->id;
            //代理商数
            if($user->parent_id) {
                Agent::where('id',$user->parent_id)->increment('sub_count');
            }

        }

        //游戏种类
        $games = $request->input('games');
        if(isset($games)) {
            $games = json_decode($games,true);
            $data_arr = [];
            foreach ($games as $game) {

                foreach ($game['games_id'] as $gid) {
                    $data_arr[] = [
                        'agent_id'=> $agent_id,
                        'hall_id' => $game['hall_id'],
                        'game_id' => $gid,
                    ];
                }
            }
            $agent_game = \DB::table('agent_game');
            $re = $agent_game->where('agent_id',$agent_id)->get();
            if($re) {
                $agent_game->where('agent_id',$agent_id)->delete();
            }
            $agent_game->insert($data_arr);

        }
        return $this->response->array([
            'code' => 0,
            'text' => trans('agent.save_success'),
            'result' => '',
        ]);
    }

    /**
     * @api {post} /agents/{agent_id} 编辑 厅主（代理商）获取数据
     * @apiDescription 编辑 厅主（代理商）获取数据
     * @apiGroup account
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {Number} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {Number} grade_id 代理级别，总代则为1，2为二级代理
     * @ apiSampleRequest http://app-loc.dev/api/agents/1
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
                "code": 0,
                "text": "ok",
                "result": {
                    "agent": {
                        "id": 9,
                        "user_name": "anchen2",
                        "real_name": null,
                        "desc": null,
                        "grade_id": 2,
                        "tel": null,
                        "account_state": 1,
                        "add_time": "2017-02-04 09:23:54",
                        "update_time": "2017-02-05 02:13:12",
                        "ip_info": "127.0.0.1",
                        "parent_id": 0,
                        "mapping": null,
                        "sub_count": 0,
                        "area": "中国深圳",
                        "tel_pre": "87",
                        "email": "2222@qq.com",
                        "account_lock": 0,
                        "lock_rank": null,
                        "charge_mode": null,
                        "charge_fixed": null,
                        "charge_percentage": null,
                        "time_zone": "(GMT 08:00) Asia / Beijing",
                        "lang_code": "zh_cn1",
                        "sub_user": 0,
                        "lock_reason": "",
                        "account_type": 0,
                        "agent_code": "",
                        "hall_games": {
                            "1": [
                                1,
                                2,
                                3
                            ],
                            "2": [
                                1
                            ]
                        }
                    }
                }
         }
     * @apiErrorExample  {json} Error-Response:
     *     HTTP/1.1 200 OK
     *     {
    "code": 400,
    "text": "参数值错误",
    "result": ""
    }
     */
    public  function agentShow(Request $request, $agent_id)
    {
        $validator = \Validator::make($request->all(), [
            'grade_id' => 'required|Integer',
        ]);

        if ($validator->fails()) {
            return $this->response->array([
                'code'=>400,
                'text'=> trans('agent.grade_id_error'),
                'result'=>'',
            ]);
        }

        $data = Agent::where(['grade_id'=>$request->input('grade_id'), 'id'=>$agent_id])->first();
        if($data) {
            $games_cat = $data->hallGames->toArray();
            $games = [];
            foreach ($games_cat as $k => $v) {
                $games[$v['hall_id']][] = $v['game_id'];
            }
            $data = $data->toArray();
            $data['hall_games'] = $games;

            return $this->response->array([
                'code'=>0,
                'text'=> trans('agent.success'),
                'result'=>[
                    'agent' => $data,
                ],
            ]);
        } else {

            return $this->response->array([
                'code'=>400,
                'text'=> trans('agent.agent_not_exist'),
                'result'=>'',
            ]);
        }

    }

    /**
     * @api {post} /agents/{agent_id}/password 厅主（代理商）修改密码
     * @apiDescription 厅主（代理商）修改密码
     * @apiGroup account
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {Number} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {Number} grade_id 代理级别，总代则为1，2为二级代理
     * @apiParam {String} password 新密码
     * @apiParam {String} password_confirmation 确认新密码
     * @ apiSampleRequest http://app-loc.dev/api/agents/9/password
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     */
    public function password(Request $request, $agent_id)
    {

        $validator = \Validator::make($request->input(), [
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6',
            'grade_id' => 'required|integer|in:1,2',
        ]);

        if ($validator->fails()) {
            return $this->response->array([
                'code'=>400,
                'text'=>$validator->errors(),
                'result'=>'',
            ]);
        }
        $grade_id = $request->input('grade_id');
        $password = $request->input('password');

        $angent_info = Agent::find($agent_id);

        if( ! $angent_info ) {

            return $this->response->array([
                'code'=>400,
                'text'=>trans('agent.agent_not_exist'),
                'result'=>'',
            ]);

        }

        $password = app('hash')->make($password.$angent_info->salt);

        $re = Agent::where(['id'=>$agent_id,'grade_id'=>$grade_id])->update(['password'=>$password]);
        if($re){
            return $this->response->array([
                'code'=>0,
                'text'=>trans('agent.success'),
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
}
