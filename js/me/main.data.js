list={
    "col":"6",
    "colNum":"2",
    button:[{
        "title":"",
        "":"",
    },{

    }],
    fun:[{
        "title":"知乎","url":"https://www.zhihu.com/"
    }],
    platform:[{
        "title":"微云","url":"https://www.weiyun.com/disk#m=recent"
    },{
        "title":"百度网盘","url":"https://pan.baidu.com/disk/home?#list/path=%2F&vmode=list"
    },{
        "title":"七牛云","url":"https://portal.qiniu.com/create"
    },{
        "title":"微信","url":"https://wx.qq.com/"
    },{
        "title":"WebQQ","url":"http://w.qq.com/"
    }],
    code:[{
        "img":"","title":"Github","url":"https://github.com/Kuangcp"
    },{
        "title":"SUMMARY.md","url":"https://github.com/Kuangcp/Notes/blob/master/SUMMARY.md"
    },{
        "title":"码云","url":"https://gitee.com/kcp1104"
    },{
        "title":"阿里邮箱","url":"https://mail.aliyun.com/alimail/"
    },{
        "title":"CSDN","url":"http://blog.csdn.net/kcp606"
    },{
        "title":"开源中国","url":"https://www.oschina.net/"
    },{
        "title":"常用网站","url":"https://github.com/Kuangcp/Notes/blob/master/Website.md"
    },{
        "title":"常用软件","url":"https://github.com/Kuangcp/Notes/blob/master/Soft_List.md"
    },{
        "title":"常用平台","url":"https://github.com/Kuangcp/Notes/blob/master/Platform.md"
    }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }
    // ,{
    //     "title":" ","url":" "
    // }

    ]
}

$(".menu-element").on('click', function(){
    type = $(this).data('type')
    console.log('click', type)
    
    if(type=='fun'){
        insertData(list.fun)
    }else if(type=='code'){
        insertData(list.code)
    }else if(type=='platform'){
        insertData(list.platform)
    }
})

function insertData(lists){
    temp='<div class="row">'
    count=0
    lists.forEach(function(value){
        count++
        // console.log(value.title, value.url)
        temp+='<div class="col-md-'+list.colNum+'" style="width=50%;">'+
            '<a href="'+value.url+'" style="text-decoration: none;">'+
            '<div class="box"><div class="text">'+value.title+'</div></div></div></a>'
        if(count%list.col==0){
            temp+='</div><div class="row">'
        }
    })
    temp+='</div>'
    $("#main").html(temp)
}
