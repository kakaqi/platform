define({ "api": [
  {
    "type": "post",
    "url": "/auth/token/new",
    "title": "刷新token(refresh token)",
    "description": "<p>刷新token(refresh token)</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户旧的jwt-token, value已Bearer开头</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL21vYmlsZS5kZWZhcmEuY29tXC9hdXRoXC90b2tlbiIsImlhdCI6IjE0NDU0MjY0MTAiLCJleHAiOiIxNDQ1NjQyNDIxIiwibmJmIjoiMTQ0NTQyNjQyMSIsImp0aSI6Ijk3OTRjMTljYTk1NTdkNDQyYzBiMzk0ZjI2N2QzMTMxIn0.9UPMTxo3_PudxTWldsf4ag0PHq1rK8yO9e5vqdwRZLY\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  \"code\":0,\n  \"text\":\"刷新成功\",\n  \"result\":\"9UPMTxo3_PudxTWldsf4ag0PHq1rK8yO9e5vqdwRZLY.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL21vYmlsZS5kZWZhcmEuY29tXC9hdXRoXC90b2tlbiIsImlhdCI6IjE0NDU0MjY0MTAiLCJleHAiOiIxNDQ1NjQyNDIxIiwibmJmIjoiMTQ0NTQyNjQyMSIsImp0aSI6Ijk3OTRjMTljYTk1NTdkNDQyYzBiMzk0ZjI2N2QzMTMxIn0.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PostAuthTokenNew"
  },
  {
    "type": "post",
    "url": "/authorization",
    "title": "登录",
    "description": "<p>登录</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名 chensj</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码 111111</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gid",
            "description": "<p>验证码GID</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"code\": 0,\n        \"text\": \"认证成功\",\n        \"result\": {\n        \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBwLWxvYy5kZXYvYXBpL2F1dGhvcml6YXRpb24iLCJpYXQiOjE0ODYyNTkyNzYsImV4cCI6MTQ4NjQ3NTI3NiwibmJmIjoxNDg2MjU5Mjc2LCJqdGkiOiJlMGJjOTI1ZTMxNDU1NDgxNWFmZGVhM2E1M2I5NTM0MSIsInN1YiI6MX0.H8S0KYxmlrY_D3XIuDmsyuu82mo1_TpGsjtbvXL77YM\",\n        \"user\": {\n        \"id\": 1,\n        \"user_name\": \"chensj\",\n        \"desc\": \"陈\",\n        \"group_id\": 1,\n        \"tel\": \"15013777164\",\n        \"account_state\": 1,\n        \"add_time\": \"2017-01-20 06:13:09\",\n        \"update_time\": \"2017-01-20 07:56:39\",\n        \"ip_info\": \"127.0.0.1\"\n        },\n        \"menus\": [\n        {\n        \"id\": 1,\n        \"parent_id\": 0,\n        \"title_cn\": \"账号管理\",\n        \"desc\": \"账号管理\",\n        \"link_url\": \"/account/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"account\",\n        \"_child\": [\n        {\n        \"id\": 5,\n        \"parent_id\": 1,\n        \"title_cn\": \"厅主管理\",\n        \"desc\": \"厅主管理\",\n        \"link_url\": \"/haller/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"haller\"\n        },\n        {\n        \"id\": 6,\n        \"parent_id\": 1,\n        \"title_cn\": \"代理管理管理\",\n        \"desc\": \"代理\",\n        \"link_url\": \"/agent/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"agent\"\n        },\n        {\n        \"id\": 7,\n        \"parent_id\": 1,\n        \"title_cn\": \"玩家管理\",\n        \"desc\": \"玩家管理\",\n        \"link_url\": \"/player/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"palyer\"\n        }\n        ]\n        },\n        {\n        \"id\": 2,\n        \"parent_id\": 0,\n        \"title_cn\": \"游戏管理\",\n        \"desc\": \"游戏管理\",\n        \"link_url\": \"/game/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"game\",\n        \"_child\": [\n        {\n        \"id\": 8,\n        \"parent_id\": 2,\n        \"title_cn\": \"游戏列表\",\n        \"desc\": \"游戏列表\",\n        \"link_url\": \"/games/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"games\"\n        },\n        {\n        \"id\": 9,\n        \"parent_id\": 2,\n        \"title_cn\": \"游戏限额\",\n        \"desc\": \"游戏限额\",\n        \"link_url\": \"games/limit\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"games_limit\"\n        }\n        ]\n        },\n        {\n        \"id\": 3,\n        \"parent_id\": 0,\n        \"title_cn\": \"报表统计\",\n        \"desc\": \"报表统计\",\n        \"link_url\": \"/report/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"report\",\n        \"_child\": [\n        {\n        \"id\": 10,\n        \"parent_id\": 3,\n        \"title_cn\": \"游戏数据统计\",\n        \"desc\": \"游戏数据统计\",\n        \"link_url\": \"game_report/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"game_report\",\n        \"_child\": [\n        {\n        \"id\": 11,\n        \"parent_id\": 10,\n        \"title_cn\": \"查询游戏\",\n        \"desc\": \"查询游戏\",\n        \"link_url\": \"game_select/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"game_select\"\n        }\n        ]\n        }\n        ]\n        },\n        {\n        \"id\": 4,\n        \"parent_id\": 0,\n        \"title_cn\": \"系统管理\",\n        \"desc\": \"系统管理\",\n        \"link_url\": \"/system/list\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"system\",\n        \"_child\": [\n        {\n        \"id\": 14,\n        \"parent_id\": 4,\n        \"title_cn\": \"角色管理\",\n        \"desc\": \"角色管理\",\n        \"link_url\": \"system/role\",\n        \"state\": null,\n        \"sort_id\": null,\n        \"menu_code\": \"system_role\"\n        },\n        {\n        \"id\": 12,\n        \"parent_id\": 4,\n        \"title_cn\": \"白名单管理\",\n        \"desc\": \"白名单管理\",\n        \"link_url\": \"system/allow\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"system_allow\"\n        },\n        {\n        \"id\": 13,\n        \"parent_id\": 4,\n        \"title_cn\": \"菜单管理\",\n        \"desc\": \"菜单管理\",\n        \"link_url\": \"system/menus\",\n        \"state\": 1,\n        \"sort_id\": 1,\n        \"menu_code\": \"system_menus\"\n        }\n        ]\n        }\n        ],\n        \"languages\": {\n        \"简体中文\": \"zh-cn\",\n        \"English\": \"en\",\n        \"繁体中文\": \"zh-tw\"\n        },\n        \"timezones\": {\n        \"(GMT+06:00) Astana\": \"Asia/Dhaka\",\n        \"(GMT+06:00) Dhaka\": \"Asia/Dhaka\",\n        \"(GMT+06:00) Novosibirsk\": \"Asia/Novosibirsk\",\n        \"(GMT+06:00) Sri Jayawardenepura\": \"Asia/Colombo\",\n        \"(GMT+06:30) Rangoon\": \"Asia/Rangoon\",\n        \"(GMT+07:00) Bangkok\": \"Asia/Bangkok\",\n        \"(GMT+07:00) Hanoi\": \"Asia/Bangkok\",\n        \"(GMT+07:00) Jakarta\": \"Asia/Bangkok\",\n        \"(GMT+07:00) Krasnoyarsk\": \"Asia/Krasnoyarsk\",\n        \"(GMT+08:00) Beijing\": \"Asia/Hong_Kong\",\n        \"(GMT+08:00) Chongqing\": \"Asia/Hong_Kong\",\n        \"(GMT+08:00) Hong Kong\": \"Asia/Hong_Kong\",\n        \"(GMT+08:00) Irkutsk\": \"Asia/Irkutsk\",\n        \"(GMT+08:00) Kuala Lumpur\": \"Asia/Singapore\",\n        \"(GMT+08:00) Perth\": \"Australia/Perth\",\n        \"(GMT+08:00) Singapore\": \"Asia/Singapore\",\n        \"(GMT+08:00) Taipei\": \"Asia/Taipei\",\n        \"(GMT+08:00) Ulaan Bataar\": \"Asia/Irkutsk\",\n        \"(GMT+08:00) Urumqi\": \"Asia/Hong_Kong\"\n        }\n        }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n  \"code\": 400,\n   \"text\":'',\n   \"result\":''\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PostAuthorization"
  },
  {
    "type": "post",
    "url": "/captcha",
    "title": "验证码",
    "description": "<p>验证码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gid",
            "description": "<p>验证码GID</p>"
          }
        ]
      }
    },
    "group": "Auth",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"code\": 0,\n    \"text\": \"ok\",\n    \"result\": {\n    \"captcha_img\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2OTApLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAKACWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/Uuivnn9oi78YfCnxTpvxN0LU9Qv/DVsFt9a8NrPK0TqcjzlU7kQYCgkBcFc5Jc17Z4M8W2Hjvwrpmv6ZIJbG/hEsZBzjsyn3BBB+lePUw0oUoVk7xl+D7Pz69mjdqyubVFQXd9b2EXmXMyQJ/edgK5TxD8WfDvhnTbjULyeX7FbjdLNHESEHHPr3/SuB1IKShfV6JdSTsqqT6rZ2xIkuolYdV3jP5VleB/HuhfEfQl1jw7frqOnlzF5qoy4cYyuGAPGRWR8SPiZ4Q+D+k/2r4huYbLzSfKjjjDTzsOSEUck89envXfSpXqeynGTltZb3+ZnUVV2VO1/O/6HSjX7aRQ0MdxcKe8cLEfyoOrvGR51hdRg/wASqHA+uDXzLL/wUG8MxX6Z8J63/ZbHi7PlhyPUJnB/76r6M8CePNE+JPhq113w/eLe6dcDhgMMjDqrKeQw7iu7EYWeEipVaDSfVy/y0TMnQxK1lUt/26rfm/zNGLXLCXOLqNSOCJDsP5HFLLrdhEpZryEgf3XDH8hVqWCKcYljSQejqDSQ2sNv/qoY4/8AcUCuG+H3tL71+dv0Jtidrx+5/lf9Sk2rTTYNlZSXK93c+UPw3DmgapcRKDcadPHz1iIlA/I5/StKil7Wlt7NW9Xf7/8AgB7Krv7V39Fb7t/xM9dfsGJBuVjYdVkBUj8CKT+2o7gEWUbXkgPQAqo+rEYrQIB6jNeL/G34Y+P/AIp+JLDSNM8Vjwz4Fa2LX5s1/wBKll3H5M5BKlcY5A4OQeK3oLDVJ2l7q7t6fcld+S09SlTrydpTSXktfxbX4HqVvqtzeSSLAbCZo+HjjudzL9cDitK2kklhVpovJkOcpu3Y59a+JfjX+z/ZfsyeH9L+IHgnXtSg1bT72KOYXcoYXAY8g4A4OOV6EE19o6Hqia3oun6jGpRLy3juFU9QHUMB+tbYyjTjShVotOMm1ezTut1a773uaxoun7ym5J97f5F6iiivINAooooAp6xpNjrml3NhqdtDeWFwhSaC4UMjr6EGvjGDxLqP7J/xTm0XTL7+0fAHiOZWgknJ8vT5dxBEY3lQAHQFiBuG3k7Dn7B1nQH1u6jE13Ilgqjdbx8b2z1J9MVR8afDnQ/Hfgy78Mala/8AEsuE24j4eM9Qynsff3PrXRhMVOE5Uasf3MtH38pR7Nbp9dioyto9g03wlaXix319dHWJJVDrKWzGVPI24PI9O2D0qp8UvD1vqXww8TafFBHGkmnyjaigDhSw/lXjH7Nni3WPh1441f4NeKn+XTlM3h+7aIRrPb7iSm8hfMb5twwv8EvOAK+jNbtvtui39uBnzreSPH1UiiWDhl9dKFns0+63Tv8An2d0Djys+D/2YNI1ZvhlL4s8MKH8Q+GNZeS4t/MEYvdPkijMkLnjdtKM6qWAyW9aseCda0X9qP8Aa0lvtaLXnhy2tDNp+n3gwpWMIFjZen3ndiOcnPUV13/BP+Y2Os/EjSCcLBcQFF+jTK38lrS+L/7F2q+Kfit/wk/gzWrPw5a3mZrsFnjkhn7tEI1wQ3BIJHO45OcV9tWxFGGNxFOtLkbT5ZduZJ2/y9WjpbSnJPQ6H4v/AAw+KesXOuW+m+K/C2hfD/YPsmi3FpEqsqoMrIxhG3LA8h+AR0xXyl8CfjV4v+C/jWXSNGih1qzu7kxz6Qjgxzv0BjfqD6YOD3Br27xx+y/B4G8Iah4g+I/xP1XV9Ps4i8dkkjRi4kx8kSh2bljgcD1PHWvnnR/hrqelfCmL4nQRyQQWmspHB1y6DHzA+gYEZrqy9YeeHnSnKM4tqK93lTlrbW92+73XcqHLytPX5H0p48/4KD2un3NjH4Z8M3EjDeL6DXF8iSJgRtChGYf3uvtxXYfHT9rvw7ovwye58D+JbK68UXnk/ZoowJmt1YhnLqQVBC5GD0J9q8M8E+Fp/wBrr4heP/Et9E0ccWklLJT92K58sLEv0BDNXm3gSz03x9qHw98BjQYLTVU1qSPVL5YQJp4WePaHbr8g87I6Y21lHLcDzR9xqVOzmr33TlrfdK1tEtxckO2257FrP7YF3onjHwBeWvi+51/R4tPh/wCEisYrMRg3PPnbSyLu+9xg7RtGOtL8ff2xrxvHfh6++HXiCVtHtrdJLqDyyqTuX3NG6Ov935SR74Ne4ftRfB3Rr/4E6tDoGi2OlzaUV1C3j0+1SEAp94AIAOVLV84/sufB7Tfj/P461DXtPt44ksUs7N7ePylguXBxMoTALLsBOeu7nOaxwry6pR+uyp2ULxa0d7vS6SV3q7dkvQUeS3NbY+i/j38c9W0PQ/h4/gi7hS58W3cKwyzQrIRBIFwQpyAcutegfG74w6f8FPBEmt3kLX13JILeysUba1xMRwuewABJOOgr88vhP4X8Y+OPiroXhGLX7zTtW0Kac2pvGaeHTpIcthI2JAG9QCAMex6V7L8dvh/8U/D/AIi8C3+uazcfE7UBf/ao9NtbDyoIWjKnGEGMNnk7V6d6wq5XhqVajh5TjpdvdOSd2tdrWVrtrrbcl04ppXO4tvgP8Rv2hb3Tdb+K2sRaRoKsLiHwzp4IZVPIDdlJHGSWb6Gvq23t47S3ighQRwxKERFGAqgYAH4V8vDxB+1Hr8v2q28PaFoFs3zJbXMkTHHofnZgfrivcfhHd+NLvwbC3j6ytrLxGs0iSLaMjRvHn5GG1iBkHp146V4uPVWUYuc4cq2jFrS/kvxd2Zzv1aO0ooorwzIKKKKACiiigAooooA+Pv2TPDGs+Ffj78RLe80y8tbCaKV0uJYGWJ289SAGIwThm/Kuq+J3hf8AaH1D4gX934T1qws9AmxHb2/noFjQd2DKTuPcrz26UUV7lfHy+sutyRbcUtVdbLXXqaOd3exj6d+x74p+IOqW2pfFrx1PrawnI06wJ2H23kAAfRM+4r3rxf8ACbQ/FHwxufA0MK6Vo72y20K2yD9wFIKlQepGO/XmiiuOtj8RWlFylbl1SSSS9EtBOTZjfAX4G2HwJ8M3elWl8+py3Vx50t3JEIywAwowCenPfvXOeDP2VdD8H/GfUPiDFqE0s00009vp4jURRNKCGJPJPLMRjHWiioeNxDlUnzu89JeYuZ6u+57Zd2sN9azW1xGs0EyGOSNxkMpGCD7EVi+DvAPh34fWM9n4c0i10e1nk86SK1TaHfAGT+AFFFcqnJRcU9H0Ec3oHwJ8KeGfidqnjyxguI9d1FXE2ZcwgvjeVXHBJXJ57mvQ6KKqpVnVadR3sra9lsgbvuFFFFZCCiiigAooooA//9k=\",\n    \"captcha_value\": \"l9ww2\"\n    }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/CaptchaController.php",
    "groupTitle": "Auth",
    "name": "PostCaptcha"
  },
  {
    "type": "post",
    "url": "/language",
    "title": "语言列表",
    "description": "<p>语言列表</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n            \"code\": 0,\n            \"text\": \"操作成功\",\n            \"result\": {\n                \"language\": {\n                    \"简体中文\": \"zh-cn\",\n                    \"English\": \"en\",\n                    \"繁体中文\": \"zh-tw\"\n                }\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PostLanguage"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "注册(register)",
    "description": "<p>注册(register)</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email[unique]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL21vYmlsZS5kZWZhcmEuY29tXC9hdXRoXC90b2tlbiIsImlhdCI6IjE0NDU0MjY0MTAiLCJleHAiOiIxNDQ1NjQyNDIxIiwibmJmIjoiMTQ0NTQyNjQyMSIsImp0aSI6Ijk3OTRjMTljYTk1NTdkNDQyYzBiMzk0ZjI2N2QzMTMxIn0.9UPMTxo3_PudxTWldsf4ag0PHq1rK8yO9e5vqdwRZLY\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"email\": [\n        \"该邮箱已被他人注册\"\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PostUsers"
  },
  {
    "type": "delete",
    "url": "/role/menus/{id}",
    "title": "删除菜单",
    "description": "<p>删除菜单操作</p>",
    "group": "Menus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/menus/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}\n{\n\"code\": 400,\n\"text\": \"数据错误\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MenusController.php",
    "groupTitle": "Menus",
    "name": "DeleteRoleMenusId"
  },
  {
    "type": "get",
    "url": "/menus",
    "title": "菜单列表",
    "description": "<p>获取后台菜单组列表</p>",
    "group": "Menus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/menus"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": [\n{\n\"id\": 1,\n\"parent_id\": 0,\n\"title_cn\": \"账号管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"账号管理\",\n\"link_url\": \"/account/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"account\",\n\"_child\": [\n{\n\"id\": 5,\n\"parent_id\": 1,\n\"title_cn\": \"|--厅主管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"厅主管理\",\n\"link_url\": \"/haller/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"haller\"\n},\n{\n\"id\": 6,\n\"parent_id\": 1,\n\"title_cn\": \"|--代理管理管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"代理\",\n\"link_url\": \"/agent/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"agent\"\n},\n{\n\"id\": 7,\n\"parent_id\": 1,\n\"title_cn\": \"|--玩家管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"玩家管理\",\n\"link_url\": \"/player/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"palyer\"\n}\n]\n},\n{\n\"id\": 2,\n\"parent_id\": 0,\n\"title_cn\": \"游戏管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"游戏管理\",\n\"link_url\": \"/game/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"game\",\n\"_child\": [\n{\n\"id\": 8,\n\"parent_id\": 2,\n\"title_cn\": \"|--游戏列表\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"游戏列表\",\n\"link_url\": \"/games/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"games\"\n},\n{\n\"id\": 9,\n\"parent_id\": 2,\n\"title_cn\": \"|--游戏限额\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"游戏限额\",\n\"link_url\": \"games/limit\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"games_limit\"\n}\n]\n},\n{\n\"id\": 3,\n\"parent_id\": 0,\n\"title_cn\": \"报表统计\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"报表统计\",\n\"link_url\": \"/report/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"report\",\n\"_child\": [\n{\n\"id\": 10,\n\"parent_id\": 3,\n\"title_cn\": \"|--游戏数据统计\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"游戏数据统计\",\n\"link_url\": \"game_report/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"game_report\",\n\"_child\": [\n{\n\"id\": 11,\n\"parent_id\": 10,\n\"title_cn\": \"|--查询游戏\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"查询游戏\",\n\"link_url\": \"game_select/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"game_select\",\n\"_child\": [\n{\n\"id\": 26,\n\"parent_id\": 11,\n\"title_cn\": \"|--开始了22\",\n\"title_en\": \"|--abc\",\n\"class\": 1,\n\"desc\": null,\n\"link_url\": \"www.baidu.com\",\n\"icon\": \"www.baidu.com\",\n\"state\": 1,\n\"sort_id\": 100,\n\"menu_code\": null\n},\n{\n\"id\": 28,\n\"parent_id\": 11,\n\"title_cn\": \"|--开始了\",\n\"title_en\": \"|--abc\",\n\"class\": 1,\n\"desc\": null,\n\"link_url\": \"www.baidu.com\",\n\"icon\": \"www.baidu.com\",\n\"state\": 1,\n\"sort_id\": 100,\n\"menu_code\": null\n},\n{\n\"id\": 29,\n\"parent_id\": 11,\n\"title_cn\": \"|--开始了1\",\n\"title_en\": \"|--abc——1\",\n\"class\": 1,\n\"desc\": null,\n\"link_url\": \"www.albaba.com\",\n\"icon\": \"www.albaba.com\",\n\"state\": 1,\n\"sort_id\": 100,\n\"menu_code\": null\n}\n]\n}\n]\n}\n]\n},\n{\n\"id\": 4,\n\"parent_id\": 0,\n\"title_cn\": \"系统管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"系统管理\",\n\"link_url\": \"/system/list\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"system\",\n\"_child\": [\n{\n\"id\": 12,\n\"parent_id\": 4,\n\"title_cn\": \"|--白名单管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"白名单管理\",\n\"link_url\": \"system/allow\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"system_allow\"\n},\n{\n\"id\": 13,\n\"parent_id\": 4,\n\"title_cn\": \"|--菜单管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"菜单管理\",\n\"link_url\": \"system/menus\",\n\"icon\": \"\",\n\"state\": 1,\n\"sort_id\": 1,\n\"menu_code\": \"system_menus\"\n},\n{\n\"id\": 14,\n\"parent_id\": 4,\n\"title_cn\": \"|--角色管理\",\n\"title_en\": \"\",\n\"class\": 0,\n\"desc\": \"角色管理\",\n\"link_url\": \"system/role\",\n\"icon\": \"\",\n\"state\": null,\n\"sort_id\": null,\n\"menu_code\": \"system_role\"\n}\n]\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    code:400,\n    text:'数据列表为空',\n    result:''\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MenusController.php",
    "groupTitle": "Menus",
    "name": "GetMenus"
  },
  {
    "type": "patch",
    "url": "/role/menus{id}",
    "title": "保存修改菜单",
    "description": "<p>保存修改菜单</p>",
    "group": "Menus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title_en",
            "description": "<p>菜单的英文名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>菜单的icon图标地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link_url",
            "description": "<p>菜单的url地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sort_id",
            "description": "<p>菜单的排序</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "parent_id",
            "description": "<p>菜单所属父级ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "class",
            "description": "<p>菜单类型分类，0为分类菜单，1为页面菜单，默认为分类菜单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>菜单的描述信息</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/menus/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}\n{\n\"code\": 400,\n\"text\": \"数据错误\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MenusController.php",
    "groupTitle": "Menus",
    "name": "PatchRoleMenusId"
  },
  {
    "type": "post",
    "url": "/role/menus",
    "title": "编辑菜单时获取数据",
    "description": "<p>编辑菜单时获取数据</p>",
    "group": "Menus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title_en",
            "description": "<p>菜单的英文名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>菜单的icon图标地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link_url",
            "description": "<p>菜单的url地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sort_id",
            "description": "<p>菜单的排序</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "parent_id",
            "description": "<p>菜单所属父级ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "class",
            "description": "<p>菜单类型分类，0为分类菜单，1为页面菜单，默认为分类菜单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>菜单的描述信息</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/menus"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MenusController.php",
    "groupTitle": "Menus",
    "name": "PostRoleMenus"
  },
  {
    "type": "post",
    "url": "/role/menus/{id}",
    "title": "编辑菜单时获取数据",
    "description": "<p>编辑菜单时获取数据</p>",
    "group": "Menus",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/menu/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 11,\n    \"parent_id\": 10,\n    \"title_cn\": \"查询游戏\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"查询游戏\",\n    \"link_url\": \"game_select/list\",\n    \"icon\": \"http://app-loc.dev/\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"game_select\"\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"菜单不存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/MenusController.php",
    "groupTitle": "Menus",
    "name": "PostRoleMenusId"
  },
  {
    "type": "delete",
    "url": "/role/deleteGroup/{id}",
    "title": "删除角色组",
    "description": "<p>删除角色组</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/deleteGroup/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 9\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    {\n    \"code\": 400,\n    \"text\": \"操作失败\",\n    \"result\": \"\"\n    }\n{\n    \"code\": 400,\n    \"text\": \"该分组下还有子账户，不能进行删除操作，需要解除子账户关联关系后才能进行\",\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "DeleteRoleDeletegroupId"
  },
  {
    "type": "get",
    "url": "/role",
    "title": "角色组列表",
    "description": "<p>获取后台角色组列表</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数,默认10条每页</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"code\": 0,\n           \"text\": \"操作成功\",\n           \"result\": {\n               \"total\": 6,\n               \"per_page\": \"10\",\n               \"current_page\": 1,\n               \"last_page\": 1,\n               \"next_page_url\": null,\n               \"prev_page_url\": null,\n               \"from\": 1,\n               \"to\": 6,\n               \"data\": [\n               {\n                   \"id\": 1,\n                   \"group_name\": \"管理员组\",\n                   \"desc\": \"管理员权限组\",\n                   \"add_time\": \"2017-01-20 15:41:16\",\n                   \"state\": 1\n                   },\n                   {\n                   \"id\": 2,\n                   \"group_name\": \"编辑1组\",\n                   \"desc\": \"编辑1组\",\n                   \"add_time\": \"2017-01-20 15:42:16\",\n                   \"state\": 1\n                   },\n                   {\n                   \"id\": 3,\n                   \"group_name\": \"新的角色分组\",\n                   \"desc\": null,\n                   \"add_time\": \"2017-02-14 13:45:58\",\n                   \"state\": 1\n                   },\n                   {\n                   \"id\": 4,\n                   \"group_name\": \"新的角色分组22\",\n                   \"desc\": \"我是描述22\",\n                   \"add_time\": \"2017-02-14 13:46:30\",\n                   \"state\": 1\n                   },\n                   {\n                   \"id\": 5,\n                   \"group_name\": \"测试分组1\",\n                   \"desc\": \"测试分组描述\",\n                   \"add_time\": \"2017-02-15 16:58:54\",\n                   \"state\": 1\n                   },\n                   {\n                   \"id\": 6,\n                   \"group_name\": \"测试分组2\",\n                   \"desc\": \"测试分组描述\",\n                   \"add_time\": \"2017-02-15 17:00:58\",\n                   \"state\": 1\n                   }\n               ]\n           }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n            code:400,\n            text:'数据列表为空',\n            result:''\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "GetRole"
  },
  {
    "type": "get",
    "url": "/role/accountList",
    "title": "子账户列表",
    "description": "<p>获取后台子账户列表</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数,默认10条每页</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/accountList"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"操作成功\",\n\"result\": {\n\"total\": 4,\n\"per_page\": 10,\n\"current_page\": 1,\n\"last_page\": 1,\n\"next_page_url\": null,\n\"prev_page_url\": null,\n\"from\": 1,\n\"to\": 4,\n\"data\": [\n{\n\"id\": 1,\n\"user_name\": \"chensj\",\n\"desc\": \"陈\",\n\"group_id\": 1,\n\"tel\": \"15013777164\",\n\"account_state\": 3,\n\"add_time\": \"2017-01-20 14:13:09\",\n\"update_time\": \"2017-02-15 17:35:01\",\n\"ip_info\": \"127.0.0.1\"\n},\n{\n\"id\": 2,\n\"user_name\": \"test\",\n\"desc\": null,\n\"group_id\": 0,\n\"tel\": null,\n\"account_state\": 1,\n\"add_time\": \"2017-02-08 17:09:22\",\n\"update_time\": \"2017-02-16 13:44:25\",\n\"ip_info\": null\n},\n{\n\"id\": 3,\n\"user_name\": \"user_name-1\",\n\"desc\": \"这里是描述\",\n\"group_id\": 0,\n\"tel\": null,\n\"account_state\": 1,\n\"add_time\": \"2017-02-15 17:49:52\",\n\"update_time\": \"2017-02-15 17:49:52\",\n\"ip_info\": null\n},\n{\n\"id\": 4,\n\"user_name\": \"user_name-2\",\n\"desc\": \"这里是描述-2\",\n\"group_id\": 0,\n\"tel\": null,\n\"account_state\": 1,\n\"add_time\": \"2017-02-15 17:50:47\",\n\"update_time\": \"2017-02-15 17:50:47\",\n\"ip_info\": null\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    code:400,\n    text:'数据列表为空',\n    result:''\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "GetRoleAccountlist"
  },
  {
    "type": "patch",
    "url": "/role/updateAccount/{id}",
    "title": "保存修改子账户权限菜单信息",
    "description": "<p>保存修改子账户权限菜单信息</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "group_id",
            "description": "<p>角色分组ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roles",
            "description": "<p>权限菜单数组，格式为 &quot;role&quot; =&gt; ['id-parent_id']</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/updateRole/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 9\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PatchRoleUpdateaccountId"
  },
  {
    "type": "patch",
    "url": "/role/updateRole/{id}",
    "title": "修改角色组权限信息",
    "description": "<p>修改角色组权限信息</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roles",
            "description": "<p>权限菜单数组，格式为 &quot;role&quot; =&gt; ['id-parent_id']</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/updateRole/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 9\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PatchRoleUpdateroleId"
  },
  {
    "type": "post",
    "url": "/role",
    "title": "新增角色组",
    "description": "<p>新增后台角色组操作</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_name",
            "description": "<p>角色分组名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>角色分组描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n            \"code\": 0,\n            \"text\": \"操作成功\",\n            \"result\": {\n                \"id\": 9\n                }\n            }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"text\": \"操作失败\",\n    \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PostRole"
  },
  {
    "type": "post",
    "url": "/role/accountState/{id}",
    "title": "删除、冻结、启用子帐号",
    "description": "<p>删除、冻结、启用子帐号</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "state",
            "description": "<p>状态码 1为正常，2为停用，3为删除</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/accountState/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    {\n    \"code\": 400,\n    \"text\": \"操作失败\",\n    \"result\": \"\"\n    }\n{\n    \"code\": 400,\n    \"text\": \"数据错误\",\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PostRoleAccountstateId"
  },
  {
    "type": "post",
    "url": "/role/addAccount",
    "title": "新增子帐号",
    "description": "<p>新增后台子帐号操作</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>子帐号名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>子帐号密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>密码确认</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/addAccount"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 5\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PostRoleAddaccount"
  },
  {
    "type": "post",
    "url": "/role/editPwd/{id}",
    "title": "子帐号修改密码操作",
    "description": "<p>后台子帐号修改密码操作</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>子帐号密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>密码确认</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/editPwd/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"id\": 5\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}\n {\n\"code\": 400,\n\"text\": \"数据错误\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PostRoleEditpwdId"
  },
  {
    "type": "post",
    "url": "/role/showMenus/{id}",
    "title": "编辑角色权限时，获取菜单数据",
    "description": "<p>编辑角色权限时，获取菜单数据</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/showMenus/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n    \"allRole\": [\n    {\n    \"id\": 1,\n    \"parent_id\": 0,\n    \"title_cn\": \"账号管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"账号管理\",\n    \"link_url\": \"/account/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"account\",\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 5,\n    \"parent_id\": 1,\n    \"title_cn\": \"厅主管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"厅主管理\",\n    \"link_url\": \"/haller/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"haller\",\n    \"isHaveRole\": 0\n    },\n    {\n    \"id\": 6,\n    \"parent_id\": 1,\n    \"title_cn\": \"代理管理管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"代理\",\n    \"link_url\": \"/agent/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"agent\",\n    \"isHaveRole\": 0\n    },\n    {\n    \"id\": 7,\n    \"parent_id\": 1,\n    \"title_cn\": \"玩家管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"玩家管理\",\n    \"link_url\": \"/player/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"palyer\",\n    \"isHaveRole\": 0\n    }\n    ]\n    },\n    {\n    \"id\": 2,\n    \"parent_id\": 0,\n    \"title_cn\": \"游戏管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"游戏管理\",\n    \"link_url\": \"/game/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"game\",\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 8,\n    \"parent_id\": 2,\n    \"title_cn\": \"游戏列表\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"游戏列表\",\n    \"link_url\": \"/games/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"games\",\n    \"isHaveRole\": 0\n    },\n    {\n    \"id\": 9,\n    \"parent_id\": 2,\n    \"title_cn\": \"游戏限额\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"游戏限额\",\n    \"link_url\": \"games/limit\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"games_limit\",\n    \"isHaveRole\": 0\n    }\n    ]\n    },\n    {\n    \"id\": 3,\n    \"parent_id\": 0,\n    \"title_cn\": \"报表统计\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"报表统计\",\n    \"link_url\": \"/report/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"report\",\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 10,\n    \"parent_id\": 3,\n    \"title_cn\": \"游戏数据统计\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"游戏数据统计\",\n    \"link_url\": \"game_report/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"game_report\",\n    \"isHaveRole\": 0,\n    \"_child\": [\n    {\n    \"id\": 11,\n    \"parent_id\": 10,\n    \"title_cn\": \"查询游戏\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"查询游戏\",\n    \"link_url\": \"game_select/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"game_select\",\n    \"isHaveRole\": 0,\n    \"_child\": [\n    {\n    \"id\": 26,\n    \"parent_id\": 11,\n    \"title_cn\": \"开始了22\",\n    \"title_en\": \"abc\",\n    \"class\": 1,\n    \"desc\": null,\n    \"link_url\": \"www.baidu.com\",\n    \"icon\": \"www.baidu.com\",\n    \"state\": 1,\n    \"sort_id\": 100,\n    \"menu_code\": null,\n    \"isHaveRole\": 0\n    },\n    {\n    \"id\": 28,\n    \"parent_id\": 11,\n    \"title_cn\": \"开始了\",\n    \"title_en\": \"abc\",\n    \"class\": 1,\n    \"desc\": null,\n    \"link_url\": \"www.baidu.com\",\n    \"icon\": \"www.baidu.com\",\n    \"state\": 1,\n    \"sort_id\": 100,\n    \"menu_code\": null,\n    \"isHaveRole\": 0\n    }\n    ]\n    }\n    ]\n    }\n    ]\n    },\n    {\n    \"id\": 4,\n    \"parent_id\": 0,\n    \"title_cn\": \"系统管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"系统管理\",\n    \"link_url\": \"/system/list\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"system\",\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 12,\n    \"parent_id\": 4,\n    \"title_cn\": \"白名单管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"白名单管理\",\n    \"link_url\": \"system/allow\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"system_allow\",\n    \"isHaveRole\": 0\n    },\n    {\n    \"id\": 13,\n    \"parent_id\": 4,\n    \"title_cn\": \"菜单管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"菜单管理\",\n    \"link_url\": \"system/menus\",\n    \"icon\": \"\",\n    \"state\": 1,\n    \"sort_id\": 1,\n    \"menu_code\": \"system_menus\",\n    \"isHaveRole\": 0\n    },\n    {\n    \"id\": 14,\n    \"parent_id\": 4,\n    \"title_cn\": \"角色管理\",\n    \"title_en\": \"\",\n    \"class\": 0,\n    \"desc\": \"角色管理\",\n    \"link_url\": \"system/role\",\n    \"icon\": \"\",\n    \"state\": null,\n    \"sort_id\": null,\n    \"menu_code\": \"system_role\",\n    \"isHaveRole\": 0\n    }\n    ]\n    }\n    ]\n    }\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"操作失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PostRoleShowmenusId"
  },
  {
    "type": "post",
    "url": "/role/showSubMenus/{id}",
    "title": "编辑子帐号权限时，获取菜单数据",
    "description": "<p>编辑子帐号权限时，获取菜单数据</p>",
    "group": "Role",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/role/showSubMenus/{id}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": [\n    {\n    \"id\": 1,\n    \"group_name\": \"管理员组\",\n    \"isHaveRole\": 0,\n    \"roles\": [\n    {\n    \"id\": 22,\n    \"role_id\": 1,\n    \"menu_id\": 1,\n    \"parent_id\": 0,\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 23,\n    \"role_id\": 1,\n    \"menu_id\": 2,\n    \"parent_id\": 1,\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 24,\n    \"role_id\": 1,\n    \"menu_id\": 3,\n    \"parent_id\": 2,\n    \"isHaveRole\": 1,\n    \"_child\": [\n    {\n    \"id\": 25,\n    \"role_id\": 1,\n    \"menu_id\": 4,\n    \"parent_id\": 3,\n    \"isHaveRole\": 1\n    }\n    ]\n    }\n    ]\n    }\n    ]\n    }\n    ]\n    },\n    {\n    \"id\": 2,\n    \"group_name\": \"编辑1组\",\n    \"roles\": []\n    },\n    {\n    \"id\": 3,\n    \"group_name\": \"新的角色分组\",\n    \"roles\": []\n    },\n    {\n    \"id\": 4,\n    \"group_name\": \"新的角色分组22\",\n    \"roles\": []\n    },\n    {\n    \"id\": 5,\n    \"group_name\": \"测试分组1\",\n    \"roles\": []\n    },\n    {\n    \"id\": 6,\n    \"group_name\": \"测试分组2\",\n    \"roles\": []\n    },\n    {\n    \"id\": 9,\n    \"group_name\": \"新的测试分组\",\n    \"roles\": []\n    }\n    ]\n    }\n{",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"数据列表为空\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/RoleController.php",
    "groupTitle": "Role",
    "name": "PostRoleShowsubmenusId"
  },
  {
    "type": "get",
    "url": "/agents/{grade_id}",
    "title": "厅主（代理商）列表",
    "description": "<p>获取厅主（代理商）列表 grade_id:代理级别，总代（厅主）则为1，2为二级代理</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_lock",
            "description": "<p>是否锁定,1为永久锁定,0为未锁定,7为锁定7天,30为锁定30天</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_page",
            "description": "<p>是否分页 1：是，0：否 ，默认1</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/agents/1"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"code\": 0,\n            \"text\": \"ok\",\n            \"result\": {\n                \"total\": 2,\n                \"per_page\": 1,\n                \"current_page\": 1,\n                \"last_page\": 2,\n                \"next_page_url\": \"http://app-loc.dev/api/agents/1?page=2\",\n                \"prev_page_url\": null,\n                \"from\": 1,\n                \"to\": 1,\n                \"data\": [\n                    {\n                    \"id\": 1,\n                    \"user_name\": \"csj\",\n                    \"real_name\": \"陈松坚\",\n                    \"desc\": \"厅主\",\n                    \"grade_id\": 1,\n                    \"tel\": \"15013777164\",\n                    \"account_state\": 1,\n                    \"add_time\": \"2017-01-20 06:55:32\",\n                    \"update_time\": \"2017-01-20 07:03:51\",\n                    \"ip_info\": \"127.0.0.1\",\n                    \"parent_id\": 0,\n                    \"mapping\": null,\n                    \"sub_count\": 1,\n                    \"area\": \"中国\",\n                    \"tel_pre\": \"86\",\n                    \"email\": \"184444444@qq.com\",\n                    \"account_lock\": 0,\n                    \"lock_rank\": null,\n                    \"charge_mode\": 1,\n                    \"charge_fixed\": 500,\n                    \"charge_percentage\": 20,\n                    \"time_zone\": \"(GMT+08:00) Asia / Beijing\",\n                    \"lang_code\": \"zh_cn\",\n                    \"sub_user\": 0,\n                    \"lock_reason\": \"\",\n                    \"account_type\": 1,\n                    \"agent_code\": \"csj\"\n                    }\n                ]\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "account",
    "name": "GetAgentsGrade_id"
  },
  {
    "type": "get",
    "url": "/hall/games",
    "title": "游戏种类&游戏厅",
    "description": "<p>获取游戏厅游戏种类&amp;游戏厅</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "only_hall",
            "description": "<p>1：只获取厅数据，0：获取游戏种类和厅，默认为0</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://app-loc.dev/api/hall/games"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n            \"code\": 0,\n            \"text\": \"ok\",\n            \"result\": {\n                \"data\": [\n                    {\n                        \"id\": 1,\n                        \"title\": \"旗舰厅\",\n                        \"desc\": \"旗舰厅\",\n                        \"games\": [\n                            {\n                                \"id\": 88,\n                                \"cat_id\": 1,\n                                \"game_name\": \"龙虎百家乐\",\n                                \"sort_id\": 1,\n                                \"status\": 1,\n                                \"pivot\": {\n                                \"hall_id\": 1,\n                                \"game_id\": 88\n                            }\n                        ]\n                    }\n                ]\n            }\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameHallController.php",
    "groupTitle": "account",
    "name": "GetHallGames"
  },
  {
    "type": "get",
    "url": "/player",
    "title": "玩家管理列表",
    "description": "<p>玩家管理列表</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名，玩家在第三方平台账号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_add_time",
            "description": "<p>注册开始时间 2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_add_time",
            "description": "<p>注册结束时间 2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_state",
            "description": "<p>状态 账号状态,1为正常,2为暂停使用,3为停用,4为逻辑删除</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n        \"total\": 1,\n        \"per_page\": 10,\n        \"current_page\": 1,\n        \"last_page\": 1,\n        \"next_page_url\": null,\n        \"prev_page_url\": null,\n        \"from\": 1,\n        \"to\": 1,\n        \"data\": [\n            {\n                \"uid\": 1,\n                \"user_name\": \"csj_play\",\n                \"username_md\": \"csj_play_3\",\n                \"alias\": \"我来也\",\n                \"hall_id\": 1,\n                \"agent_id\": 0,\n                \"add_date\": \"2017-01-20 15:07:03\",\n                \"account_state\": 1\n            }\n        ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "GetPlayer"
  },
  {
    "type": "get",
    "url": "/player/order",
    "title": "查询玩家下注 （注单查询）",
    "description": "<p>查询玩家下注 （注单查询）</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>订单号（id）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_hall_id",
            "description": "<p>游戏厅ID（注单查询接口使用）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_id",
            "description": "<p>游戏id （注单查询接口使用）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_round_id",
            "description": "<p>局ID （注单查询接口使用）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态 （注单查询接口使用）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_add_time",
            "description": "<p>下注开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end_add_time",
            "description": "<p>下注结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 0,\n            \"text\": \"操作成功\",\n            \"result\": {\n                \"total\": 1,\n                \"per_page\": 10,\n                \"current_page\": 1,\n                \"last_page\": 1,\n                \"next_page_url\": null,\n                \"prev_page_url\": null,\n                \"from\": 1,\n                \"to\": 1,\n                \"data\": [\n                    {\n                        \"_id\": \"589ac8a981636827140079dc\",\n                        \"user_id\": 191,\n                        \"user_name\": \"chensj\",\n                        \"bet_type\": 4,\n                        \"bet_money\": 400,\n                        \"hall_id\": 1,\n                        \"hall_name\": \"csj\",\n                        \"agent_id\": 9,\n                        \"agent_name\": \"anchen2\",\n                        \"game_round_id\": 4,\n                        \"cat_id\": 1,\n                        \"cat_name\": \"视频百家乐\",\n                        \"payout_win\": 300,\n                        \"is_cancel\": 0,\n                        \"calculated\": 0,\n                        \"encry\": \"\",\n                        \"odds\": 1.5,\n                        \"server_id\": 1,\n                        \"server_name\": 1,\n                        \"game_id\": 88,\n                        \"game_name\": \"龙虎百家乐\",\n                        \"game_hall_id\": 1,\n                        \"game_hall_name\": \"旗舰厅\",\n                        \"status\": 1,\n                        \"add_time\": \"2017-02-08 15:28:41\",\n                        \"ip_info\": \"127.0.0.1\",\n                        \"ip_area\": \"shenzhen\"\n                    }\n                ]\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "GetPlayerOrder"
  },
  {
    "type": "get",
    "url": "/player/{user_id}/balance",
    "title": "查询玩家余额",
    "description": "<p>查询玩家余额</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n            \"balance\": {\n                \"uid\": 191,\n                \"money\": \"2000.00\",\n                \"username_md\": \"111111\",\n                \"add_date\": \"2017-02-06 15:17:08\",\n                \"last_update_time\": \"2017-02-07 13:59:45\"\n            }\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "GetPlayerUser_idBalance"
  },
  {
    "type": "post",
    "url": "/agents",
    "title": "添加 （编辑）厅主（代理商）",
    "description": "<p>添加 （编辑）厅主（代理商）</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "agent_id",
            "description": "<p>代理商id ,编辑时传</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "grade_id",
            "description": "<p>代理级别，总代则为1，2为二级代理</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "parent_id",
            "description": "<p>上级代理ID（添加代理商的时候传）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_type",
            "description": "<p>账号种类,1为正常账号,2为测试账号（添加测试账号的时候传2）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>运营地区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel_pre",
            "description": "<p>手机国家代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>登录名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "real_name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>确认密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_lock",
            "description": "<p>是否锁定</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lock_rank",
            "description": "<p>锁定对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lock_reason",
            "description": "<p>锁定原因</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "games",
            "description": "<p>游戏种类 [{&quot;hall_id&quot;:1,&quot;games_id&quot;:[1,2,3]}]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "charge_mode",
            "description": "<p>1为固定收费,2为分享报表流水</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "charge_fixed",
            "description": "<p>固定收费百分比,入库记录为整数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time_zone",
            "description": "<p>时区  Asia/Beijing</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang_code",
            "description": "<p>语言代码 如简体中文为zh-cn</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"code\": 0,\n            \"text\": \"保存成功\",\n            \"result\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"code\": 0,\n            \"text\": \"保存失败\",\n            \"result\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "account",
    "name": "PostAgents"
  },
  {
    "type": "post",
    "url": "/agents/{agent_id}",
    "title": "编辑 厅主（代理商）获取数据",
    "description": "<p>编辑 厅主（代理商）获取数据</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "grade_id",
            "description": "<p>代理级别，总代则为1，2为二级代理</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n            \"code\": 0,\n            \"text\": \"ok\",\n            \"result\": {\n                \"agent\": {\n                    \"id\": 9,\n                    \"user_name\": \"anchen2\",\n                    \"real_name\": null,\n                    \"desc\": null,\n                    \"grade_id\": 2,\n                    \"tel\": null,\n                    \"account_state\": 1,\n                    \"add_time\": \"2017-02-04 09:23:54\",\n                    \"update_time\": \"2017-02-05 02:13:12\",\n                    \"ip_info\": \"127.0.0.1\",\n                    \"parent_id\": 0,\n                    \"mapping\": null,\n                    \"sub_count\": 0,\n                    \"area\": \"中国深圳\",\n                    \"tel_pre\": \"87\",\n                    \"email\": \"2222@qq.com\",\n                    \"account_lock\": 0,\n                    \"lock_rank\": null,\n                    \"charge_mode\": null,\n                    \"charge_fixed\": null,\n                    \"charge_percentage\": null,\n                    \"time_zone\": \"(GMT 08:00) Asia / Beijing\",\n                    \"lang_code\": \"zh_cn1\",\n                    \"sub_user\": 0,\n                    \"lock_reason\": \"\",\n                    \"account_type\": 0,\n                    \"agent_code\": \"\",\n                    \"hall_games\": {\n                        \"1\": [\n                            1,\n                            2,\n                            3\n                        ],\n                        \"2\": [\n                            1\n                        ]\n                    }\n                }\n            }\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 400,\n\"text\": \"参数值错误\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "account",
    "name": "PostAgentsAgent_id"
  },
  {
    "type": "post",
    "url": "/agents/{agent_id}/password",
    "title": "厅主（代理商）修改密码",
    "description": "<p>厅主（代理商）修改密码</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "grade_id",
            "description": "<p>代理级别，总代则为1，2为二级代理</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>确认新密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/AgentController.php",
    "groupTitle": "account",
    "name": "PostAgentsAgent_idPassword"
  },
  {
    "type": "post",
    "url": "/player",
    "title": "添加（编辑）玩家",
    "description": "<p>添加（编辑）玩家</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username_md",
            "description": "<p>玩家在平台的账号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>玩家id（编辑时带参数）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>玩家昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_md",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_md_confirmation",
            "description": "<p>确认密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "agent_id",
            "description": "<p>直属代理id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_state",
            "description": "<p>账号状态,1为正常,2为暂停使用,3为停用,4为逻辑删除</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 0,\n            \"text\": \"保存成功\",\n            \"result\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PostPlayer"
  },
  {
    "type": "post",
    "url": "/player/{user_id}",
    "title": "编辑玩家时获取数据",
    "description": "<p>编辑玩家时获取数据</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n        \"data\": {\n        \"uid\": 191,\n        \"user_name\": \"\",\n        \"username_md\": \"111111\",\n        \"password_mb_c\": null,\n        \"password_mb_s\": \"\",\n        \"alias\": \"人生玩家\",\n        \"add_date\": \"2017-02-06 07:17:08\",\n        \"create_time\": \"0000-00-00 00:00:00\",\n        \"last_time\": \"0000-00-00 00:00:00\",\n        \"add_ip\": \"127.0.0.1\",\n        \"ip_info\": \"0.0.0.0\",\n        \"on_line\": \"N\",\n        \"account_state\": 1,\n        \"hall_id\": 1,\n        \"agent_id\": 2,\n        \"hall_name\": \"csj\",\n        \"agent_name\": \"c112\",\n        \"mapping\": null,\n        \"profit_share_platform\": null,\n        \"profit_share_agent\": \"0\",\n        \"profit_share_hall\": \"0\",\n        \"money\": null,\n        \"token_id\": null,\n        \"is_test\": 0,\n        \"language\": \"zh-cn\"\n        }\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PostPlayerUser_id"
  },
  {
    "type": "post",
    "url": "/player/{user_id}balance",
    "title": "玩家余额扣取（充值）",
    "description": "<p>查询玩家余额</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "money",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>加减状态，3是加，4是减</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n    \"code\": 400,\n    \"text\": {\n    \"status\": [\n    \"status 不能为空。\"\n    ]\n    },\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PostPlayerUser_idBalance"
  },
  {
    "type": "post",
    "url": "/player/{user_id}/password",
    "title": "修改玩家密码",
    "description": "<p>修改玩家密码</p>",
    "group": "account",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_md",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_md_confirmation",
            "description": "<p>确认密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n    \"code\": 0,\n    \"text\": \"保存成功\",\n    \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/PlayerController.php",
    "groupTitle": "account",
    "name": "PostPlayerUser_idPassword"
  },
  {
    "type": "delete",
    "url": "/file",
    "title": "删除文件",
    "description": "<p>删除文件</p>",
    "group": "file",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n           \"code\": 0,\n           \"text\": \"操作成功\",\n           \"result\": \"\"\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n            \"code\": 400,\n            \"text\": \"文件不存在\",\n            \"result\": \"images/2017-02-28-14-31-08-58b5192c170330.jpg\"\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/UploadController.php",
    "groupTitle": "file",
    "name": "DeleteFile"
  },
  {
    "type": "post",
    "url": "/upload",
    "title": "上传文件",
    "description": "<p>上传文件</p>",
    "group": "file",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"code\":0,\n\"text\":\"\\u64cd\\u4f5c\\u6210\\u529f\",\n\"result\":{\n     \"url\":\"http:\\/\\/app-loc.dev\\/images\\/2017-02-09-17-25-40-589c3594a7f80.jpg\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/UploadController.php",
    "groupTitle": "file",
    "name": "PostUpload"
  },
  {
    "type": "delete",
    "url": "/game/{id}",
    "title": "删除游戏",
    "description": "<p>删除游戏</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"保存失败\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "game",
    "name": "DeleteGameId"
  },
  {
    "type": "get",
    "url": "/game",
    "title": "玩家管理列表",
    "description": "<p>玩家管理列表</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_name",
            "description": "<p>游戏名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>游戏id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cat_id",
            "description": "<p>游戏分类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>游戏是否可用,1为可用,0为不可用</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n            \"code\": 0,\n            \"text\": \"操作成功\",\n            \"result\": {\n                \"total\": 1,\n                \"per_page\": 10,\n                \"current_page\": 1,\n                \"last_page\": 1,\n                \"next_page_url\": null,\n                \"prev_page_url\": null,\n                \"from\": 1,\n                \"to\": 1,\n                \"data\": [\n                    {\n                        \"id\": 88,\n                        \"cat_id\": 1,\n                        \"game_name\": \"龙虎百家乐\",\n                        \"sort_id\": 1,\n                        \"status\": 1,\n                        \"table_count\": 2,\n                        \"user_count\": 0,\n                        \"process_type\": 109,\n                        \"icon\": \"\",\n                        \"is_recommand\": 0,\n                            \"game_cat\": {\n                            \"id\": 1,\n                            \"cat_name\": \"视频百家乐 \"\n                        }\n                    }\n                ]\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "game",
    "name": "GetGame"
  },
  {
    "type": "get",
    "url": "/game/cat",
    "title": "游戏分类",
    "description": "<p>游戏分类</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n            \"data\": [\n                {\n                    \"id\": 1,\n                    \"parent_id\": 0,\n                    \"cat_name\": \"视频百家乐 \",\n                    \"sort_id\": 1,\n                    \"state\": 1,\n                    \"mapping\": \"\",\n                    \"sub_count\": 0,\n                    \"rank\": 1\n                },\n                {\n                    \"id\": 4,\n                    \"parent_id\": 0,\n                    \"cat_name\": \"视频龙虎 \",\n                    \"sort_id\": 2,\n                    \"state\": 1,\n                    \"mapping\": \"\",\n                    \"sub_count\": 0,\n                    \"rank\": 1\n                },\n                {\n                    \"id\": 3,\n                    \"parent_id\": 0,\n                    \"cat_name\": \"视频骰宝 \",\n                    \"sort_id\": 3,\n                    \"state\": 1,\n                    \"mapping\": \"\",\n                    \"sub_count\": 0,\n                    \"rank\": 1\n                },\n                {\n                    \"id\": 2,\n                    \"parent_id\": 0,\n                    \"cat_name\": \"视频轮盘 \",\n                    \"sort_id\": 4,\n                    \"state\": 1,\n                    \"mapping\": \"\",\n                    \"sub_count\": 0,\n                    \"rank\": 1\n                }\n                ]\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "game",
    "name": "GetGameCat"
  },
  {
    "type": "get",
    "url": "/hall/quota",
    "title": "游戏厅限额查询",
    "description": "<p>游戏厅限额查询</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "agent_id",
            "description": "<p>代理商ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题（设定限额标题）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hall_type",
            "description": "<p>厅类型，厅id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"code\": 0,\n        \"text\": \"操作成功\",\n        \"result\": {\n            \"id\": 15,\n            \"title\": \"默认限额A\",\n            \"agent_id\": 0,\n            \"status\": 1,\n            \"uptime\": \"2015-05-06 04:06:23\",\n            \"hall_type\": 1,\n            \"item_type\": 2,\n            \"limit_items\": [\n                {\n                    \"game_name\": \"百家乐test \",\n                    \"game_id\": 4,\n                    \"bet_areas\": [\n                        {\n                            \"id\": 433,\n                            \"group_id\": 15,\n                            \"game_id\": 4,\n                            \"max_money\": 4000,\n                            \"min_money\": 4,\n                            \"bet_area\": 4\n                        }\n                    ]\n                }\n            ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n        \"code\": 400,\n        \"text\": {\n            \"hall_type\": [\n                \"hall type 不能为空。\"\n            ]\n        },\n        \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HallQuotaController.php",
    "groupTitle": "game",
    "name": "GetHallQuota"
  },
  {
    "type": "post",
    "url": "/game",
    "title": "添加游戏",
    "description": "<p>添加游戏</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_name",
            "description": "<p>游戏名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cat_id",
            "description": "<p>游戏分类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_recommand",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort_id",
            "description": "<p>排序字段</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>游戏是否可用,1为可用,0为不可用</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>游戏图标</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "game",
    "name": "PostGame"
  },
  {
    "type": "post",
    "url": "/game/{id}",
    "title": "编辑游戏时获取数据",
    "description": "<p>编辑游戏时获取数据</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"操作成功\",\n    \"result\": {\n        \"data\": {\n            \"id\": 100,\n            \"cat_id\": 2,\n            \"game_name\": \"龙虎百家乐\",\n            \"sort_id\": 1,\n            \"status\": 1,\n            \"table_count\": 0,\n            \"user_count\": 0,\n            \"process_type\": 0,\n            \"icon\": \"http://app-loc.dev/images/2017-02-09-17-30-58-589c36d250140.jpg\",\n            \"is_recommand\": 1,\n            \"game_cat\": {\n                \"id\": 2,\n                \"cat_name\": \"视频轮盘 \"\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\"code\": 400,\n\"text\": \"游戏不存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "game",
    "name": "PostGameId"
  },
  {
    "type": "post",
    "url": "/hall/quota",
    "title": "游戏厅限额添加",
    "description": "<p>游戏厅限额添加</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题（设定限额标题 defaultA defaultB defaultC）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hall_type",
            "description": "<p>厅类型，厅id</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "items",
            "description": "<p>下注区域值</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"code\": 0,\n        \"text\": \"保存成功\",\n        \"result\": \"\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n            \"code\": 400,\n            \"text\": \"限额分组已存在\",\n            \"result\": \"\"\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HallQuotaController.php",
    "groupTitle": "game",
    "name": "PostHallQuota"
  },
  {
    "type": "post",
    "url": "/hall/quota/shortcut",
    "title": "快捷设定限额（添加）",
    "description": "<p>快捷设定限额（添加）</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题（设定限额标题 默认限额A，默认限额B,默认限额C）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hall_type",
            "description": "<p>厅类型，厅id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_id",
            "description": "<p>游戏的id（百家乐，轮盘，骰宝，龙虎）例如（1,2,3,4）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max_money",
            "description": "<p>最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "min_money",
            "description": "<p>最小值</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 400,\n\"text\": \"限额分组已存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HallQuotaController.php",
    "groupTitle": "game",
    "name": "PostHallQuotaShortcut"
  },
  {
    "type": "post",
    "url": "/hall/quota/shortcut/{id}",
    "title": "快捷设定限额（保存）",
    "description": "<p>快捷设定限额（保存）</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_id",
            "description": "<p>游戏的id（百家乐，轮盘，骰宝，龙虎）例如（1,2,3,4）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max_money",
            "description": "<p>最大值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "min_money",
            "description": "<p>最小值</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 400,\n\"text\": \"限额分组不存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HallQuotaController.php",
    "groupTitle": "game",
    "name": "PostHallQuotaShortcutId"
  },
  {
    "type": "put",
    "url": "/game/{id}",
    "title": "编辑游戏",
    "description": "<p>编辑游戏</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game_name",
            "description": "<p>游戏名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cat_id",
            "description": "<p>游戏分类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_recommand",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort_id",
            "description": "<p>排序字段</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>游戏是否可用,1为可用,0为不可用</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>游戏图标</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 0,\n    \"text\": \"保存成功\",\n    \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"text\": \"保存失败\",\n    \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "game",
    "name": "PutGameId"
  },
  {
    "type": "put",
    "url": "/hall/quota/{id}",
    "title": "保存游戏厅限额",
    "description": "<p>保存游戏厅限额</p>",
    "group": "game",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "items",
            "description": "<p>下注区域值</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"text\": \"保存成功\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 400,\n\"text\": \"限额分组不存在\",\n\"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/HallQuotaController.php",
    "groupTitle": "game",
    "name": "PutHallQuotaId"
  },
  {
    "type": "get",
    "url": "/game/chart",
    "title": "报表统计-查询游戏 （导出）",
    "description": "<p>报表统计-查询游戏 导出）</p>",
    "group": "report",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>http头协议 application/vnd.pt.v0.1.0+json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "locale",
            "description": "<p>语言</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_hall_id",
            "description": "<p>游戏厅类型,0:旗舰厅，1贵宾厅，2：金臂厅， 3：至尊厅</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "game_id",
            "description": "<p>游戏id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间 2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间  2017-01-20 15:07:07</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_by",
            "description": "<p>排序类型(暂时没用到) start_time、user_id、game_hall_id、game_id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_num",
            "description": "<p>每页条数 默认10 （导出时不分页）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页 默认1 （导出时不分页）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_export",
            "description": "<p>是否导出 1是，0否 默认为0 （导出不分页）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: 报表统计-查询游戏",
          "content": "\n{\n            \"code\": 0,\n            \"text\": \"操作成功\",\n            \"result\": {\n                \"total\": 1,\n                \"per_page\": 10,\n                \"current_page\": 1,\n                \"last_page\": 1,\n                \"next_page_url\": null,\n                \"prev_page_url\": null,\n                \"from\": 1,\n                \"to\": 1,\n                \"data\": [\n                    {\n                        \"_id\": \"5875d789dee995c2ea09ffd5\",\n                        \"game_round_id\": 15,//每一局ID\n                        \"total_bet_score\": 87898,//总下注金额\n                        \"total_win_score\": 7396,//总派彩金额\n                        \"valid_bet_score_total\": 87898,//有效下注总金额\n                        \"game_name\": \"轮盘\",\n                        \"game_hall_title\": \"至尊厅\"\n                    }\n                ]\n            }\n        }",
          "type": "json"
        },
        {
          "title": "Success-Response: 报表统计-游戏导出",
          "content": "{\n            \"code\": 0,\n            \"text\": \"操作成功\",\n            \"result\": {\n                \"url\": \"http://app-loc.dev/excel/user_chart_info_20170215.xls\"\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Admin/V1/GameController.php",
    "groupTitle": "report",
    "name": "GetGameChart"
  }
] });
