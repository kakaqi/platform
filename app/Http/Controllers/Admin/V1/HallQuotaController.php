<?php
/**
 * Created by PhpStorm.
 * User: chengkang
 * Date: 2017/2/8
 * Time: 17:38
 * Desc 游戏厅限额控制器
 */
namespace App\Http\Controllers\Admin\V1;

use Illuminate\Http\Request;
use App\Models\HallLimitGroup;
use App\Models\HallLimitItem;
use App\Models\GameInfo;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class HallQuotaController extends BaseController
{
    public function __construct()
    {
    }

    /**
     * @api {get} /hall/quota 游戏厅限额查询
     * @apiDescription 游戏厅限额查询
     * @apiGroup game
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {String} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {Number} agent_id 代理商ID
     * @apiParam {String} title 标题（设定限额标题）
     * @apiParam {Number} hall_type 厅类型，厅id
     * @ apiSampleRequest http://app-loc.dev/api/hall/quota
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
        {
            "code": 0,
            "text": "操作成功",
            "result": {
                "id": 15,
                "title": "默认限额A",
                "agent_id": 0,
                "status": 1,
                "uptime": "2015-05-06 04:06:23",
                "hall_type": 1,
                "item_type": 2,
                "limit_items": [
                    {
                        "game_name": "百家乐test ",
                        "game_id": 4,
                        "bet_areas": [
                            {
                                "id": 433,
                                "group_id": 15,
                                "game_id": 4,
                                "max_money": 4000,
                                "min_money": 4,
                                "bet_area": 4
                            }
                        ]
                    }
                ]
            }
        }
     *@apiErrorExample {json} Error-Response:
     *     HTTP/1.1 200 OK
         {
            "code": 400,
            "text": {
                "hall_type": [
                    "hall type 不能为空。"
                ]
            },
            "result": ""
        }
     */
    public function index(Request $request)
    {

        $validator = \Validator::make($request->input(), [
            'title' => 'required',
            'hall_type' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return $this->response->array([
                'code'=>400,
                'text'=>$validator->errors(),
                'result'=>'',
            ]);
        }

        $where = [
            'title' => $request->input('title','defaultA'),
            'hall_type' => $request->input('hall_type',1),
            'item_type' => 2,
            'agent_id' => 0,
        ];

        $data = HallLimitGroup::where($where)->first();

        if($data) {

            $items = [];

            foreach ($data->limitItem as $item){

                $re = GameInfo::select('game_name')->where('id',$item->game_id)->first();
                $items[$item->game_id]['game_name'] = $re['game_name'];
                $items[$item->game_id]['game_id'] = $item->game_id;
                $items[$item->game_id]['bet_areas'][] = $item;

            };

            unset($data->limitItem);
            $data->limit_items = array_values($items);

        }


        return $this->response->array([
            'code' => 0,
            'text' =>trans('agent.success'),
            'result' => $data,
        ]);


    }


    /**
     * @api {post} /hall/quota 游戏厅限额添加
     * @apiDescription 游戏厅限额添加
     * @apiGroup game
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {String} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {String} title 标题（设定限额标题 defaultA defaultB defaultC）
     * @apiParam {Number} hall_type 厅类型，厅id
     * @apiParam {Json} items 下注区域值
     * @ apiSampleRequest http://app-loc.dev/api/hall/quota
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
        {
            "code": 0,
            "text": "保存成功",
            "result": ""
        }
     *@apiErrorExample {json} Error-Response:
     *     HTTP/1.1 200 OK
            {
                "code": 400,
                "text": "限额分组已存在",
                "result": ""
            }
     */
    public function store(Request $request)
    {
        $validator = \Validator::make($request->input(), [
            'title' => 'required|in:defaultA,defaultB,defaultC',
            'hall_type' => 'required|integer|exists:game_hall,id',
            'items' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->response->array([
                'code'=>400,
                'text'=>$validator->errors(),
                'result'=>'',
            ]);
        }

        $items = json_decode($request->input('items'), true);

        $title = $request->input('title');
        $hall_type = $request->input('hall_type');

        $attributes = [
            'title' => $title,
            'hall_type' => $hall_type,
            'item_type' => 2,
        ];
        //默认分组是否存在
        $info = HallLimitGroup::where($attributes)->first();

        if($info != null) {
            return $this->response->array([
                'code' => 400,
                'text' =>trans('agent.limit_group_exist'),
                'result' => '',
            ]);

        }

        $attributes['status'] = 1;
        $attributes['uptime'] = Carbon::now()->toDateTimeString();
        $attributes['status'] = 1;

        DB::beginTransaction();

        $re = HallLimitGroup::create($attributes);

        if($re){

            if($items) {
                $item_arr = [];
                foreach ($items as $item) {

                    foreach ($item['area'] as $v) {
                        $item_arr[] = [
                            'group_id' => $re['id'],
                            'game_id' => $item['game_id'],
                            'max_money' => $v['max_money'],
                            'min_money' => $v['min_money'],
                            'bet_area' => $v['bet_area'],
                        ];
                    }

                }

                $r = HallLimitItem::insert($item_arr);
                if($r) {
                    DB::commit();
                    return $this->response->array([
                        'code' => 0,
                        'text' =>trans('agent.save_success'),
                        'result' => '',
                    ]);

                } else {

                    DB::rollBack();

                    return $this->response->array([
                        'code' => 400,
                        'text' =>trans('agent.add_fails'),
                        'result' => '',
                    ]);

                }
            }
            DB::commit();


        } else {

            DB::commit();

            return $this->response->array([
                'code' => 400,
                'text' =>trans('agent.add_fails'),
                'result' => '',
            ]);
        }

    }


    /**
     * @api {put} /hall/quota/{id} 保存游戏厅限额
     * @apiDescription 保存游戏厅限额
     * @apiGroup game
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {String} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {Json} items 下注区域值
     * @ apiSampleRequest http://app-loc.dev/api/hall/quota
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
    {
    "code": 0,
    "text": "保存成功",
    "result": ""
    }
     *@apiErrorExample {json} Error-Response:
     *     HTTP/1.1 200 OK
    {
    "code": 400,
    "text": "限额分组不存在",
    "result": ""
    }
     */
    public function update(Request $request, $id)
    {
        $id = (int)$id;
        $info = HallLimitGroup::find($id);
        if($info == null) {
            return $this->response->array([
                'code' => 400,
                'text' => trans('agent.limit_group_not_exist'),
                'result' => '',
            ]);
        }
        $items = json_decode($request->input('items'), true);
        if($items) {
            //delete old datas
            HallLimitItem::where('group_id', $id)->delete();

            $item_arr = [];
            foreach ($items as $item) {

                foreach ($item['area'] as $v) {
                    $item_arr[] = [
                        'group_id' => $id,
                        'game_id' => $item['game_id'],
                        'max_money' => $v['max_money'],
                        'min_money' => $v['min_money'],
                        'bet_area' => $v['bet_area'],
                    ];
                }

            }
            // add datas
            $r = HallLimitItem::insert($item_arr);
            if($r) {
                return $this->response->array([
                    'code' => 0,
                    'text' =>trans('agent.save_success'),
                    'result' => '',
                ]);

            } else {


                return $this->response->array([
                    'code' => 400,
                    'text' =>trans('agent.save_fails'),
                    'result' => '',
                ]);

            }

        } else {

            return $this->response->array([
                'code' => 400,
                'text' =>trans('agent.save_fails'),
                'result' => '',
            ]);
        }

    }

    /**
     * @api {post} /hall/quota/shortcut 快捷设定限额（添加）
     * @apiDescription 快捷设定限额（添加）
     * @apiGroup game
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {String} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {String} title 标题（设定限额标题 默认限额A，默认限额B,默认限额C）
     * @apiParam {Number} hall_type 厅类型，厅id
     * @apiParam {String} game_id 游戏的id（百家乐，轮盘，骰宝，龙虎）例如（1,2,3,4）
     * @apiParam {Number} max_money 最大值
     * @apiParam {Number} min_money 最小值
     * @ apiSampleRequest http://app-loc.dev/api/hall/quota/shortcut
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
    {
    "code": 0,
    "text": "保存成功",
    "result": ""
    }
     *@apiErrorExample {json} Error-Response:
     *     HTTP/1.1 200 OK
    {
    "code": 400,
    "text": "限额分组已存在",
    "result": ""
    }
     */
    public function shortcutStore(Request $request)
    {
        $validator = \Validator::make($request->input(), [
            'title' => 'required|in:defaultA,defaultB,defaultC',
            'game_id' => 'required',
            'hall_type' => 'required|integer|exists:game_hall,id',
            'max_money' => 'required|numeric',
            'min_money' => 'required|numeric',
        ]);


        if ($validator->fails()) {
            return $this->response->array([
                'code'=>400,
                'text'=>$validator->errors(),
                'result'=>'',
            ]);
        }

        $title = $request->input('title');
        $hall_type = $request->input('hall_type');
        $game_id = explode(',',$request->input('game_id'));
        $max_money = $request->input('max_money');
        $min_money = $request->input('min_money');

        if($min_money > $max_money) {
            return $this->response->array([
                'code'=>400,
                'text'=> trans('agent.min_max_error'),
                'result'=>'',
            ]);
        }

        $attributes = [
            'title' => $title,
            'hall_type' => $hall_type,
            'item_type' => 2,
        ];

        //默认分组是否存在
        $info = HallLimitGroup::where($attributes)->first();

        if($info != null) {
            return $this->response->array([
                'code' => 400,
                'text' =>trans('agent.limit_group_exist'),
                'result' => '',
            ]);

        }

        $attributes['status'] = 1;
        $attributes['uptime'] = Carbon::now()->toDateTimeString();
        $attributes['status'] = 1;


        DB::beginTransaction();

        $re = HallLimitGroup::create($attributes);
        if($re){

            if($game_id && is_array($game_id)) {
                $item_arr = [];

                foreach ($game_id as $v) {
                    $betarea = config('betarea.'.$v);

                    if($betarea) {
                        foreach ($betarea as $vv){
                            $item_arr[] = [
                                'group_id' => $re['id'],
                                'game_id' => $v,
                                'max_money' => $max_money,
                                'min_money' => $min_money,
                                'bet_area' => $vv,
                            ];
                        }
                    }
                }
                $r = HallLimitItem::insert($item_arr);
                if($r) {

                    DB::commit();
                    return $this->response->array([
                        'code' => 0,
                        'text' =>trans('agent.save_success'),
                        'result' => '',
                    ]);

                } else {

                    DB::rollBack();

                    return $this->response->array([
                        'code' => 400,
                        'text' =>trans('agent.add_fails'),
                        'result' => '',
                    ]);

                }
            }
            DB::commit();


        } else {

            DB::commit();

            return $this->response->array([
                'code' => 400,
                'text' =>trans('agent.add_fails'),
                'result' => '',
            ]);
        }

    }

    /**
     * @api {post} /hall/quota/shortcut/{id} 快捷设定限额（保存）
     * @apiDescription 快捷设定限额（保存）
     * @apiGroup game
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {String} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {String} game_id 游戏的id（百家乐，轮盘，骰宝，龙虎）例如（1,2,3,4）
     * @apiParam {Number} max_money 最大值
     * @apiParam {Number} min_money 最小值
     * @ apiSampleRequest http://app-loc.dev/api/hall/quota/shortcut/2843
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
    {
    "code": 0,
    "text": "保存成功",
    "result": ""
    }
     *@apiErrorExample {json} Error-Response:
     *     HTTP/1.1 200 OK
    {
    "code": 400,
    "text": "限额分组不存在",
    "result": ""
    }
     */
    public function shortcutUpdate(Request $request, $id)
    {
        $id = (int)$id;
        $info = HallLimitGroup::find($id);
        if($info == null) {
            return $this->response->array([
                'code' => 400,
                'text' => trans('agent.limit_group_not_exist'),
                'result' => '',
            ]);
        }

        $game_id = explode(',',$request->input('game_id'));
        $max_money = $request->input('max_money');
        $min_money = $request->input('min_money');

        if($min_money > $max_money) {
            return $this->response->array([
                'code'=>400,
                'text'=> trans('agent.min_max_error'),
                'result'=>'',
            ]);
        }

        if($game_id && is_array($game_id)) {
            //delete old datas

            HallLimitItem::where('group_id', $id)->whereIn('game_id', $game_id)->delete();

            $item_arr = [];
            foreach ($game_id as $v) {
                $betarea = config('betarea.'.$v);

                if($betarea) {
                    foreach ($betarea as $vv){
                        $item_arr[] = [
                            'group_id' => $id,
                            'game_id' => $v,
                            'max_money' => $max_money,
                            'min_money' => $min_money,
                            'bet_area' => $vv,
                        ];
                    }
                }
            }
            // add datas
            $r = HallLimitItem::insert($item_arr);
            if($r) {
                return $this->response->array([
                    'code' => 0,
                    'text' =>trans('agent.save_success'),
                    'result' => '',
                ]);

            } else {


                return $this->response->array([
                    'code' => 400,
                    'text' =>trans('agent.save_fails'),
                    'result' => '',
                ]);

            }

        } else {

            return $this->response->array([
                'code' => 400,
                'text' =>trans('agent.save_fails'),
                'result' => '',
            ]);
        }
    }
}