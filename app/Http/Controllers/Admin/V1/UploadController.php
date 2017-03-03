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
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class UploadController extends BaseController
{
    public function __construct()
    {
    }

    /**
     * @api {post} /upload 上传文件
     * @apiDescription 上传文件
     * @apiGroup file
     * @apiPermission jwt
     * @apiVersion 0.1.0
     * @ apiSampleRequest http://app-loc.dev/api/upload
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     * {
     * "code":0,
     * "text":"\u64cd\u4f5c\u6210\u529f",
     * "result":{
     *      "url":"http:\/\/app-loc.dev\/images\/2017-02-09-17-25-40-589c3594a7f80.jpg"
     * }
     * }
     */
    public function index(Request $request)
    {

        $file = $request->file('file');
        $ext = $file->getClientOriginalExtension();     // 扩展名
        $pathname = 'images/';
        $filename = date('Y-m-d-H-i-s') . '-' . uniqid() . '.' . $ext;
        $file->move($pathname, $filename);
        return $this->response->array([
            'code' => 0,
            'text' =>trans('agent.success'),
            'result' => [
                'filename' => $pathname.$filename,
                'host' => env('APP_HOST'),
            ],
        ]);
    }


    /**
     * @api {delete} /file 删除文件
     * @apiDescription 删除文件
     * @apiGroup file
     * @apiPermission jwt
     * @apiVersion 0.1.0
     * @ apiSampleRequest http://app-loc.dev/api/upload
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *  {
            "code": 0,
            "text": "操作成功",
            "result": ""
        }
     * @apiErrorExample {json} Error-Response:
     * {
            "code": 400,
            "text": "文件不存在",
            "result": "images/2017-02-28-14-31-08-58b5192c170330.jpg"
       }
     */
    public function delete(Request $request) {

        $path = $request->input('path');
        if( ! File::exists( $path)) {

            return $this->response->array([
                'code' => 400,
                'text' =>trans('agent.file_not_eixt'),
                'result' => $path

            ]);

        }

        if( ! File::delete($path) ) {

            return $this->response->array([
                'code' => 400,
                'text' =>trans('agent.fails'),
                'result' => $path

            ]);

        } else {
            return $this->response->array([
                'code' => 0,
                'text' =>trans('agent.success'),
                'result' =>''

            ]);
        }

    }

}