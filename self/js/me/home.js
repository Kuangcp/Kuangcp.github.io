/**
 * Created by l on 2017/1/17 0017.
 */
function showType(list_id){
    console.log('移动到'+list_id+'');
    switch(list_id){
        case 'a_1':
            console.log('1');

        default:
    }
}
function toShow(id){
    // console.log(id);
    for(var i=1;i<=5;i++){
        $('#book_'+i).css('background-color','darkgray');
        $('#image_'+i).css('display','none');
    }
    $('#book_'+id).css('background-color','#FB9500');
    $('#image_'+id).css('display','block')
}
