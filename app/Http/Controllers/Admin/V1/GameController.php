<?php
/**
 * Created by PhpStorm.
 * User: chengkang
 * Date: 2017/2/8
 * Time: 17:38
 */
namespace App\Http\Controllers\Admin\V1;

use App\Models\GameInfo;
use Illuminate\Http\Request;
use App\Models\Player;
use App\Models\GameCat;
use App\Models\UserChartInfo;
use Carbon\Carbon;
use Maatwebsite\Excel\Facades\Excel;

class GameController extends BaseController
{
    public function __construct()
    {
    }

    /**
     * @api {get} /game 玩家管理列表
     * @apiDescription 玩家管理列表
     * @apiGroup game
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {String} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {String} game_name 游戏名称
     * @apiParam {Number} id 游戏id
     * @apiParam {Number} cat_id 游戏分类
     * @apiParam {Number} status 游戏是否可用,1为可用,0为不可用
     * @apiParam {Number} page 当前页 默认1
     * @apiParam {Number} page_num 每页条数 默认10
     * @ apiSampleRequest http://app-loc.dev/api/game
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
         * {
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
                        "id": 88,
                        "cat_id": 1,
                        "game_name": "龙虎百家乐",
                        "sort_id": 1,
                        "status": 1,
                        "table_count": 2,
                        "user_count": 0,
                        "process_type": 109,
                        "icon": "",
                        "is_recommand": 0,
                            "game_cat": {
                            "id": 1,
                            "cat_name": "视频百家乐 "
                        }
                    }
                ]
            }
        }
     */
    public function index(Request $request)
    {

        $db = GameInfo::select('*');
        $game_name = $request->input('game_name');
        $id = $request->input('id');
        $cat_id = $request->input('cat_id');
        $status = $request->input('status');
        $page_num = $request->input('page_num',10);

        if(isset($game_name) && !empty($game_name)) {
            $db->where('game_name',$game_name);
        }

        if(isset($id)) {
            $db->where('id',$id);
        }

        if(isset($cat_id) && !empty($cat_id)) {
            $db->where('cat_id',$cat_id);
        }

        if(isset($status) && $status !== '') {

            $db->where('status',$status);
        }
        $db->where('status', '<>', 2);
        $games = $db->paginate($page_num);

        foreach ($games as $game) {
            $game->cat_id = (int) $game->cat_id;
            $game->gameCat;
        }

        return $this->response->array([
            'code' => 0,
            'text' =>trans('agent.success'),
            'result' => $games,
        ]);
    }



    /**
     * @api {post} /game 添加游戏
     * @apiDescription 添加游戏
     * @apiGroup game
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {String} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {String} game_name 游戏名称
     * @apiParam {Number} cat_id 游戏分类
     * @apiParam {Number} is_recommand 是否推荐
     * @apiParam {Number} sort_id 排序字段
     * @apiParam {Number} status 游戏是否可用,1为可用,0为不可用
     * @apiParam {String} icon 游戏图标
     * @ apiSampleRequest http://app-loc.dev/api/game
     * @apiSuccessExample {json} Success-Response:
        {
            "code": 0,
            "text": "操作成功",
            "result": ""
        }
     */
    public function store(Request $request)
    {

        $validator = \Validator::make($request->input(), [
            'cat_id' => 'required',
            'game_name' => 'required|unique:game_info',
        ]);

        if ($validator->fails()) {
            return $this->response->array([
                'code'=>400,
                'text'=>$validator->errors(),
                'result'=>'',
            ]);
        }

        $attributes = $request->except('token','locale');

        $re = GameInfo::create($attributes);
        if($re){

            return $this->response->array([
                'code' => 0,
                'text' =>trans('agent.success'),
                'result' => '',
            ]);
        } else {
            return $this->response->array([
                'code' => 400,
                'text' =>trans('agent.fails'),
                'result' => '',
            ]);
        }

    }

    /**
     * @api {put} /game/{id} 编辑游戏
     * @apiDescription 编辑游戏
     * @apiGroup game
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {String} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {String} game_name 游戏名称
     * @apiParam {Number} cat_id 游戏分类
     * @apiParam {Number} is_recommand 是否推荐
     * @apiParam {Number} sort_id 排序字段
     * @apiParam {Number} status 游戏是否可用,1为可用,0为不可用
     * @apiParam {String} icon 游戏图标
     * @ apiSampleRequest http://app-loc.dev/api/game/100
     * @apiSuccessExample {json} Success-Response:
        {
            "code": 0,
            "text": "保存成功",
            "result": ""
        }
     *@apiErrorExample {json} Error-Response:
        {
            "code": 400,
            "text": "保存失败",
            "result": ""
        }
     */
    public function update(Request $request, $id)
    {
        $game = GameInfo::find($id);
        if(!$game) {
            return $this->response->array([
                'code' => 400,
                'text' =>trans('agent.game_not_exist'),
                'result' => '',
            ]);
        }

        $validator = \Validator::make($request->input(), [
            'game_name' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->response->array([
                'code'=>400,
                'text'=>$validator->errors(),
                'result'=>'',
            ]);
        }

        $attributes = $request->except('token','locale');

        $re = $game->where('id', $id)->update($attributes);

        if($re !== false) {

            return $this->response->array([
                'code' => 0,
                'text' =>trans('agent.save_success'),
                'result' => '',
            ]);

        } else {

            return $this->response->array([
                'code' => 0,
                'text' =>trans('agent.save_fails'),
                'result' => '',
            ]);

        }

    }


    /**
     * @api {delete} /game/{id} 删除游戏
     * @apiDescription 删除游戏
     * @apiGroup game
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {String} token 认证token
     * @apiParam {String} locale 语言
     * @ apiSampleRequest http://app-loc.dev/api/game/100
     * @apiSuccessExample {json} Success-Response:
    {
    "code": 0,
    "text": "保存成功",
    "result": ""
    }
     *@apiErrorExample {json} Error-Response:
    {
    "code": 400,
    "text": "保存失败",
    "result": ""
    }
     */
    public function delete(Request $request, $id)
    {
        $game = GameInfo::find($id);
        if(!$game) {
            return $this->response->array([
                'code' => 400,
                'text' =>trans('agent.game_not_exist'),
                'result' => '',
            ]);
        }
        $re = GameInfo::where('id', $id)->update(['status' => 2]);
        if($re === false) {
            return $this->response->array([
                'code' => 400,
                'text' =>trans('agent.save_fails'),
                'result' => '',
            ]);
        }

        return $this->response->array([
            'code' => 0,
            'text' =>trans('agent.save_success'),
            'result' => '',
        ]);
    }

    /**
     * @api {post} /game/{id} 编辑游戏时获取数据
     * @apiDescription 编辑游戏时获取数据
     * @apiGroup game
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {String} token 认证token
     * @apiParam {String} locale 语言
     * @ apiSampleRequest http://app-loc.dev/api/game/100
     * @apiSuccessExample {json} Success-Response:
        {
            "code": 0,
            "text": "操作成功",
            "result": {
                "data": {
                    "id": 100,
                    "cat_id": 2,
                    "game_name": "龙虎百家乐",
                    "sort_id": 1,
                    "status": 1,
                    "table_count": 0,
                    "user_count": 0,
                    "process_type": 0,
                    "icon": "http://app-loc.dev/images/2017-02-09-17-30-58-589c36d250140.jpg",
                    "is_recommand": 1,
                    "game_cat": {
                        "id": 2,
                        "cat_name": "视频轮盘 "
                    }
                }
            }
        }
     *@apiErrorExample {json} Error-Response:
    {
    "code": 400,
    "text": "游戏不存在",
    "result": ""
    }
     */
    public function show(Request $request, $id)
    {

        $game = GameInfo::find($id);

        if(!$game) {
            return $this->response->array([
                'code' => 400,
                'text' => trans('agent.game_not_exist'),
                'result' => '',
            ]);
        }

        $game->gameCat;
        $game->icon = env('APP_HOST').$game->icon;

        return $this->response->array([
            'code' => 0,
            'text' => trans('agent.success'),
            'result' => [
                'data' => $game,
            ],
        ]);
    }

    /**
     * @api {get} /game/cat 游戏分类
     * @apiDescription 游戏分类
     * @apiGroup game
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {String} token 认证token
     * @apiParam {String} locale 语言
     * @ apiSampleRequest http://app-loc.dev/api/game/cat
     * @apiSuccessExample {json} Success-Response:
     *
     * {
        "code": 0,
        "text": "操作成功",
        "result": {
            "data": [
                {
                    "id": 1,
                    "parent_id": 0,
                    "cat_name": "视频百家乐 ",
                    "sort_id": 1,
                    "state": 1,
                    "mapping": "",
                    "sub_count": 0,
                    "rank": 1
                },
                {
                    "id": 4,
                    "parent_id": 0,
                    "cat_name": "视频龙虎 ",
                    "sort_id": 2,
                    "state": 1,
                    "mapping": "",
                    "sub_count": 0,
                    "rank": 1
                },
                {
                    "id": 3,
                    "parent_id": 0,
                    "cat_name": "视频骰宝 ",
                    "sort_id": 3,
                    "state": 1,
                    "mapping": "",
                    "sub_count": 0,
                    "rank": 1
                },
                {
                    "id": 2,
                    "parent_id": 0,
                    "cat_name": "视频轮盘 ",
                    "sort_id": 4,
                    "state": 1,
                    "mapping": "",
                    "sub_count": 0,
                    "rank": 1
                }
                ]
            }
        }
     */
    public function cat()
    {
        $cates = GameCat::orderby('sort_id','asc')->get();

        return $this->response->array([
            'code' => 0,
            'text' => trans('agent.success'),
            'result' => [
                'data' => $cates,
            ],
        ]);
    }


    /**
     * @api {get} /game/chart 报表统计-查询游戏 （导出）
     * @apiDescription 报表统计-查询游戏 导出）
     * @apiGroup report
     * @apiPermission JWT
     * @apiVersion 0.1.0
     * @apiHeader {String} Accept http头协议 application/vnd.pt.v0.1.0+json
     * @apiParam {String} token 认证token
     * @apiParam {String} locale 语言
     * @apiParam {Number} game_hall_id 游戏厅类型,0:旗舰厅，1贵宾厅，2：金臂厅， 3：至尊厅
     * @apiParam {Number} game_id 游戏id
     * @apiParam {String} start_time 开始时间 2017-01-20 15:07:07
     * @apiParam {String} end_time 结束时间  2017-01-20 15:07:07
     * @apiParam {Number} order_by 排序类型(暂时没用到) start_time、user_id、game_hall_id、game_id
     * @apiParam {Number} page_num 每页条数 默认10 （导出时不分页）
     * @apiParam {Number} page 当前页 默认1 （导出时不分页）
     * @apiParam {Number} is_export 是否导出 1是，0否 默认为0 （导出不分页）
     * @ apiSampleRequest http://app-loc.dev/api/game/chart
     * @apiSuccessExample {json} Success-Response: 报表统计-查询游戏
     *
     * {
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
                        "_id": "5875d789dee995c2ea09ffd5",
                        "game_round_id": 15,//每一局ID
                        "total_bet_score": 87898,//总下注金额
                        "total_win_score": 7396,//总派彩金额
                        "valid_bet_score_total": 87898,//有效下注总金额
                        "game_name": "轮盘",
                        "game_hall_title": "至尊厅"
                    }
                ]
            }
        }
     *
     *@apiSuccessExample {json} Success-Response: 报表统计-游戏导出
     * {
            "code": 0,
            "text": "操作成功",
            "result": {
                "url": "http://app-loc.dev/excel/user_chart_info_20170215.xls"
            }
        }
     */
    public function chart(Request $request)
    {


        $game_hall_id = $request->input('game_hall_id');
        $game_id = $request->input('game_id');
//        $start_time = $request->input('start_time');
        //在mongoDB数据库中，时间的保存是ISODate类型，其保存的时间与我们会有8小时的区别（保存的时间比我们早了8个小时），所以要加上8小时
        $start_time = date("Y-m-d H:i:s",strtotime($request->input('start_time')." +8 hour"));
//        $end_time = $request->input('end_time');
        $end_time = date("Y-m-d H:i:s",strtotime($request->input('end_time')." +8 hour"));
        $page_num = $request->input('page_num',10);
        $is_export = $request->input('is_export',0);

        $db = UserChartInfo::select('_id','game_name','game_hall_title','game_round_id','valid_bet_score_total','total_bet_score','total_win_score','start_time');

        if(isset($game_hall_id)) {
            $db->where('game_hall_id',$game_hall_id);
        }

        if(isset($game_id)) {
            $db->where('game_id',$game_id);
        }

        if(isset($game_id)) {
            $db->where('game_id',$game_id);
        }

        if(isset($start_time)) {
            $db->where('start_time', '>=', new \DateTime($start_time));
        }

        if(isset($end_time)) {
            $db->where('start_time', '<', new \DateTime($end_time));
        }


        if( $is_export ) {

            $data = $db->get()->toArray();
//            $title = ['ID', '游戏', '游戏厅', '局ID', '有效下注总金额', '总下注金额', '总派彩金额'];
//            array_unshift($data, $title);

//            $filename = iconv('UTF-8', 'GBK', '报表统计游戏查询_'.date('Ymd',time()));
            $filename = 'game_report_'.date('Ymd',time());

            $re = Excel::create($filename, function($excel) use($data) {

                $excel->sheet('报表统计-游戏查询', function($sheet) use($data) {
                    $sheet->fromArray($data);

                });

            })->store('xls', 'excel' , true);

            return $this->response->array([
                'code' => 0,
                'text' => trans('agent.success'),
                'result' => [
                    'url' => env('APP_HOST').$re['full']
                ],
            ]);

        } else {

            $data = $db->paginate($page_num);
            return $this->response->array([
                'code' => 0,
                'text' => trans('agent.success'),
                'result' => $data,
            ]);
        }



    }

}